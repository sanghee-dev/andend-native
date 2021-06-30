import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import TabsNav from "./TabsNav";
import UploadNav from "./UploadNav";
import UploadForm from "../screens/sub/UploadForm";
import { Ionicons } from "@expo/vector-icons";

const Stack = createStackNavigator();

export default function LoggedInNav() {
  return (
    <Stack.Navigator mode="modal">
      <Stack.Screen
        name="Tabs"
        component={TabsNav}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Upload"
        component={UploadNav}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="UploadForm"
        component={UploadForm}
        options={{
          title: "Upload",
          headerBackTitleVisible: false,
          headerBackImage: ({ tintColor }) => (
            <Ionicons color={tintColor} name="close" size={22} />
          ),
          headerTintColor: "black",
          headerStyle: { backgroundColor: "white" },
        }}
      />
    </Stack.Navigator>
  );
}
