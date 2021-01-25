import styled from "styled-components";
import db from "../db.json";
import Footer from "../src/components/Footer";
import GitHubCorner from "../src/components/GitHubCorner";
import QuizBackground from "../src/components/QuizBackground";
import Widget from "../src/components/Widget";
import Head from "next/head";

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`;

const BackgroundImage = styled.div`
  background-image: url(${db.bg});
  flex: 1;
  background-size: cover;
  background-position: center;
`;

const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export default function Home() {
  return (
    <>
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
      </Head>
      <QuizBackground backgroundImage={db.bg}>
        <QuizContainer>
          <Widget>
            <Widget.Header>
              <h1>Dragon Ball</h1>
            </Widget.Header>
            <Widget.Content>
              <p>lorem ipsum dolor sit amet...</p>
            </Widget.Content>
          </Widget>
          <Widget>
            <Widget.Header>
              <h1>Quizes da Galera</h1>
            </Widget.Header>
            <Widget.Content>
              <p>lorem ipsum dolor sit amet...</p>
            </Widget.Content>
          </Widget>
          <Footer />
        </QuizContainer>
        <GitHubCorner projectUrl="https://github.com/pablotdv/dragon-ball-quiz" />
      </QuizBackground>
    </>
  );
}
