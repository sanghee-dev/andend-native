import React from "react";
import { View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SharedStackNav from "./SharedStackNav";
import useMe from "../hooks/useMe";
import TabIcon from "../components/nav/TabIcon";
import Avatar from "../components/images/Avatar";
import { colors } from "../styles/colors";

const Tabs = createBottomTabNavigator();

export default function TabsNav() {
  const { data } = useMe();

  return (
    <Tabs.Navigator
      tabBarOptions={{
        activeTintColor: colors.black,
        showLabel: false,
        style: {
          borderTopColor: colors.gray,
          backgroundColor: colors.white,
          height: 50,
        },
      }}
    >
      <Tabs.Screen
        name="Feed"
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <TabIcon iconName="home" color={color} focused={focused} />
          ),
        }}
      >
        {() => <SharedStackNav screenName="Feed" />}
      </Tabs.Screen>
      <Tabs.Screen
        name="Search"
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <TabIcon iconName="search" color={color} focused={focused} />
          ),
        }}
      >
        {() => <SharedStackNav screenName="Search" />}
      </Tabs.Screen>
      <Tabs.Screen
        name="Camera"
        component={View}
        listeners={({ navigation, route }) => {
          return {
            tabPress: (e) => {
              e.preventDefault();
              navigation.navigate("Upload");
            },
          };
        }}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <TabIcon iconName="camera" color={color} focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="Notifications"
        options={{
          tabBarBadge: 1,
          tabBarIcon: ({ focused, color, size }) => (
            <TabIcon iconName="heart" color={color} focused={focused} />
          ),
        }}
      >
        {() => <SharedStackNav screenName="Notifications" />}
      </Tabs.Screen>
      <Tabs.Screen
        name="Me"
        options={{
          tabBarIcon: ({ focused, color, size }) =>
            data?.me?.avatar ? (
              <Avatar
                uri={data?.me?.avatar}
                size={size}
                style={{ borderColor: "white" }}
              />
            ) : (
              <TabIcon iconName="person" color={color} focused={focused} />
            ),
        }}
      >
        {() => <SharedStackNav screenName="Me" />}
      </Tabs.Screen>
    </Tabs.Navigator>
  );
}
