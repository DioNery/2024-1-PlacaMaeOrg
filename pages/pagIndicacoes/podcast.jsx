import React, { useState, useCallback } from 'react';
import Image from 'next/image';
import styles from '../../styles/pagSecundarias.module.css';
import { pods } from './podcastData';

export default function PodCast() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = useCallback((index) => {
    setHoveredIndex(index);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setHoveredIndex(null);
  }, []);

  const getPodStyle = useCallback((index) => ({
    transform: hoveredIndex === index ? 'scale(1.1)' : 'scale(1)',
    transition: 'transform 0.3s ease, filter 0.3s ease',
    filter: hoveredIndex !== null && hoveredIndex !== index ? 'blur(2px)' : 'none',
  }), [hoveredIndex]);

  return (
    <div className={styles.recomend}>
      <div className={styles.horizontalAlign}>
        <p style={{ fontSize: '20px', fontWeight: '600', display: 'initial', color: 'white' }}>Recomendações de podcast</p>
        <img src='/Component 12.png' className={styles.dj} />
      </div>
      <div className={styles.podcastContainer}>
        {pods.map((pod, index) => (
          <a key={index} href={pod.href} target="_blank" rel="noopener noreferrer">
            <div className={styles.podcastItem}>
              <Image
                src={pod.src}
                alt={`Podcast ${index + 1}`}
                width={150}
                height={150}
                style={getPodStyle(index)}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              />
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
