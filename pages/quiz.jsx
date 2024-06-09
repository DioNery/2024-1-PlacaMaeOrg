import React, { useState, useEffect, lazy } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import styles from '../styles/quiz.module.css'; 
import getQuestoes from '../pages/questoes';
const QuizContainer = lazy(() => import('./quizContainer'));
const Certificado = lazy(() => import('./certificado'));
const Falha = lazy(() => import('../pages/falha'));
const Quiz = () => {
  const router = useRouter();
  const [selectedOption, setSelectedOption] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentQuestions, setCurrentQuestions] = useState([]);
  const [step, setStep] = useState('start');
  const [correctAnswersCount, setCorrectAnswersCount] = useState(0);
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
    // Verifica o valor atualizado de selectedOption
    const isAnswerCorrect = selectedOption === currentQuestion.correctAnswerIndex;
    setIsCorrect(isAnswerCorrect);
    if (isAnswerCorrect) {
      setCorrectAnswersCount((prevCount) => prevCount + 1); // Incrementa o contador de respostas corretas
    }
  };

  const handleTryAgain = () => {
    setSelectedOption(null);
    setIsCorrect(null);
    setIsConfirmed(false);
    setCurrentQuestionIndex(0);
  };
  const handleTryCurrentQuestion = () => {
    setSelectedOption(null);
    setIsCorrect(null);
    setIsConfirmed(false);
  };
  
  const handleNextQuestion = () => {
    setSelectedOption(null);
    setIsCorrect(null);
    setIsConfirmed(false);
    if (currentQuestionIndex < currentQuestions.length - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    } else {
      if (correctAnswersCount > currentQuestions.length / 2) {
        router.push({
          pathname: '/certificado',
          query: { dificuldade: router.query.dificuldade }
        });
      } else {
        router.push('/falha');
      }
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
            <img src='/block.png' className={styles.imagem} width="170px" alt="Block" />
          </div>
          <div className={'flex flex-col items-center'}>
            <button className={styles.dificil} onClick={() => handleQuizStart('dificil')}>
              <img src='/dificil.png' alt="Difícil" />
            </button>
            <button className={styles.medio} onClick={() => handleQuizStart('medio')}>
              <img src='/medio.png' alt="Médio" />
            </button>
            <button className={styles.facil} onClick={() => handleQuizStart('facil')}>
              <img src='/facil.png' alt="Fácil" />
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
      <QuizContainer
  currentQuestion={currentQuestion}
  currentQuestionIndex={currentQuestionIndex}
  currentQuestions={currentQuestions}
  selectedOption={selectedOption}
  handleOptionClick={handleOptionClick}
  isConfirmed={isConfirmed}
  handleConfirm={handleConfirm}
  isCorrect={isCorrect}
  handleNextQuestion={handleNextQuestion}
  handleTryAgain={handleTryAgain}
  handleTryCurrentQuestion={handleTryCurrentQuestion} // Certifique-se de adicionar essa linha
/>

    </>
  );  
}; 
export default Quiz;
