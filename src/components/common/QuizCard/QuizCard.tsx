import { FC, ComponentPropsWithRef } from 'react';
import { css } from '@emotion/react';
import { breakPoint, colors } from '@/styles/constants';

type Props = ComponentPropsWithRef<'div'> & {
  isImage?: boolean;
};

const QuizCard: FC<Props> = ({ isImage = false, children }) => {
  return <div css={[quizCard, isImage && quizCardImage]}>{children}</div>;
};

const quizCard = css`
  min-width: 480px;
  padding: 64px 32px 32px;
  background-color: ${colors.white};
  border-radius: 24px;

  @media (max-width: ${breakPoint.sm - 1}px) {
    width: 100%;
    min-width: initial;
  }

  @media (max-width: ${breakPoint.custom - 1}px) {
    padding: 32px;
  }
`;

const quizCardImage = css`
  @media (min-width: ${breakPoint.custom}px) {
    position: relative;

    &::before {
      position: absolute;
      top: -72px;
      right: 0;
      content: url('/undraw_adventure.svg');
    }
  }
`;

export default QuizCard;
