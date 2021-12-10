import React from "react";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/Feather";
import { Text, View } from "react-native";
import Home from "./containers/Home";
import Status from "./containers/Status";
import GestureRecognizer from "react-native-swipe-gestures";

const Routes = () => {
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: { backgroundColor: "#353a40", height: 65 },
          headerShown: false,
        }}
        initialRouteName="Home"
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
            tabBarIcon: () => <Icon name="home" size={24} color="#7159c1" />,
          }}
        />
        <Tab.Screen
          name="Status"
          component={Status}
          options={{
            tabBarIcon: () => (
              <Icon name="activity" size={24} color="#7159c1" />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
