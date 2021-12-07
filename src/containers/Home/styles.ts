import styled from "styled-components/native";
import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");
export const Container = styled.View`
  background-color: #424750;
  width: ${width};
  height: ${height};
`;
