import React, { useState } from "react";
import { FlatList, RefreshControl } from "react-native";
import { gql, useQuery } from "@apollo/client";
import { seeFeed, seeFeedVariables } from "../../__generated__/seeFeed";
import {
  USER_FRAGMENT,
  PHOTO_FRAGMENT,
  COMMENT_FRAGMENT,
} from "../../../fragments";
import { colors } from "../../styles/colors";
import ScreenLayout from "../../components/layouts/ScreenLayout";
import FeedUnit from "../sub/FeedUnit";

interface IProps {
  item: {
    id: number;
    user: {
      id: number;
      username: string;
      avatar?: string;
    };
    file: string;
    caption?: boolean;
    likeNumber: number;
    isLiked: boolean;
  };
}

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
  const { data, loading, refetch, fetchMore } = useQuery<
    seeFeed,
    seeFeedVariables
  >(SEE_FEED_QUERY, { variables: { offset: 0 } });
  const onRefresh = async () => {
    setIsRefreshing(true);
    await refetch();
    setIsRefreshing(false);
  };

  const renderItem = ({ item }: IProps) => <FeedUnit {...item} />;

  return (
    <ScreenLayout loading={loading}>
      <FlatList
        onEndReachedThreshold={0.02}
        onEndReached={() =>
          fetchMore({
            variables: { offset: data?.seeFeed?.photos?.length },
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
        style={{ width: "100%" }}
      />
    </ScreenLayout>
  );
}
