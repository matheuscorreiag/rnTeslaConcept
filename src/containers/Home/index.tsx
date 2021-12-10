import React, { useState } from "react";
import ACLabel from "../../components/ACLabel";
import LiveButtons from "../../components/LiveButtons";
import OpenCarTitle from "../../components/OpenCarTitle";
import Sidecar from "../../components/Sidecar";
import Speed from "../../components/Speed";
import StaticButtons from "../../components/StaticButtons";
import Title from "../../components/Title";
import { View, Text } from "react-native";

import { useNavigation } from "@react-navigation/native";
import { ButtonContainer, Container, Scroll, TitleContainer } from "./styles";
import GestureRecognizer from "react-native-swipe-gestures";

const Home = () => {
  const navigation = useNavigation();
  return (
    <GestureRecognizer
      onSwipeLeft={() => {
        navigation.navigate("Status");
      }}
    >
      <Container>
        <Scroll>
          <ButtonContainer>
            <StaticButtons type="settings" screenName="Status" />
          </ButtonContainer>
          <TitleContainer>
            <Title />
          </TitleContainer>
          <TitleContainer>
            <Speed />
          </TitleContainer>
          <Sidecar />
          <TitleContainer>
            <ACLabel />
          </TitleContainer>
          <TitleContainer>
            <LiveButtons type="lock" size={110} />
          </TitleContainer>
          <TitleContainer>
            <OpenCarTitle />
          </TitleContainer>
        </Scroll>
      </Container>
    </GestureRecognizer>
  );
};

export default Home;
