import React from "react";
import { useWindowDimensions } from "react-native";
import styled from "styled-components/native";
import ScreenLayout from "../../components/layouts/ScreenLayout";
import LogOutBtn from "../../components/buttons/LogOutBtn";
import useMe from "../../hooks/useMe";
import Avatar from "../../components/images/Avatar";

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
      <Avatar uri={avatar} size={80} style={{ marginBottom: 20 }} />
      <Username>{username}</Username>
      <LogOutBtn />
    </ScreenLayout>
  );
}
