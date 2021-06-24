import React from "react";
import { useNavigation } from "@react-navigation/native";
import styled from "styled-components/native";
import ScrollLayout from "../../components/layouts/ScrollLayout";

const Text = styled.Text``;
const TouchableOpacity = styled.TouchableOpacity`
  background-color: white;
`;

export default function Search() {
  const navigation = useNavigation();

  return (
    <ScrollLayout loading={false}>
      <TouchableOpacity onPress={() => navigation.navigate("Photo")}>
        <Text>Go to photo</Text>
      </TouchableOpacity>
    </ScrollLayout>
  );
}
