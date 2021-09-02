import React from "react";
import styles from "./styles.module.scss";

const Input = (props) => {
  return (
    <>
      <input
        className={styles.input}
        {...props}
        autoComplete="off"
        required
      ></input>
    </>
  );
};

export default Input;
