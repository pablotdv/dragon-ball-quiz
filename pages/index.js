import React, { useState } from "react";
import styled from "styled-components";
import db from "../db.json";
import Footer from "../src/components/Footer";
import GitHubCorner from "../src/components/GitHubCorner";
import QuizBackground from "../src/components/QuizBackground";
import Widget from "../src/components/Widget";

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

const InputName = styled.input``;

export default function Home() {
  const [name, setName] = useState("");
  return (
    <>
      <QuizBackground backgroundImage={db.bg}>
        <QuizContainer>
          <Widget>
            <Widget.Header>
              <h1>Dragon Ball</h1>
            </Widget.Header>
            <Widget.Content>
              <p>
                Teste os seus conhecimentos sobre o universo Marvel e divirta-se
                criando o seu AluraQuiz!
              </p>
              <InputName
                placeholder="Diz ai seu nome"
                onChange={(event) => {
                  setName(event.currentTarget.value);
                }}
              />
              <button type="submit" disabled={name.length === 0}>
                Jogar {name}
              </button>
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
