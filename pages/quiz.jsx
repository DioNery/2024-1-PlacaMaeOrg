import React, { useState, useEffect, lazy, Suspense } from 'react';
import { useRouter } from 'next/router';

// Importe o CSS corretamente
import styles from '../styles/quiz.module.css';

// Carrega o componente de forma dinâmica
const Quiz = lazy(() => import('./quiz'));

const QuizPage = () => {
  const router = useRouter();
  const [selectedOption, setSelectedOption] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentQuestions, setCurrentQuestions] = useState([]);

  useEffect(() => {
    const { dificuldade } = router.query;
    
    const loadQuestions = async () => {
      let questionsModule;
      if (dificuldade === 'medio') {
        questionsModule = await import('./questoesMedias');
      } else if (dificuldade === 'dificil') {
        questionsModule = await import('./questoesDificeis');
      } else {
        questionsModule = await import('./questoesFaceis');
      }
      setCurrentQuestions(questionsModule.default || []);
      setCurrentQuestionIndex(0); // Resetar o índice da questão quando a dificuldade mudar
    };

    loadQuestions();
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

  // Verificar se currentQuestion está definido antes de tentar acessar suas propriedades
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

// Carregue o componente de forma assíncrona usando Suspense
const QuizPageWithSuspense = () => (
  <Suspense fallback={<div>Carregando...</div>}>
    <QuizPage />
  </Suspense>
);

export default QuizPageWithSuspense;
