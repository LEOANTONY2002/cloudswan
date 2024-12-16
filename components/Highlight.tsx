"use client";

import React from "react";
import HighBG from "@/public/images/HighBG.png";
import HighBGM from "@/public/images/HighBGM.png";
import styles from "./Highlight.module.css";
import { highlights } from "@/lib/content";
import Image from "next/image";
import { useWindowSize } from "@/utils/useWindowSize";

const Highlight = () => {
  const { width = 0 } = useWindowSize();

  return (
    <section className={styles.highlights}>
      <Image src={width > 500 ? HighBG : HighBGM} alt={"Highlights"} />
      {highlights?.map((highlight: any) => (
        <div key={highlight?.title}>
          <h2>{highlight?.count}</h2>
          <span>{highlight?.title}</span>
        </div>
      ))}
    </section>
  );
};

export default Highlight;
