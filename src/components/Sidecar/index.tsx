import React from "react";

import { Image } from "react-native";

import { Container, Car } from "./styles";
import myImage from "../../../assets/sidecar.png";
const Sidecar = () => {
  return (
    <Container>
      <Car source={myImage} resizeMode="contain" />
    </Container>
  );
};

export default Sidecar;
