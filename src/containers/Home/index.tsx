import React from "react";
import Buttons from "../../components/Buttons";

import ConfigButton from "../../components/Buttons";
import Speed from "../../components/Speed";
import Title from "../../components/Title";
import { ButtonContainer, Container, TitleContainer } from "./styles";

const Home = () => {
  return (
    <Container>
      <ButtonContainer>
        <Buttons active={true} type="unlock" />
      </ButtonContainer>
      <TitleContainer>
        <Title />
      </TitleContainer>
      <TitleContainer>
        <Speed />
      </TitleContainer>
    </Container>
  );
};

export default Home;
