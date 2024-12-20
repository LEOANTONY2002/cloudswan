import React from "react";
import styles from "./Course.module.css";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

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
      {isTrending ? <h3>{course.name}</h3> : <h2>{course.name}</h2>}
      {!isTrending && <span>{course?.description}</span>}
      {!isTrending && (
        <Link href={`/courses/${course.slug}`}>
          <Button type={2} text="Explore" />
        </Link>
      )}
    </div>
  );
};

export default Course;
