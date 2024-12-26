import Image from "next/image";
import styles from "./page.module.css";
import { Metadata } from "next";
import { getAllCourses, getTrendingCourses } from "@/lib/courses";
import Link from "next/link";
import HomeBanner from "@/components/HomeBanner";
import Tech from "@/public/images/Techs.webp";
import Forward from "@/public/images/Forward.webp";
import Online from "@/public/images/Online.webp";

import { features } from "@/lib/content";
import Highlight from "@/components/Highlight";
import Course from "@/components/Course";
import Button from "@/components/Button";
import Hire from "@/components/Hire";
import Testimonial from "@/components/Testimonial";
import { getTestimonials } from "@/lib/testimonials";

export const metadata: Metadata = {
  title: "Home | Software Training Institute",
  description:
    "Learn the latest software development skills with our expert-led courses",
};

export default async function Home() {
  const courses = await getAllCourses();
  const testimonials = await getTestimonials();

  return (
    <main className={styles.home}>
      <HomeBanner />

      <section className={styles.tech}>
        <div>
          <h2>Stay Updated with</h2>
          <h1>Top Technologies</h1>
          <span>
            Cloud Swan offers top technologies which are currently used in the
            industry
          </span>
        </div>
        <Image src={Tech} alt={"Top Technologies"}></Image>
      </section>

      <section className={styles.features}>
        {features?.map((feature: any) => (
          <div key={feature?.title} className={styles.feature}>
            <div></div>
            <Image src={feature?.image} alt={feature?.title}></Image>
            <h2>{feature?.title}</h2>
            <p>{feature?.description}</p>
          </div>
        ))}
      </section>

      <Highlight />

      <section className={styles.trend}>
        <h2>Trending Courses</h2>
        <div>
          {courses?.filter((c: any) => c?.isTrending)?.map((course: any) => (
            <Course key={course._id} course={course} isTrending={true} />
          ))}
        </div>
        <Link href="/courses">
          <Button text="All Courses" type={1} />
        </Link>
      </section>

      <section className={styles.online}>
        <div>
          <h2>Learn at your own pace</h2>
          <span>with our Online based training</span>
          <div className={styles.courses}>
            {courses?.filter((c: any) => c?.isOnline)?.map((course: any) => (
              <div key={course?._id}>
                <Image
                  src={course?.photo}
                  alt={course?.name}
                  width={100}
                  height={100}
                ></Image>
                <span>{course?.name}</span>
              </div>
            ))}
            <Link href={"/courses"}>
              <Image src={Forward} alt={"All Corses"}></Image>
            </Link>
          </div>
        </div>
        <Image src={Online} alt={"Online Training"}></Image>
      </section>

      <Hire />

      <Testimonial testimonials={testimonials} />
    </main>
  );
}
