import { AppProps } from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import GlobalTheme from 'styles/global';
import theme from 'styles/theme';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
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
