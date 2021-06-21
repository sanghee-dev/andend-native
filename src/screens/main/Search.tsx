import React from "react";
import { useNavigation } from "@react-navigation/native";
import styled from "styled-components/native";
import ScreenLayout from "../components/ScreenLayout";

const Text = styled.Text``;
const TouchableOpacity = styled.TouchableOpacity`
  background-color: white;
`;

export default function Search() {
  const navigation = useNavigation();

  return (
    <ScreenLayout loading={false}>
      <TouchableOpacity onPress={() => navigation.navigate("Photo")}>
        <Text>Go to photo</Text>
      </TouchableOpacity>
    </ScreenLayout>
  );
}
