import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import Feed from "../screens/Feed";
import Search from "../screens/Search";
import Notifications from "../screens/Notifications";
import Profile from "../screens/Profile";
import { colors } from "../styles/styles";

const Tabs = createBottomTabNavigator();

export default function LoggedInNav() {
  return (
    <NavigationContainer>
      <Tabs.Navigator
        tabBarOptions={{
          activeTintColor: colors.green,
          showLabel: false,
          style: {
            borderTopColor: colors.gray,
          },
        }}
      >
        <Tabs.Screen
          name="Feed"
          component={Feed}
          options={{
            tabBarIcon: ({ focused, color, size }) => (
              <Ionicons name="home" color={color} size={size} />
            ),
          }}
        />
        <Tabs.Screen
          name="Search"
          component={Search}
          options={{
            tabBarIcon: ({ focused, color, size }) => (
              <Ionicons name="search" color={color} size={size} />
            ),
          }}
        />
        <Tabs.Screen
          name="Notifications"
          component={Notifications}
          options={{
            tabBarIcon: ({ focused, color, size }) => (
              <Ionicons name="heart" color={color} size={size} />
            ),
          }}
        />
        <Tabs.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarIcon: ({ focused, color, size }) => (
              <Ionicons name="person" color={color} size={size} />
            ),
          }}
        />
      </Tabs.Navigator>
    </NavigationContainer>
  );
}