import React from "react";
import { StatusBar } from "expo-status-bar";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import styled from "styled-components/native";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
const TouchableOpacity = styled.TouchableOpacity``;
const Text = styled.Text``;
export default function Welcome({ navigation }: any) {
  return (
    <Container>
      <StatusBar style="auto" />
      <MaterialCommunityIcons name="coffee-outline" size={24} color="black" />
      <TouchableOpacity onPress={() => navigation.navigate("CreateAccount")}>
        <Text>Create Account</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Login")}>
        <Text>Login</Text>
      </TouchableOpacity>
    </Container>
  );
}
