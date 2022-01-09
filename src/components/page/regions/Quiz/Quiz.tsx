import { VFC, useCallback } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { css } from '@emotion/react';
import QuestionAnswerButton from '@/components/model/Question/QuestionAnswerButton';
import QuizCard from '@/components/common/QuizCard';
import Button from '@/components/common/Button';
import { fonts, colors } from '@/styles/constants';
import { Countries } from '@/models/Country';
import { ANSWER_SELECTION_ID_LIST } from '@/constants/quiz';
import useQuiz from '@/hooks/useQuiz';

type Props = {
  countries: Countries;
};

const Quiz: VFC<Props> = ({ countries }) => {
  const {
    quizData,
    currentQuestion,
    currentAnswer,
    correctCount,
    quizMode,
    handleAnswer,
    handleNext,
  } = useQuiz(countries);

  const router = useRouter();
  const handleTop = useCallback(() => {
    router.push('/');
  }, [router]);

  console.log(quizData);

  return (
    <main>
      <QuizCard isImage={quizMode !== 'result'}>
        {quizMode === 'result' ? (
          <div css={resultsGrid}>
            <p css={resultsImageBox}>
              <Image src="/undraw_winners.svg" alt="" layout="fill" />
            </p>
            <div css={resultsTextAlignCenter}>
              <p css={resultsTitle}>Results</p>
              <p css={resultsText}>
                You got <span css={resultsCount}>{correctCount}</span> correct
                answers
              </p>
            </div>
            <Button variant="outlined" onClick={handleTop}>
              Try again
            </Button>
          </div>
        ) : (
          <div>
            {quizData[currentQuestion]?.questionFlag && (
              <p css={questionFlagBlock}>
                <Image
                  src={quizData[currentQuestion].questionFlag}
                  alt="flag"
                  layout="fill"
                />
              </p>
            )}
            <p css={cardText}>{quizData[currentQuestion]?.text}</p>
            <div css={answerBlock}>
              {quizData[currentQuestion]?.answers.map((answer, index) => {
                let answerStatus;
                if (answer.isCorrect) {
                  answerStatus = 'correct';
                } else if (currentAnswer === answer.text) {
                  answerStatus = 'wrong';
                } else {
                  answerStatus = 'none';
                }
                return (
                  <QuestionAnswerButton
                    key={`${ANSWER_SELECTION_ID_LIST[index]}-${answer.text}`}
                    headText={ANSWER_SELECTION_ID_LIST[index]}
                    value={answer.text}
                    quizMode={quizMode}
                    answerStatus={answerStatus}
                    handleAnswer={handleAnswer}
                  >
                    {answer.text}
                  </QuestionAnswerButton>
                );
              })}
              {quizMode === 'solution' && (
                <div css={alignRight}>
                  <Button onClick={handleNext}>Next</Button>
                </div>
              )}
            </div>
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

const questionFlagBlock = css`
  position: relative;
  width: 84px;
  height: 52px;
  margin-bottom: 24px;
`;

const answerBlock = css`
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
