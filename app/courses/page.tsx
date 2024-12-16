import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { getCategories } from "@/lib/categories";
import { getCoursesByCategory } from "@/lib/courses";

export const metadata: Metadata = {
  title: "Courses | Software Training Institute",
  description: "Browse our wide range of software development courses",
};

export default async function CoursesPage() {
  const categories = await getCategories();

  return (
    <main>
      <h1>Our Courses</h1>

      {await Promise.all(
        categories.map(async (category: any) => {
          const courses = await getCoursesByCategory(category._id);
          return (
            <section key={category._id}>
              <h2>{category.name}</h2>
              <div className="course-grid">
                {courses.map((course: any) => (
                  <div key={course._id} className="course-card">
                    <Image
                      src={course.photo}
                      alt={course.name}
                      width={300}
                      height={200}
                    />
                    <h3>{course.name}</h3>
                    <p>{course.description}</p>
                    <Link href={`/courses/${course.slug}`}>
                      <button>Explore</button>
                    </Link>
                  </div>
                ))}
              </div>
            </section>
          );
        })
      )}
    </main>
  );
}
