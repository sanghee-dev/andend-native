import React, { useState } from "react";
import { RefreshControl, ScrollView, useWindowDimensions } from "react-native";
import { gql, useQuery } from "@apollo/client";
import { seePhoto, seePhotoVariables } from "../../__generated__/seePhoto";
import { USER_FRAGMENT, PHOTO_FRAGMENT } from "../../../fragments";
import FeedUnit from "../unit/FeedUnit";
import ScreenLayout from "../../components/layouts/ScreenLayout";
import { colors } from "../../styles/colors";

const SEE_PHOTO_QUERY = gql`
  query seePhoto($id: Int!) {
    seePhoto(id: $id) {
      ok
      error
      photo {
        ...PhotoFragment
        user {
          ...UserFragment
        }
      }
    }
  }
  ${USER_FRAGMENT}
  ${PHOTO_FRAGMENT}
`;

export default function Photo({ route: { params } }: any) {
  const { width: windowWidth, height: windowHeight } = useWindowDimensions();
  const { data, loading, refetch } = useQuery<seePhoto, seePhotoVariables>(
    SEE_PHOTO_QUERY,
    { variables: { id: params?.photoId } }
  );
  const [refreshing, setRefreshing] = useState<boolean>(false);

  const onRefresh = async () => {
    setRefreshing(true);
    await refetch();
    setRefreshing(false);
  };

  return (
    <ScreenLayout loading={loading}>
      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            tintColor={colors.main}
          />
        }
        style={{ width: windowWidth }}
        contentContainerStyle={{
          alignContent: "center",
          justifyContent: "center",
        }}
      >
        <FeedUnit
          loading={loading}
          id={data?.seePhoto?.photo?.id}
          user={data?.seePhoto?.photo?.user}
          file={data?.seePhoto?.photo?.file}
          caption={data?.seePhoto?.photo?.caption}
          likeNumber={1}
          isLiked={true}
        />
      </ScrollView>
    </ScreenLayout>
  );
}
