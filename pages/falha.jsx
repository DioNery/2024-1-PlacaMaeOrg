import React from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/certificado.module.css';
const Falha = () => {
  const router = useRouter();

  const handleSelecionarClick = () => {
    router.push('/');
  };

  return (
    <div>
      <h1 className={styles.conclusao}>
        Infelizmente você não conseguiu atingir o resultado esperado!
      </h1>
      <div style={{ fontSize: '1.2rem', textAlign: 'center', margin: '20px 0' }}>
        <p className={styles.conclusao}>Para poder ganhar o certificado você precisa acertar no mínimo 7 questões.</p>
      </div>  
      <button className={styles.voltarButton} onClick={handleSelecionarClick}>
        Tentar novamente
      </button>
    </div>
  );
};

export default Falha;
