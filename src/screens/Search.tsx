import React from "react";
import styled from "styled-components/native";

const View = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
const Text = styled.Text``;
const TouchableOpacity = styled.TouchableOpacity`
  background-color: white;
`;

export default function Search({ navigation }: any) {
  return (
    <View>
      <TouchableOpacity onPress={() => navigation.navigate("Photo")}>
        <Text>Go to photo</Text>
      </TouchableOpacity>
    </View>
  );
}
