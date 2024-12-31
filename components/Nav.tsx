"use client";

import React, { useEffect, useState } from "react";
import styles from "./Nav.module.css";
import Image from "next/image";
import Logo from "@/public/images/logo.webp";
import Mail from "@/public/images/Mail.webp";
import Phone from "@/public/images/Phone.webp";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Nav = () => {
  const pathname = usePathname();
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll", null);
    };
  }, []);

  return (
    <>
      <nav className={styles.nav}>
        <Image src={Logo} alt={"Cloudswan"} width={60} height={60}></Image>
        <div>
          <span></span>
          <div className={styles.links}>
            <Link
              href={"/"}
              style={
                pathname == "/"
                  ? { color: "var(--textGrad)", fontWeight: 700 }
                  : {}
              }
            >
              Home
            </Link>
            <Link href={"/#testimonials"}>Testimonials</Link>
            <Link
              href={"/about"}
              style={
                pathname == "/about"
                  ? { color: "var(--textGrad)", fontWeight: 700 }
                  : {}
              }
            >
              About
            </Link>
            <Link
              href={"/courses"}
              style={
                pathname == "/courses"
                  ? { color: "var(--textGrad)", fontWeight: 700 }
                  : {}
              }
            >
              Courses
            </Link>
          </div>
          <div className={styles.contact}>
            <span>Contact Now</span>
            <div>
              <Image
                onClick={() =>
                  (window.location.href = "mailto:emailaddressforgl@gmail.com")
                }
                src={Mail}
                alt={"Cloudswan"}
                width={30}
                height={30}
              ></Image>
              <Image
                onClick={() => (window.location.href = "tel:9942465624")}
                src={Phone}
                alt={"Cloudswan"}
                width={30}
                height={30}
              ></Image>
            </div>
          </div>
        </div>
      </nav>
      <nav className={styles.nav}>
        <Image src={Logo} alt={"Cloudswan"} width={60} height={60}></Image>
        <div>
          <span></span>
          <div className={styles.links}>
            <Link
              href={"/"}
              style={
                pathname == "/"
                  ? { color: "var(--textGrad)", fontWeight: 700 }
                  : {}
              }
            >
              Home
            </Link>
            <Link href={"/#testimonials"}>Testimonials</Link>
            <Link
              href={"/about"}
              style={
                pathname == "/about"
                  ? { color: "var(--textGrad)", fontWeight: 700 }
                  : {}
              }
            >
              About
            </Link>
            <Link
              href={"/courses"}
              style={
                pathname == "/courses"
                  ? { color: "var(--textGrad)", fontWeight: 700 }
                  : {}
              }
            >
              Courses
            </Link>
          </div>
          <div className={styles.contact}>
            <span>Contact Now</span>
            <div>
              <Image
                onClick={() =>
                  (window.location.href = "mailto:emailaddressforgl@gmail.com")
                }
                src={Mail}
                alt={"Cloudswan"}
                width={30}
                height={30}
              ></Image>
              <Image
                onClick={() => (window.location.href = "tel:9942465624")}
                src={Phone}
                alt={"Cloudswan"}
                width={30}
                height={30}
              ></Image>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
