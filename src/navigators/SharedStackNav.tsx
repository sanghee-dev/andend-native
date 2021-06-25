import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { colors } from "../styles/colors";
import { Image } from "react-native";
import Feed from "../screens/main/Feed";
import Search from "../screens/main/Search";
import Photo from "../screens/main/Photo";
import Notifications from "../screens/main/Notifications";
import Me from "../screens/main/Me";
import Profile from "../screens/sub/Profile";
import Likes from "../screens/sub/Likes";
import Comments from "../screens/sub/Comments";

const Stack = createStackNavigator();

export default function SharedStackNav({ screenName }: any) {
  return (
    <Stack.Navigator
      headerMode="screen"
      screenOptions={{
        headerTintColor: colors.black,
        headerStyle: {
          shadowColor: colors.gray,
          backgroundColor: colors.white,
          height: 70,
        },
        headerBackTitleVisible: false,
      }}
    >
      {screenName === "Feed" ? (
        <Stack.Screen
          name={"Feed"}
          component={Feed}
          options={{
            headerTitle: () => (
              <Image
                style={{
                  maxHeight: 20,
                }}
                resizeMode="contain"
                source={require("../../assets/logo.png")}
              />
            ),
          }}
        />
      ) : null}
      {screenName === "Search" ? (
        <Stack.Screen
          name={"Search"}
          component={Search}
          options={{ headerStyle: { height: 100 } }}
        />
      ) : null}
      {screenName === "Notifications" ? (
        <Stack.Screen name={"Notifications"} component={Notifications} />
      ) : null}
      {screenName === "Me" ? <Stack.Screen name={"Me"} component={Me} /> : null}
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Photo" component={Photo} />
      <Stack.Screen name="Likes" component={Likes} />
      <Stack.Screen name="Comments" component={Comments} />
    </Stack.Navigator>
  );
}
