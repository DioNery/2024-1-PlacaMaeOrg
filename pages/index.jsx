import styles from "../styles/Button.module.css";
import Link from "next/link";
import Image from "next/image";
import Indicacoes from "./pagIndicacoes/indicacoes";
import Quiz from "./quiz";

export default function Home() {
  return (
    <>
      <div className="main-container">
        <div className="image-container">
          <div className="image-wrapper">
          <p className="text-white text-2xl font-extrabold italic w-550 relative" style={{ left: "120%", top: "0" }}>
          Bem-vindos ao EducaBullying:
            </p>
            <p className="text-white text-xl font-bold italic w-150 relative" style={{ left: "120%", top: "0" }}>
              A educação digital pode ser divertida e transformadora_
            </p>
            <Image
              className={styles.principal}
              src="/img. principal.png"
              alt="logo placa mae"
              width={300}
              height={350}
            />
            <div style={{margin: '10px'}}>
              <p className="text-white text-lg font-semibold text-center static" style={{ top: "-110px", margin: '10px' }}>
                Nós vamos dominar o mundo!
              </p>
            </div>
          </div>
        </div>
        <div className={styles.buttons}>
          <Link href="/pagIndicacoes/indicacoes">
            <p className={styles.botao}>Materiais de Estudo</p>
          </Link>
          <Link href="/quiz">
            <p className={styles.botao}>Ir para o Quiz</p>
          </Link>
        </div>
      </div>

      {/* Preloading components */}
      <div style={{ display: 'none' }}>
        <Indicacoes />
        <Quiz />
      </div>

      <style jsx>{`
        .main-container {
          display: flex;
          margin-top: 2rem;
          align-items: center;
          justify-content: center;
        }

        .image-wrapper {
          width: 50%;
          max-height: 80%;
          border-radius: 10px;
          animation: slideUp 0.5s ease-in-out;
          display: block;
          margin: 1vh auto 0 5%;
        }

        .image {
          width: 60%;
          max-height: 100%;
          border-radius: 10px;
          border: 5px solid #fff;
          animation: slideUp 0.5s ease-in-out;
        }

        .button-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-around;
          margin-left: 20px;
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

        @media (max-width: 768px) {
          .main-container {
            flex-direction: column;
          }

          .button-container {
            margin-left: 0;
            margin-top: 20px;
          }

          .image-wrapper {
            width: 80%;
          }

          .image {
            width: 80%;
          }
        }
      `}</style>
    </>
  );
}
