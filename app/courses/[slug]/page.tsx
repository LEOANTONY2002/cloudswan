import Image from "next/image";
import { Metadata } from "next";
import { getCourseBySlug } from "@/lib/courses";
import styles from "./page.module.css";
import Benefit from "@/public/images/Benefit.png";
import BenefitIcon from "@/public/images/BenefitIcon.webp";
import { benefits, faqs } from "@/lib/content";
import Enroll from "@/components/Enroll";
import { notFound } from "next/navigation";
import { getCourseJSONLD } from "@/utils/JsonLD";
import Head from "next/head";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const slug = (await params).slug;
  const course: any = await getCourseBySlug(slug);
  return {
    title: course
      ? `${course?.name} | Cloudswan`
      : "Cloudswan Software Training Institute",
    description: course ? course?.description : "Page Not Found!",
  };
}

export default async function CoursePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;

  const course: any = await getCourseBySlug(slug);
  if (!course) {
    notFound();
  }

  const courseJSONLD = getCourseJSONLD(course);

  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(courseJSONLD) }}
        />
      </Head>
      <main>
        <section className={styles.detail}>
          <div className={styles.content}>
            <div className={styles.category}>
              <Image
                src={course?.category?.photo}
                alt={course?.category?.name}
                width={50}
                height={50}
              />
              <h5>{course?.category?.name}</h5>
            </div>
            <h1>{course?.name}</h1>
            <p>{course?.description}</p>
            {course?.techStack?.length > 0 && (
              <>
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
              </>
            )}
          </div>
          <div className={styles.img}>
            <p></p>
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
              <div key={benefit?.value} className={styles.benefit}>
                <Image src={BenefitIcon} alt="Benefit" width={20} height={20} />
                <p>{benefit?.value}</p>
              </div>
            ))}
          </div>
        </section>

        <Enroll course={course?.name} />

        <section className={styles.faqs}>
          <h2>Frequently Asked Questions</h2>
          {faqs?.map((faq: any, index: number) => (
            <div key={index} className={styles.faq}>
              <span>{faq?._id}</span>
              <div>
                <h5>{faq?.question}</h5>
                <p>{faq?.answer}</p>
              </div>
            </div>
          ))}
        </section>
      </main>
    </>
  );
}
