import React from "react";
import GestureRecognizer from "react-native-swipe-gestures";
import { useNavigation } from "@react-navigation/native";

import { Text } from "react-native";

import { Container } from "./styles";

const Status = () => {
  const navigation = useNavigation();
  return (
    <GestureRecognizer
      onSwipeRight={() => {
        console.log("Swiped");
        navigation.navigate("Home");
      }}
    >
      <Container>
        <Text>Status</Text>
      </Container>
    </GestureRecognizer>
  );
};

export default Status;
