"use client"

import React, { useState } from 'react'
import styles from './Testimonial.module.css'
import Image from 'next/image';
import Person from '@/public/images/Person.png'

const TestimonialCard = ({testimonial}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={styles.testimonial}>
        <div className={styles.profile}>
            {testimonial?.media ? <Image src={testimonial?.media} alt={testimonial?.name} width={100} height={100} /> : <Image src={Person} alt={testimonial?.name} width={100} height={100} />}
            <div>
                <p>{testimonial?.name}</p>
                <span>{testimonial?.designation}</span>
            </div>
        </div>
        <div className={styles.line}>
            <span></span>
            <div>
                <p className={isExpanded ? styles.expanded : styles.collapsed}>
                    {testimonial?.message}
                </p>
                <span className={styles.show} onClick={toggleExpand}>
                    {isExpanded ? 'Show less' : 'Show more'}
                </span>
            </div>
        </div>
    </div>
  )
}

export default TestimonialCard