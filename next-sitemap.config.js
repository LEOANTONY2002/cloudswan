/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: "https://www.cloudswansolution.com",
  generateRobotsTxt: true,
  sitemapSize: 5000, // Ensure sitemap won't split, unless you have over 5000 URLs
  changefreq: "daily",
  priority: 0.7,
  outDir: "./public",
  // Manually define the URLs to be included in the sitemap
  transform: async (config, path) => {
    if (path === "/" || path === "/about" || path === "/courses") {
      return {
        loc: `${config.siteUrl}${path}`, // Full URL
        lastmod: new Date().toISOString(),
        changefreq: "daily",
        priority: 0.7,
      };
    }
    // Returning null for any other path to avoid including them in the sitemap
    return null;
  },
  // Optionally, disable index file generation
  // This ensures only a single sitemap.xml is created
  generateIndexSitemap: false,
};

export default config;
