import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/quiz.module.css';
import questoesF from '../pages/questoesFaceis';
import questoesM from '../pages/questoesMedias';
import questoesD from '../pages/questoesDificeis';

const Quiz = () => {
  const router = useRouter();
  const [selectedOption, setSelectedOption] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentQuestions, setCurrentQuestions] = useState([]);

  useEffect(() => {
    const { dificuldade } = router.query;
    if (dificuldade === 'medio') setCurrentQuestions(questoesM);
    else if (dificuldade === 'dificil') setCurrentQuestions(questoesD);
    else setCurrentQuestions(questoesF);
    setCurrentQuestionIndex(0); // Resetar o índice da questão quando a dificuldade mudar
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

export default Quiz;
