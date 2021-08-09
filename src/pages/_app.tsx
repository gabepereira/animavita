import React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import { setConfiguration } from 'react-grid-system';
import GlobalStyles from 'styles/global';
import { theme } from 'styles/theme';
import Entry from 'components/Entry';

const App = ({ Component, pageProps }: AppProps) => {
  setConfiguration({ maxScreenClass: 'xl' });

  return (
    <>
      <Head>
        <title>AnimaVita</title>
        <link rel="shortcut icon" href="/images/favicon.ico" />
        <link rel="apple-touch-icon" href="/images/favicon.ico" />
        <meta name="description" content="AnimaVita" />
      </Head>

      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <Entry>
          <Component {...pageProps} />
        </Entry>
      </ThemeProvider>
    </>
  );
};

export default App;
