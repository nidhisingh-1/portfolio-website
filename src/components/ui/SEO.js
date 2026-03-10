import { Helmet } from 'react-helmet-async';

const BASE_URL = 'https://nidhisingh.design';
const DEFAULT_IMAGE = `${BASE_URL}/nidhi.jpg`;

const SEO = ({
  title,
  description,
  url,
  image = DEFAULT_IMAGE,
  type = 'website',
  noIndex = false,
}) => {
  const fullTitle = title
    ? `${title} | Nidhi Singh`
    : 'Nidhi Singh | Product Designer';

  const fullDescription =
    description ||
    'Nidhi Singh is a Product Designer with 3+ years of experience crafting AI-powered platforms and user-centered digital experiences. Currently at Spyne AI, Gurugram.';

  const fullUrl = url ? `${BASE_URL}${url}` : BASE_URL;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={fullDescription} />
      <link rel="canonical" href={fullUrl} />
      {noIndex && <meta name="robots" content="noindex, nofollow" />}

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={fullDescription} />
      <meta property="og:image" content={image} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={fullDescription} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
};

export default SEO;
