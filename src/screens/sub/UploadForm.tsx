import React from "react";
import { Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import ScreenLayout from "../../components/layouts/ScreenLayout";

export default function UploadForm({ route }) {
  const navigation = useNavigation();

  console.log(route?.params);

  return (
    <ScreenLayout loading={false}>
      <Text>UploadForm</Text>
    </ScreenLayout>
  );
}
