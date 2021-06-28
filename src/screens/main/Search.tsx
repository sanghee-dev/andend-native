import React, { useEffect, useState } from "react";
import {
  FlatList,
  RefreshControl,
  useWindowDimensions,
  TouchableOpacity,
} from "react-native";
import { gql, useLazyQuery } from "@apollo/client";
import {
  searchPhotos,
  searchPhotosVariables,
} from "../../__generated__/searchPhotos";
import { useNavigation } from "@react-navigation/native";
import { useForm } from "react-hook-form";
import ScrollWithoutFeedbackLayout from "../../components/layouts/ScrollWithoutFeedbackLayout";
import styled from "styled-components/native";
import { colors } from "../../styles/colors";
import { borders } from "../../styles/borders";
import { fonts } from "../../styles/fonts";
import Picture from "../../components/images/Picture";

interface IProps {
  item: {
    id: number;
    file: string;
  };
}
interface IFormProps {
  keyword: string;
}

const SEARCH_PHOTOS_QUERY = gql`
  query searchPhotos($keyword: String!, $offset: Int!) {
    searchPhotos(keyword: $keyword, offset: $offset) {
      ok
      error
      photos {
        id
        file
      }
    }
  }
`;

const TextInput = styled.TextInput`
  background-color: ${colors.white};
  color: ${colors.black};
  font-size: ${fonts.title};
  border: ${borders.border};
  padding: 6px 12px;
  border-radius: 100px;
  font-weight: 300;
`;
const MessageText = styled.Text`
  text-align: center;
  color: ${colors.grayDark};
  font-size: ${fonts.title};
  margin-top: 200px;
`;

export default function Search() {
  const [numColumns, setNumColumns] = useState<number>(2);
  const [isRefreshing, setIsRefreshing] = useState<boolean>(false);
  const navigation = useNavigation();
  const { width: windowWidth, height: windowHeight } = useWindowDimensions();

  const { register, setValue, watch, handleSubmit } = useForm<IFormProps>();
  const [startQueryFn, { loading, data, fetchMore, refetch, called }] =
    useLazyQuery<searchPhotos, searchPhotosVariables>(SEARCH_PHOTOS_QUERY);

  const onValid = ({ keyword }: string) =>
    startQueryFn({ variables: { keyword, offset: 0 } });
  const SearchBox = () => (
    <TextInput
      onChangeText={(text: string) => setValue("keyword", text)}
      onSubmitEditing={handleSubmit(onValid)}
      value={watch("keyword")}
      placeholder="Serach photos"
      placeholderTextColor={colors.grayDark}
      style={{ width: windowWidth - 80 }}
      autoCapitalize="none"
      autoCorrect={false}
      returnKeyLabel="search"
      returnKeyType="search"
    />
  );

  useEffect(() => {
    navigation.setOptions({ headerTitle: SearchBox });
    register("keyword", { required: true, minLength: 1 });
  }, [register]);

  const onRefresh = async () => {
    setIsRefreshing(true);
    await refetch();
    setIsRefreshing(false);
  };
  const renderItem = ({ item }: IProps) => (
    <TouchableOpacity
      onPress={() => navigation.navigate("Photo", { photoId: item.id })}
    >
      <Picture uri={item?.file} size={windowWidth / numColumns} />
    </TouchableOpacity>
  );

  return (
    <ScrollWithoutFeedbackLayout loading={loading}>
      {!called ? (
        <MessageText>Search by keyword</MessageText>
      ) : !data?.searchPhotos?.photos ||
        data?.searchPhotos?.photos?.length === 0 ? (
        <MessageText>Could not find anything</MessageText>
      ) : (
        <FlatList
          onEndReachedThreshold={0.02}
          onEndReached={() =>
            fetchMore({
              variables: { offset: data?.searchPhotos?.photos?.length || 1 },
            })
          }
          refreshing={isRefreshing}
          onRefresh={onRefresh}
          data={data?.searchPhotos?.photos}
          refreshControl={
            <RefreshControl
              refreshing={isRefreshing}
              onRefresh={onRefresh}
              tintColor={colors.main}
            />
          }
          renderItem={renderItem}
          keyExtractor={(item: any) => "" + item.id}
          numColumns={numColumns}
        />
      )}
    </ScrollWithoutFeedbackLayout>
  );
}
