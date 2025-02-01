import Image from "next/image";
import styles from "./page.module.css";
import { Metadata } from "next";
import { getAllCourses, getTrendingCourses } from "@/lib/courses";
import Link from "next/link";
import HomeBanner from "@/components/HomeBanner";
import Tech from "@/public/images/Techs.webp";
import Forward from "@/public/images/Forward.webp";
import Online from "@/public/images/Online.webp";

import { cloud, features } from "@/lib/content";
import Highlight from "@/components/Highlight";
import Course from "@/components/Course";
import Button from "@/components/Button";
import Hire from "@/components/Hire";
import Testimonial from "@/components/Testimonial";
import { getTestimonials } from "@/lib/testimonials";
import { YouTubeEmbed } from "@next/third-parties/google";

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

      <Highlight />

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

      <section id="trending" className={styles.trend}>
        <h2>Trending Courses</h2>
        <div>
          {courses
            ?.filter((c: any) => c?.isTrending)
            ?.map((course: any) => (
              <Course key={course._id} course={course} isTrending={true} />
            ))}
        </div>
        <Link href="/courses" title="Explore our expert-led courses">
          <Button text="All Courses" type={1} />
        </Link>
      </section>

      <section id="cloud" className={styles.cloud}>
        <h2>Cloud Certifications</h2>
        <div>
          {cloud?.map((course: any) => (
            <div className={styles.course}>
              <div className={styles.imgs}>
                <Image
                  src={course.photo}
                  alt={course.name}
                  width={150}
                  height={150}
                />
              </div>
              {/* <h3>{course.name}</h3> */}
              <h2>{course.name}</h2>
              <span>{course?.description}</span>
              <Link
                href={`/courses/${course.slug}`}
                title="Explore our expert-led courses"
              >
                <Button type={2} text="Explore" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.online}>
        <div>
          <h2>Learn at your own pace</h2>
          <span>with our Online based training</span>
          <div className={styles.courses}>
            {courses
              ?.filter((c: any) => c?.isOnline)
              ?.map((course: any) => (
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
            <Link href={"/courses"} title="Explore our expert-led courses">
              <Image src={Forward} alt={"All Corses"}></Image>
            </Link>
          </div>
        </div>
        <Image src={Online} alt={"Online Training"}></Image>
      </section>

      <Hire />

      <Testimonial testimonials={testimonials} />

      <section className={styles.videos}>
        <div>
          <YouTubeEmbed videoid="H8xllNtB1YM" />
        </div>
        <div>
          <YouTubeEmbed videoid="n07Mu1C4kIA" />
        </div>
      </section>
    </main>
  );
}
