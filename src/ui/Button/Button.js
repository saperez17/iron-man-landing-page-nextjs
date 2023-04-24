import React from "react";
import styles from "./Button.module.css";

const Button = ({ children, m, p, variant, className }) => {
  return (
    <button
      className={`${styles.Button} ${
        variant === "primary" ? styles.primaryButton : ""
      } ${className}`}
      style={{
        padding: p ?? "12px 30px",
        margin: m ?? "0px",
      }}
    >
      {children}
    </button>
  );
};

export default Button;
