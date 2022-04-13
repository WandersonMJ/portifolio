import Head from "next/head";

import { ThemeProvider } from "styled-components";

import GlobalTheme from "styles/global";
import theme from "styles/theme";

function MyApp({ Component, pageProps }: {Component: any, pageProps: any}) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <meta name="theme-color" content={theme.colors.black} />
      </Head>



      <GlobalTheme />

      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
