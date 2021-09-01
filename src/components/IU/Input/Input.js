import React from "react";
import styles from "./styles.module.scss";

const Input = ({ label = 'Добавьте заголовок', children, ...props }) => {
  return (
    <label className={styles.label}>
      {label}
      <input
        className={styles.input}
        {...props}
        autocomplete="off"
        required
      ></input>
      {children}
    </label>
  );
};

export default Input;
