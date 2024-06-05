import React, { useState, useEffect, lazy, Suspense } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import styles from '../styles/quiz.module.css';

const Quiz = () => {
  const router = useRouter();
  const [selectedOption, setSelectedOption] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentQuestions, setCurrentQuestions] = useState([]);
  const [step, setStep] = useState('start'); // 'start', 'select', 'quiz'

  useEffect(() => {
    const { dificuldade } = router.query;
    
    const loadQuestions = async () => {
      let questionsModule;
      if (dificuldade === 'medio') {
        questionsModule = await import('../pages/questoesMedias');
      } else if (dificuldade === 'dificil') {
        questionsModule = await import('../pages/questoesDificeis');
      } else {
        questionsModule = await import('../pages/questoesFaceis');
      }
      setCurrentQuestions(questionsModule.default || []);
      setCurrentQuestionIndex(0); // Resetar o índice da questão quando a dificuldade mudar
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
    } else if (isCorrect) {
      router.push('/tela-de-destino');
    }
  };

  const handleQuizStart = (dificuldade) => {
    router.push(`/quiz?dificuldade=${dificuldade}`);
  };

  if (step === 'start') {
    return (
      <div>
        <h1 className={styles.titulo}>Bem-vindo ao Teste Lógico de Cyberbullying!</h1>
        <div className={styles.paragrafo}>
          <p className='containerBora'>Simbora pro Quiz !</p>
        </div>  
        <button onClick={() => setStep('select')}>
          <Image src='/start.png' alt="Start" width={100} height={100} className={styles.start} loading="lazy" />
        </button>
      </div>
    );
  }

  if (step === 'select') {
    return (
      <div className='Estante'>
      <div>
          <h1 className={styles.titulo}>Selecione a dificuldade</h1>
      </div>
      <div>
      <img src='/block.png' className={styles.imagem} width="170px"></img>
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
    );
  }

  if (!currentQuestion) {
    return <div>Carregando...</div>;
  }

  return (
    <div className={styles.quizContainer}>
      <div style={{ color: 'white' }} className={styles.questionCounter}>
        Questão {currentQuestionIndex + 1} de {currentQuestions.length}
      </div>
      <h1 className={styles.pergunta}>{currentQuestion.question}</h1>
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
        <button className={styles.confirmButton} onClick={isCorrect ? handleNextQuestion : handleTryAgain}>
          {isCorrect ? 'Próxima Pergunta' : 'Tentar Novamente'}
        </button>
      ) : (
        <button
          className={styles.confirmButton}
          onClick={handleConfirm}
          disabled={isConfirmed}
        >
          Confirmar
        </button>
      )}
    </div>
  );
};

export default Quiz;
