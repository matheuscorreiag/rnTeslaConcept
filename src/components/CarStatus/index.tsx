import React from "react";
import Icon from "react-native-vector-icons/Feather";

import {
  Container,
  Title,
  StatsContainer,
  Label,
  Value,
  IconLabelContainer,
  IconLabelValueContainer,
} from "./styles";

const CarStatus = () => {
  return (
    <Container>
      <Title>Status</Title>
      <StatsContainer>
        <IconLabelValueContainer>
          <IconLabelContainer>
            <Icon name="battery" size={14} color="#fff" />
            <Label> Battery</Label>
          </IconLabelContainer>
          <Value> 54%</Value>
        </IconLabelValueContainer>
        <IconLabelValueContainer>
          <IconLabelContainer>
            <Icon name="navigation" size={14} color="#fff" />
            <Label> Range</Label>
          </IconLabelContainer>
          <Value> 297 km</Value>
        </IconLabelValueContainer>
        <IconLabelValueContainer>
          <IconLabelContainer>
            <Icon name="thermometer" size={14} color="#fff" />
            <Label> Temperature</Label>
          </IconLabelContainer>
          <Value> 27 °C</Value>
        </IconLabelValueContainer>
      </StatsContainer>
    </Container>
  );
};

export default CarStatus;
