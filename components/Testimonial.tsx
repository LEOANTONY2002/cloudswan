// "use client"

import React from 'react'
import styles from './Testimonial.module.css'
import Image from 'next/image';
import Person from '@/public/images/Person.png'

const Testimonial = async ({testimonials}: {testimonials: any}) => {

  return (
    <div className={styles.testimonials}>
        <h2>Testimonials</h2>
        <p>Let’s hear from our students</p>
            <div className={styles.list}>
             {testimonials.filter((t: any) => !t?.isVideo)
                .map((testimonial: any) => (
                    <div key={testimonial?._id} className={styles.testimonial}>
                        <div className={styles.profile}>
                            {testimonial?.media ? <Image src={testimonial?.media} alt={testimonial?.name} width={100} height={100} /> : <Image src={Person} alt={testimonial?.name} width={100} height={100} />}
                            <div>
                                <p>{testimonial?.name}</p>
                                <span>{testimonial?.designation}</span>
                            </div>
                        </div>
                        <div className={styles.line}>
                            <div></div>
                            <p>{testimonial?.message}</p>
                        </div>
                    </div>
              ))}
            </div>
    </div>
  )
}

export default Testimonial