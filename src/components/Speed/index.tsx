import React from "react";

import { Text } from "react-native";

import { Container, SpeedCounter, Kilometers } from "./styles";

const Speed = () => {
  return (
    <Container>
      <SpeedCounter>297</SpeedCounter>
      <Kilometers>km</Kilometers>
    </Container>
  );
};

export default Speed;
