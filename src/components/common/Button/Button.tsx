import { FC, ComponentPropsWithRef } from 'react';
import { css } from '@emotion/react';
import { createDarkenColor } from '@/util/color';

type Variant = 'contained' | 'outlined';

type Props = ComponentPropsWithRef<'button'> & {
  variant?: Variant;
};

const Button: FC<Props> = ({ variant = 'contained', children, ...props }) => {
  return (
    <button css={[button, buttonVariant(variant)]} {...props}>
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
  cursor: pointer;
  border: none;
  border-radius: 12px;

  &:focus:not(.focus-visible) {
    outline: none;
  }
`;

const buttonVariant = (variant: Variant) => {
  if (variant === 'contained') {
    return css`
      color: #fff;
      background-color: #f9a826;
      border: none;
      box-shadow: 0 2px 4px rgb(252 168 47 / 40%);

      &:hover,
      &:focus {
        /* stylelint-disable-next-line function-name-case */
        background-color: ${createDarkenColor('#f9a826', 0.15)};
      }
    `;
  }
  if (variant === 'outlined') {
    return css`
      color: #1d355d;
      background-color: #fff;
      border: 2px solid #1d355d;

      &:hover,
      &:focus {
        color: #fff;
        background-color: #f9a826;
        border: 2px solid #f9a826;
      }
    `;
  }
};

export default Button;
