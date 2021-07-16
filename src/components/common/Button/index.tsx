import { FC, ComponentPropsWithRef } from 'react';
import { css } from '@emotion/react';
import { createDarkenColor } from '@/util/color';

type Props = ComponentPropsWithRef<'button'>;

const Button: FC<Props> = ({ children, ...props }) => {
  return (
    <button css={button} {...props}>
      {children}
    </button>
  );
};

const button = css`
  padding: 16px 32px;
  font-family: Poppins, sans-serif;
  font-size: 18px;
  font-weight: bold;
  line-height: 27px;
  color: #fff;
  cursor: pointer;
  background-color: #f9a826;
  border: none;
  border-radius: 12px;
  box-shadow: 0 2px 4px rgba(252, 168, 47, 0.4);

  &:hover,
  &:focus {
    /* stylelint-disable-next-line function-name-case */
    background-color: ${createDarkenColor('#f9a826', 0.15)};
  }

  &:focus:not(.focus-visible) {
    outline: none;
  }
`;

export default Button;
