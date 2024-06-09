import React from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import styles from '../styles/certificado.module.css';
import Quiz from '../pages/quiz';
import Home from '../pages/index';

const Certificado = () => {
  const router = useRouter();

  const handleVoltarClick = () => {
    router.push('/quiz');
  };

  return (
    <>
      <div className={styles.certificadoContainer}>
        <h1 className={styles.conclusao}>
          Parabéns! 🎉
          <br />
          Você avançou no entendimento do Cyberbullying. Sua dedicação é digna de reconhecimento. Continue promovendo um ambiente online seguro. Seu compromisso faz a diferença!
          <br />
          Continue aprendendo, cresça e inspire outros. Juntos, construímos uma comunidade virtual melhor.
          <br />
          Obrigado por fazer parte dessa jornada!
        </h1>
        <div className={styles.certificadoImage}>
          <Image 
            src="/certificado.png" 
            alt="Certificado"
            width={500}
            height={350}
            className={styles.imagem}
            loading="lazy"
          />
        </div>
        <button className={styles.voltarButton} onClick={handleVoltarClick}>
          Voltar para Início
        </button>
      </div>

      {/* Preloading components */}
      <div style={{ display: 'none' }}>
        <Quiz />
        <Home />
      </div>
    </>
  );
};

export default Certificado;
