import React from 'react';
import Image from 'next/image';
import styles from '../../styles/pagSecundarias.module.css';

const Artigo = () => {
  // Função para gerar um número aleatório entre 0 e 100000
  const getRandomNumber = () => Math.floor(Math.random() * 100000);

  return (
    <div>
      <p className={styles.texto2}>Artigos Científicos</p>
      <div className={styles.horizontalAlign}>
        <a href='https://www.sciencedirect.com/science/article/abs/pii/S074756321300232X' target='__blank' className={styles.link}>
          <button className={styles.componente1}>
            <Image src={`/Component 7.png?${getRandomNumber()}`} alt='Artigo 1' width={100} height={100} />
          </button>
        </a>
        <a href='https://www.sciencedirect.com/science/article/abs/pii/S2352250X22000161' target='__blank' className={styles.link}>
          <button className={styles.componente1}>
            <Image src={`/Component 8.png?${getRandomNumber()}`} alt='Artigo 2' width={100} height={100} />
          </button>
        </a>
        <a href='' className={styles.link}>
          <button className={styles.componente1}>
            <Image src={`/Component 9.png?${getRandomNumber()}`} alt='Artigo 3' width={100} height={100} />
          </button>
        </a>
        <a href='https://revistas.pucsp.br/curriculum/article/view/55633' target='__blank' className={styles.link}>
          <button className={styles.componente1}>
            <Image src={`/Component 10.png?${getRandomNumber()}`} alt='Artigo 4' width={100} height={100} />
          </button>
        </a>
        <a href='https://www.sciencedirect.com/science/article/abs/pii/S0360131521002335' target='__blank' className={styles.link}>
          <button className={styles.componente1}>
            <Image src={`/Component 11.png?${getRandomNumber()}`} alt='Artigo 5' width={100} height={100} />
          </button>
        </a>
      </div>
    </div>
  );
};

export default Artigo;
