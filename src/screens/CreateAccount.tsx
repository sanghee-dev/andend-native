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

export default function CreateAccount({ navigation }: any) {
  return (
    <Container>
      <StatusBar style="auto" />
      <Text>CreateAccount</Text>
      <TouchableOpacity onPress={() => navigation.navigate("Login")}>
        <Text>Login</Text>
      </TouchableOpacity>
    </Container>
  );
}
