import { FC, ComponentPropsWithRef } from 'react';
import { css } from '@emotion/react';
import { CheckCircleOutline } from '@emotion-icons/material-rounded/CheckCircleOutline';
import { HighlightOff } from '@emotion-icons/material-rounded/HighlightOff';
import { createRGBAColor } from '@/util/color';
import { fonts, colors } from '@/styles/constants';

type QuizMode = 'question' | 'solution' | 'result';

type Props = Omit<ComponentPropsWithRef<'button'>, 'disabled'> & {
  headText: string;
  quizMode: QuizMode;
  answerStatus: 'correct' | 'wrong' | 'none';
};

const QuestionAnswerButton: FC<Props> = ({
  headText,
  quizMode,
  answerStatus,
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
        isSolutionCorrect && correctAnswerButton,
        isSolutionWrong && wrongAnswerButton,
      ]}
      disabled={quizMode === 'solution'}
      {...props}
    >
      <span css={buttonHeadText}>{headText}</span>
      {children}
      {quizMode === 'solution' && (
        <span css={buttonFootIcon}>
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
  padding: 12px;
  font-family: ${fonts.poppins};
  font-size: 18px;
  font-weight: 500;
  line-height: 27px;
  /* stylelint-disable-next-line function-name-case */
  color: ${createRGBAColor(colors.secondary, 0.8)};
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

  &:focus:not(.focus-visible) {
    outline: none;
  }
`;

const correctAnswerButton = css`
  &:disabled {
    color: ${colors.white};
    background-color: ${colors.correct};
    border: 2px solid ${colors.correct};
  }
`;

const wrongAnswerButton = css`
  &:disabled {
    color: ${colors.white};
    background-color: ${colors.wrong};
    border: 2px solid ${colors.wrong};
  }
`;

const buttonHeadText = css`
  margin-right: 42px;
  font-size: 24px;
  line-height: 36px;
`;

const buttonFootIcon = css`
  display: block;
  margin-left: auto;
`;

export default QuestionAnswerButton;
