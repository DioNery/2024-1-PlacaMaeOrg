// components/Button.js
import React, { useState } from "react";
import styles from "../styles/Button.module.css";

export default function Button({ onClick }) {
  const [isHovered, setHovered] = useState(false);

  return (
    <div
      className={`${styles.button} ${isHovered ? styles.hovered : ""}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onClick}
    >
      <img
        src="./denuncie.png"  
        alt="X"
        className={styles.image}
      />
    </div>
  );
}
