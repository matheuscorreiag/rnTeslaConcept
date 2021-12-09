import styled from "styled-components/native";

interface Props {
  active: boolean;
}
export const Button = styled.View<Props>`
  color: red;
  height: 57px;
  width: 57px;
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => (props.active ? "#016BB8" : "#2c3036")};
`;
