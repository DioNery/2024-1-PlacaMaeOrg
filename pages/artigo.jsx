import React from 'react';
import Image from 'next/image';
import styles from '../styles/pagSecundarias.module.css';

export const artigo = () => {
  return (
    <div>
      <p style={{color:'white', position:'relative',margin: '0',fontSize:'25px',fontWeight:'600'}}>Artigos Cientificos</p>
      <div className='align-items' style={{width:'140vh',display: 'flex', justifyContent: 'center', alignItems: 'center',position:'relative',right: '-50px'}}>
        <a href='https://www.sciencedirect.com/science/article/abs/pii/S074756321300232X' target='__blank'>
          <button className={styles.componente1}>
            <Image src='/Component 7.png' alt='Artigo 1' width={100} height={100} />
          </button> 
        </a>
        <a href='https://www.sciencedirect.com/science/article/abs/pii/S2352250X22000161' target='__blank'>
          <button className={styles.componente1}>
            <Image src='/Component 8.png' alt='Artigo 2' width={100} height={100} />
          </button>
        </a>
        <a href=''>
          <button className={styles.componente1}>
            <Image src='/Component 9.png' alt='Artigo 3' width={100} height={100} />
          </button>
        </a>
        <a href='https://revistas.pucsp.br/curriculum/article/view/55633' target='__blank'>
          <button className={styles.componente1}>
            <Image src='/Component 10.png' alt='Artigo 4' width={100} height={100} />
          </button>  
        </a>
        <a href='https://www.sciencedirect.com/science/article/abs/pii/S0360131521002335' target='__blank'>
          <button className={styles.componente1}>
            <Image src='/Component 11.png' alt='Artigo 5' width={100} height={100} />
          </button> 
        </a>
      </div>
    </div>
  );
};

export default artigo;
