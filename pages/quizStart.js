import React from 'react';
import { useRouter } from 'next/router';
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
        <img src='/start.png' className={styles.start} ></img>
      </button>
    </div>
  );
};

export default QuizStart;
