import { FC, createContext } from 'react';
import useQuiz from '@/hooks/useQuiz';

const QuizContext = createContext({} as ReturnType<typeof useQuiz>);

const QuizProvider: FC = ({ children }) => {
  const {
    quizData,
    currentQuestion,
    currentAnswer,
    correctCount,
    quizMode,
    handleSelectRegion,
    handleQuizStart,
    initialQuiz,
    handleAnswer,
    handleNext,
    handleBackTop,
  } = useQuiz();

  return (
    <QuizContext.Provider
      value={{
        quizData,
        currentQuestion,
        currentAnswer,
        correctCount,
        quizMode,
        handleSelectRegion,
        handleQuizStart,
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
