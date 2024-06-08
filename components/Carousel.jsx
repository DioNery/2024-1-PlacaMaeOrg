import React, { useState, useEffect } from 'react';
import styles from '../styles/Carousel.module.css';
const images = [
  "/grupo.png",
  "/reuniao.png",
  "/palestra.png",
];
export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className={styles.carousel}>
      <div className={styles.carouselInner} style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images.map((image, index) => (
          <img key={index} src={image} className={styles.carouselImage} alt={`Slide ${index + 1}`} />
        ))}
      </div>
    </div>
  );
}
