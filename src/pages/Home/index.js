import React from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import { Container } from "./styles";
import Header from "../../components/Header";
import Balance from "../../components/Balance";

export default function Home() {
  return (
    <Container>
      <Header name="Douglas Domiciano" />
      <Balance saldo="9.250,90" gastos="-500,00" />
      <StatusBar style="auto" />
    </Container>
  );
}
