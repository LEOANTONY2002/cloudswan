
import React from "react";
import styles from "./Hire.module.css";
import { companies } from "@/lib/content";
import Link from "next/link";
import Image from "next/image";

const Hire = () => {
  return (
    <section className={styles.hire}>
      <div>
        <h2>Our Hiring Partners</h2>
        <p>
          Cloud Swan Solution being the Best software training institute in
          Coimbatore with placement has tied up with more than 25+ companies
          from MNC’s , CMM level and domestic IT companies.
        </p>
        <div className={styles.companies}>
          <div className={styles.grad1}></div>
          <div className={styles.list}>
            {companies?.map((company: any) => (
              <Link
                className={styles.company}
                key={company?._id}
                href={company?.url}
              >
                <Image
                  src={company?.photo}
                  alt={"All Corses"}
                  width={0}
                  height={0}
                  sizes="100%"
                ></Image>
              </Link>
            ))}
          </div>
          <div className={styles.grad2}></div>
        </div>
      </div>
    </section>
  );
};

export default Hire;
