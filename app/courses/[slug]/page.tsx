import Image from "next/image";
import { Metadata } from "next";
import { getCourseBySlug } from "@/lib/courses";
import styles from "./page.module.css";
import Button from "@/components/Button";
import Benefit from "@/public/images/Benefit.png";
import BenefitIcon from "@/public/images/BenefitIcon.png";
import { benefits, faqs } from "@/lib/content";
import Enroll from "@/components/Enroll";
import { notFound } from "next/navigation";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const { slug } = await params;
  const course = await getCourseBySlug(slug);
  return {
    title: course ? `${course?.name} | Software Training Institute` : "Cloudswan Software Training Institute",
    description: course ? course?.description : "Page Not Found!",
  };
}

export default async function CoursePage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = await params;

  const course = await getCourseBySlug(slug);
  if (!course) {
    notFound()
  }

  return (
    <main>
      <section className={styles.detail}>
        <div className={styles.content}>
          <div className={styles.category}>
            <Image
              src={course?.category?.photo}
              alt={course?.category?.name}
              width={40}
              height={40}
            />
            <h5>{course?.category?.name}</h5>
          </div>
          <h1>{course?.name}</h1>
          <p>{course?.description}</p>
          <span>Technologies Included</span>
          <div className={styles.techs}>
            {course?.techStack.map((tech: any) => (
              <div className={styles.tech} key={tech._id}>
                <Image
                  src={tech.photo}
                  alt={tech.name}
                  width={35}
                  height={35}
                />
                {tech.name}
              </div>
            ))}
          </div>
          <Button type={1} text="Enroll Now" />
        </div>
        <div className={styles.img}>
          <Image
            src={course?.photo}
            alt={course?.name}
            width={200}
            height={200}
          />
        </div>
      </section>

      <section className={styles.benefits}>
        <Image src={Benefit} alt="Benefits" width={200} height={200} />
        <div>
          <h2>Course Benefits</h2>
          {benefits?.map((benefit: any) => (
            <div className={styles.benefit}>
              <Image src={BenefitIcon} alt="Benefit" width={20} height={20} />
              <p>{benefit?.value}</p>
            </div>
          ))}
        </div>
      </section>

      <Enroll />

      <section className={styles.faqs}>
        <h2>Frequently Asked Questions</h2>
        {faqs?.map((faq: any) => (
          <div className={styles.faq}>
            <span>{faq?._id}</span>
            <div>
              <h5>{faq?.question}</h5>
              <p>{faq?.answer}</p>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
