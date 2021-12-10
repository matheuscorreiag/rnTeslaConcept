import React from "react";
import Icon from "react-native-vector-icons/Feather";

import {
  Container,
  Title,
  StatsContainer,
  Label,
  Value,
  IconLabelContainer,
  IconContainer,
  LabelValueContainer,
} from "./styles";

const CarStatus = () => {
  return (
    <Container>
      <Title>Status</Title>
      <StatsContainer>
        <IconLabelContainer>
          <IconContainer>
            <Icon name="battery" size={18} color="#fff" />
          </IconContainer>
          <LabelValueContainer>
            <Label>Battery</Label>
            <Value>54%</Value>
          </LabelValueContainer>
        </IconLabelContainer>
        <IconLabelContainer>
          <IconContainer>
            <Icon name="navigation" size={18} color="#fff" />
          </IconContainer>
          <LabelValueContainer>
            <Label>Range</Label>
            <Value>297km</Value>
          </LabelValueContainer>
        </IconLabelContainer>
        <IconLabelContainer>
          <IconContainer>
            <Icon name="thermometer" size={18} color="#fff" />
          </IconContainer>
          <LabelValueContainer>
            <Label>Temperature</Label>
            <Value>27 °C</Value>
          </LabelValueContainer>
        </IconLabelContainer>
        {/* <IconLabelValueContainer>
          <IconLabelContainer>
            <Icon name="battery" size={12} color="#fff" />
            <Label> Battery</Label>
          </IconLabelContainer>
          <Value> 54%</Value>
        </IconLabelValueContainer> */}
        {/* <IconLabelValueContainer>
          <IconLabelContainer>
            <Icon name="navigation" size={12} color="#fff" />
          </IconLabelContainer>
          <Label> Range</Label>
          <Value> 297 km</Value>
        </IconLabelValueContainer>
        <IconLabelValueContainer>
          <IconLabelContainer>
            <Icon name="thermometer" size={12} color="#fff" />
            <Label> Temperature</Label>
          </IconLabelContainer>
          <Value> 27 °C</Value>
        </IconLabelValueContainer> */}
      </StatsContainer>
    </Container>
  );
};

export default CarStatus;
