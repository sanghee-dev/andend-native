import React from "react";
import styled from "styled-components/native";
import LogOutBtn from "../components/buttons/LogOutBtn";

const View = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
const Text = styled.Text``;

export default function Me() {
  return (
    <View>
      <Text>Me</Text>
      <LogOutBtn />
    </View>
  );
}
