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

  return (
    <div>

      {/* Header */}
      <div className={styles.header}>
        <img src='/logomaior.png' alt="Logo" className={styles.logo} />
      </div>

      <h1 className={styles.h1}>Recomendações</h1>
      <div className={styles.content}>
        <div className={styles.leftSection}>
          <button className={styles.microphoneButton} onClick={handlePodcastClick}>
            <img src='/microfone.png' alt="microfone" />
          </button>
          <a href='/podcast'>Podcast</a>
          <button className={styles.button}>Botão</button>
        </div>
      <div className={styles.centralSection}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <img src='/avatarBackground.png' alt="avatar" style={{ alignSelf: 'flex-center' }}/>
            </div>
            <div style={{
                    backgroundColor: 'white',
                    display:'flex-center',
                    color: 'black',
                    padding: '10px',
                    border: '2px solid black',
                    borderRadius: '10px',
                    maxWidth: '400px', 
                    textAlign: 'center'
                  }}>
              <h3 style={{ margin: 0, fontSize: '24px' }}>
                Você pode ainda checar essas duas indicações se quiser se aprofundar na área. Dê uma olhada 😉.
              </h3>
            </div>
        </div>
        <div className={styles.rightSection}>
          <button className={styles.booksButton} onClick={handleBooksClick}>
            <img src='/livro.png' alt="Livro" />
          </button>
          <a href='/livros'>Livros</a>
        </div>
      </div>
    </div>
  );
}
