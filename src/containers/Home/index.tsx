import React from "react";
import ACLabel from "../../components/ACLabel";
import Buttons from "../../components/Buttons";

import ConfigButton from "../../components/Buttons";
import Sidecar from "../../components/Sidecar";
import Speed from "../../components/Speed";
import Title from "../../components/Title";
import { ButtonContainer, Container, TitleContainer } from "./styles";

const Home = () => {
  return (
    <Container>
      <ButtonContainer>
        <Buttons active={false} type="settings" size={54} />
      </ButtonContainer>
      <TitleContainer>
        <Title />
      </TitleContainer>
      <TitleContainer>
        <Speed />
      </TitleContainer>
      <TitleContainer>
        <Sidecar />
      </TitleContainer>
      <TitleContainer style={{ backgroundColor: "red" }}>
        <ACLabel active={true} />
      </TitleContainer>
      <TitleContainer style={{ backgroundColor: "red" }}>
        <Buttons active={true} type="lock" size={128} />
      </TitleContainer>
    </Container>
  );
};

export default Home;
