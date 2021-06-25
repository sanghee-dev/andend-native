import React from "react";
import {
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
  ActivityIndicator,
} from "react-native";
import styled from "styled-components/native";
import { colors } from "../../styles/colors";

interface IProps {
  children: React.ReactNode;
  loading: boolean;
  style?: any;
}

const View = styled.View`
  width: 100%;
  align-items: center;
  background-color: ${colors.white};
`;

export default function ScrollWithoutFeedbackLayout({
  children,
  loading,
  style,
}: IProps) {
  const dismissKeyboard = () => Keyboard.dismiss();

  return (
    <TouchableWithoutFeedback
      onPress={dismissKeyboard}
      disabled={Platform.OS === "web"}
      style={style}
    >
      {loading ? (
        <ActivityIndicator color={colors.main} size="small" />
      ) : (
        children
      )}
    </TouchableWithoutFeedback>
  );
}
