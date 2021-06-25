import React from "react";
import { useWindowDimensions } from "react-native";
import styled from "styled-components/native";
import ScreenLayout from "../../components/layouts/ScreenLayout";
import LogOutBtn from "../../components/buttons/LogOutBtn";
import useMe from "../../hooks/useMe";
import { borders } from "../../styles/borders";

const Avatar = styled.Image`
  width: 80px;
  height: 80px;
  border: ${borders.border};
  border-radius: 80px;
  margin-bottom: 20px;
`;
const Username = styled.Text`
  margin-bottom: 20px;
`;

export default function Me() {
  const { width: windowWidth, height: windowHeight } = useWindowDimensions();
  const { username, avatar } = useMe();
  console.log(username, avatar);

  return (
    <ScreenLayout
      loading={false}
      style={{
        height: windowHeight,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Avatar source={{ uri: avatar }} resizeMode="contain" />
      <Username>{username}</Username>
      <LogOutBtn />
    </ScreenLayout>
  );
}
