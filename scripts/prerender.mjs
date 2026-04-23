#!/usr/bin/env node
/**
 * Post-build prerender: serves dist/ over a tiny HTTP server, visits each route
 * in the sitemap with headless Chrome, and writes the rendered HTML back to dist.
 *
 * Run automatically after `vite build` via the `build` npm script.
 */

import { createServer } from 'node:http';
import { readFileSync, existsSync, statSync, mkdirSync, writeFileSync } from 'node:fs';
import { join, extname, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const root = join(__dirname, '..');
const distDir = join(root, 'dist');

// Vercel/Netlify/CI containers don't bundle the system libs (libnspr4 etc.)
// that puppeteer's default Chromium needs. Use @sparticuz/chromium there —
// it ships a self-contained headless Chromium build. Local dev keeps plain
// puppeteer which already has a matching Chromium from `npm install`.
const isServerless = !!(
  process.env.VERCEL ||
  process.env.NETLIFY ||
  process.env.AWS_LAMBDA_FUNCTION_NAME ||
  process.env.CI
);

const loadBrowser = async () => {
  if (isServerless) {
    const { default: chromium } = await import('@sparticuz/chromium');
    const { default: puppeteer } = await import('puppeteer-core');
    return {
      puppeteer,
      launchOptions: {
        args: chromium.args,
        defaultViewport: chromium.defaultViewport,
        executablePath: await chromium.executablePath(),
        headless: chromium.headless,
      },
    };
  }
  const { default: puppeteer } = await import('puppeteer');
  return {
    puppeteer,
    launchOptions: {
      headless: 'new',
      args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage'],
    },
  };
};

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.avif': 'image/avif',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.txt': 'text/plain; charset=utf-8',
  '.xml': 'application/xml; charset=utf-8',
  '.map': 'application/json; charset=utf-8',
};

const serveStatic = (port) =>
  new Promise((resolve) => {
    const server = createServer((req, res) => {
      const urlPath = decodeURIComponent((req.url || '/').split('?')[0]);
      const directFile = join(distDir, urlPath);
      let finalPath = directFile;
      if (
        !existsSync(finalPath) ||
        statSync(finalPath).isDirectory()
      ) {
        const asDir = join(finalPath, 'index.html');
        if (existsSync(asDir)) {
          finalPath = asDir;
        } else {
          finalPath = join(distDir, 'index.html');
        }
      }
      const ext = extname(finalPath).toLowerCase();
      res.setHeader('Content-Type', MIME[ext] || 'application/octet-stream');
      try {
        res.end(readFileSync(finalPath));
      } catch {
        res.statusCode = 500;
        res.end('server error');
      }
    });
    server.listen(port, '127.0.0.1', () => resolve(server));
  });

const readRoutesFromSitemap = () => {
  const sitemapPath = join(root, 'public/sitemap.xml');
  const xml = readFileSync(sitemapPath, 'utf8');
  const matches = [...xml.matchAll(/<loc>\s*https?:\/\/[^/]+(\/[^<]*)\s*<\/loc>/g)];
  const paths = matches.map((m) => m[1].trim() || '/');
  return Array.from(new Set(paths));
};

const outputPathFor = (route) => {
  if (route === '/' || route === '') return join(distDir, 'index.html');
  const clean = route.replace(/^\//, '').replace(/\/$/, '');
  return join(distDir, clean, 'index.html');
};

const main = async () => {
  if (!existsSync(distDir)) {
    console.error('[prerender] dist/ not found — run vite build first.');
    process.exit(1);
  }

  const routes = readRoutesFromSitemap();
  console.log(`\n[prerender] rendering ${routes.length} routes from sitemap.xml`);

  const port = 4174;
  const server = await serveStatic(port);
  const baseUrl = `http://127.0.0.1:${port}`;
  console.log(`[prerender] static server → ${baseUrl}`);

  const { puppeteer, launchOptions } = await loadBrowser();
  console.log(
    `[prerender] browser: ${isServerless ? '@sparticuz/chromium (serverless)' : 'puppeteer (local)'}\n`
  );
  const browser = await puppeteer.launch(launchOptions);

  try {
    for (const route of routes) {
      const page = await browser.newPage();
      await page.setViewport({ width: 1280, height: 900 });
      // Disable animations so captured DOM is in a settled state
      await page.emulateMediaFeatures([
        { name: 'prefers-reduced-motion', value: 'reduce' },
      ]);
      const url = `${baseUrl}${route === '/' ? '' : route}`;
      try {
        await page.goto(url, { waitUntil: 'networkidle0', timeout: 45000 });
      } catch (e) {
        console.warn(`[prerender] ! navigation timeout for ${route}, keeping what we have`);
      }
      // Give react-helmet-async a tick to flush <head> mutations
      await new Promise((r) => setTimeout(r, 500));

      // Dedupe any head tags that Helmet may have inserted alongside static
      // fallbacks. react-helmet-async with prioritizeSeoTags puts <title> at
      // the TOP of <head> (keep first), while meta/link tags are appended
      // after any statics from index.html (keep last).
      await page.evaluate(() => {
        const keepFirst = (selector, keyFn) => {
          const seen = new Map();
          document.head.querySelectorAll(selector).forEach((el) => {
            const key = keyFn(el);
            if (seen.has(key)) el.remove();
            else seen.set(key, el);
          });
        };
        const keepLast = (selector, keyFn) => {
          const seen = new Map();
          document.head.querySelectorAll(selector).forEach((el) => {
            const key = keyFn(el);
            if (seen.has(key)) seen.get(key).remove();
            seen.set(key, el);
          });
        };
        keepFirst('title', () => 'title');
        keepLast('link[rel="canonical"]', () => 'canonical');
        keepLast('meta[name]', (el) => `name:${el.getAttribute('name')}`);
        keepLast('meta[property]', (el) => `prop:${el.getAttribute('property')}`);
      });

      const html = await page.content();
      const outPath = outputPathFor(route);
      mkdirSync(dirname(outPath), { recursive: true });
      writeFileSync(outPath, html, 'utf8');
      const rel = outPath.replace(root, '.').replaceAll('\\', '/');
      console.log(`[prerender] ✓ ${route.padEnd(38)} → ${rel}`);
      await page.close();
    }
  } finally {
    await browser.close();
    server.close();
  }

  console.log(`\n[prerender] done — ${routes.length} routes prerendered\n`);
};

main().catch((err) => {
  console.error('[prerender] failed:', err);
  process.exit(1);
});
