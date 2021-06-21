import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { gql, useQuery } from "@apollo/client";
import { seeFeed, seeFeedVariables } from "../__generated__/seeFeed";
import {
  USER_FRAGMENT,
  PHOTO_FRAGMENT,
  COMMENT_FRAGMENT,
} from "../../fragments";
import styled from "styled-components/native";
import ScreenLayout from "../components/ScreenLayout";
import FeedUnit from "../components/FeedUnit";

const FlatList = styled.FlatList`
  width: 100%;
`;
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
        isLiked
        likeNumber
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

export default function Feed() {
  const navigation = useNavigation();
  const [page, setPage] = useState(1);
  const { data, loading } = useQuery<seeFeed, seeFeedVariables>(
    SEE_FEED_QUERY,
    {
      variables: { page },
    }
  );

  const renderItem = ({ item }: any) => <FeedUnit {...item} />;

  return (
    <ScreenLayout loading={loading}>
      <FlatList
        data={data?.seeFeed?.photos}
        renderItem={renderItem}
        keyExtractor={(item: any) => "" + item.id}
      />

      <TouchableOpacity onPress={() => navigation.navigate("Photo")}>
        <Text>Go to photo</Text>
      </TouchableOpacity>
    </ScreenLayout>
  );
}
