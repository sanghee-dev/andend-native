import React from "react";
import AuthLayout from "../styles/auth/AuthLayout";
import {
  ButtonContainer,
  BlueButton,
  BlueButtonText,
  TextButton,
  TextButtonText,
  FacebookText,
} from "../styles/buttons";
import { Ionicons } from "@expo/vector-icons";

export default function Login({ navigation }: any) {
  const goToWelcome = () => navigation.navigate("Welcome");
  const goToCreateAccount = () => navigation.navigate("CreateAccount");

  return (
    <AuthLayout>
      <ButtonContainer>
        <BlueButton onPress={goToCreateAccount} style={{ marginBottom: 8 }}>
          <BlueButtonText>Create Account</BlueButtonText>
        </BlueButton>
        <TextButton onPress={goToCreateAccount}>
          <FacebookText>
            <Ionicons name="logo-facebook" size={20} />
            {` Log in With Facebook`}
          </FacebookText>
        </TextButton>
        <TextButton onPress={goToWelcome}>
          <TextButtonText>Go back to home</TextButtonText>
        </TextButton>
      </ButtonContainer>
    </AuthLayout>
  );
}
