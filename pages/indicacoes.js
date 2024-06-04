import { useRouter } from 'next/router'; // Importe useRouter para redirecionamento de página
import styles from '../styles/recommended.module.css';

export default function Indicacoes() {
  const router = useRouter();

  // Função para lidar com o evento de clique no botão de livros
  const handleBooksClick = () => {
    router.push('/livros');
  };

  // Função para lidar com o evento de clique no botão de podcast
  const handlePodcastClick = () => {
    router.push('/podcast');
  };

  const handleArtigoClick = () => {
    router.push('/artigo');
  }

  return (
    <div>
      {/* Header */}
      <p className={styles.recomend}>Recomendações</p>

      {/* Nova seção de botões */}
      <div className={styles.additionalButtons}>
        <div className={styles.buttonContainer}>
          <button onClick={handlePodcastClick}>
            <img src='/microfone.png' alt="microfone" />
          </button>
          <p className={styles.buttonTitle}>Podcast</p>
        </div>
        <div className={styles.buttonContainer}>
          <button onClick={handleBooksClick}>
            <img src='/livro.png' alt="Livro" />
          </button>
          <p className={styles.buttonTitle}>Livros</p>
        </div>
        <div className={styles.buttonContainer}>
          <button onClick={handleArtigoClick}>
            <img src='/artigo1.png' alt="Artigo" />
          </button>
          <p className={styles.buttonTitle}>Artigos</p>
        </div>
      </div>
    </div>
  );
}
