"use client";

import { useWindowSize } from "@/utils/useWindowSize";
import React from "react";
import styles from "./HomeBanner.module.css";
import Image from "next/image";
import BG from "@/public/images/HomeBG.webp";
import BGM from "@/public/images/HomeBGM.webp";
import Button from "@/components/Button";
import Link from "next/link";

const HomeBanner = () => {
  const { width = 0 } = useWindowSize();

  return (
    <section className={styles.banner}>
      <Image
        className={styles.bg}
        src={width > 600 ? BG : BGM}
        alt={"Background"}
      ></Image>
      <h1 className={styles.title}>Learn, build,</h1>
      <h2 className={styles.subtitle}>land your dream job</h2>
      <div className={styles.wcs}>
        with <span>Cloud</span>
        <p>Swan</p>
      </div>
      <Link href={"/contact"}>
        <Button text="Enroll Now" type={1} />
      </Link>
    </section>
  );
};

export default HomeBanner;
