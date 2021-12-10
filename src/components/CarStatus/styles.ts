import styled from "styled-components/native";

export const Container = styled.View`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #fff;
  padding-bottom: 20px;
`;
export const StatsContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const Label = styled.Text`
  font-size: 15px;
  color: #7f8489;
`;
export const Value = styled.Text`
  font-size: 15px;
  color: #fff;
  font-weight: bold;
`;
export const IconLabelContainer = styled.View`
  flex-direction: row;
  align-items: flex-start;
`;
export const IconContainer = styled.View`
  justify-content: center;
  padding-right: 5px;
`;
export const LabelValueContainer = styled.View`
  flex-direction: column;
`;
