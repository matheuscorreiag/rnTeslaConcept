import styled from "styled-components/native";

interface Props {
  active: boolean;
  size: number;
}
export const Button = styled.View<Props>`
  color: red;
  height: ${(props) => props.size};
  width: ${(props) => props.size};
  border-radius: ${(props) => props.size / 2};
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${(props) => (props.active ? "#016BB8" : "#2c3036")};
`;
