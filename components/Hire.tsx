import React from "react";
import styles from "./Hire.module.css";
import Link from "next/link";
import Image from "next/image";
import { getCompanies } from "@/lib/companies";

const Hire = async () => {
  const companies = await getCompanies();

  return (
    <section id="hire" className={styles.hire}>
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
                  alt={company?.name}
                  width={100}
                  height={50}
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
