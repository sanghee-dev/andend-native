import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { useWindowDimensions, Image } from "react-native";
import styled from "styled-components/native";
import { colors } from "../styles/colors";
import { borders } from "../styles/borders";
import { spaces } from "../styles/spaces";
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
  flex-direction: row;
  align-items: center;
  margin-bottom: 4px;
`;
const Action = styled.TouchableOpacity`
  margin-right: 12px;
`;

const ExtraContainer = styled.View`
  padding: 0 ${spaces.padding};
`;
const LikeNumber = styled.TouchableOpacity`
  margin-bottom: 4px;
`;
const LikeNumberText = styled.Text`
  font-weight: 500;
`;
const Caption = styled.View`
  flex-direction: row;
`;
const CaptionUsername = styled.Text`
  font-weight: 500;
  margin-right: 4px;
`;
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
        <Action onPress={() => {}}>
          <Text>
            <Ionicons
              name={isLiked ? "heart" : "heart-outline"}
              size={28}
              style={{ color: isLiked ? colors.red : colors.black }}
            />
          </Text>
        </Action>
        <Action onPress={() => navigation.navigate("Comments")}>
          <Text>
            <Ionicons name="chatbubble-outline" size={26} />
          </Text>
        </Action>
      </Actions>

      <ExtraContainer>
        <LikeNumber onPress={() => navigation.navigate("Likes")}>
          <LikeNumberText>{likeNumber} likes</LikeNumberText>
        </LikeNumber>
        <Caption>
          <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
            <CaptionUsername>{user.username}</CaptionUsername>
          </TouchableOpacity>
          <CaptionText>{caption}</CaptionText>
        </Caption>
      </ExtraContainer>
    </Container>
  );
}
