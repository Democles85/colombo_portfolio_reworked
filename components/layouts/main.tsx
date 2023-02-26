import Head from 'next/head';
import { Box } from '@chakra-ui/react';
import Navbar from '../Navbar';
import Footer from '../Footer';

type MainProps = {
  children: React.ReactNode;
  router: any;
};

const Main = ({ children, router }: MainProps) => {
  return (
    <Box as={'main'}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="A website for the services of Colombo, a full time therapist based in the city of Vlora."
        />
        <meta name="keywords" content="Colombo, Therapist, Vlora, Therapy" />
        <meta name="author" content="Sixhei Tartari" />
        <meta name="author" content="sixhei tartari" />
        {/* Favicon */}
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />

        <meta name="twitter:site" content="@LeJhin1" />
        <meta name="twitter:creator" content="@LeJhin1" />
        <meta name="twitter:title" content="Resonate with Yourself" />
        <meta
          name="twitter:description"
          content="A website for the services of Colombo, a full time therapist based in the city of Vlora."
        />

        <title>Resonate With Yourself</title>
      </Head>
      <Navbar path={router.asPath} />
      <Box maxWidth="full" minH={'100vh'}>
        {children}
      </Box>
      <Footer />
    </Box>
  );
};

export default Main;
