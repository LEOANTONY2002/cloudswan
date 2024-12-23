"use client";

import React from "react";
import styles from "./Highlight.module.css";
import { highlights } from "@/lib/content";

const Highlight = () => {
  return (
    <section className={styles.highlights}>
      <div>
        {highlights?.map((highlight: any) => (
          <div key={highlight?.title}>
            <h2>{highlight?.count}</h2>
            <span>{highlight?.title}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Highlight;
