import React, { useState } from "react";
import { gql, useQuery } from "@apollo/client";
import styled from "styled-components/native";
import { seeFeed, seeFeedVariables } from "../__generated__/seeFeed";
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
  query seeFeed($page: Int!) {
    seeFeed(page: $page) {
      ok
      error
      photos {
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
  }
  ${PHOTO_FRAGMENT}
  ${COMMENT_FRAGMENT}
`;

export default function Feed({ navigation }: any) {
  const [page, setPage] = useState(1);
  const { data } = useQuery<seeFeed, seeFeedVariables>(SEE_FEED_QUERY, {
    variables: { page },
  });
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
