import Image from "next/image";
import { Metadata } from "next";
import { getCategories } from "@/lib/categories";
import { getAllCourses } from "@/lib/courses";
import styles from "./page.module.css";
import Course from "@/components/Course";
import CourseBanner from "@/components/CourseBanner";
import Head from "next/head";

export const metadata: Metadata = {
  title: "Courses | Software Training Institute",
  description: "Browse our wide range of software development courses",
  robots: "index, follow",
  openGraph: {
    title: "Courses | Software Training Institute",
    description: "Browse our wide range of software development courses",
  },
};

export default async function CoursesPage() {
  const categories = await getCategories();
  const allCourses = await getAllCourses();

  const courseListJSONLD = {
    "@context": "http://schema.org",
    "@type": "ItemList",
    itemListElement: allCourses.map((course, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: `https://cloudswansolution.com/courses/${course.slug}`,
      name: course.name,
    })),
  };

  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(courseListJSONLD) }}
        />
      </Head>
      <main>
        <CourseBanner />

        <section className={styles.categories}>
          <h2>Categories</h2>
          <div className={styles.list}>
            {categories?.map((category: any) => (
              <div key={category?._id}>
                <Image
                  src={category.photo}
                  alt={category.name}
                  width={40}
                  height={40}
                />
                <h5>{category?.name}</h5>
              </div>
            ))}
          </div>
        </section>

        {categories.map(async (category: any) => {
          const courses = allCourses?.filter(
            (course: any) => course?.category?._id == category?._id
          );
          return (
            <section className={styles.set} key={category._id}>
              <h2>{category.name}</h2>
              <div className={styles.row}>
                {courses?.map((course: any) => (
                  <Course
                    key={course?._id}
                    course={course}
                    isTrending={false}
                  />
                ))}
              </div>
            </section>
          );
        })}
      </main>
    </>
  );
}
