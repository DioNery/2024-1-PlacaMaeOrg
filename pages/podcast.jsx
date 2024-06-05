// PodCast.jsx
import React, { useState, useCallback } from 'react';
import Image from 'next/image';
import styles from '../styles/podcast.module.css';
import { pods } from '../pages/podcastData';

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
    <div>
      <p className={styles.texto}>Recomendações de podcast</p>
      <img src='/Component 12.png' className={styles.linha} />
      <div className={styles.divLivro}>
        {pods.map((pod, index) => (
          <a key={index} href={pod.href} target="_blank" rel="noopener noreferrer">
            <button>
              <Image
                src={pod.src}
                className={styles[pod.className]}
                alt={`Podcast ${index + 1}`}
                width={150}
                height={150}
                style={getPodStyle(index)}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              />
            </button>
          </a>
        ))}
      </div>
    </div>
  );
}
