import React, { useState } from "react";
import { FlatList, RefreshControl } from "react-native";
import { gql, useQuery } from "@apollo/client";
import {
  seePhotoLikes,
  seePhotoLikesVariables,
} from "../../__generated__/seePhotoLikes";
import { USER_FRAGMENT } from "../../../fragments";
import { colors } from "../../styles/colors";
import ScrollLayout from "../../components/layouts/ScrollLayout";
import UserUnit from "../unit/UserUnit";

interface IProps {
  item: {
    users: {
      id: number;
      username: string;
      avatar?: string;
      isFollowing: boolean;
      isMe: boolean;
    };
  };
}

const SEE_PHOTO_LIKES_QUERY = gql`
  query seePhotoLikes($id: Int!, $offset: Int!) {
    seePhotoLikes(id: $id, offset: $offset) {
      ok
      error
      users {
        ...UserFragment
      }
    }
  }
  ${USER_FRAGMENT}
`;

export default function Likes({ route: { params } }: any) {
  const [isRefreshing, setIsRefreshing] = useState<boolean>(false);
  const { data, loading, refetch, fetchMore } = useQuery<
    seePhotoLikes,
    seePhotoLikesVariables
  >(SEE_PHOTO_LIKES_QUERY, { variables: { id: params?.id, offset: 0 } }); // 5 -> params?.id

  const onRefresh = async () => {
    setIsRefreshing(true);
    await refetch();
    setIsRefreshing(false);
  };
  const renderItem = ({ item }: IProps) => <UserUnit {...item} />;

  return (
    <ScrollLayout loading={false}>
      <FlatList
        onEndReachedThreshold={0.02}
        onEndReached={() =>
          fetchMore({
            variables: { offset: data?.seePhotoLikes?.users?.length },
          })
        }
        refreshing={isRefreshing}
        onRefresh={onRefresh}
        data={data?.seePhotoLikes?.users}
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
    </ScrollLayout>
  );
}
