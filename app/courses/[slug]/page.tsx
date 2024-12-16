import Image from "next/image";
import { Metadata } from "next";
import { getCourseBySlug } from "@/lib/courses";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const { slug } = await params;
  const course = await getCourseBySlug(slug);
  return {
    title: `${course.name} | Software Training Institute`,
    description: course.description,
  };
}

export default async function CoursePage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = await params;

  const course = await getCourseBySlug(slug);

  return (
    <main>
      <h1>{course.name}</h1>
      <Image src={course.photo} alt={course.name} width={600} height={400} />
      <p>{course.description}</p>
      <h2>Tech Stack</h2>
      <ul>
        {course.techStack.map((tech: any) => (
          <li key={tech._id}>
            <Image src={tech.photo} alt={tech.name} width={50} height={50} />
            {tech.name}
          </li>
        ))}
      </ul>
      {/* Add more course details and enrollment form here */}
    </main>
  );
}
