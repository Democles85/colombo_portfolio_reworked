import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '../components/layouts/main';

// Providers
import { ChakraProvider } from '@chakra-ui/react';
import { ParallaxProvider } from 'react-scroll-parallax';

import theme from '../lib/theme';
import { AnimatePresence } from 'framer-motion';

import useVH from 'react-viewport-height';

function MyApp({ Component, pageProps, router }: AppProps) {
  useVH();

  return (
    <ChakraProvider theme={theme}>
      <ParallaxProvider>
        <Layout router={router}>
          <AnimatePresence mode={'wait'} initial={true}>
            <Component {...pageProps} key={router.route} />
          </AnimatePresence>
        </Layout>
      </ParallaxProvider>
    </ChakraProvider>
  );
}

export default MyApp;
