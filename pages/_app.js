import React from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import Head from "next/head";
import db from "../db.json";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
    /* New styles */
    display: flex;
    flex-direction: column;
    font-family: 'Lato', sans-serif;
    // Deixa branco no começo
    color: ${({ theme }) => theme.colors.contrastText};
  }
  html, body {
    min-height: 100vh;
  }
  #__next {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
`;

const { theme } = db;

export default function App({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Head>
          <title>Dragon Ball Quiz</title>
          <meta name="title" content="Dragon Ball Quiz" />
          <meta
            name="description"
            content="Quiz sobre Dragon Ball desenvolvido durante a imersão react da aluara."
          />

          <meta property="og:type" content="website" />
          <meta
            property="og:url"
            content="https://dragon-ball-quiz.pablotdv.vercel.app/"
          />
          <meta property="og:title" content="Dragon Ball Quiz" />
          <meta
            property="og:description"
            content="Quiz sobre Dragon Ball desenvolvido durante a imersão react da aluara."
          />
          <meta property="og:image" content={db.bg} />

          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content={db.bg} />
          <meta property="twitter:title" content="Dragon Ball Quiz" />
          <meta
            property="twitter:description"
            content="Quiz sobre Dragon Ball desenvolvido durante a imersão react da aluara."
          />
          <meta property="twitter:image" content={db.bg} />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap"
            rel="stylesheet"
          />
        </Head>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
