import React from 'react'
import { useRouter } from 'next/router';
import styles from '../styles/selecionar.module.css';

export const selecionar = () => {

  const router = useRouter();

  const handleQuizStart = (dificuldade) => {
    router.push(`/quiz?dificuldade=${dificuldade}`);
  };

  return (
    <div>
      <h1 className={styles.titulo}>Selecione a dificuldade</h1>
      <img src='/block.png' className={styles.imagem}></img>
      <button className={styles.dificil} onClick={() => handleQuizStart('dificil')}>
        <img src='/dificil.png'></img>
      </button>
      <button className={styles.medio} onClick={() => handleQuizStart('medio')}>
      <img src='/medio.png'></img>
      </button>
      <button className={styles.facil} onClick={() => handleQuizStart('facil')}>
      <img src='/facil.png'></img>
      </button>
    </div>

  )
}

export default selecionar
