import React from "react";
import Loader from "@/public/images/loader.svg";
import Image from "next/image";

const loading = () => {
  return (
    <div style={styles.load}>
      <Image src={Loader} width={100} height={100} alt={"Loading"}></Image>
    </div>
  );
};

export default loading;

const styles = {
  load: {
    backgroundColor: "var(--background)",
    width: "100vw",
    height: "100vh",
    display: "grid",
    placeContent: "center",
  },
};
