import styled from "styled-components/native";
import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

export const Scroll = styled.ScrollView`
  background-color: #353a40;

  flex-grow: 1;
`;
export const Container = styled.View`
  width: ${width};
  height: ${height};
`;
export const ButtonContainer = styled.View`
  display: flex;
  align-items: flex-end;
  padding: 25px;
`;
export const TitleContainer = styled.View`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
`;
