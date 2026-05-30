import { Helmet } from 'react-helmet-async';

const SITE_URL = 'https://antyonetim.com';
const SITE_NAME = 'ANT Danışmanlık';
const DEFAULT_IMAGE = `${SITE_URL}/antlogo.png`;

export type SEOType = 'website' | 'article' | 'profile';
export type SEOLang = 'tr' | 'en';

export type JsonLd = Record<string, unknown>;

export interface SEOProps {
  title: string;
  description: string;
  url: string;
  image?: string;
  imageWidth?: number;
  imageHeight?: number;
  type?: SEOType;
  lang?: SEOLang;
  noIndex?: boolean;
  publishedAt?: string;
  modifiedAt?: string;
  author?: string;
  keywords?: string[];
  jsonLd?: JsonLd | JsonLd[];
}

const buildCanonical = (url: string): string => {
  if (/^https?:\/\//i.test(url)) return url;
  const path = url.startsWith('/') ? url : `/${url}`;
  return `${SITE_URL}${path}`;
};

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  url,
  image = DEFAULT_IMAGE,
  imageWidth,
  imageHeight,
  type = 'website',
  lang = 'tr',
  noIndex = false,
  publishedAt,
  modifiedAt,
  author,
  keywords,
  jsonLd,
}) => {
  const canonical = buildCanonical(url);
  const fullTitle = `${title} | ${SITE_NAME}`;
  const ldArray = jsonLd ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]) : [];
  const effectiveAuthor = author ?? 'İlker Tura';
  const imageLower = image.toLowerCase();
  let imageType = 'image/png';
  if (imageLower.endsWith('.jpg') || imageLower.endsWith('.jpeg')) {
    imageType = 'image/jpeg';
  } else if (imageLower.endsWith('.webp')) {
    imageType = 'image/webp';
  }
  const altLocale = lang === 'en' ? 'tr_TR' : 'en_US';

  return (
    <Helmet prioritizeSeoTags>
      <html lang={lang} />
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && keywords.length > 0 && (
        <meta name="keywords" content={keywords.join(', ')} />
      )}
      <meta name="author" content={effectiveAuthor} />
      <meta name="publisher" content={SITE_NAME} />
      <meta
        name="robots"
        content={noIndex ? 'noindex, nofollow' : 'index, follow'}
      />
      <meta
        name="googlebot"
        content={
          noIndex
            ? 'noindex, nofollow'
            : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'
        }
      />
      <link rel="canonical" href={canonical} />

      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={image} />
      <meta property="og:image:alt" content={fullTitle} />
      <meta property="og:image:type" content={imageType} />
      {imageWidth && (
        <meta property="og:image:width" content={String(imageWidth)} />
      )}
      {imageHeight && (
        <meta property="og:image:height" content={String(imageHeight)} />
      )}
      <meta property="og:locale" content={lang === 'en' ? 'en_US' : 'tr_TR'} />
      <meta property="og:locale:alternate" content={altLocale} />
      {publishedAt && (
        <meta property="article:published_time" content={publishedAt} />
      )}
      {(modifiedAt || publishedAt) && (
        <meta
          property="article:modified_time"
          content={modifiedAt ?? publishedAt ?? ''}
        />
      )}
      {type === 'article' && (
        <meta property="article:author" content={effectiveAuthor} />
      )}

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:image:alt" content={fullTitle} />

      {ldArray.map((ld, idx) => (
        <script key={idx} type="application/ld+json">
          {JSON.stringify(ld)}
        </script>
      ))}
    </Helmet>
  );
};

export default SEO;
