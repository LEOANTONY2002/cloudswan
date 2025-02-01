/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: "https://www.cloudswansolution.com",
  generateRobotsTxt: true, // Generate robots.txt
  sitemapSize: 5000, // Ensure sitemap won't split unless you have over 5000 URLs
  changefreq: "monthly", // Default change frequency
  priority: 1.0, // Default priority
  outDir: "./public", // Output directory for sitemap.xml
  generateIndexSitemap: false, // Generate a single sitemap.xml, no index file

  // Fetch dynamic paths for /course/[slug] pages
  transform: async (config, path) => {
    // Define the static pages with custom priority and changefreq
    if (path === "/") {
      return {
        loc: `${config.siteUrl}${path}`, // Full URL
        lastmod: new Date().toISOString(),
        changefreq: "monthly",
        priority: 1.0, // Adjust priority as needed
      };
    }
    if (path === "/about" || path === "/courses") {
      return {
        loc: `${config.siteUrl}${path}`, // Full URL
        lastmod: new Date().toISOString(),
        changefreq: "monthly",
        priority: 0.9, // Adjust priority as needed
      };
    }

    // Dynamically handle /course/[slug] routes
    if (path.startsWith("/course/")) {
      // Fetch course data or use `getStaticPaths` from your dynamic pages
      const courseSlug = path.replace("/course/", ""); // Remove the `/course/` prefix

      // You can replace this mock function with a real data-fetching function
      const course = await fetchCourseBySlug(courseSlug); // Fetch course data by slug (e.g., from your API or CMS)

      if (course) {
        return {
          loc: `${config.siteUrl}${path}`, // Full URL
          lastmod: new Date().toISOString(),
          changefreq: "monthly",
          priority: 0.8, // Adjust priority based on your content
        };
      }
    }

    // Return null to skip paths that don't match
    return null;
  },
};

// A placeholder for fetching course data (replace with real data fetching logic)
async function fetchCourseBySlug(slug) {
  const courses = [
    {
      title: "UI UX",
      slug: "ui-ux-design",
    },
    {
      title: "Graphic Design",
      slug: "graphic-design",
    },
    {
      title: "Photoshop",
      slug: "photoshop-design",
    },
    {
      title: "ReactJS",
      slug: "react-frontend-development",
    },
    {
      title: "Angular",
      slug: "angular-frontend-development",
    },
    {
      title: "NodeJS",
      slug: "node-backend-development",
    },
    {
      title: "Spring Boot",
      slug: "springboot-backend-development",
    },
    {
      title: "MERN Stack Development",
      slug: "mern-fullstack-development",
    },
    {
      title: "Java Full Stack Development",
      slug: "java-fullstack-development",
    },
    {
      title: "Python Full Stack Development",
      slug: "python-fullstack-development",
    },
    {
      title: ".NET Full Stack Development",
      slug: "dotnet-fullstack-development",
    },
    {
      title: "React Native Full Stack Development",
      slug: "react-native-fullstack-development",
    },
    {
      title: "Flutter Full Stack Development",
      slug: "flutter-fullstack-development",
    },
    {
      title: "Core PHP Full Stack Development",
      slug: "core-php-fullstack-development",
    },
    {
      title: "React Native Mobile App Development",
      slug: "react-native-mobile-development",
    },
    {
      title: "Flutter Mobile App Development",
      slug: "flutter-mobile-development",
    },
  ];

  return courses.find((course) => course.slug === slug);
}

export default config;
