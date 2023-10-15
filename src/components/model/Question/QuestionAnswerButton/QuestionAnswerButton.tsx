import { FC, ComponentPropsWithRef } from 'react';
import { css } from '@emotion/react';
import { CheckCircleOutline } from '@emotion-icons/material-rounded/CheckCircleOutline';
import { HighlightOff } from '@emotion-icons/material-rounded/HighlightOff';
import { colors } from '@/styles/constants';
import { poppins } from '@/styles/fonts';
import { createRGBAColor } from '@/util/color';
import { QuizMode, AnswerStatus } from '@/models/Quiz';

type Props = Omit<ComponentPropsWithRef<'button'>, 'disabled'> & {
  headText: string;
  value: string;
  quizMode: QuizMode;
  answerStatus: AnswerStatus;
  handleAnswer: (answer: string, isCorrect: boolean) => void;
};

const QuestionAnswerButton: FC<Props> = ({
  headText,
  value,
  quizMode,
  answerStatus,
  handleAnswer,
  children,
  ...props
}) => {
  const isSolutionCorrect =
    quizMode === 'solution' && answerStatus === 'correct';
  const isSolutionWrong = quizMode === 'solution' && answerStatus === 'wrong';
  return (
    <button
      css={[
        answerButton,
        isSolutionCorrect && answerButtonCorrect,
        isSolutionWrong && answerButtonWrong,
      ]}
      disabled={quizMode === 'solution'}
      onClick={() => handleAnswer(value, answerStatus === 'correct')}
      {...props}
    >
      <span css={answerButtonHeadText}>{headText}</span>
      {children}
      {quizMode === 'solution' && (
        <span css={answerButtonFootIcon}>
          {answerStatus === 'correct' && <CheckCircleOutline size={24} />}
          {answerStatus === 'wrong' && <HighlightOff size={24} />}
        </span>
      )}
    </button>
  );
};

const answerButton = css`
  display: inline-flex;
  align-items: center;
  width: 100%;
  padding: 8px 12px;
  font-family: ${poppins.style.fontFamily};
  font-size: 18px;
  font-weight: 500;
  line-height: 27px;
  /* stylelint-disable-next-line function-name-case */
  color: ${createRGBAColor(colors.secondary, 0.8)};
  text-align: left;
  cursor: pointer;
  background-color: ${colors.white};
  /* stylelint-disable-next-line function-name-case */
  border: 2px solid ${createRGBAColor(colors.secondary, 0.7)};
  border-radius: 12px;

  &:disabled {
    cursor: auto;
  }

  &:hover:not(:disabled),
  &:focus:not(:disabled) {
    color: ${colors.white};
    background-color: ${colors.primary};
    border: 2px solid ${colors.primary};
  }

  &:focus:not(:focus-visible) {
    outline: none;
  }
`;

const answerButtonCorrect = css`
  &:disabled {
    color: ${colors.white};
    background-color: ${colors.correct};
    border: 2px solid ${colors.correct};
  }
`;

const answerButtonWrong = css`
  &:disabled {
    color: ${colors.white};
    background-color: ${colors.wrong};
    border: 2px solid ${colors.wrong};
  }
`;

const answerButtonHeadText = css`
  margin-right: 42px;
  font-size: 24px;
  line-height: 36px;
`;

const answerButtonFootIcon = css`
  display: block;
  margin-left: auto;
`;

export default QuestionAnswerButton;
