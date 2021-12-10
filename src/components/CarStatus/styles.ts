import styled from "styled-components/native";

export const Container = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
`;

export const Title = styled.Text`
  font-size: 20px;
  color: #fff;
  padding-bottom: 20px;
`;
export const StatsContainer = styled.View`
  display: flex;
  flex-direction: row;
`;
export const Label = styled.Text`
  font-size: 14px;
  color: #7f8489;
`;
export const Value = styled.Text`
  font-size: 18px;
  color: #fff;
`;
export const IconLabelContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
export const IconLabelValueContainer = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-right: 20px;
`;
