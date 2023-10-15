import { AppProps } from 'next/app';
import { Global, CacheProvider, EmotionCache } from '@emotion/react';
import { globalStyle } from '@/styles/globals';
import { QuizProvider } from '@/components/context/QuizContext';
import { createEmotionCache } from '@/lib/emotionCache';

const clientSideEmotionCache = createEmotionCache();
interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

const MyApp = ({
  Component,
  pageProps,
  emotionCache = clientSideEmotionCache,
}: MyAppProps) => {
  return (
    <CacheProvider value={emotionCache}>
      <QuizProvider>
        <Global styles={globalStyle} />
        <Component {...pageProps} />
      </QuizProvider>
    </CacheProvider>
  );
};

export default MyApp;
