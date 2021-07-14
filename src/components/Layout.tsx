import { FC } from 'react';
import Head from 'next/head';
import { css } from '@emotion/react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

type Props = {
  pageName?: string;
};

const Layout: FC<Props> = ({ pageName, children }) => {
  const title = pageName ? `${pageName} - Country quiz` : 'Country quiz';
  const content = pageName
    ? `devChallenges.io - Country quiz - ${pageName} | by h-yoshikawa44`
    : 'devChallenges.io - Country quiz | by h-yoshikawa44';
  return (
    <div css={globalLayout}>
      <Head>
        <title>{title}</title>
        <meta name="description" content={content} />
      </Head>
      <Header css={customHeader} />
      <div css={[container, contents]}>{children}</div>
      <Footer css={customFooter} />
    </div>
  );
};

const globalLayout = css`
  display: grid;
  grid-template: 'header' auto 'contents' 1fr 'footer' auto/100%;
  min-height: 100vh;
  background-image: url('/background.png');
  background-position: center center;
  background-size: cover;
`;

const container = css`
  min-width: 600px;
  padding: 0 4%;
  margin: 0 auto;

  @media (max-width: 600px) {
    padding: 0 8%;
  }
`;

const customHeader = css`
  grid-area: header;
`;

const contents = css`
  grid-area: contents;
`;

const customFooter = css`
  grid-area: footer;
`;

export default Layout;
