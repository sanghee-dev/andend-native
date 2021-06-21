import React from "react";
import { useWindowDimensions } from "react-native";
import styled from "styled-components/native";
import { colors } from "../styles/styles";

interface IUserProps {
  username: string;
  avatar?: string;
}
interface IProps {
  id: number;
  user: IUserProps;
  file: string;
  caption?: string;
  isLiked: boolean;
  likeNumber: number;
  commentNumber: number;
}

const Container = styled.View``;
const Header = styled.View``;
const UserAvatar = styled.Image`
  width: 100px;
  height: 100px;
`;
const Username = styled.Text``;
const File = styled.Image``;
const Actions = styled.View``;
const Action = styled.TouchableOpacity``;
const LikeNumber = styled.TouchableOpacity``;
const Caption = styled.View``;
const CaptionText = styled.Text``;
const Text = styled.Text``;

export default function FeedUnit({
  id,
  user,
  file,
  caption,
  isLiked,
  likeNumber,
}: IProps) {
  const { width, height } = useWindowDimensions();

  return (
    <Container key={id}>
      <Header>
        <UserAvatar source={{ uri: user?.avatar }} />
        <Username>{user.username}</Username>
      </Header>
      <File source={{ uri: file }} style={{ width, height: height / 2 }} />
      <Actions>
        <Action>
          <Text>{isLiked ? "❤" : "🤍"}</Text>
        </Action>
        <Action>
          <Text>Press Comment</Text>
        </Action>
      </Actions>
      <LikeNumber>
        <Text>{likeNumber} likes</Text>
      </LikeNumber>
      <Caption>
        <CaptionText>{caption}</CaptionText>
      </Caption>
    </Container>
  );
}
