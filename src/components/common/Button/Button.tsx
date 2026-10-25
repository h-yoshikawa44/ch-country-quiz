import { FC, ComponentPropsWithRef } from 'react';
import { css } from '@emotion/react';
import { TinyColor } from '@ctrl/tinycolor';
import { colors, colorRatios } from '@/styles/constants';
import { poppins } from '@/styles/fonts';

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
  font-family: ${poppins.style.fontFamily};
  font-size: 18px;
  font-weight: bold;
  line-height: 27px;
  cursor: pointer;
  border: none;
  border-radius: 12px;

  &:focus:not(:focus-visible) {
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
        background-color: ${new TinyColor(colors.primary)
          .darken(colorRatios.buttonDarken)
          .toHexString()};
      }
    `;
  }
  if (variant === 'outlined') {
    return css`
      color: ${new TinyColor(colors.secondary).setAlpha(colorRatios.buttonTextAlpha).toRgbString()};
      background-color: ${colors.white};
      border: 2px solid
        ${new TinyColor(colors.secondary).setAlpha(colorRatios.buttonBorderAlpha).toRgbString()};

      &:hover,
      &:focus {
        color: ${colors.white};
        background-color: ${colors.primary};
        border: 2px solid ${colors.primary};
      }
    `;
  }
};

export default Button;
