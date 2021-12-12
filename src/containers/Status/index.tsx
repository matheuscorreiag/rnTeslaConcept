import React, { useState } from "react";
import GestureRecognizer from "react-native-swipe-gestures";
import { useNavigation } from "@react-navigation/native";

import { Text } from "react-native";

import { Scroll, ContainerFlexRow, BorderContainer } from "./styles";
import Frontcar from "../../components/Frontcar";
import CarStatus from "../../components/CarStatus";
import StaticButtons from "../../components/StaticButtons";
import CarName from "../../components/CarName";
import Information from "../../components/Information";
import ACClosedModal from "../../components/ACClosedModal";

const Status = () => {
  const navigation = useNavigation();

  return (
    <GestureRecognizer
      onSwipeRight={() => {
        navigation.navigate("Home");
      }}
    >
      <BorderContainer>
        <Scroll showsVerticalScrollIndicator={false}>
          <ContainerFlexRow>
            <StaticButtons type="stats" />
            <CarName />
            <StaticButtons type="user" />
          </ContainerFlexRow>
          <Frontcar />
          <CarStatus />
          <Information />
        </Scroll>
      </BorderContainer>
      <ACClosedModal />
    </GestureRecognizer>
  );
};

export default Status;
