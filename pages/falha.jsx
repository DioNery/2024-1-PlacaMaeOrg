import React from 'react';
import { useRouter } from 'next/router';

const Falha = () => {
  const router = useRouter();

  const handleSelecionarClick = () => {
    router.push('/');
  };

  return (
    <div>
      <h1 style={{ fontSize: '2rem', textAlign: 'center', margin: '20px 0' }}>
        Infelizmente você não conseguiu atingir o resultado esperado!
      </h1>
      <div style={{ fontSize: '1.2rem', textAlign: 'center', margin: '20px 0' }}>
        <p>Para poder ganhar o certificado você precisa acertar no mínimo 7 questões.</p>
      </div>  
      <button style={{ fontSize: '1.2rem', padding: '10px 20px', cursor: 'pointer' }} onClick={handleSelecionarClick}>
        Tentar novamente
      </button>
    </div>
  );
};

export default Falha;
