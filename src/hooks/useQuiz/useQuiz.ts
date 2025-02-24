import { ChangeEvent, FormEvent, useState, useCallback } from 'react';
import { useRouter } from 'next/router';
import { Countries } from '@/models/Country';
import { QuizMode, Answer, Question } from '@/models/Quiz';
import { ANSWER_SELECTION_COUNT } from '@/constants/quiz';
import { getRandomNum, getRandomNumList, shuffle } from '@/util/common';

const useQuiz = () => {
  const [region, setRegion] = useState<string>('all');
  const [currentQuiz, setCurrentQuiz] = useState<Question>();
  const [currentQuestion, setCurrentQuestion] = useState<number>(1);
  const [currentAnswer, setCurrentAnswer] = useState<string>('');
  const [correctCount, setCorrectCount] = useState<number>(0);
  const [quizMode, setQuizMode] = useState<QuizMode>('loading');
  const router = useRouter();

  const handleSelectRegion = useCallback(
    (e: ChangeEvent<HTMLSelectElement>) => {
      setRegion(e.target.value.toLocaleLowerCase());
    },
    [],
  );

  const handleQuizStart = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      router.push(`regions/${region}`);
    },
    [region, router],
  );

  const createCapitalAnswerList = useCallback(
    (countries: Countries, numList: number[]) => {
      return numList.map((num, index) => {
        return {
          text: countries[num].capital[0]
            ? countries[num].capital.join(', ')
            : '（No Capital）',
          isCorrect: index === 0 ? true : false,
        } as Answer;
      });
    },
    [],
  );

  const createNameAnswerList = useCallback(
    (countries: Countries, numList: number[]) => {
      return numList.map((num, index) => {
        return {
          text: countries[num].name.common,
          isCorrect: index === 0 ? true : false,
        } as Answer;
      });
    },
    [],
  );

  const getQuiz = useCallback(
    (countries: Countries) => {
      // クイズ生成
      const question: Question = {
        text: '',
        questionFlag: '',
        answers: [],
      };
      const numList = getRandomNumList(
        0,
        countries.length - 1,
        ANSWER_SELECTION_COUNT,
      );
      const questionNo = getRandomNum(0, 1);
      if (questionNo === 0) {
        // 首都を問う問題
        const answerList = createCapitalAnswerList(countries, numList);
        question.text = `${
          countries[numList[0]].name.common
        } is the capital of`;
        question.questionFlag = '';
        question.answers = shuffle(answerList);
      } else if (questionNo === 1) {
        // 国旗の国名を問う問題
        const answerList = createNameAnswerList(countries, numList);
        question.text = 'Which country does this flag belong to?';
        question.questionFlag = countries[numList[0]].flags.svg;
        question.answers = shuffle(answerList);
      }

      return question;
    },
    [createCapitalAnswerList, createNameAnswerList],
  );

  const initialCurrentQuiz = useCallback(
    (countries: Countries) => {
      setCurrentQuiz(getQuiz(countries));
    },
    [getQuiz],
  );

  const initialQuiz = useCallback(() => {
    setCurrentQuestion(1);
    setCurrentAnswer('');
    setCorrectCount(0);
    setQuizMode('question');
  }, []);

  const handleAnswer = useCallback((answer: string, isCorrect: boolean) => {
    setCurrentAnswer(answer);

    if (isCorrect) {
      setCorrectCount((prev) => prev + 1);
    }
    setQuizMode('solution');
  }, []);

  const handleNext = useCallback(() => {
    if (currentQuestion !== correctCount) {
      setQuizMode('result');
    } else {
      setCurrentQuestion((prev) => prev + 1);
      setCurrentAnswer('');
      setQuizMode('question');
    }
  }, [currentQuestion, correctCount]);

  const handleBackTop = useCallback(() => {
    router.push('/');
  }, [router]);

  return {
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
  };
};

export default useQuiz;
