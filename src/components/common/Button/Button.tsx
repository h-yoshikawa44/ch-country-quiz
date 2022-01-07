import { FC, ComponentPropsWithRef } from 'react';
import { css } from '@emotion/react';
import { createRGBAColor, createDarkenColor } from '@/util/color';
import { fonts, colors } from '@/styles/constants';

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
  font-family: ${fonts.poppins};
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
      color: ${colors.white};
      background-color: ${colors.primary};
      border: none;
      box-shadow: 0 2px 4px rgb(252 168 47 / 40%);

      &:hover,
      &:focus {
        /* stylelint-disable-next-line function-name-case */
        background-color: ${createDarkenColor(colors.primary, 0.15)};
      }
    `;
  }
  if (variant === 'outlined') {
    return css`
      /* stylelint-disable function-name-case */
      color: ${createRGBAColor(colors.secondary, 0.8)};
      background-color: ${colors.white};
      border: 2px solid ${createRGBAColor(colors.secondary, 0.7)};

      &:hover,
      &:focus {
        color: ${colors.white};
        background-color: ${colors.primary};
        border: 2px solid ${colors.primary};
      }
    `;
    /* stylelint-enable function-name-case */
  }
};

export default Button;
