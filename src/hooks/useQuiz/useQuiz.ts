import { useState, useEffect, useCallback } from 'react';
import { Countries } from '@/models/Country';
import { QuizMode, Answer, Question } from '@/models/Quiz';
import { QUESTION_COUNT, ANSWER_SELECTION_COUNT } from '@/constants/quiz';
import { getRandomNum, getRandomNumList, shuffle } from '@/util/common';

const useQuiz = (countries: Countries) => {
  const [quizData, setQuizData] = useState<Question[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState<number>(1);
  const [currentAnswer, setCurrentAnswer] = useState<string>('');
  const [correctCount, setCorrectCount] = useState<number>(0);
  const [quizMode, setQuizMode] = useState<QuizMode>('loading');

  const createAnswerList = useCallback(
    (countries: Countries, numList: number[]) => {
      return numList.map((num, index) => {
        return {
          text: countries[num].capital.join(', '),
          isCorrect: index === 0 ? true : false,
        } as Answer;
      });
    },
    []
  );

  const getQuiz = useCallback(
    (countries: Countries) => {
      // クイズ生成
      let question: Question = {
        text: '',
        questionFlag: '',
        answers: [],
      };
      const numList = getRandomNumList(
        0,
        countries.length - 1,
        ANSWER_SELECTION_COUNT
      );
      const questionNo = getRandomNum(0, 1);
      if (questionNo === 0) {
        // 首都を問う問題
        const answerList = createAnswerList(countries, numList);
        question.text = `${
          countries[numList[0]].name.common
        } is the capital of`;
        question.questionFlag = '';
        question.answers = shuffle(answerList);
      } else if (questionNo === 1) {
        // 国旗を問う問題
        const answerList = createAnswerList(countries, numList);
        question.text = 'Which country does this flag belong to?';
        question.questionFlag = countries[numList[0]].flags.svg;
        question.answers = shuffle(answerList);
      }

      return question;
    },
    [createAnswerList]
  );

  const createQuizList = useCallback(
    (countries: Countries) =>
      Array.from({ length: QUESTION_COUNT }, (v, i) => i).map((num) =>
        getQuiz(countries)
      ),
    [getQuiz]
  );

  // クイズデータセットアップ
  useEffect(() => {
    setQuizData(createQuizList(countries));
    setCurrentQuestion(0);
    setCurrentAnswer('');
    setCorrectCount(0);
    setQuizMode('question');
  }, [countries, createQuizList]);

  const handleAnswer = useCallback((answer: string, isCorrect: boolean) => {
    setCurrentAnswer(answer);

    if (isCorrect) {
      setCorrectCount((prev) => prev + 1);
    }
    setQuizMode('solution');
  }, []);

  const handleNext = useCallback(() => {
    if (currentQuestion === QUESTION_COUNT - 1) {
      setQuizMode('result');
    } else {
      setCurrentQuestion((prev) => prev + 1);
      setCurrentAnswer('');
      setQuizMode('question');
    }
  }, [currentQuestion]);

  return {
    quizData,
    currentQuestion,
    currentAnswer,
    correctCount,
    quizMode,
    handleAnswer,
    handleNext,
  };
};

export default useQuiz;
