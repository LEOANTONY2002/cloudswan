import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { GoogleTagManager } from "@next/third-parties/google";

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
  logo: "https://cloudswansolution.com/logo.png",
  sameAs: [
    "https://facebook.com/Cloudswan",
    "https://twitter.com/Cloudswan",
    "https://linkedin.com/company/Cloudswan",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id=${"GTM-MBXLWMCQ"}'+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-MBXLWMCQ');
            `,
          }}
        ></script>
        {/* End Google Tag Manager */}
      </head>
      <body>
        <Nav />
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJSONLD) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJSONLD) }}
        />
      </body>
    </html>
  );
}
