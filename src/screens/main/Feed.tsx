import React, { useState } from "react";
import { RefreshControl } from "react-native";
import { gql, useQuery } from "@apollo/client";
import { seeFeed, seeFeedVariables } from "../../__generated__/seeFeed";
import {
  USER_FRAGMENT,
  PHOTO_FRAGMENT,
  COMMENT_FRAGMENT,
} from "../../../fragments";
import styled from "styled-components/native";
import { colors } from "../../styles/colors";
import ScreenLayout from "../../components/layouts/ScreenLayout";
import FeedUnit from "../../components/FeedUnit";

const FlatList = styled.FlatList`
  width: 100%;
`;

const SEE_FEED_QUERY = gql`
  query seeFeed($offset: Int!) {
    seeFeed(offset: $offset) {
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
  const [isRefreshing, setIsRefreshing] = useState<boolean>(false);
  const [offset, setOffset] = useState(0);
  const { data, loading, refetch, fetchMore } = useQuery<
    seeFeed,
    seeFeedVariables
  >(SEE_FEED_QUERY, { variables: { offset } });
  const onRefresh = async () => {
    setIsRefreshing(true);
    await refetch();
    setIsRefreshing(false);
  };

  const renderItem = ({ item }: any) => <FeedUnit {...item} />;

  return (
    <ScreenLayout loading={loading}>
      <FlatList
        onEndReachedThreshold={0.05}
        onEndReached={() =>
          fetchMore({
            variables: {
              offset: data?.seeFeed?.photos?.length,
            },
          })
        }
        refreshing={isRefreshing}
        onRefresh={onRefresh}
        data={data?.seeFeed?.photos}
        refreshControl={
          <RefreshControl
            refreshing={isRefreshing}
            onRefresh={onRefresh}
            tintColor={colors.main}
          />
        }
        renderItem={renderItem}
        keyExtractor={(item: any) => "" + item.id}
      />
    </ScreenLayout>
  );
}
