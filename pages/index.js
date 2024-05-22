import styles from '../styles/Button.module.css';
import styleText from '../styles/saibamais.module.css'

//Diego was here
export default function Home() {
  return (
    <>

  
      <div className="image-container">
        <div className="logo-container">
          <img
            className="logo"
            src="/logo_home.png"
            alt="logo X"
          />
        </div>
        <div className="images-row">
          <img
            className="image"
            src="/criancas.jpg"
            alt="logo placa mae"
          />

        <div>
        <button className={styles.button2}>Materiais de Estudo</button>
        </div>
          
        </div>

        <div>
        <button className={styles.button3}>Quero ir para o quiz</button>
        </div>

    
        
      </div>
      
      <style jsx>{`
      

        .image-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-start; /* Ajuste para alinhar no topo */
          height: 100vh; /* Mantive a altura como 100% da tela */
        }

        .logo {
          width: 20vw; /* Ajuste o tamanho da logo conforme necessário */
          animation: slideUp 0.5s ease-in-out; /* Adicionada animação de slideUp ao logo_home */
        }

        .images-row {
          width: 50%; /* Reduzindo o tamanho da imagem para 50% da largura da tela */
          max-height: 80%;
          border-radius: 10px;
          animation: slideUp 0.5s ease-in-out; 
          display: block; /* Definindo como bloco para aplicar as margens automaticamente */
          margin: 1vh auto 0 5%; /* Margem superior de 1vh, centralizado horizontalmente e sem margem inferior */
          

         
        }

        .logo-container {
          margin: 1vh 5% 0 auto;
          margin-top: -2vh;
          margin-bottom: 0vh;
          width: 10vw;
        }

        .image {
          width: 60%; /* Ajuste a largura conforme necessário */
          max-height: 100%;
          border-radius: 10px;
          border: 5px solid #fff; /* Adicionado uma borda sólida branca de 5 pixels */
          animation: slideUp 0.5s ease-in-out; 
        }

        @keyframes slideUp {
          from {
            transform: translateY(20px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
      `}</style>
    </>
  );
}
