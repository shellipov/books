import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.scss";

const UILink = ({ children, uitype = "button", ...props }) => {
  const types = {
    link: styles.link,
    button: styles.button,
  };

  return (
    <Link className={`${styles.uilink} ${types[uitype]}`} {...props}>
      {children}
    </Link>
  );
};

export default UILink;
