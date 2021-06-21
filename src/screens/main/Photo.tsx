import React from "react";
import { useNavigation } from "@react-navigation/native";
import styled from "styled-components/native";
import ScreenLayout from "../../components/layouts/ScreenLayout";

const Text = styled.Text``;
const TouchableOpacity = styled.TouchableOpacity`
  background-color: white;
`;

export default function Photo() {
  const navigation = useNavigation();

  return (
    <ScreenLayout loading={false}>
      <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
        <Text>Go to profile</Text>
      </TouchableOpacity>
    </ScreenLayout>
  );
}
