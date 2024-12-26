"use client";

import React from "react";
import styles from "./HomeBanner.module.css";

const CourseBanner = () => {

  return (
    <section className={styles.banner}>
      <h2 className={styles.subtitle} style={{ marginTop: "-100px" }}>
        Choose your{" "}
      </h2>
      <h1 className={styles.title} style={{ marginTop: "-20px" }}>
        Destination
      </h1>
      <div className={styles.wcs}>
        <p>with our comprehensive selection of courses</p>
      </div>
    </section>
  );
};

export default CourseBanner;
