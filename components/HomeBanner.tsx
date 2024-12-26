"use client";

import React, { useState } from "react";
import styles from "./HomeBanner.module.css";
import Button from "@/components/Button";

const HomeBanner = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <section className={styles.banner}>
      <h1 className={styles.title}>Learn, build,</h1>
      <h2 className={styles.subtitle}>land your dream job</h2>
      <div className={styles.wcs}>
        with <span>Cloud</span>
        <p>Swan</p>
      </div>
      <Button text="Contact Us" type={1} />
    </section>
  );
};

export default HomeBanner;
