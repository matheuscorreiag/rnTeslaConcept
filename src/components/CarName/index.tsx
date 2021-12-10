import React from "react";

import { Text } from "react-native";

import { Container, MarkName, ModelName } from "./styles";

const CarName = () => {
  return (
    <Container>
      <MarkName>Tesla</MarkName>
      <ModelName>Cybertruck</ModelName>
    </Container>
  );
};

export default CarName;
