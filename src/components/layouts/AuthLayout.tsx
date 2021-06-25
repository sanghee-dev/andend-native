import React from "react";
import { Platform, Keyboard } from "react-native";
import styled from "styled-components/native";
import { colors } from "../../styles/colors";

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

export default function AuthLayout({ children }: any) {
  const dismissKeyboard = () => Keyboard.dismiss();

  return (
    <TouchableWithoutFeedback
      onPress={dismissKeyboard}
      disabled={Platform.OS === "web"}
    >
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
