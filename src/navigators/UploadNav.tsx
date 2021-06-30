import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import SelectPhoto from "../screens/main/SelectPhoto";
import TakePhoto from "../screens/main/TakePhoto";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../styles/colors";

const Tab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();

export default function UploadNav() {
  return (
    <Tab.Navigator
      tabBarPosition="bottom"
      tabBarOptions={{
        style: {
          backgroundColor: colors.white,
        },
        activeTintColor: colors.black,
        indicatorStyle: {
          backgroundColor: colors.main,
          top: 0,
        },
      }}
    >
      <Tab.Screen name="Select">
        {() => (
          <Stack.Navigator
            screenOptions={{
              headerTintColor: colors.black,
              headerBackTitleVisible: false,
              headerBackImage: ({ tintColor }) => (
                <Ionicons
                  name="close"
                  size={28}
                  color={tintColor}
                  style={{ marginLeft: 10 }}
                />
              ),
              headerStyle: {
                backgroundColor: colors.white,
              },
            }}
          >
            <Stack.Screen
              name="Select"
              component={SelectPhoto}
              options={{
                title: "Choose photo",
              }}
            />
          </Stack.Navigator>
        )}
      </Tab.Screen>
      <Tab.Screen name="Take" component={TakePhoto} />
    </Tab.Navigator>
  );
}
