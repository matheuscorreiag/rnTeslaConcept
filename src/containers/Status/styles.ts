import styled from "styled-components/native";

import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

export const BorderContainer = styled.View`
  width: ${width};
  height: ${height};
  background-color: #353a40;
  align-items: center;
  justify-content: center;
  padding: 20px 0px 120px 0;
`;

export const Scroll = styled.ScrollView`
  width: ${width * 0.85};
  height: ${height * 0.5};
  color: red;
`;

export const ContainerFlexRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding-bottom: 50px;
`;
