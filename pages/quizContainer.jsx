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
      <div className={`${styles.questionCounter} text-white text-sm`} style={{ fontSize: window.innerWidth > 768 ? '0.8rem' : '0.6rem' }}>
  Questão {currentQuestionIndex + 1} de {currentQuestions.length}
</div>
<h6 style={{ fontSize: window.innerWidth > 768 ? '0.8rem' : '0.6rem', color: 'white' }}>
  {currentQuestion.question}
</h6>
<div className={styles.optionsContainer}>
  {currentQuestion.options.map((option, index) => {
    const isSelected = selectedOption === index;
    const isCorrectAnswer = isConfirmed && index === currentQuestion.correctAnswerIndex;
    const isIncorrectAnswer = isConfirmed && index === selectedOption && !isCorrect;
    
    const optionStyles = {
      fontSize: window.innerWidth > 768 ? '1rem' : '0.6rem', // Ajuste o tamanho da fonte com base na largura da janela
      padding: window.innerWidth > 768 ? '0.5rem 1rem' : '0.3rem 0.8rem', // Ajuste o preenchimento com base na largura da janela
    };

    return (
      <div
        key={index}
        className={`${styles.option} ${isSelected ? styles.selected : ''} ${isCorrectAnswer ? styles.correct : ''} ${isIncorrectAnswer ? styles.incorrect : ''}`}
        style={optionStyles}
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
          <button className={`${styles.confirmButton} ${window.innerWidth > 768 ? 'mr-20' : 'mr-10'} text-sm md:text-base lg:text-lg`} onClick={handleRetryQuestion}>
            Tentar Novamente
          </button>
        )}
        <button className={`${styles.confirmButton} ${window.innerWidth > 768 ? 'mr-20' : 'mr-10'} text-sm md:text-base lg:text-lg`} onClick={handleAdvanceQuestion}>
          Avançar
        </button>
        <button className={`${styles.confirmButton} ${window.innerWidth > 768 ? 'mt-20' : 'mt-10'} text-sm md:text-base lg:text-lg`} onClick={handleTryCurrentQuestion}>
          Tentar esta Questão Novamente
        </button>
      </>
    )}
  </>
) : (
  <button className={`${styles.confirmButton} ${window.innerWidth > 768 ? 'mt-20' : 'mt-10'} text-sm md:text-base lg:text-lg`} onClick={handleConfirm} disabled={isConfirmed}>
    Confirmar
  </button>
)}


    </div>
  );
};

export default QuizContainer;
