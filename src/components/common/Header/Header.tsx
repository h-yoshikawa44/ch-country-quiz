import { FC, ComponentPropsWithRef } from 'react';
import { css } from '@emotion/react';
import { fonts, colors } from '@/styles/constants';

type Props = ComponentPropsWithRef<'header'>;

const Header: FC<Props> = ({ ...props }) => {
  return (
    <header {...props}>
      <h1 css={headerText}>Country quiz</h1>
    </header>
  );
};

const headerText = css`
  font-family: ${fonts.poppins};
  font-size: 36px;
  font-weight: bold;
  line-height: 54px;
  color: ${colors.gray};
  text-transform: uppercase;
`;

export default Header;
