"use client";

import React, { useState } from "react";
import styles from "./Enroll.module.css";
import Image from "next/image";
import EnrollImg from "@/public/images/Enroll.webp";

const Enroll = ({course = null}) => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [mobile, setMobile] = useState("")
  const [mode, setMode] = useState("")
  const [time, setTime] = useState("")
  const [isError, setIsError] = useState(false)

  const sendMail = () => {
    setIsError(false)
    if (name == "" || email == "" || mobile == "" || mode == "" || time == "") {
      setIsError(true)
    } else {
      window.location.href = `mailto:emailaddressforgl@gmail.com?subject=Training Enquiry&body=Name: ${name} \nEmail: ${email} \nMobile: ${mobile} \nClass Mode: ${mode} \nPreferred Timing: ${time} \n${course && `Course: ${course}`}`
    }
  }

  return (
    <section className={styles.enroll}>
      <h2>Enroll Now</h2>
      <div>
        <Image src={EnrollImg} alt={"Enroll"} width={200} height={200} />
        <div className={styles.form}>
          <input type="text" placeholder="Name" onChange={(e) => setName(e.target.value)} />
          <input type="text" placeholder="Email Address" onChange={(e) => setEmail(e.target.value)} />
          <input type="text" placeholder="Mobile Number" onChange={(e) => setMobile(e.target.value)} />
          <input type="text" placeholder="Class Mode" onChange={(e) => setMode(e.target.value)} />
          <input type="text" placeholder="Preferred Timimg" onChange={(e) => setTime(e.target.value)} />
          {isError && <span>Fill all the fields!</span> }
          <button onClick={() => sendMail()}>Enroll</button>
        </div>
      </div>
    </section>
  );
};

export default Enroll;
