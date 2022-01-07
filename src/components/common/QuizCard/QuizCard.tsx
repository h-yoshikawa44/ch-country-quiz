import { FC, ComponentPropsWithRef } from 'react';
import { css } from '@emotion/react';
import { colors } from '@/styles/constants';

type Props = ComponentPropsWithRef<'div'> & {
  isImage?: boolean;
};

const QuizCard: FC<Props> = ({ isImage = false, children }) => {
  return <div css={[card, isImage && image]}>{children}</div>;
};

const card = css`
  min-width: 480px;
  padding: 64px 32px 32px;
  background-color: ${colors.white};
  border-radius: 24px;
`;

const image = css`
  position: relative;

  &::before {
    position: absolute;
    top: -72px;
    right: 0;
    content: url('/undraw_adventure.svg');
  }
`;

export default QuizCard;