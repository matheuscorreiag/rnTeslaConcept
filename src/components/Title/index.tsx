import React from "react";

import { Text } from "react-native";

import { BigTitle, Container, MiniTitle } from "./styles";

const Title = () => {
  return (
    <Container>
      <MiniTitle>Tesla</MiniTitle>
      <BigTitle>Cybertruck</BigTitle>
    </Container>
  );
};

export default Title;
