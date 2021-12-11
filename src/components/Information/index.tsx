import React from "react";

import { Text, ScrollView } from "react-native";

import {
  Container,
  Title,
  CardsContainer,
  Card,
  CardTitle,
  CardSubTitle,
} from "./styles";

const Information = () => {
  return (
    <Container>
      <Title>Information</Title>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <CardsContainer>
          <Card>
            <CardTitle>Engine</CardTitle>
            <CardSubTitle>Sleeping mode</CardSubTitle>
          </Card>

          <Card>
            <CardTitle>Climate</CardTitle>
            <CardSubTitle>A/C is ON</CardSubTitle>
          </Card>

          <Card>
            <CardTitle>Tires</CardTitle>
            <CardSubTitle>A/C is ON</CardSubTitle>
          </Card>
        </CardsContainer>
      </ScrollView>
    </Container>
  );
};

export default Information;
