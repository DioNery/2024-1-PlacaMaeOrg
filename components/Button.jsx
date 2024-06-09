import React, { useState } from "react";
import Image from "next/image";
import styles from "../styles/Button.module.css";

export default function Button({ onClick }) {
  const [isHovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <div
      className={`${styles.divBotaoDenuncia} ${isHovered ? styles.hovered : ""}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
    >
      <Image
        src="/denuncie1.png"
        alt="X"
        className={styles.botaoDenuncia}
        width={100}
        height={100}
        loading="lazy"
      />
    </div>
  );
}
