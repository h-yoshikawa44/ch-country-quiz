import { FC, ComponentPropsWithRef } from 'react';
import { css } from '@emotion/react';
import { createRGBAColor } from '@/util/color';

type Props = ComponentPropsWithRef<'button'> & {
  headText: string;
};

const AnswerButton: FC<Props> = ({ headText, children, ...props }) => {
  return (
    <button css={answerButton} {...props}>
      <span css={buttonHeadText}>{headText}</span>
      {children}
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

  &:hover,
  &:focus {
    color: #fff;
    background-color: #f9a826;
    border: 2px solid #f9a826;
  }

  &:focus:not(.focus-visible) {
    outline: none;
  }
`;

const buttonHeadText = css`
  margin-right: 42px;
  font-size: 24px;
  line-height: 36px;
`;

export default AnswerButton;
