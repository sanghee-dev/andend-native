import React from "react";
import { Text } from "react-native";
import ScreenLayout from "../../components/layouts/ScreenLayout";

export default function TakePhoto() {
  return (
    <ScreenLayout
      loading={false}
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <Text>TakePhoto</Text>
    </ScreenLayout>
  );
}
