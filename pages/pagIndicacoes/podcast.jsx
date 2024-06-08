import React, { useState, useCallback } from 'react';
import Image from 'next/image';
import { pods } from './podcastData';

export default function PodCast() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = useCallback((index) => {
    setHoveredIndex(index);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setHoveredIndex(null);
  }, []);

  const getPodStyle = useCallback(
    (index) => ({
      transform: hoveredIndex === index ? 'scale(1.1)' : 'scale(1)',
      transition: 'transform 0.3s ease, filter 0.3s ease',
      filter: hoveredIndex !== null && hoveredIndex !== index ? 'blur(2px)' : 'none',
      zIndex: hoveredIndex === index ? 10 : 0, // Definindo zIndex maior quando hover
    }),
    [hoveredIndex]
  );

  return (
    <div style={{ textAlign: 'center' }}>
      <div style={{ fontSize: '20px', fontWeight: '600', color: 'white', marginBottom: '20px' }}>
        Recomendações de podcast
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
        <div style={{ maxWidth: '30%', width: 'auto', height: 'auto' }}>
          <Image src='/Component 12.png' alt="DJ" width={200} height={200} />
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
        {pods.map((pod, index) => (
          <a key={index} href={pod.href} target="_blank" rel="noopener noreferrer">
            <div style={{ width: '100px', height: '100px', margin: '10px', position: 'relative', zIndex: 0 }}>
              <Image
                src={pod.src}
                alt={`Podcast ${index + 1}`}
                width={100}
                height={100}
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
