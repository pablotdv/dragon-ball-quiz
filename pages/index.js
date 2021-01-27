import React, { useState } from "react";
import { useRouter } from "next/router";
import db from "../db.json";
import Button from "../src/components/Button";
import Footer from "../src/components/Footer";
import GitHubCorner from "../src/components/GitHubCorner";
import Input from "../src/components/Input";
import QuizBackground from "../src/components/QuizBackground";
import QuizContainer from "../src/components/QuizContainer";
import Widget from "../src/components/Widget";

export default function Home() {
  const router = useRouter();
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
              <form
                onSubmit={(event) => {
                  event.preventDefault();
                  router.push(`/quiz?name=${name}`);
                }}
              >
                <Input
                  name="nomeDoUsuario"
                  placeholder="Diz ai seu nome"
                  onChange={(event) => setName(event.currentTarget.value)}
                  value={name}
                />
                <Button type="submit" disabled={name.length === 0}>
                  {`Jogar ${name}`}
                </Button>
              </form>
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
