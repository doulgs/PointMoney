import styled from "styled-components/native";

export const Container = styled.View`
  background-color: ${(props) => props.theme.colorHeader};
  padding-top: 45px;
  flex-direction: row;
  padding-left: 16px;
  padding-right: 16px;
  padding-bottom: 44px;
`;
export const Content = styled.View`
  flex: 1;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;
export const Username = styled.Text`
  font-size: 18px;
  color: #fff;
  font-weight: bold;
  font-style: italic;
`;
export const ButtonUser = styled.TouchableOpacity`
  width: 44px;
  height: 44px;
  background-color: rgba(255, 255, 255, 0.5);
  justify-content: center;
  align-items: center;
  border-radius: 44px;
`;
