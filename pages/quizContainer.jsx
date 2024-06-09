import React, { useState, useEffect } from 'react';
import styles from '../styles/quiz.module.css';

const QuizContainer = ({ currentQuestion, currentQuestionIndex, currentQuestions, selectedOption, handleOptionClick, isConfirmed, handleConfirm, isCorrect, handleNextQuestion, handleTryAgain, handleTryCurrentQuestion }) => {
    const [retryAvailable, setRetryAvailable] = useState(true);

  useEffect(() => {
    if (isConfirmed) {
      setRetryAvailable(true);
    }
  }, [isConfirmed]);

  const handleRetryQuestion = () => {
    setRetryAvailable(false);
    handleTryAgain();
  };

  const handleAdvanceQuestion = () => {
    setRetryAvailable(true);
    handleNextQuestion();
  };
  

  return (
    <div className={styles.quizContainer}>
      <div className={`${styles.questionCounter} text-white text-lg`} style={{ fontSize: '1.2rem' }}>
        Questão {currentQuestionIndex + 1} de {currentQuestions.length}
      </div>
      <h1 className={`${styles.pergunta} text-lg md:text-xl lg:text-2xl`}>
        {currentQuestion.question}
      </h1>
      <div className={styles.optionsContainer}>
        {currentQuestion.options.map((option, index) => {
          const isSelected = selectedOption === index;
          const isCorrectAnswer = isConfirmed && index === currentQuestion.correctAnswerIndex;
          const isIncorrectAnswer = isConfirmed && index === selectedOption && !isCorrect;
          return (
            <div
              key={index}
              className={`${styles.option} ${isSelected ? styles.selected : ''} ${isCorrectAnswer ? styles.correct : ''} ${isIncorrectAnswer ? styles.incorrect : ''}`}
              onClick={() => handleOptionClick(index)}
            >
              {option}
            </div>
          );
        })}
      </div>
      {isConfirmed ? (
  <>
    {isCorrect ? (
      <button className={`${styles.confirmButton} text-sm md:text-base lg:text-lg`} onClick={handleAdvanceQuestion}>
        Próxima Pergunta
      </button>
    ) : (
      <>
        {retryAvailable && (
          <button className={`${styles.confirmButton} mr-20 text-sm md:text-base lg:text-lg`} onClick={handleRetryQuestion}>
            Tentar Novamente
          </button>
        )}
        <button className={`${styles.confirmButton} mr-20 text-sm md:text-base lg:text-lg`} onClick={handleAdvanceQuestion}>
          Avançar
        </button>
        <button className={`${styles.confirmButton} mt-20 text-sm md:text-base lg:text-lg`} onClick={handleTryCurrentQuestion}>
          Tentar esta Questão Novamente
        </button>
      </>
    )}
  </>
) : (
  <button className={`${styles.confirmButton} mt-20 text-sm md:text-base lg:text-lg`} onClick={handleConfirm} disabled={isConfirmed}>
    Confirmar
  </button>
)}

    </div>
  );
};

export default QuizContainer;
