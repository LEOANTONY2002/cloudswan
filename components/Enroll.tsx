"use client";

import React, { useState } from "react";
import styles from "./Enroll.module.css";
import Image from "next/image";
import EnrollImg from "@/public/images/Enroll.webp";
import Loader from "@/public/images/loader.svg";

const Enroll = ({ course = null }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [mode, setMode] = useState("");
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoding] = useState(false);

  const sendMail = async () => {
    setError(null);
    setIsSuccess(false);
    setIsLoding(false);
    if (
      name == "" ||
      email == "" ||
      mobile == "" ||
      mode == "" ||
      course == null ||
      location == null
    ) {
      setError("Fill all the fields!");
    } else {
      let match = email
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
      if (!match) {
        setError("Enter a valid Email");
      } else {
        if (mobile.length < 10) {
          setError("Enter a valid Mobile Number");
        } else {
          setIsLoding(true);
          const response = await fetch("/api/enroll", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              name,
              email,
              mobile,
              mode,
              course,
              location,
            }),
          });

          const data = await response.json();
          if (data?.success) {
            console.log(data?.msg);
            setIsSuccess(true);
            setIsLoding(false);
          } else {
            setIsLoding(false);
            setError("Something went wromg!");
            console.error(data?.msg);
          }
        }
      }
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
          <select onChange={(e) => setLocation(e.target.value)}>
            <option selected disabled>
              Location
            </option>
            <option value="Lakshmi Mills, Coimbatore">
              Lakshmi Mills, Coimbatore
            </option>
            <option value="Gandhipuram, Coimbatore">
              Gandhipuram, Coimbatore
            </option>
          </select>
          {error && <span>{error}</span>}
          <button onClick={() => sendMail()}>Enroll</button>
          {isLoading && (
            <Image
              src={Loader}
              width={100}
              height={100}
              alt={"Loading"}
            ></Image>
          )}
          {isSuccess && <h6>Enquiry sent successfully!</h6>}
        </div>
      </div>
    </section>
  );
};

export default Enroll;
