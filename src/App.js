import React from "react";
import styled from "styled-components";
import Game from "./Components/Screens/Game";
import Home from "./Components/Screens/Home";
const App = () => {
  const [startGame, setStartGame] = React.useState([]);
  const shoWGame = (startGame.length && true) || false;
  return (
    <Container>
      {!shoWGame && <Home startGame={(snake) => setStartGame(snake)} />}
      {shoWGame && <Game SNAKE={startGame} />}
    </Container>
  );
};

export default App;

const Container = styled.div`
  display: block;
  margin: 0 auto;
  width: 800px;
`;
