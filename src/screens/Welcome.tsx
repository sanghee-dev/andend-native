import React from "react";
import AuthLayout from "../components/auth/AuthLayout";
import {
  SolidButton,
  SolidButtonText,
  TextButton,
  TextButtonText,
} from "../styles/buttons";

export default function Welcome({ navigation }: any) {
  const goToCreateAccount = () => navigation.navigate("CreateAccount");
  const goToLogin = () => navigation.navigate("Login");

  return (
    <AuthLayout>
      <SolidButton
        disabled={false}
        onPress={goToCreateAccount}
        style={{ marginBottom: 8 }}
      >
        <SolidButtonText>Create Account</SolidButtonText>
      </SolidButton>
      <TextButton onPress={goToLogin}>
        <TextButtonText>Login</TextButtonText>
      </TextButton>
    </AuthLayout>
  );
}
