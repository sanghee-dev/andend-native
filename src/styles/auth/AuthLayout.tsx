import React from "react";
import { Platform, Keyboard } from "react-native";
import styled from "styled-components/native";
import { colors } from "../styles";

const TouchableWithoutFeedback = styled.TouchableWithoutFeedback`
  flex: 1;
`;
const Container = styled.View`
  flex: 1;
  background-color: ${colors.white};
  justify-content: center;
  align-items: center;
`;
const KeyboardAvoidingView = styled.KeyboardAvoidingView`
  width: 100%;
  justify-content: center;
  align-items: center;
`;
const Logo = styled.Image`
  max-width: 50%;
  width: 100%; /*  for web */
  margin-top: 80px;
`;

export default function AuthLayout({ children }: any) {
  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={dismissKeyboard}>
      <Container>
        <KeyboardAvoidingView
          behavior="padding"
          keyboardVerticalOffset={Platform.OS === "ios" ? 30 : 40}
        >
          {children}
        </KeyboardAvoidingView>
      </Container>
    </TouchableWithoutFeedback>
  );
}
