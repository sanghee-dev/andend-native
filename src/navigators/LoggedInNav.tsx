import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Feed from "../screens/Feed";
import Search from "../screens/Search";
import Notifications from "../screens/Notifications";
import Profile from "../screens/Profile";
import { colors } from "../styles/styles";
import TabIcon from "../components/nav/TabIcon";

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
              <TabIcon iconName="home" color={color} focused={focused} />
            ),
          }}
        />
        <Tabs.Screen
          name="Search"
          component={Search}
          options={{
            tabBarIcon: ({ focused, color, size }) => (
              <TabIcon iconName="search" color={color} focused={focused} />
            ),
          }}
        />
        <Tabs.Screen
          name="Notifications"
          component={Notifications}
          options={{
            tabBarIcon: ({ focused, color, size }) => (
              <TabIcon iconName="heart" color={color} focused={focused} />
            ),
          }}
        />
        <Tabs.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarIcon: ({ focused, color, size }) => (
              <TabIcon iconName="person" color={color} focused={focused} />
            ),
          }}
        />
      </Tabs.Navigator>
    </NavigationContainer>
  );
}
