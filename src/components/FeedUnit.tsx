import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { useWindowDimensions, Image } from "react-native";
import styled from "styled-components/native";
import { colors, spaces, borders } from "../styles/styles";
import { Ionicons } from "@expo/vector-icons";

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

const Container = styled.View`
  margin: ${spaces.margin} 0;
`;
const Header = styled.View`
  padding: 0 ${spaces.padding};
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
const User = styled.View`
  flex-direction: row;
  align-items: center;
`;
const Avatar = styled.Image`
  width: 32px;
  height: 32px;
  border-radius: 100;
  border: ${borders.border};
`;
const Username = styled.Text`
  margin-left: 4px;
  font-weight: 500;
`;
const Ellipsis = styled.TouchableOpacity``;

const File = styled.Image`
  margin: ${spaces.margin} 0;
`;

const Actions = styled.View`
  padding: 0 ${spaces.padding};
`;
const Action = styled.TouchableOpacity``;

const Detail = styled.View`
  padding: 0 ${spaces.padding};
`;
const LikeNumber = styled.TouchableOpacity``;
const Caption = styled.View``;
const CaptionText = styled.Text``;
const TouchableOpacity = styled.TouchableOpacity``;
const Text = styled.Text``;

export default function FeedUnit({
  id,
  user,
  file,
  caption,
  isLiked,
  likeNumber,
}: IProps) {
  const navigation = useNavigation();
  const { width: windowWidth, height: windowHeight } = useWindowDimensions();
  const [imageHeight, setImageHeight] = useState<number>(400);

  useEffect(() => {
    Image.getSize(file, (width, height) => {
      let ratio = windowWidth / width;
      setImageHeight(height * ratio);
    });
  }, [file]);

  return (
    <Container key={id}>
      <Header>
        <User>
          <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
            {user?.avatar ? (
              <Avatar source={{ uri: user?.avatar }} resizeMode="contain" />
            ) : (
              <Ionicons name="person-circle-outline" size={40} />
            )}
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
            <Username>{user.username}</Username>
          </TouchableOpacity>
        </User>
        <Ellipsis>
          <Text>
            <Ionicons name="ellipsis-horizontal" size={28} />
          </Text>
        </Ellipsis>
      </Header>

      <File
        source={{ uri: file }}
        style={{ width: windowWidth, height: imageHeight }}
        resizeMode="contain"
      />

      <Actions>
        <Action>
          <Text>
            {isLiked ? (
              <Ionicons name="heart" size={28} style={{ color: colors.red }} />
            ) : (
              <Ionicons name="heart-outline" size={28} />
            )}
          </Text>
        </Action>
        <Action>
          <Text>Press Comment</Text>
        </Action>
      </Actions>

      <Detail>
        <LikeNumber>
          <Text>{likeNumber} likes</Text>
        </LikeNumber>
        <Caption>
          <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
            <Username>{user.username}</Username>
          </TouchableOpacity>
          <CaptionText>{caption}</CaptionText>
        </Caption>
      </Detail>
    </Container>
  );
}
