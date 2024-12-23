"use client";

import { useWindowSize } from "@/utils/useWindowSize";
import React from "react";
import styles from "./HomeBanner.module.css";
import Image from "next/image";
import BG from "@/public/images/HomeBG.png";
import BGM from "@/public/images/HomeBGM.png";

const CourseBanner = () => {
  const { width = 0 } = useWindowSize();

  return (
    <section className={styles.banner}>
      <Image
        className={styles.bg}
        src={width > 600 ? BG : BGM}
        alt={"Background"}
      ></Image>
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
