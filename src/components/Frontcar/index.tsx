import React from "react";

import { Text } from "react-native";

import { Container, Car } from "./styles";
import myImage from "../../../assets/frontcar.png";

const Frontcar = () => {
  return (
    <Container>
      <Car source={myImage} resizeMode="contain" />
    </Container>
  );
};

export default Frontcar;
