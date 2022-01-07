import { VFC, useState } from 'react';
import Image from 'next/image';
import { css } from '@emotion/react';
import QuestionAnswerButton from '@/components/model/Question/QuestionAnswerButton';
import QuizCard from '@/components/common/QuizCard';
import Button from '@/components/common/Button';
import { fonts, colors } from '@/styles/constants';

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

const Quiz: VFC = () => {
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [quizMode, serQuizmode] = useState<QuizMode>('result');
  const [myAnswer, setMyAnswer] = useState<MyAnswer>({
    correctCount: 0,
    answers: [],
  });

  return (
    <main>
      <QuizCard isImage={quizMode !== 'result'}>
        {quizMode === 'result' ? (
          <div css={resultsGrid}>
            <div css={resultsImageBox}>
              <Image src="/undraw_winners.svg" alt="" layout="fill" />
            </div>
            <div css={resultsTextAlignCenter}>
              <p css={resultsTitle}>Results</p>
              <p css={resultsText}>
                You got <span css={resultsCount}>4</span> correct answers
              </p>
            </div>
            <Button variant="outlined">Try again</Button>
          </div>
        ) : (
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
                    <QuestionAnswerButton
                      headText={answer.headText}
                      quizMode={quizMode}
                      answerStatus={answerStatus}
                    >
                      {answer.text}
                    </QuestionAnswerButton>
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
        )}
      </QuizCard>
    </main>
  );
};

const resultsGrid = css`
  display: grid;
  row-gap: 56px;
  justify-content: center;
`;

const resultsImageBox = css`
  position: relative;
  width: 240px;
  height: 128px;
`;

const resultsTextAlignCenter = css`
  text-align: center;
`;

const resultsTitle = css`
  font-family: ${fonts.poppins};
  font-size: 48px;
  font-weight: bold;
  line-height: 72px;
  color: ${colors.navy1};
`;

const resultsText = css`
  font-family: ${fonts.poppins};
  font-size: 18px;
  font-weight: normal;
  line-height: 27px;
`;

const resultsCount = css`
  font-size: 36px;
  font-weight: bold;
  line-height: 54px;
  color: ${colors.correct};
`;

const answerGridList = css`
  display: grid;
  row-gap: 24px;
  padding-inline-start: 0;
  margin-block-start: 32px;
  list-style: none;
`;

const cardText = css`
  font-family: ${fonts.poppins};
  font-size: 24px;
  font-weight: bold;
  line-height: 36px;
  color: ${colors.navy2};
`;

const alignRight = css`
  text-align: right;
`;

export default Quiz;
