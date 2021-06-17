import React from "react";
import {
  WelcomeContainer,
  View,
  BlueButton,
  BlueButtonText,
  TextButton,
  TextButtonText,
  Logo,
} from "../styles";

export default function Welcome({ navigation }: any) {
  const goToCreateAccount = () => navigation.navigate("CreateAccount");
  const goToLogin = () => navigation.navigate("Login");

  return (
    <WelcomeContainer>
      <Logo source={require("../../assets/logo.png")} resizeMode="contain" />
      <View>
        <BlueButton onPress={goToCreateAccount} style={{ marginBottom: 8 }}>
          <BlueButtonText>Create Account</BlueButtonText>
        </BlueButton>
        <TextButton onPress={goToLogin}>
          <TextButtonText>Login</TextButtonText>
        </TextButton>
      </View>
    </WelcomeContainer>
  );
}
