// pages/_app.js
import Head from "next/head";
import '../styles/fonts.css';
import styles from "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>ILYA SCHULTE</title>
        <meta name="description" content="PORTFOLIO WEBSITE of ILYA SCHULTE — Projects in CULTURAL and COMMERCIAL context through DESIGN, (moving-) IMAGE, and OBJECTS. Recent efforts with/for LACK OF GUIDANCE, Manifold, The GOODList, DEPT®, FC Internazionale Milano, WdKA & more." />
        <link rel="canonical" href="https://ilyaschulte.com"></link>
        <meta property="og:locale" content="nl_NL" />
        <meta property="og:type" content="website" />
        <meta property="og:description" content="PORTFOLIO WEBSITE of ILYA SCHULTE — Projects in CULTURAL and COMMERCIAL context through DESIGN, (moving-) IMAGE, and OBJECTS. Recent efforts with/for LACK OF GUIDANCE, Manifold, The GOODList, DEPT®, FC Internazionale Milano, WdKA & more."></meta>
        <meta property="og:site_name" content="ILYA SCHULTE" />
        <meta property="og:url" content="https://ilyaschulte.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
