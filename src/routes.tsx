import React from "react";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./containers/Home";
import Status from "./containers/Status";
import GestureRecognizer from "react-native-swipe-gestures";

const Routes = () => {
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Home">
        <Tab.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false, tabBarStyle: { display: "none" } }}
        />
        <Tab.Screen name="Status" component={Status} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
