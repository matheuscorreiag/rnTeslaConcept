import React from "react";
import Home from "./src/containers/Home";
import { StatusBar, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import AppLoading from "expo-app-loading";
import {
  useFonts,
  Roboto_100Thin,
  Roboto_300Light,
} from "@expo-google-fonts/roboto";
import Routes from "./src/routes";
import Status from "./src/containers/Status";
import { SafeAreaView } from "react-native-safe-area-context";
import global from "./src/global";

export default function App() {
  let [fontsLoaded] = useFonts({
    Roboto_100Thin,
    Roboto_300Light,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <SafeAreaView style={global.droidSafeArea}>
        <StatusBar
          barStyle="light-content"
          translucent
          backgroundColor={"#353a40"}
        />
        <Routes />
      </SafeAreaView>
    );
  }
}
