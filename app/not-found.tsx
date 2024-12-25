import React from "react";
import Error from "@/public/images/404.webp";
import Image from "next/image";
import Button from "@/components/Button";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cloudswan Software Training Institute",
  description: "Page Not Found!",
};

const NotFound = () => {
  return (
    <div style={styles.error}>
      <Image src={Error} width={300} height={300} alt={"Loading"}></Image>
      <p>This page could not be found.</p>
      <Link href="/">
        <Button type={1} text="Home" />
      </Link>
    </div>
  );
};

export default NotFound;

const styles: { error: React.CSSProperties } = {
  error: {
    backgroundColor: "var(--background)",
    width: "100vw",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "20px",
  },
};
