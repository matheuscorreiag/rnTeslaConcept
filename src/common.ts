import styled from "styled-components/native";

import { Dimensions } from "react-native";
export const { width, height } = Dimensions.get("window");

export const BorderContainer = styled.View`
  width: ${width};
  height: ${height};
  background-color: #353a40;
  align-items: center;
  justify-content: center;
`;
