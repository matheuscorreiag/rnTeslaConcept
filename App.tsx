import React from "react";
import Home from "./src/containers/Home";
import { StatusBar, View } from "react-native";

export default function App() {
  return (
    <View>
      <StatusBar hidden />
      <Home />
    </View>
  );
}
