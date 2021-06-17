import React from "react";
import AuthLayout from "../styles/auth/AuthLayout";
import {
  ButtonContainer,
  BlueButton,
  BlueButtonText,
  TextButton,
  TextButtonText,
} from "../styles/buttons";

export default function CreateAccount({ navigation }: any) {
  const goToWelcome = () => navigation.navigate("Welcome");
  const goToLogin = () => navigation.navigate("Login");

  return (
    <AuthLayout>
      <ButtonContainer>
        <BlueButton onPress={goToLogin}>
          <BlueButtonText>Login</BlueButtonText>
        </BlueButton>
        <TextButton onPress={goToWelcome}>
          <TextButtonText>Go back to home</TextButtonText>
        </TextButton>
      </ButtonContainer>
    </AuthLayout>
  );
}
