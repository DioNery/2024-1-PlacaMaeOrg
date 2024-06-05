import React from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import styles from '../styles/quizStart.module.css';

const QuizStart = () => {
  const router = useRouter();

  const handleSelecionarClick = () => {
    router.push('/selecionar');
  };

  return (
    <div>
      <h1 className={styles.titulo}>Bem-vindo ao Teste Lógico de Cyberbullying!</h1>
      <div className={styles.paragrafo}>
        <p>Simbora pro Quiz!</p>
      </div>  
      <button onClick={handleSelecionarClick}>
        <Image src='/start.png' alt="Start" width={100} height={100} className={styles.start} loading="lazy" />
      </button>
    </div>
  );
};

export default QuizStart;
