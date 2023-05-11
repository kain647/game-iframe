import React, { useState } from "react";
import Clock from "./clock";
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import {
  AiOutlineFullscreen,
  AiOutlineLike,
  AiOutlineDislike
} from "react-icons/ai";
import {
  Container,
  Header,
  Title,
  Content,
  Icon,
  LikeBox,
  IconsBox,
  ButtonLike,
  ButtonDislike
} from "./styled";

const ActualGame = props => {
  const { width, height, url } = props;
  return (
    <iframe style={{ border: "0" }} width={width} height={height} src={url} />
  );
};

const Game = () => {
  const [showGame, setShowGame] = useState(false);
  const [fullScreen, setFullScreen] = useState(false);
  const [like, dislike] = useState(0);
  const handle = useFullScreenHandle();
  const width = fullScreen ? "100%" : "1280px";
  const height = fullScreen ? "100%" : "720px";
  return (
    <Container>
      <Header>
        <Clock />
        <Title>Tap My Water</Title>
        <IconsBox>
          <LikeBox>
            <ButtonLike>
              <AiOutlineLike />
              <p onClick={() => {}}>5</p>
            </ButtonLike>
            <ButtonDislike>
              <AiOutlineDislike />
              <p onClick={() => {}}>1</p>
            </ButtonDislike>
          </LikeBox>
          <Icon showGame={showGame}>
            <AiOutlineFullscreen onClick={handle.enter} />
          </Icon>
        </IconsBox>
      </Header>
      <Content>
        {!showGame ? (
          <>
            <img src={`upload/background.jpg`} />
            <img
              src={`upload/button.png`}
              className="button"
              onClick={() => setShowGame(true)}
            />
          </>
        ) : (
          <FullScreen handle={handle} onChange={state => setFullScreen(state)}>
            <ActualGame
              width={width}
              height={height}
              url={"https://play.famobi.com/tap-my-water/A-UENLJ"}
            />
          </FullScreen>
        )}
      </Content>
    </Container>
  );
};

export default Game;
