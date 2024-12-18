import Image from "next/image";
import styles from "./page.module.css";
import { Metadata } from "next";
import { getTrendingCourses } from "@/lib/courses";
import Link from "next/link";
import HomeBanner from "@/components/HomeBanner";
import Tech from "@/public/images/Techs.png";
import Forward from "@/public/images/Forward.png";
import Online from "@/public/images/Online.png";

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
  const trendingCourses = await getTrendingCourses();
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
            <h4>{feature?.title}</h4>
            <p>{feature?.description}</p>
          </div>
        ))}
      </section>

      <Highlight />

      <section className={styles.trend}>
        <h2>Trending Courses</h2>
        <div>
          {trendingCourses.map((course: any) => (
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
            {trendingCourses?.map((course: any) => (
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

      {/* 

      <section>
        <h2>Testimonials</h2>
        <div className="testimonial-grid">
          <div className="photo-testimonials">
            {testimonials
              .filter((t: any) => !t.isVideo)
              .map((testimonial: any) => (
                <div key={testimonial._id} className="testimonial-card">
                  <Image
                    src={testimonial.media}
                    alt={testimonial.name}
                    width={100}
                    height={100}
                  />
                  <p>{testimonial.name}</p>
                  <p>
                    {testimonial.designation} at {testimonial.company}
                  </p>
                </div>
              ))}
          </div>
          <div className="video-testimonials">
            {testimonials
              .filter((t: any) => t.isVideo)
              .map((testimonial: any) => (
                <div key={testimonial._id} className="testimonial-card">
                  <video
                    src={testimonial.media}
                    controls
                    width={300}
                    height={200}
                  />
                  <p>{testimonial.name}</p>
                  <p>
                    {testimonial.designation} at {testimonial.company}
                  </p>
                </div>
              ))}
          </div>
        </div>
      </section> */}
    </main>
  );
}
