"use client";

import React, { useState } from "react";
import styles from "./HomeBanner.module.css";
import Button from "@/components/Button";
import Enroll from "./Enroll";

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
      <div onClick={() => setIsOpen(!isOpen)}><Button text="Contact Us" type={1} /></div>
      {isOpen && <div onClick={() => setIsOpen(!isOpen)} className={styles.modal}>
        <div onClick={(e) => e.stopPropagation()}><Enroll /></div>
      </div> }
    </section>
  );
};

export default HomeBanner;
