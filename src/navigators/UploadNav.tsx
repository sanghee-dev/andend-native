import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import SelectPhoto from "../screens/main/SelectPhoto";
import TakePhoto from "../screens/main/TakePhoto";

const Tab = createMaterialTopTabNavigator();

export default function UploadNav() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Select" component={SelectPhoto} />
      <Tab.Screen name="Take" component={TakePhoto} />
    </Tab.Navigator>
  );
}
