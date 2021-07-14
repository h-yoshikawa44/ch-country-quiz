import { FC, ComponentPropsWithRef } from 'react';
import { css } from '@emotion/react';

type Props = ComponentPropsWithRef<'div'> & {
  isImage?: boolean;
};

const QuizCard: FC<Props> = ({ isImage = false, children }) => {
  return <div css={[card, isImage && image]}>{children}</div>;
};

const card = css`
  padding: 64px 32px;
  background-color: #fff;
  border-radius: 24px;
`;

const image = css`
  position: relative;

  &::before {
    position: absolute;
    top: -50%;
    right: 0;
    content: url('/undraw_adventure.svg');
  }
`;

export default QuizCard;
