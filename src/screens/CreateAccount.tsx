import React, { useRef } from "react";
import AuthLayout from "../styles/auth/AuthLayout";
import {
  ButtonContainer,
  BlueButton,
  BlueButtonText,
  TextButton,
  TextButtonText,
} from "../styles/buttons";
import { AuthTextInput } from "../styles/inputs";
import { colors } from "../styles/styles";

export default function CreateAccount({ navigation }: any) {
  const goToWelcome = () => navigation.navigate("Welcome");
  const goToLogin = () => navigation.navigate("Login");

  const lastNameRef = useRef<HTMLDivElement>();
  const usernameRef = useRef<HTMLDivElement>();
  const emailRef = useRef<HTMLDivElement>();
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
        autoFocus={true}
        onSubmitEditing={() => onFocusNext(lastNameRef)}
        placeholder="First Name"
        placeholderTextColor={colors.grayDark}
        returnKeyType="next"
      />
      <AuthTextInput
        ref={lastNameRef}
        onSubmitEditing={() => onFocusNext(usernameRef)}
        placeholder="Last Name"
        placeholderTextColor={colors.grayDark}
        returnKeyType="next"
      />
      <AuthTextInput
        ref={usernameRef}
        onSubmitEditing={() => onFocusNext(emailRef)}
        placeholder="Username"
        placeholderTextColor={colors.grayDark}
        returnKeyType="next"
      />
      <AuthTextInput
        ref={emailRef}
        onSubmitEditing={() => onFocusNext(passwordRef)}
        placeholder="Email"
        placeholderTextColor={colors.grayDark}
        keyboardType="email-address"
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
