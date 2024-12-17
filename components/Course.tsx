
import React from "react";
import styles from "./Course.module.css";
import Image from "next/image";
import Link from "next/link";

const Course = ({
  course,
  isTrending,
}: {
  course: any;
  isTrending: boolean;
}) => {
  return (
    <div className={styles.course}>
      <div className={styles.imgs}>
        <Image src={course.photo} alt={course.name} width={150} height={150} />
        <div className={styles.techs}>
          {course?.techStack?.map((tech: any) => (
            <Image
              key={tech?.name}
              src={tech?.photo}
              alt={tech?.name}
              width={35}
              height={35}
            ></Image>
          ))}
        </div>
      </div>
      <h3>{course.name}</h3>

      {!isTrending && (
        <Link href={`/courses/${course.slug}`}>
          <button>Explore</button>
        </Link>
      )}
    </div>
  );
};

export default Course;
