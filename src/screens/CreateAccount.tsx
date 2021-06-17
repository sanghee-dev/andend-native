import React from "react";
import { Container, BlueButton, BlueButtonText } from "../styles";

export default function CreateAccount({ navigation }: any) {
  const goToLogin = () => navigation.navigate("Login");

  return (
    <Container>
      <BlueButton onPress={goToLogin}>
        <BlueButtonText>Login</BlueButtonText>
      </BlueButton>
    </Container>
  );
}
