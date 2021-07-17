import { FC, ComponentPropsWithRef } from 'react';
import { css } from '@emotion/react';
import { CheckCircleOutline } from '@emotion-icons/material-rounded/CheckCircleOutline';
import { HighlightOff } from '@emotion-icons/material-rounded/HighlightOff';
import { createRGBAColor } from '@/util/color';

type QuizMode = 'question' | 'solution' | 'result';

type Props = Omit<ComponentPropsWithRef<'button'>, 'disabled'> & {
  headText: string;
  quizMode: QuizMode;
  answerStatus: 'correct' | 'wrong' | 'none';
};

const AnswerButton: FC<Props> = ({
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
  font-family: Poppins, sans-serif;
  font-size: 18px;
  font-weight: 500;
  line-height: 27px;
  /* stylelint-disable-next-line function-name-case */
  color: ${createRGBAColor('#6066d0', 0.8)};
  cursor: pointer;
  background-color: #fff;
  /* stylelint-disable-next-line function-name-case */
  border: 2px solid ${createRGBAColor('#6066d0', 0.7)};
  border-radius: 12px;

  &:disabled {
    cursor: auto;
  }

  &:hover:not(:disabled),
  &:focus:not(:disabled) {
    color: #fff;
    background-color: #f9a826;
    border: 2px solid #f9a826;
  }

  &:focus:not(.focus-visible) {
    outline: none;
  }
`;

const correctAnswerButton = css`
  &:disabled {
    color: #fff;
    background-color: #60bf88;
    border: 2px solid #60bf88;
  }
`;

const wrongAnswerButton = css`
  &:disabled {
    color: #fff;
    background-color: #ea8282;
    border: 2px solid #ea8282;
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

export default AnswerButton;
