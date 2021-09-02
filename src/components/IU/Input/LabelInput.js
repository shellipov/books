import React from "react";
import Input from "./Input";
import styles from "./styles.module.scss";

const LabelInput = ({ label = "Добавьте заголовок", children, ...props }) => {
  return (
    <label className={styles.label}>
      {label}
      <Input {...props} />
      {children}
    </label>
  );
};

export default LabelInput;
