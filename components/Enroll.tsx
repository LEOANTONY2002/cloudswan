"use client";

import React, { useState } from "react";
import styles from "./Enroll.module.css";
import Image from "next/image";
import EnrollImg from "@/public/images/Enroll.png";
// import { sendEnrollEmail } from "@/lib/enroll";

const Enroll = ({ course = null }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [mode, setMode] = useState("");
  const [isError, setIsError] = useState(false);

  const sendMail = async () => {
    setIsError(false);
    if (name == "" || email == "" || mobile == "" || mode == "") {
      setIsError(true);
    } else {
      // window.location.href = `mailto:mail.cloudswan@gmail.com?subject=Training Enquiry&body=Name: ${name} \nEmail: ${email} \nMobile: ${mobile} \nClass Mode: ${mode} \n${
      //   course && `Course: ${course}`
      // }`;
      const response = await fetch("/api/enroll", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, mobile, mode }),
      });

      const data = await response.json();
      if (data?.success) {
        console.log(data?.msg);
      } else {
        console.error(data?.msg);
      }
      // let res = await sendEnrollEmail(name, email, mobile, mode);
      // console.log(res);
    }
  };

  console.log(mode);

  return (
    <section className={styles.enroll}>
      <h2>Enroll Now</h2>
      <div>
        <Image src={EnrollImg} alt={"Enroll"} width={200} height={200} />
        <div className={styles.form}>
          <input
            type="text"
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Email Address"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            placeholder="Mobile Number"
            onChange={(e) => setMobile(e.target.value)}
          />

          <p>Class mode</p>
          <div>
            <p
              onClick={() => setMode("Offline")}
              style={{
                backgroundColor: mode === "Offline" ? "#0070f3" : "white",
              }}
            ></p>
            <span>Offline</span>
            <p
              onClick={() => setMode("Online")}
              style={{
                backgroundColor: mode === "Online" ? "#0070f3" : "white",
              }}
            ></p>
            <span>Online</span>
          </div>
          {isError && <span>Fill all the fields!</span>}
          <button onClick={() => sendMail()}>Enroll</button>
        </div>
      </div>
    </section>
  );
};

export default Enroll;
