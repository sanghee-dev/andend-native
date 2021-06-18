import React, { useRef } from "react";
import AuthLayout from "../styles/auth/AuthLayout";
import { AuthTextInput } from "../styles/inputs";
import {
  ButtonContainer,
  BlueButton,
  BlueButtonText,
  TextButton,
  TextButtonText,
  FacebookText,
} from "../styles/buttons";
import { colors } from "../styles/styles";
import { Ionicons } from "@expo/vector-icons";

export default function Login({ navigation }: any) {
  const goToWelcome = () => navigation.navigate("Welcome");
  const goToCreateAccount = () => navigation.navigate("CreateAccount");

  const usernameRef = useRef<HTMLDivElement>();
  const passwordRef = useRef<HTMLDivElement>();

  const onFocusNext = (next: any) => {
    next?.current?.focus();
  };
  const onDone = () => {
    alert("done!");
  };

  return (
    <AuthLayout>
      <AuthTextInput
        ref={usernameRef}
        onSubmitEditing={() => onFocusNext(passwordRef)}
        placeholder="Username"
        placeholderTextColor={colors.grayDark}
        returnKeyType="next"
      />
      <AuthTextInput
        ref={passwordRef}
        onSubmitEditing={onDone}
        placeholder="Password"
        placeholderTextColor={colors.grayDark}
        secureTextEntry={true}
        returnKeyType="done"
        lastChild={true}
      />

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
