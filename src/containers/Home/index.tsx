import React, { useState } from "react";
import ACLabel from "../../components/ACLabel";
import LiveButtons from "../../components/LiveButtons";
import OpenCarTitle from "../../components/OpenCarTitle";
import Sidecar from "../../components/Sidecar";
import Speed from "../../components/Speed";
import StaticButtons from "../../components/StaticButtons";
import Title from "../../components/Title";
import { View, Text } from "react-native";

import { ButtonContainer, Container, Scroll, TitleContainer } from "./styles";

const Home = () => {
  const [active, setActive] = useState(false);

  return (
    <Container>
      <Scroll>
        <ButtonContainer>
          <StaticButtons type="settings" />
        </ButtonContainer>
        <TitleContainer>
          <Title />
        </TitleContainer>
        <TitleContainer>
          <Speed />
        </TitleContainer>
        <Sidecar />
        <TitleContainer>
          <ACLabel active={active} />
        </TitleContainer>
        <TitleContainer>
          <LiveButtons active={active} type="lock" size={110} />
        </TitleContainer>
        <TitleContainer>
          <OpenCarTitle />
        </TitleContainer>
      </Scroll>
    </Container>
  );
};

export default Home;
