import styled from "styled-components/native";

export const Container = styled.View`
  flex-direction: column;
`;
export const Title = styled.Text`
  font-size: 20px;
  color: #fff;
  font-weight: bold;
  padding-bottom: 20px;
`;

export const CardsContainer = styled.View`
  flex-direction: row;
`;

export const Card = styled.View`
  width: 150px;
  height: 150px;
  background-color: #131517;
  margin-right: 20px;
  justify-content: flex-end;
  padding: 20px;
  border-radius: 10px;
`;

export const CardTitle = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #fff;
`;

export const CardSubTitle = styled.Text`
  font-size: 12px;
  color: #7f8489;
`;
