import React, { useState } from "react";
import { gql, useQuery } from "@apollo/client";
import { seeFeed, seeFeedVariables } from "../__generated__/seeFeed";
import {
  USER_FRAGMENT,
  PHOTO_FRAGMENT,
  COMMENT_FRAGMENT,
} from "../../fragments";
import styled from "styled-components/native";
import ScreenLayout from "../components/ScreenLayout";

const FlatList = styled.FlatList``;
const View = styled.View``;
const Text = styled.Text``;
const TouchableOpacity = styled.TouchableOpacity`
  background-color: white;
`;

const SEE_FEED_QUERY = gql`
  query seeFeed($page: Int!) {
    seeFeed(page: $page) {
      ok
      error
      photos {
        ...PhotoFragment
        user {
          ...UserFragment
        }
        likeNumber
        isLiked
        commentNumber
        comments {
          ...CommentFragment
        }
      }
    }
  }
  ${USER_FRAGMENT}
  ${PHOTO_FRAGMENT}
  ${COMMENT_FRAGMENT}
`;

export default function Feed({ navigation }: any) {
  const [page, setPage] = useState(1);
  const { data, loading } = useQuery<seeFeed, seeFeedVariables>(
    SEE_FEED_QUERY,
    {
      variables: { page },
    }
  );

  const renderItem = ({ item }) => {
    return (
      <View>
        <Text>{item.user.avatar}</Text>
        <Text>{item.user.username}</Text>
        <Text>{item.id}</Text>
        <Text>{item.file}</Text>
        <Text>{item.caption}</Text>
      </View>
    );
  };

  return (
    <ScreenLayout loading={loading}>
      <FlatList
        data={data?.seeFeed?.photos}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />

      <TouchableOpacity onPress={() => navigation.navigate("Photo")}>
        <Text>Go to photo</Text>
      </TouchableOpacity>
    </ScreenLayout>
  );
}
