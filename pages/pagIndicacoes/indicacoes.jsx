import React from 'react';
import { useRouter } from 'next/router';
import styles from '../../styles/recommended.module.css';

export default function Indicacoes() {
  const router = useRouter();

  const handleButtonClick = (route) => {
    router.push(route);
  };

  const buttons = [
    { title: 'Podcast', image: '/microfone.png', route: './podcast' },
    { title: 'Livros', image: '/livro.png', route: './livros' },
    { title: 'Artigos', image: '/artigo1.png', route: './artigo' },
  ];

  return (
    <div>
      <p className={styles.recomend}>Indicações: </p>

      <div className={styles.additionalButtons}>
        {buttons.map((button, index) => (
          <div key={index} className={styles.buttonContainer}>
            <button onClick={() => handleButtonClick(button.route)}>
              <img src={button.image} alt={button.title} className={styles.image} />
            </button>
            <p className={styles.buttonTitle}>{button.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
