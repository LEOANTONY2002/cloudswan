/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: "https://cloudswansolution.com",
  generateRobotsTxt: true,
  sitemapSize: 5000,
  changefreq: "daily",
  priority: 0.7,
  transform: async (config, path) => {
    if (path.includes("/courses/")) {
      const courses = await getAllCourses();
      return courses.map((course) => ({
        loc: `${config.siteUrl}/courses/${course.slug}`,
        lastmod: new Date().toISOString(),
        changefreq: config.changefreq,
        priority: config.priority,
      }));
    }
    return {
      loc: path,
      lastmod: new Date().toISOString(),
      changefreq: config.changefreq,
      priority: config.priority,
    };
  },
};

export default config;
