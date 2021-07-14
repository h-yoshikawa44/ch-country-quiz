import { VFC, ComponentPropsWithRef } from 'react';
import { css } from '@emotion/react';

type Props = ComponentPropsWithRef<'header'>;

const Header: VFC<Props> = () => {
  return (
    <header css={headerContainer}>
      <h1 css={headerText}>Country quiz</h1>
    </header>
  );
};

const headerContainer = css`
  max-width: 600px;
  padding: 0 4%;
  margin: 0 auto;

  @media (max-width: 600px) {
    padding: 0 8%;
  }
`;

const headerText = css`
  font-family: Poppins, sans-serif;
  font-size: 36px;
  font-weight: bold;
  line-height: 54px;
  color: #f2f2f2;
  text-transform: uppercase;
`;

export default Header;
