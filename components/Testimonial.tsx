// "use client"

import React from "react";
import styles from "./Testimonial.module.css";
import TestimonialCard from "./TestimonialCard";

const Testimonial = async ({ testimonials }: { testimonials: any }) => {
  return (
    <div id="testimonials" className={styles.testimonials}>
      <h2>Testimonials</h2>
      <p>Let’s hear from our students</p>
      <div className={styles.list}>
        {testimonials
          .filter((t: any) => !t?.isVideo)
          .map((testimonial: any) => (
            <TestimonialCard key={testimonial?._id} testimonial={testimonial} />
          ))}
      </div>
    </div>
  );
};

export default Testimonial;
