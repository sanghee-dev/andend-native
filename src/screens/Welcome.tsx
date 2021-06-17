import React from "react";
import AuthLayout from "../styles/auth/AuthLayout";
import {
  ButtonContainer,
  BlueButton,
  BlueButtonText,
  TextButton,
  TextButtonText,
} from "../styles/buttons";

export default function Welcome({ navigation }: any) {
  const goToCreateAccount = () => navigation.navigate("CreateAccount");
  const goToLogin = () => navigation.navigate("Login");

  return (
    <AuthLayout>
      <ButtonContainer>
        <BlueButton
          disabled={false}
          onPress={goToCreateAccount}
          style={{ marginBottom: 8 }}
        >
          <BlueButtonText>Create Account</BlueButtonText>
        </BlueButton>
        <TextButton onPress={goToLogin}>
          <TextButtonText>Login</TextButtonText>
        </TextButton>
      </ButtonContainer>
    </AuthLayout>
  );
}
