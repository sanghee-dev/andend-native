import React from "react";
import styled from "styled-components/native";

const View = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
const Text = styled.Text``;
const TouchableOpacity = styled.TouchableOpacity`
  background-color: yellow;
`;

export default function Photo({ navigation }: any) {
  return (
    <View>
      <Text>Photo</Text>
      <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
        <Text>Go to profile</Text>
      </TouchableOpacity>
    </View>
  );
}
