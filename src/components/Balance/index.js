import React from "react";
import {
  Container,
  ItemTitle,
  Content,
  CurrencySymbol,
  Positivo,
  Negativo,
  Item,
} from "./styles";
export default function Balance({ saldo, gastos }) {
  return (
    <Container>
      <Item>
        <ItemTitle>Saldo</ItemTitle>
        <Content>
          <CurrencySymbol>R$</CurrencySymbol>
          <Positivo>{saldo}</Positivo>
        </Content>
      </Item>
      <Item>
        <ItemTitle>Gastos</ItemTitle>
        <Content>
          <CurrencySymbol>R$</CurrencySymbol>
          <Negativo>{gastos}</Negativo>
        </Content>
      </Item>
    </Container>
  );
}
