import React from "react";
import {
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
  ActivityIndicator,
} from "react-native";
import { colors } from "../../styles/colors";

interface IProps {
  children: React.ReactNode;
  loading: boolean;
  style?: any;
}

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
      style={{
        width: "100%",
        alignItems: "center",
        backgroundColor: colors.white,
        ...style,
      }}
    >
      {loading ? (
        <ActivityIndicator color={colors.main} size="small" />
      ) : (
        children
      )}
    </TouchableWithoutFeedback>
  );
}
