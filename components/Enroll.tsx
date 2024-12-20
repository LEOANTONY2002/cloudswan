"use client";

import React from "react";
import styles from "./Enroll.module.css";
import Image from "next/image";
import EnrollImg from "@/public/images/Enroll.png";
import Button from "./Button";

const Enroll = () => {
  return (
    <section className={styles.enroll}>
      <h2>Enroll Now</h2>
      <div>
        <Image src={EnrollImg} alt={"Enroll"} width={200} height={200} />
        <div className={styles.form}>
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="Email Address" />
          <input type="text" placeholder="Mobile Number" />
          <input type="text" placeholder="Class Mode" />
          <input type="text" placeholder="Preferred Timimg" />
          <button>Enroll</button>
        </div>
      </div>
    </section>
  );
};

export default Enroll;
