import { Metadata } from "next";
import styles from "./page.module.css";
import Image from "next/image";
import AboutBanner from "@/public/images/AboutBanner.png";
import AboutUs from "@/public/images/AboutUs.png";
import { locations, whys } from "@/lib/content";
import Head from "next/head";
import { getAchievers } from "@/lib/achievers";

export const metadata: Metadata = {
  title: "About Us | Software Training Institute",
  description:
    "Learn more about our software training institute and our mission",
};

const contactJSONLD = {
  "@context": "http://schema.org",
  "@type": "EducationalOrganization",
  name: "Cloudswan Software Training Institute",
  address: {
    "@type": "PostalAddress",
    streetAddress:
      "#171, B-Wing, Raj Complex, DPF Street, P N Palayam, Near Lakshmi Mills Stop",
    addressLocality: "Coimbatore",
    addressRegion: "Tamil Nadu",
    postalCode: "641037",
    addressCountry: "Country",
  },
  telephone: "9942465624",
  email: "online.cloudswan@gmal.com",
};

export default async function AboutPage() {
  const achievers = await getAchievers();

  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(contactJSONLD) }}
        />
      </Head>

      <main className={styles.about}>
        <section className={styles.banner}>
          <div>
            <p>Make your</p>
            <h1>Dream</h1>
            <h4>comes true</h4>
          </div>
          <Image src={AboutBanner} alt={"About"}></Image>
        </section>

        <section className={styles.summary}>
          <div>
            <h2>About Us</h2>
            <p>
              We Cloudswan Solution established on 2015 in Coimbatore. We are IS
              9001:2015 certified training institute. We provide Top-notch
              Training and placement across different IT sector. Our features
              include experienced Instructors, corporate style of training,
              syllabus based on the company requirements. We offer best online
              and offline training courses on trending technology.
            </p>
          </div>
        </section>

        <section id="why" className={styles.whys}>
          <h2>Why Us?</h2>
          <div>
            {whys?.map((why: any) => (
              <div key={why?.title} className={styles.why}>
                <Image src={why?.image} alt={why?.title}></Image>
                <span>{why?.title}</span>
              </div>
            ))}
          </div>
        </section>

        <section id="achievers" className={styles.achievers}>
          <h2>Our Achievers</h2>
          <div>
            {achievers?.map((achiever: any) => (
              <Image
                key={achiever?._id}
                src={achiever?.photo}
                alt={"Achiever"}
                width={250}
                height={250}
              ></Image>
            ))}
          </div>
        </section>

        <section id="locations" className={styles.locations}>
          <h2>Offline Presence</h2>
          <div>
            {locations?.map((location: any) => (
              <div className={styles.location}>
                <span>{location?.city}</span>
                <iframe src={location?.url}></iframe>
                <p>{location?.address}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
