import React from "react";
import styles from "./styles.module.scss";

const Button = ({ children, color = "blue", ...props }) => {
  const colors = {
    blue: styles.blue,
    red: styles.red,
  };

  return (
    <button className={`${styles.button} ${colors[color]}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
