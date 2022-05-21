import React from "react";
import { useColorScheme, StatusBar } from "react-native";
import { ThemeProvider } from "styled-components";
import themes from "./src/theme";
import Home from "./src/pages/Home";

export default function App() {
  //dark, light, null, undefined
  const deviceTheme = useColorScheme();
  const theme = themes[deviceTheme];
  return (
    <ThemeProvider theme={theme}>
      <StatusBar backgroundColor={"#463062"} />
      {/* Home */}
      <Home />
    </ThemeProvider>
  );
}
