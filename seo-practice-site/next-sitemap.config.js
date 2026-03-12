/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://seo-practice-site-khaki.vercel.app',
  generateRobotsTxt: true,
  outDir: './public', // ← outputs sitemap directly here
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 5000,
  additionalPaths: async (config) => [
    await config.transform(config, '/'),           // homepage
    await config.transform(config, '/_not-found')  // not-found page
  ],
};