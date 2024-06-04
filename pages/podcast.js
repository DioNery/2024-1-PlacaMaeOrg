import React, { useState } from 'react';
import styles from '../styles/podcast.module.css';

export default function PodCast() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const getPodStyle = (index) => ({
    transform: hoveredIndex === index ? 'scale(1.1)' : 'scale(1)',
    transition: 'transform 0.3s ease, filter 0.3s ease',
    filter: hoveredIndex !== null && hoveredIndex !== index ? 'blur(2px)' : 'none',
  });

  const pods = [
    { src: '/podcast1.png', className: styles.pod1, href: 'https://www.conviveremais.com.br/produto/podcast-teste/'},
    { src: '/podcast2.png', className: styles.pod2, href: 'https://www.conviveremais.com.br/produto/o-podcast-6-meu-sobrinho-sofre-bullying/' },
    { src: '/podcast3.png', className: styles.pod3, href: 'https://www.conviveremais.com.br/produto/o-podcast-11/' },
    { src: '/podcast4.png', className: styles.pod4, href: 'https://www.conviveremais.com.br/produto/o-podcast-15-comunicacao-eficaz/' },
    { src: '/podcast5.png', className: styles.pod5, href: 'https://www.dialogando.com.br/seguranca/ouca-o-podcast-o-combate-ao-cyberbullying/' },
    { src: '/podcast6.png', className: styles.pod6, href: 'https://open.spotify.com/show/7JfXTaZU5gLslSkbOBbfgX'},
    { src: '/podcast7.png', className: styles.pod7, href: 'https://pt.player.fm/series/2643503' },
  ];

  return (
    <div>
      <p className={styles.texto}>Recomendações de podcast</p>
      <img src='/Component 12.png' className={styles.linha} />
      <div className={styles.divLivro}>
        {pods.map((pod, index) => (
          <a key={index} href={pod.href} target="_blank" rel="noopener noreferrer">
            <button>
              <img
                src={pod.src}
                className={pod.className}
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
