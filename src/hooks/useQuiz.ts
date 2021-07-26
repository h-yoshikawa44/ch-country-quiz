import { useState, useCallback } from 'react';
import { Countries } from '@/models/Country';

type QuizMode = 'loading' | 'question' | 'solution' | 'result';

type Answer = {
  headText: 'A' | 'B' | 'C' | 'D';
  text: string;
  isCorrect: boolean;
};

type Question = {
  question: string;
  answers: Answer[];
};

const QUESTION_COUNT = 10;

const useQuiz = () => {
  const [quizData, setQuizData] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState<number>(1);
  const [currentAnswer, setCurrentAnswer] = useState<string>('');
  const [correctCount, setCorrectCount] = useState<number>(0);
  const [quizMode, setQuizMode] = useState<QuizMode>('loading');

  const createQuiz = useCallback((countryData: Countries) => {
    // クイズ生成

    // setQuizData(quiz);
    setQuizMode('question');
  }, []);

  const handleAnswer = useCallback((answer: string, isCorrect: boolean) => {
    setCurrentAnswer(answer);

    // 正答ならカウントアップ
    // setCorrectCount((prev) => prev + 1);

    setQuizMode('solution');
  }, []);

  const handleNext = useCallback(() => {
    if (currentQuestion === QUESTION_COUNT) {
      setQuizMode('result');
    } else {
      setCurrentQuestion((prev) => prev + 1);
      setCurrentAnswer('');
      setQuizMode('question');
    }
  }, [currentQuestion]);

  return { createQuiz, handleAnswer, handleNext };
};

export default useQuiz;
