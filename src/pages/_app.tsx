//import { Fragment } from 'react';
import { AppProps } from 'next/app';
import { Global } from '@emotion/react';
import 'focus-visible';
import { globalStyle } from '@/styles/globals';
import { QuizProvider } from '@/components/context/QuizContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QuizProvider>
      <Global styles={globalStyle} />
      <Component {...pageProps} />
    </QuizProvider>
  );
}

export default MyApp;
