import React from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/recommended.module.css';

export default function Indicacoes() {
  const router = useRouter();

  const handleBooksClick = () => {
    router.push('/livros');
  };

  const handlePodcastClick = () => {
    router.push('/podcast');
  };

  const handleArtigoClick = () => {
    router.push('/artigo');
  };

  return (
    <div>
      <p className={styles.recomend}>Indicações: </p>

      <div className={styles.additionalButtons}>
        <div className={styles.buttonContainer}>
          <button onClick={handlePodcastClick}>
            <img src='/microfone.png' alt="microfone" className={styles.image} />
          </button>
          <p className={styles.buttonTitle}>Podcast</p>
        </div>
        <div className={styles.buttonContainer}>
          <button onClick={handleBooksClick}>
            <img src='/livro.png' alt="Livro" className={styles.image} />
          </button>
          <p className={styles.buttonTitle}>Livros</p>
        </div>
        <div className={styles.buttonContainer}>
          <button onClick={handleArtigoClick}>
            <img src='/artigo1.png' alt="Artigo" className={styles.image} />
          </button>
          <p className={styles.buttonTitle}>Artigos</p>
        </div>
      </div>
    </div>
  );
}
