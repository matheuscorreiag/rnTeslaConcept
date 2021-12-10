import React from "react";
import GestureRecognizer from "react-native-swipe-gestures";
import { useNavigation } from "@react-navigation/native";

import { Text } from "react-native";

import { Container, Scroll } from "./styles";
import Frontcar from "../../components/Frontcar";
import CarStatus from "../../components/CarStatus";
import StaticButtons from "../../components/StaticButtons";

const Status = () => {
  //const navigation = useNavigation();
  return (
    <GestureRecognizer
    // onSwipeRight={() => {
    //   navigation.navigate("Home");
    // }}
    >
      <Scroll>
        <Container>
          <StaticButtons type="stats" />
          <Text> Tesla Cybertruck</Text>
          <StaticButtons type="user" />
          <Frontcar />
          <CarStatus />
        </Container>
      </Scroll>
    </GestureRecognizer>
  );
};

export default Status;
