import styles from "../styles/Button.module.css";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="main-container">
        <div className="image-container">
          <div className="image-wrapper">
            <p
              style={{
                color: "white",
                fontSize: "30px",
                left: "120%",
                position: "relative",
                fontWeight: "900",
                fontStyle: "italic",
                width: "550px",
              }}
            >
              A educação digital pode ser divertida e transformadora_
            </p>
            <Image
              className={styles.principal}
              src="/img. principal.png"
              alt="logo placa mae"
              width={500}
              height={350}
            />
            <p
              style={{
                color: "white",
                position: "relative",
                top: "-110px",
                fontSize: "20px",
                textAlign: "center",
                fontWeight: "600",
              }}
            >
              Nós vamos dominar o mundo!
            </p>
          </div>
        </div>
        <div className={styles.buttons}>
          <Link href="/indicacoes">
            <p className={styles.button1}>Materiais de Estudo</p>
          </Link>
          <Link href="/quiz">
            <p className={styles.button2}>Quiz</p>
          </Link>
        </div>
      </div>

      <style jsx>{`
        .main-container {
          display: flex;
          margin-top:2rem;
          align-items: center;
          justify-content: center;
        }
        .main-container > .principal{

        }
        

        .logo {
          width: 20vw;
          animation: slideUp 0.5s ease-in-out;
        }

        .image-wrapper {
          width: 50%;
          max-height: 80%;
          border-radius: 10px;
          animation: slideUp 0.5s ease-in-out;
          display: block;
          margin: 1vh auto 0 5%;
        }

        .logo-container {
          margin: 1vh 5% 0 auto;
          margin-top: -2vh;
          margin-bottom: 0vh;
          width: 10vw;
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

          .logo {
            width: 40vw;
          }

          .image {
            width: 80%;
          }
        }
      `}</style>
    </>
  );
}
