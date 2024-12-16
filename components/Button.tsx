import React from "react";
import styles from "./Button.module.css";

const Button = ({ type, text }: { type: Number; text: string }) => {
  return (
    <div className={type == 1 ? styles.Button1 : styles.Button2}>
      {" "}
      <span>{text}</span>{" "}
    </div>
  );
};

export default Button;
