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
import ACModal from "../../components/ACModal";

const Status = () => {
  const navigation = useNavigation();
  const [open, setOpen] = useState(false);

  return (
    <GestureRecognizer
      onSwipeRight={() => {
        navigation.navigate("Home");
      }}
      onSwipeUp={() => setOpen(true)}
    >
      <BorderContainer>
        <Scroll>
          <ContainerFlexRow>
            <StaticButtons type="stats" />
            <CarName />
            <StaticButtons type="user" />
          </ContainerFlexRow>
          <Frontcar />
          <CarStatus />
          <Information />
          <ACModal visible={open} onClose={() => setOpen(false)} />
        </Scroll>
      </BorderContainer>
    </GestureRecognizer>
  );
};

export default Status;
