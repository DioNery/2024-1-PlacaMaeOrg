import { useRouter } from 'next/router'; // Importe useRouter para redirecionamento de página
import styles from '../styles/recommended.module.css';

export default function Bully() {
  const router = useRouter();

  // Função para lidar com o evento de clique no botão de livros
  const handleBooksClick = () => {
    router.push('/livros');
  };

  // Função para lidar com o evento de clique no botão de podcast
  const handlePodcastClick = () => {
    router.push('/podcast');
  };

  const handleArtigoClick = () =>{
    router.push('/artigo')
  }

  return (
    <div>
      <div className={styles.content}>
      <div className={styles.h1}> 
      <h1 className={styles.h1}>O que é o Bullying? </h1>
        <div className={styles.posicoes} style={{display: 'flex'}}> 
            <div style={{
                    backgroundColor: 'white',
                    display:'flex',
                    color: 'black',
                    border: '2px solid black',
                    borderRadius: '10px',
                    maxWidth: '100%',
                    maxHeight: '80%', 
                    textAlign: 'center',
                    fontSize: '15px'
                  }} >
            <p > O bullying é um comportamento repetido, intencional e agressivo que é praticado por uma pessoa ou grupo contra outra pessoa ou grupo. Geralmente, ele envolve um desequilíbrio de poder, onde o agressor tem mais poder físico, social ou emocional do que a vítima. O bullying pode assumir várias formas, incluindo verbal (insultos, apelidos pejorativos), física (agressão física, danos à propriedade), social (exclusão, disseminação de boatos) e cyberbullying (bullying realizado através da internet ou de dispositivos eletrônicos).

É importante destacar que o bullying pode ocorrer em diversos ambientes, como escolas, locais de trabalho, comunidades online e outros contextos sociais. Suas consequências podem ser graves, afetando não apenas a saúde emocional e mental da vítima, mas também seu desempenho acadêmico, sua autoestima e seu bem-estar geral.

Combater o bullying envolve não apenas lidar com os comportamentos agressivos, mas também promover uma cultura de respeito, empatia e inclusão. Isso pode ser feito por meio de políticas e programas de prevenção nas escolas, conscientização pública, apoio às vítimas e intervenção eficaz quando o bullying ocorre. </p>
                </div>
            </div>
        </div>
        <div className={styles.h1}> 
        <h1 className={styles.h1}>E o CyberBullying? </h1>
        <div className={styles.posicoes}>
                <div style={{
                    backgroundColor: 'white',
                    display:'flex',
                    color: 'black',
                    // padding: '10px',
                    border: '2px solid black',
                    borderRadius: '10px',
                    maxWidth: '100%',
                    maxHeight: '80%', 
                    textAlign: 'center',
                    fontSize: '15px'
                  }} >
            <p > O bullying é um comportamento repetido, intencional e agressivo que é praticado por uma pessoa ou grupo contra outra pessoa ou grupo. Geralmente, ele envolve um desequilíbrio de poder, onde o agressor tem mais poder físico, social ou emocional do que a vítima. O bullying pode assumir várias formas, incluindo verbal (insultos, apelidos pejorativos), física (agressão física, danos à propriedade), social (exclusão, disseminação de boatos) e cyberbullying (bullying realizado através da internet ou de dispositivos eletrônicos).

É importante destacar que o bullying pode ocorrer em diversos ambientes, como escolas, locais de trabalho, comunidades online e outros contextos sociais. Suas consequências podem ser graves, afetando não apenas a saúde emocional e mental da vítima, mas também seu desempenho acadêmico, sua autoestima e seu bem-estar geral.

Combater o bullying envolve não apenas lidar com os comportamentos agressivos, mas também promover uma cultura de respeito, empatia e inclusão. Isso pode ser feito por meio de políticas e programas de prevenção nas escolas, conscientização pública, apoio às vítimas e intervenção eficaz quando o bullying ocorre. </p>
                    </div>
            </div>
        </div>
        
        </div>
      </div>
  );
}
