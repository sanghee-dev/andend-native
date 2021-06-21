import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import styled from "styled-components/native";
import Welcome from "../screens/auth/Welcome";
import Login from "../screens/auth/Login";
import CreateAccount from "../screens/auth/CreateAccount";
import { colors } from "../styles/colors";

const View = styled.View`
  align-items: center;
  margin-top: 40px;
`;
const Logo = styled.Image`
  max-width: 160px;
`;

const Stack = createStackNavigator();

export default function LoggedOutNav() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerBackTitleVisible: false,
        headerTitle: () => (
          <View>
            <Logo
              source={require("../../assets/logo.png")}
              resizeMode="contain"
            />
          </View>
        ),
        headerTransparent: true,
        headerTintColor: `${colors.main}`,
      }}
    >
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="CreateAccount" component={CreateAccount} />
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
}
