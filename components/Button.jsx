// components/Button.js
import React, { useState } from "react";
import styles from "../styles/Button.module.css";
export default function Button({ onClick }) {
  const [isHovered, setHovered] = useState(false);
  return (
    <div
      className={`${styles.divBotaoDenuncia} ${isHovered ? styles.hovered : ""}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onClick}
    >
      <img
      src="/denuncie1.png"
        alt="X"
        className={styles.botaoDenuncia}
      />
    </div>
  );
}
