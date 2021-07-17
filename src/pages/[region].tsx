import { css } from '@emotion/react';
import Layout from '@/components/Layout';
import { useState } from 'react';
import AnswerButton from '@/components/AnswerButton';
import QuizCard from '@/components/common/QuizCard';
import Button from '@/components/common/Button';

type QuizMode = 'question' | 'solution' | 'result';

type MyAnswer = {
  correctCount: number;
  answers: [{ text: string; isCorrect: boolean }] | [];
};

const data = [
  {
    question: 'Kuala Lumpur is the capital of',
    answers: [
      {
        headText: 'A',
        text: 'Vietnam',
        isCorrect: false,
      },
      {
        headText: 'B',
        text: 'Malaysia',
        isCorrect: true,
      },
      {
        headText: 'C',
        text: 'Sweden',
        isCorrect: false,
      },
      {
        headText: 'D',
        text: 'Austria',
        isCorrect: false,
      },
    ],
  },
];

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [quizMode, serQuizmode] = useState<QuizMode>('question');
  const [myAnswer, setMyAnswer] = useState<MyAnswer>({
    correctCount: 0,
    answers: [],
  });

  return (
    <Layout>
      <main>
        <QuizCard isImage>
          <div>
            <p css={cardText}>{data[currentQuestion]?.question}</p>
            <ul css={answerGridList}>
              {data[currentQuestion]?.answers.map((answer) => {
                let answerStatus;
                if (answer.isCorrect) {
                  answerStatus = 'correct';
                } else if (
                  myAnswer.answers[currentQuestion]?.text === answer.text
                ) {
                  answerStatus = 'wrong';
                } else {
                  answerStatus = 'none';
                }
                return (
                  <li key={`${answer.headText}-${answer.text}`}>
                    <AnswerButton
                      headText={answer.headText}
                      quizMode={quizMode}
                      answerStatus={answerStatus}
                    >
                      {answer.text}
                    </AnswerButton>
                  </li>
                );
              })}
              {quizMode === 'solution' && (
                <div css={alignRight}>
                  <Button>Next</Button>
                </div>
              )}
            </ul>
          </div>
        </QuizCard>
      </main>
    </Layout>
  );
};

const answerGridList = css`
  display: grid;
  row-gap: 24px;
  list-style: none;
  padding-inline-start: 0;
  margin-block-start: 32px;
`;

const cardText = css`
  font-family: Poppins, sans-serif;
  font-size: 24px;
  font-weight: bold;
  line-height: 36px;
  color: #2f527b;
`;

const alignRight = css`
  text-align: right;
`;

export default Quiz;
