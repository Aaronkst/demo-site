import { useEffect, useState } from "react";
import "../styles/main.css";
import type { AppProps } from "next/app";
import BackToTop from "../components/BackToTop";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  return (
    <>
      <Head>
        <title>addTech | Demo</title>
        <link rel="icon" href="favicon.ico" />
        <link rel="apple-touch-icon" href="favicon.png" />
        <link rel="manifest" href="manifest.json" />
        <meta name="theme-color" content="#000000" />
        <meta name="addTech | Demo" content="addTech | Demo" />
      </Head>
      <Component {...pageProps} />
      <BackToTop showButton={showButton} />
    </>
  );
}

export default MyApp;
