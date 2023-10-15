import { FC, ReactNode, createContext } from 'react';
import useQuiz from '@/hooks/useQuiz';

const QuizContext = createContext({} as ReturnType<typeof useQuiz>);

type Props = {
  children: ReactNode;
};

const QuizProvider: FC<Props> = ({ children }) => {
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
