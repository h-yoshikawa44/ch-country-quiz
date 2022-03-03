import { FC, createContext } from 'react';
import useQuiz from '@/hooks/useQuiz';

const QuizContext = createContext({} as ReturnType<typeof useQuiz>);

const QuizProvider: FC = ({ children }) => {
  const {
    currentQuiz,
    currentQuestion,
    currentAnswer,
    correctCount,
    quizMode,
    handleSelectRegion,
    handleQuizStart,
    initialCurrentQuiz,
    initialQuiz,
    handleAnswer,
    handleNext,
    handleBackTop,
  } = useQuiz();

  return (
    <QuizContext.Provider
      value={{
        currentQuiz,
        currentQuestion,
        currentAnswer,
        correctCount,
        quizMode,
        handleSelectRegion,
        handleQuizStart,
        initialCurrentQuiz,
        initialQuiz,
        handleAnswer,
        handleNext,
        handleBackTop,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};

export { QuizContext, QuizProvider };
