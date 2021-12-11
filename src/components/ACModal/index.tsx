import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";

import { Text, Modal } from "react-native";
import { GestureDetector } from "react-native-gesture-handler";
import GestureRecognizer from "react-native-swipe-gestures";

import { Container, BigModal, ModalContainer } from "./styles";

interface Props {
  visible: boolean;
  onClose: () => void;
}

const ACModal: React.FC<Props> = (props) => {
  console.log(props.visible);
  return (
    <Container>
      <GestureRecognizer onSwipeDown={() => console.log("swipped")}>
        <BigModal visible={props.visible}>
          <ModalContainer>
            <Text>Modal</Text>
          </ModalContainer>
        </BigModal>
      </GestureRecognizer>
    </Container>
  );
};

export default ACModal;
