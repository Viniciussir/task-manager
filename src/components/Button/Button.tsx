import React from "react";
import styles from "./Button.module.scss";

interface ButtonProps {
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ onClick }) => {
  return (
    <button className={styles.button} onClick={onClick}>
      Adicionar
    </button>
  );
};

export default Button;
