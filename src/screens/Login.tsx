import React from "react";
import { Container, BlueButton, BlueButtonText } from "../styles";

export default function Login({ navigation }: any) {
  const goToCreateAccount = () => navigation.navigate("CreateAccount");

  return (
    <Container>
      <BlueButton onPress={goToCreateAccount}>
        <BlueButtonText>Create Account</BlueButtonText>
      </BlueButton>
    </Container>
  );
}
