import styled from "styled-components/native";

export const Container = styled.View`
  background-color: ${(props) => props.theme.balance};
  flex-direction: row;
  justify-content: space-between;
  padding-left: 18px;
  padding-right: 18px;
  margin-top: -24px;
  margin-left: 14px;
  margin-right: 14px;
  border-radius: 4px;
  padding-top: 22px;
  padding-bottom: 22px;
  z-index: 99;
`;
export const ItemTitle = styled.Text`
  font-size: 20px;
  color: #dadada;
`;
export const Content = styled.View`
  flex-direction: row;
  align-items: center;
`;
export const CurrencySymbol = styled.Text`
  color: #dadada;
  margin-right: 6px;
`;
export const Positivo = styled.Text`
  font-size: 22px;
  color: #2ecc71;
`;
export const Negativo = styled.Text`
  font-size: 22px;
  color: #e73c3c;
`;
export const Item = styled.View``;
