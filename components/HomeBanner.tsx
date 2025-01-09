"use client";

import React, { useEffect, useState } from "react";
import styles from "./HomeBanner.module.css";
import Enroll from "./Enroll";
import Image from "next/image";
import Phone from "@/public/images/HomePhone.png";
import Location from "@/public/images/HomeLocation.png";
import Logo from "@/public/images/logo.webp";

const HomeBanner = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className={styles.banner}>
      <Image src={Logo} alt={"Logo"} width={100} height={100} />
      <div className={styles.content}>
        <span></span>
        <div>
          <h2 className={styles.subtitle}>Learn, build, land your</h2>
          <h1 className={styles.title}>Dream Job</h1>
          <h3>in 60 days</h3>
        </div>
      </div>
      <div className={styles.btns}>
        <button onClick={() => setIsOpen(!isOpen)}>Enquire Now</button>
        <div
          onClick={() => (window.location.href = "tel:8903835098")}
          className={styles.call}
        >
          <Image src={Phone} alt={"Phone"} width={20} height={25} />
          <span>8903835098</span>
        </div>
      </div>
      <div className={styles.location}>
        <Image src={Location} alt={"Location"} width={30} height={30} />
        <span>Lakshmi Mills</span> | <span>Gandhipuram </span>
      </div>
      {isOpen && (
        <div onClick={() => setIsOpen(!isOpen)} className={styles.modal}>
          <div onClick={(e) => e.stopPropagation()}>
            <Enroll />
          </div>
        </div>
      )}
    </section>
  );
};

export default HomeBanner;
