import React from "react";
import AuthLayout from "../styles/auth/AuthLayout";
import {
  ButtonContainer,
  BlueButton,
  BlueButtonText,
  TextButton,
  TextButtonText,
} from "../styles/buttons";
import { AuthTextInput } from "../styles/inputs";

export default function CreateAccount({ navigation }: any) {
  const goToWelcome = () => navigation.navigate("Welcome");
  const goToLogin = () => navigation.navigate("Login");

  return (
    <AuthLayout>
      <AuthTextInput
        placeholder="First Name"
        placeholderTextColor="gray"
        returnKeyType="next"
        style={{ marginBottom: 8 }}
      />
      <AuthTextInput
        placeholder="Last Name"
        placeholderTextColor="gray"
        returnKeyType="next"
        style={{ marginBottom: 8 }}
      />
      <AuthTextInput
        placeholder="Username"
        placeholderTextColor="gray"
        returnKeyType="next"
        style={{ marginBottom: 8 }}
      />
      <AuthTextInput
        placeholder="Email"
        placeholderTextColor="gray"
        keyboardType="email-address"
        returnKeyType="next"
        style={{ marginBottom: 8 }}
      />
      <AuthTextInput
        placeholder="Password"
        placeholderTextColor="gray"
        secureTextEntry={true}
        returnKeyType="done"
      />

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
