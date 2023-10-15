import { FC, useContext, useEffect } from 'react';
import Image from 'next/image';
import { css } from '@emotion/react';
import QuestionAnswerButton from '@/components/model/Question/QuestionAnswerButton';
import QuizCard from '@/components/common/QuizCard';
import Button from '@/components/common/Button';
import { QuizContext } from '@/components/context/QuizContext';
import { breakPoint, colors } from '@/styles/constants';
import { poppins } from '@/styles/fonts';
import { Countries } from '@/models/Country';
import { AnswerStatus } from '@/models/Quiz';
import { ANSWER_SELECTION_ID_LIST } from '@/constants/quiz';

type Props = {
  countries: Countries;
};

const Quiz: FC<Props> = ({ countries }) => {
  const {
    currentQuiz,
    currentQuestion,
    currentAnswer,
    correctCount,
    quizMode,
    initialCurrentQuiz,
    initialQuiz,
    handleAnswer,
    handleNext,
    handleBackTop,
  } = useContext(QuizContext);

  // クイズ初期化
  useEffect(() => {
    initialQuiz();
  }, [initialQuiz]);

  // 1問ごとにクイズ生成
  useEffect(() => {
    console.log(initialCurrentQuiz);
    initialCurrentQuiz(countries);
  }, [countries, currentQuestion, initialCurrentQuiz]);

  return (
    <main>
      <QuizCard isImage={quizMode !== 'result'}>
        {quizMode === 'loading' && (
          <div css={resultsTextAlignCenter}>
            <p css={cardText}>Loading...</p>
          </div>
        )}
        {(quizMode === 'question' || quizMode === 'solution') && (
          <div>
            {currentQuiz?.questionFlag && (
              <p css={questionFlagBlock}>
                <Image
                  css={flagImage}
                  src={currentQuiz.questionFlag}
                  alt="flag"
                  fill
                />
              </p>
            )}
            <p css={cardText}>{currentQuiz?.text}</p>
            <div css={answerBlock}>
              {currentQuiz?.answers.map((answer, index) => {
                let answerStatus: AnswerStatus;
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
        {quizMode === 'result' && (
          <div css={resultsLayout}>
            <p css={resultsImageBlock}>
              <Image src="/undraw_winners.svg" alt="" layout="fill" />
            </p>
            <div css={resultsTextAlignCenter}>
              <p css={resultsTitle}>Results</p>
              <p css={resultsText}>
                You got <span css={resultsCount}>{correctCount}</span> correct
                answers
              </p>
            </div>
            <Button variant="outlined" onClick={handleBackTop}>
              Try again
            </Button>
          </div>
        )}
      </QuizCard>
    </main>
  );
};

const cardText = css`
  font-family: ${poppins.style.fontFamily};
  font-size: 24px;
  font-weight: bold;
  line-height: 36px;
  color: ${colors.navy2};
`;

const alignRight = css`
  text-align: right;
`;

const questionFlagBlock = css`
  position: relative;
  width: 84px;
  height: 56px;
  margin-bottom: 24px;

  @media (width < ${breakPoint.sm}px) {
    margin-bottom: 16px;
  }
`;

const flagImage = css`
  object-fit: cover;
`;

const answerBlock = css`
  display: grid;
  row-gap: 24px;
  margin-top: 32px;

  @media (width < ${breakPoint.sm}px) {
    row-gap: 16px;
    margin-top: 20px;
  }
`;

const resultsLayout = css`
  display: grid;
  row-gap: 56px;
  justify-content: center;
`;

const resultsImageBlock = css`
  position: relative;
  width: 240px;
  height: 128px;
`;

const resultsTextAlignCenter = css`
  text-align: center;
`;

const resultsTitle = css`
  font-family: ${poppins.style.fontFamily};
  font-size: 48px;
  font-weight: bold;
  line-height: 72px;
  color: ${colors.navy1};
`;

const resultsText = css`
  font-family: ${poppins.style.fontFamily};
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

export default Quiz;
