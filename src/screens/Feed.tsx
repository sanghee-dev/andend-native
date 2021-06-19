import React from "react";
import { gql, useQuery } from "@apollo/client";
import styled from "styled-components/native";
import { COMMENT_FRAGMENT, PHOTO_FRAGMENT } from "../../fragments";

const View = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
const Text = styled.Text``;
const TouchableOpacity = styled.TouchableOpacity`
  background-color: yellow;
`;

const SEE_FEED_QUERY = gql`
  query seeFeed {
    seeFeed {
      ...PhotoFragment
      user {
        username
        avatar
      }
      caption
      comments {
        ...CommentFragment
      }
      createdAt
      isMine
    }
  }
  ${PHOTO_FRAGMENT}
  ${COMMENT_FRAGMENT}
`;

export default function Feed({ navigation }: any) {
  const { data } = useQuery(SEE_FEED_QUERY);
  console.log(data);

  return (
    <View>
      <Text>Feed</Text>
      <TouchableOpacity onPress={() => navigation.navigate("Photo")}>
        <Text>Go to photo</Text>
      </TouchableOpacity>
    </View>
  );
}
