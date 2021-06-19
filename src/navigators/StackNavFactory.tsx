import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Feed from "../screens/Feed";
import Search from "../screens/Search";
import Photo from "../screens/Photo";
import Notifications from "../screens/Notifications";
import Me from "../screens/Me";
import Profile from "../screens/Profile";
import { colors } from "../styles/styles";

const Stack = createStackNavigator();

export default function StackNavFactory({ screenName }: any) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: colors.black,
        headerStyle: {
          shadowColor: colors.gray,
          backgroundColor: colors.white,
        },
        headerBackTitleVisible: false,
      }}
    >
      {screenName === "Feed" ? (
        <Stack.Screen name={"Feed"} component={Feed} />
      ) : null}
      {screenName === "Search" ? (
        <Stack.Screen name={"Search"} component={Search} />
      ) : null}
      {screenName === "Notifications" ? (
        <Stack.Screen name={"Notifications"} component={Notifications} />
      ) : null}
      {screenName === "Me" ? <Stack.Screen name={"Me"} component={Me} /> : null}
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Photo" component={Photo} />
    </Stack.Navigator>
  );
}
