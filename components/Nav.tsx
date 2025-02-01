"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Nav.module.css";
import Logo from "@/public/images/IconFull.webp";
import Phone from "@/public/images/WhatsApp.webp";
import Email from "@/public/images/Mail.webp";
import Expand from "@/public/images/Expand.webp";
import Menu from "@/public/images/Menu.webp";
import { usePathname } from "next/navigation";

const Nav = ({ courses = null }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState(null);
  const menuRef = useRef(null);
  const pathname = usePathname();

  useEffect(() => {
    if (sessionStorage.getItem("hash")) {
      let hash = sessionStorage.getItem("hash");
      document.getElementById(hash)?.scrollIntoView({ behavior: "smooth" });
      sessionStorage.removeItem("hash");
    }
  }, [pathname]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleSubMenu = (menu) => {
    setOpenSubMenu(openSubMenu === menu ? null : menu);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  const handleNavigation = (href) => {
    const [path, hash] = href.split("#");
    if (pathname === path) {
      document.getElementById(hash)?.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = path;
      sessionStorage.setItem("hash", hash);
    }
  };

  return (
    <>
      <div className={styles.stick}>
        <span>
          <span>For Enquiry |</span> 8903835098
        </span>
        <span className={styles.email}>
          Lakshmi Mills{" "}
          <span style={{ margin: "0 10px", fontSize: "16px" }}> | </span>{" "}
          Gandhipuram
        </span>
        <span className={styles.email}>
          <span>Contact Us |</span> mail.cloudswan@gmail.com
        </span>
      </div>
      <nav className={styles.nav}>
        <div className={styles.logo}>
          <Image src={Logo} alt="Logo" width={200} height={60} />
        </div>
        <div className={styles.links}>
          <div className={styles.link}>
            <Link
              href="/"
              style={
                pathname == "/" ? { color: "#0070f3", fontWeight: 700 } : {}
              }
            >
              Home
            </Link>
            <div className={styles.sublinks}>
              <a onClick={() => handleNavigation("/#testimonials")}>
                Testimonials
              </a>
              <a onClick={() => handleNavigation("/#trending")}>
                Trending Courses
              </a>
              <a onClick={() => handleNavigation("/#cloud")}>
                Cloud Certifications
              </a>
              <a onClick={() => handleNavigation("/#hire")}>Hiring Partners</a>
            </div>
          </div>
          <div className={styles.link}>
            <Link
              href="/about"
              title="Learn more about us"
              style={
                pathname == "/about"
                  ? { color: "#0070f3", fontWeight: 700 }
                  : {}
              }
            >
              About
            </Link>
            <div className={styles.sublinks}>
              <a onClick={() => handleNavigation("/about#why")}>Why Us</a>
              <a onClick={() => handleNavigation("/about#achievers")}>
                Our Achievers
              </a>
            </div>
          </div>
          <div className={styles.link}>
            <Link
              href="/courses"
              title="Explore our expert-led courses"
              style={
                pathname.includes("courses")
                  ? { color: "#0070f3", fontWeight: 700 }
                  : {}
              }
            >
              Courses
            </Link>
            <div className={styles.sublinks}>
              {courses.map((course) => (
                <Link key={course.id} href={`/courses/${course.slug}`}>
                  {course.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className={styles.contact}>
          <span>Contact Now</span> |
          <Image
            onClick={() =>
              (window.location.href = "mailto:mail.cloudswan@gmail.com")
            }
            src={Email}
            alt="Mail"
            width={30}
            height={30}
          />
          <Image
            onClick={() => (window.location.href = "tel:8903835098")}
            src={Phone}
            alt="Phone"
            width={30}
            height={30}
          />
        </div>
        <div className={styles.mobileMenuIcon} onClick={toggleMenu}>
          <Image src={Menu} alt="More" width={30} height={30} />
        </div>
      </nav>
      {isMenuOpen && (
        <div className={styles.mobileMenu} ref={menuRef}>
          <div className={styles.mobileLinks}>
            <div className={styles.mobileLink}>
              <div className={styles.mobileLinkHead}>
                <Link href="/">Home</Link>
                <Image
                  src={Expand}
                  alt="Expand"
                  width={20}
                  height={20}
                  onClick={() => toggleSubMenu("home")}
                />
              </div>
              {openSubMenu === "home" && (
                <div className={styles.mobileSublinks}>
                  <a onClick={() => handleNavigation("/#testimonials")}>
                    Testimonials
                  </a>
                  <a onClick={() => handleNavigation("/#hire")}>
                    Hiring Partners
                  </a>
                  <a onClick={() => handleNavigation("/#trending")}>
                    Trending Courses
                  </a>
                </div>
              )}
            </div>
            <div className={styles.mobileLink}>
              <div className={styles.mobileLinkHead}>
                <Link href="/about" title="Learn more about us">
                  About
                </Link>
                <Image
                  src={Expand}
                  alt="Expand"
                  width={20}
                  height={20}
                  onClick={() => toggleSubMenu("about")}
                />
              </div>
              {openSubMenu === "about" && (
                <div className={styles.mobileSublinks}>
                  <a onClick={() => handleNavigation("/about#why")}>Why Us</a>
                  <a onClick={() => handleNavigation("/about#achievers")}>
                    Our Achievers
                  </a>
                </div>
              )}
            </div>
            <div className={styles.mobileLink}>
              <div className={styles.mobileLinkHead}>
                <Link href="/courses" title="Explore our expert-led courses">
                  Courses
                </Link>
                <Image
                  src={Expand}
                  alt="Expand"
                  width={20}
                  height={20}
                  onClick={() => toggleSubMenu("courses")}
                />
              </div>
              {openSubMenu === "courses" && (
                <div className={styles.mobileSublinks}>
                  {courses.map((course) => (
                    <Link key={course.id} href={`/courses/${course.slug}`}>
                      {course.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <div className={styles.mobileContact}>
              <span>Contact Now</span>
              <div>
                <Image
                  onClick={() =>
                    (window.location.href = "mailto:mail.cloudswan@gmail.com")
                  }
                  src={Email}
                  alt="Mail"
                  width={30}
                  height={30}
                />
                <Image
                  onClick={() => (window.location.href = "tel:8903835098")}
                  src={Phone}
                  alt="Phone"
                  width={30}
                  height={30}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Nav;
