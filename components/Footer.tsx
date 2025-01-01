import React from "react";
import styles from "./Footer.module.css";
import Image from "next/image";
import Logo from "@/public/images/logo.webp";
import FooterLocation from "@/public/images/FooterLocation.webp";
import FooterMail from "@/public/images/FooterMail.webp";
import FooterPhone from "@/public/images/FooterPhone.webp";
import Facebook from "@/public/images/Facebook.webp";
import WhatsApp from "@/public/images/WhatsApp.webp";
import Instagram from "@/public/images/Instagram.webp";
import Email from "@/public/images/Email.webp";
import Link from "next/link";
import { getTrendingCourses } from "@/lib/courses";

const Footer = async () => {
  const trendingCorses = await getTrendingCourses();

  return (
    <section className={styles.footer}>
      <div className={styles.content}>
        <div>
          <h2>Company</h2>
          <Link href={"/about"}>About Us</Link>
          <Link href={"/courses"}>Courses</Link>
        </div>
        <div>
          <h2>Trending Courses</h2>
          {trendingCorses?.map((course: any) => (
            <Link key={course?._id} href={`/courses/${course?.slug}`}>
              {course?.name}
            </Link>
          ))}
        </div>
        <div className={styles.contact}>
          <h2>Contact</h2>
          <div>
            <Image
              src={FooterLocation}
              alt={"Location"}
              width={25}
              height={25}
            ></Image>
            <span>Lakshmi Mills, Coimbatore.</span>
          </div>
          <div>
            <Image
              src={FooterLocation}
              alt={"Location"}
              width={25}
              height={25}
            ></Image>
            <span>Gandipuram, Coimbatore.</span>
          </div>
          <div>
            <Image src={FooterMail} alt={"Mail"} width={25} height={25}></Image>
            <span>mail.cloudswan@gmail.com</span>
          </div>
          <div>
            <Image
              src={FooterPhone}
              alt={"Phone"}
              width={25}
              height={25}
            ></Image>
            <span>8903835098, 9942465624</span>
          </div>
        </div>
        <div className={styles.social}>
          <Image src={Logo} alt={"Cloudswan"} width={70} height={70}></Image>
          <Link
            href={"//api.whatsapp.com/send?phone=8903835098"}
            target="_blank"
          >
            <Image
              src={WhatsApp}
              alt={"WhatsApp"}
              width={25}
              height={25}
            ></Image>
          </Link>
          <Link
            href={
              "https://www.facebook.com/p/Cloud-Swan-Technologies-100070345089855/"
            }
            target="_blank"
          >
            <Image
              src={Facebook}
              alt={"Facebook"}
              width={25}
              height={25}
            ></Image>
          </Link>
          <Link
            href={"https://www.instagram.com/cloudswan_solution/"}
            target="_blank"
          >
            <Image
              src={Instagram}
              alt={"Instagram"}
              width={25}
              height={25}
            ></Image>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Footer;
