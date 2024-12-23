import Image from "next/image";
import { Metadata } from "next";
import { getCategories } from "@/lib/categories";
import { getAllCourses } from "@/lib/courses";
import styles from "./page.module.css";
import Course from "@/components/Course";
import CourseBanner from "@/components/CourseBanner";

export const metadata: Metadata = {
  title: "Courses | Software Training Institute",
  description: "Browse our wide range of software development courses",
};

export default async function CoursesPage() {
  const categories = await getCategories();
  const allCourses = await getAllCourses();

  return (
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
                <Course key={course?._id} course={course} isTrending={false} />
              ))}
            </div>
          </section>
        );
      })}
    </main>
  );
}
