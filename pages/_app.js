// pages/_app.js
import Head from "next/head";
import '../styles/fonts.css';
import styles from "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>ILYA SCHULTE / DESIGN, (moving-) IMAGE, and OBJECTS</title>
        <meta name="description" content="PORTFOLIO WEBSITE of ILYA SCHULTE" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
