import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import styles from '../styles/quiz.module.css';
import Certificado from '../pages/certificado'; // Certifique-se de que este caminho está correto
import getQuestoes from '../pages/questoes'; // Certifique-se de que este caminho está correto

const Quiz = () => {
  const router = useRouter();
  const [selectedOption, setSelectedOption] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentQuestions, setCurrentQuestions] = useState([]);
  const [step, setStep] = useState('start');

  useEffect(() => {
    const { dificuldade } = router.query;

    const loadQuestions = async () => {
      try {
        const questions = getQuestoes(dificuldade);
        setCurrentQuestions(questions || []);
        setCurrentQuestionIndex(0);
      } catch (error) {
        console.error("Erro ao carregar as questões:", error);
        setCurrentQuestions([]);
      }
    };

    if (router.query.dificuldade) {
      loadQuestions();
      setStep('quiz');
    }
  }, [router.query]);

  const currentQuestion = currentQuestions[currentQuestionIndex];

  const handleOptionClick = (index) => {
    if (!isConfirmed) setSelectedOption(index);
  };

  const handleConfirm = () => {
    setIsConfirmed(true);
    setIsCorrect(selectedOption === currentQuestion.correctAnswerIndex);
  };

  const handleTryAgain = () => {
    setSelectedOption(null);
    setIsCorrect(null);
    setIsConfirmed(false);
    setCurrentQuestionIndex(0);
  };

  const handleNextQuestion = () => {
    setSelectedOption(null);
    setIsCorrect(null);
    setIsConfirmed(false);
    if (currentQuestionIndex < currentQuestions.length - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    } else {
      router.push('/certificado'); // Ajuste a navegação conforme necessário
    }
  };

  const handleQuizStart = (dificuldade) => {
    router.push({
      pathname: '/quiz',
      query: { dificuldade }
    });
  };

  if (step === 'start') {
    return (
      <div className={styles.container}>
        <h1 className={styles.titulo}>Bem-vindo ao Teste Lógico de Cyberbullying!</h1>
        <div className={styles.paragrafo}>
          <p className={styles.containerBora}>Simbora pro Quiz?</p>
        </div>
        <button onClick={() => setStep('select')} className={styles.startButton}>
          <Image src='/start.png' alt="Start" width={100} height={100} className={styles.start} loading="lazy" />
        </button>
      </div>
    );
  }

  if (step === 'select') {
    return (
      <div>
        <div>
          <h1 className={styles.titulo}>Selecione a dificuldade: </h1>
        </div>
        <div className={"flex items-center"}>
          <div className='Estante'>
            <img src='/block.png' className={styles.imagem} width="170px"></img>
          </div>
          <div className={'flex flex-col items-center'}>
            <button className={styles.dificil} onClick={() => handleQuizStart('dificil')}>
              <img src='/dificil.png'></img>
            </button>
            <button className={styles.medio} onClick={() => handleQuizStart('medio')}>
              <img src='/medio.png'></img>
            </button>
            <button className={styles.facil} onClick={() => handleQuizStart('facil')}>
              <img src='/facil.png'></img>
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (!currentQuestion) {
    return <div>Carregando...</div>;
  }

  return (
    <>
      <div className={styles.quizContainer}>
        <div style={{ color: 'white', fontSize: '1.2rem' }} className={styles.questionCounter}>
          Questão {currentQuestionIndex + 1} de {currentQuestions.length}
        </div>
        <h1 className={`${styles.pergunta} text-lg md:text-xl lg:text-2xl`}>{currentQuestion.question}</h1>
        <div className={styles.optionsContainer}>
          {currentQuestion.options.map((option, index) => (
            <div
              key={index}
              className={`${styles.option} ${
                selectedOption === index ? styles.selected : ''
              } ${isConfirmed && index === currentQuestion.correctAnswerIndex ? styles.correct : ''} ${
                isConfirmed && index === selectedOption && !isCorrect ? styles.incorrect : ''
              }`}
              onClick={() => handleOptionClick(index)}
            >
              {option}
            </div>
          ))}
        </div>
        {isConfirmed ? (
          <button className={`${styles.confirmButton} text-sm md:text-base lg:text-lg`} onClick={isCorrect ? handleNextQuestion : handleTryAgain}>
            {isCorrect ? 'Próxima Pergunta' : 'Tentar Novamente'}
          </button>
        ) : (
          <button
            className={`${styles.confirmButton} text-sm md:text-base lg:text-lg`}
            onClick={handleConfirm}
            disabled={isConfirmed}
          >
            Confirmar
          </button>
        )}
      </div>

      {/* Preloading components */}
      <div style={{ display: 'none' }}>
        <Certificado />
      </div>
    </>
  );  
}; 
export default Quiz;
