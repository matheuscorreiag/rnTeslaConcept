import React from "react";
import Home from "./src/containers/Home";
import { StatusBar, View } from "react-native";
import AppLoading from "expo-app-loading";
import {
  useFonts,
  Roboto_100Thin,
  Roboto_300Light,
} from "@expo-google-fonts/roboto";

export default function App() {
  let [fontsLoaded] = useFonts({
    Roboto_100Thin,
    Roboto_300Light,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View>
        <StatusBar backgroundColor={"#353a40"} />
        <Home />
      </View>
    );
  }
}
