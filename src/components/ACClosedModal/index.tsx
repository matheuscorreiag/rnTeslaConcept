import React from "react";

import { Text } from "react-native";
import LiveButtons from "../LiveButtons";
import ModalTitle from "../ModalTitle";

import { Container } from "./styles";

const ACClosedModal = () => {
  return (
    <Container>
      <ModalTitle />
      <LiveButtons type="power" size={80} />
    </Container>
  );
};

export default ACClosedModal;
