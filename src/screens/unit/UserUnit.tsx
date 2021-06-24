import React from "react";
import styled from "styled-components/native";
import { Text } from "react-native";

const Container = styled.View`
  flex-direction: row;
  align-items: center;
  height: 60px;
`;
const File = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 100;
  border: 1px solid gray;
`;

interface IProps {
  id: number;
  username: string;
  avatar?: string;
  isFollowing: boolean;
  isMe: boolean;
}

export default function UserUnit({
  id,
  username,
  avatar,
  isFollowing,
  isMe,
}): any {
  return (
    <Container>
      <File
        source={{ uri: avatar }}
        style={{ width: 40, height: 40 }}
        resizeMode="contain"
      />
      <Text style={{ fontWeight: isMe ? "500" : "300" }}>{username}</Text>
    </Container>
  );
}
