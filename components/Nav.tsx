"use client";

import React from "react";
import styles from "./Nav.module.css";
import Image from "next/image";
import Logo from "@/public/images/logo.webp";
import Mail from "@/public/images/Mail.webp";
import Phone from "@/public/images/Phone.webp";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Nav = () => {
  const pathname = usePathname();
  return (
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
        </div>
        <div className={styles.contact}>
          <span>Contact Now</span>
          <div>
            <Image src={Mail} alt={"Cloudswan"} width={30} height={30}></Image>
            <Image src={Phone} alt={"Cloudswan"} width={30} height={30}></Image>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
