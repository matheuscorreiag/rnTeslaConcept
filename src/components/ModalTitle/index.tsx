import React from "react";

import { Text } from "react-native";

import { Container, Title, SubTitle } from "./styles";

const ModalTitle = () => {
  return (
    <Container>
      <Title>A/C is ON</Title>
      <SubTitle>Tap to turn off or swipe up {"\n"}for a fast setup</SubTitle>
    </Container>
  );
};

export default ModalTitle;
