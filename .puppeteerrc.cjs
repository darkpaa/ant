// Skip Chromium download on CI/serverless — scripts/prerender.mjs uses
// @sparticuz/chromium there instead, so puppeteer's bundled browser is
// never launched. Local dev still gets a Chromium on `npm install`.
const isServerless = !!(
  process.env.VERCEL ||
  process.env.NETLIFY ||
  process.env.AWS_LAMBDA_FUNCTION_NAME ||
  process.env.CI
);

/** @type {import('puppeteer').Configuration} */
module.exports = {
  skipDownload: isServerless,
};
