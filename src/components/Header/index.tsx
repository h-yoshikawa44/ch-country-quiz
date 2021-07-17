import { VFC, ComponentPropsWithRef } from 'react';
import { css } from '@emotion/react';

type Props = ComponentPropsWithRef<'header'>;

const Header: VFC<Props> = ({ ...props }) => {
  return (
    <header {...props}>
      <h1 css={headerText}>Country quiz</h1>
    </header>
  );
};

const headerText = css`
  font-family: Poppins, sans-serif;
  font-size: 36px;
  font-weight: bold;
  line-height: 54px;
  color: #f2f2f2;
  text-transform: uppercase;
`;

export default Header;
