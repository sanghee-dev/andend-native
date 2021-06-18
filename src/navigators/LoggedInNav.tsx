import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Feed from "../screens/Feed";

const Tabs = createBottomTabNavigator();

export default function LoggedInNav() {
  return (
    <NavigationContainer>
      <Tabs.Navigator>
        <Tabs.Screen name="Feed" component={Feed} />
      </Tabs.Navigator>
    </NavigationContainer>
  );
}
