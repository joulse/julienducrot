import { AppProps } from 'next/app';
import Head from 'next/head';
import '../styles/globals.css';

export const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon.png" />
        <script async src="https://cdn.splitbee.io/sb.js"></script>
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default App;
