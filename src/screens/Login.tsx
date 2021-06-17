import React from "react";
import { StatusBar } from "expo-status-bar";
import styled from "styled-components/native";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
const TouchableOpacity = styled.TouchableOpacity``;
const Text = styled.Text``;

export default function Login({ navigation }: any) {
  return (
    <Container>
      <StatusBar style="auto" />
      <Text>Login</Text>
      <TouchableOpacity onPress={() => navigation.navigate("CreateAccount")}>
        <Text>Create Account</Text>
      </TouchableOpacity>
    </Container>
  );
}
