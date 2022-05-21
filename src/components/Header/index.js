import React from "react";
import { StatusBar } from "react-native";

import { Container, Content, Username, ButtonUser } from "./styles";

const statusBarHeight = StatusBar.currentHeight
  ? StatusBar.currentHeight + 22
  : 64;

export default function Header({ name }) {
  return (
    <Container>
      <Content>
        <Username>{name}</Username>
        <ButtonUser activeOpacity={0.9}>
          {/* Local a ser adicionado o Icone de usuario */}
        </ButtonUser>
      </Content>
    </Container>
  );
}
