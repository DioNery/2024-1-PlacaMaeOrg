import React from 'react';
import dynamic from 'next/dynamic'; // Importando a função dynamic
import styles from '../styles/saibamais.module.css';

// Importando o componente Carousel de forma assíncrona
const Carousel = dynamic(() => import('../components/Carousel'));

export default function Saibamais() {
  return (
    <>
      <div className={styles.texto}>
        <p style={{ fontSize: '20px', fontWeight: '600' }}>
          Nosso propósito
        </p>
        <p>
          PlacaMãe.Org, é uma empresa de impacto social que busca informação, reflexão (o lado “placa”), sem abrir mão da arte de ser humano, da procura por aquilo que nos conecta reciprocamente, e nos conecta ao planeta e à existência nele (o lado “mãe”).
        </p>
        <p>
          A PlacaMãe.Org_ atua não apenas em pesquisa e extensão em Pernambuco, mas também promove educação digital. Oferecemos cursos, palestras, mentorias e treinamentos, além de intervenções locais, abrangendo famílias, escolas e comunidades. Em escolas da região metropolitana do Recife, discutimos temas como "Internet: contexto, limites e responsabilidades", "Cyberbullying" e "Direitos, deveres e internet em sala de aula" para crianças a partir do 5º ano do ensino fundamental.
        </p>
        <p>
          Construímos informações acessíveis e de qualidade, acreditando na importância de abranger toda a sociedade da informação.
        </p>
        <p>
          Nesse contexto, a plataforma de quiz desenvolvida pelo site PlacaMãe.org surge como uma ferramenta promissora para enfrentar o cyberbullying e promover uma cultura de respeito e inclusão nas escolas. Ao gamificar o processo de aprendizagem, a plataforma de quiz oferece uma maneira envolvente e interativa de educar os alunos sobre a importância do respeito online e do comportamento ético nas redes sociais. Além disso, ao fornecer informações e recursos educacionais sobre o cyberbullying de forma acessível e atraente, a plataforma capacita os alunos a reconhecerem, prevenirem e denunciarem situações de violência virtual.
        </p>
      </div>
      <Carousel />
    </>
  );
}
