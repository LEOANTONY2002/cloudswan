"use client";

import React from "react";
import styles from "./CourseBanner.module.css";

const CourseBanner = () => {
  return (
    <section className={styles.banner}>
      <h2 className={styles.subtitle}>Choose your </h2>
      <h1 className={styles.title}>Destination</h1>
      <div className={styles.wcs}>
        <p>with our comprehensive selection of courses</p>
      </div>
    </section>
  );
};

export default CourseBanner;
