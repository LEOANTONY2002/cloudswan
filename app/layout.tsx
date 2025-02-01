import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { GoogleTagManager } from "@next/third-parties/google";
import { getAllCourses } from "@/lib/courses";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Cloudswan Software Training and Placement Institute",
  description:
    "Learn the latest software development skills with our expert-led courses",
};

const websiteJSONLD = {
  "@context": "http://schema.org",
  "@type": "WebSite",
  name: "Cloudswan Software Training Institute",
  url: "https://cloudswansolution.com",
};

const organizationJSONLD = {
  "@context": "http://schema.org",
  "@type": "EducationalOrganization",
  name: "Cloudswan Software Training Institute",
  url: "https://cloudswansolution.com",
  logo: "https://cloudswansolution.com/logo.webp",
  sameAs: [
    "https://facebook.com/Cloudswan",
    "https://twitter.com/Cloudswan",
    "https://linkedin.com/company/Cloudswan",
  ],
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const courses = await getAllCourses();
  const serializedCourses = courses.map((course) => ({
    id: course._id.toString(),
    name: course.name,
    description: course.description,
    photo: course.photo,
    slug: course.slug,
    category: course.category,
    techStack: course.techStack,
    isTrending: course.isTrending,
    isOnline: course.isOnline,
    createdAt: course.createdAt,
    updatedAt: course.updatedAt,
  }));

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta
          property="og:title"
          content="Cloudswan Software Training and Placement Institute"
        />
        <meta
          property="og:description"
          content="Learn the latest software development skills with our expert-led courses."
        />
        <meta
          property="og:image"
          content="https://www.cloudswansolution.com/favicon.ico"
        />
        <meta property="og:url" content="https://www.cloudswansolution.com" />
        <meta property="og:type" content="website" />
      </head>
      <body>
        <Nav courses={serializedCourses} />
        {children}
        <Footer />
        {/* GTM NoScript */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MBXLWMCQ"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {/* End GTM NoScript */}
        <GoogleTagManager gtmId="AW-959178136" />
        <GoogleTagManager gtmId="GTM-MBXLWMCQ" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJSONLD) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJSONLD),
          }}
        />
      </body>
    </html>
  );
}
