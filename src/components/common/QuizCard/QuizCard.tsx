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

  @media (width < ${breakPoint.sm}px) {
    width: 100%;
    min-width: initial;
  }

  @media (width < ${breakPoint.custom}px) {
    padding: 32px;
  }
`;

const quizCardImage = css`
  @media (width >= ${breakPoint.custom}px) {
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
