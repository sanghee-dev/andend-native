import React, { useEffect, useState } from "react";
import { useWindowDimensions } from "react-native";
import {
  searchPhotos,
  searchPhotosVariables,
} from "../../__generated__/searchPhotos";
import { useNavigation } from "@react-navigation/native";
import { useForm } from "react-hook-form";
import styled from "styled-components/native";
import ScrollWithoutFeedbackLayout from "../../components/layouts/ScrollWithoutFeedbackLayout";
import { colors } from "../../styles/colors";
import { borders } from "../../styles/borders";
import { fonts } from "../../styles/fonts";

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
const Text = styled.Text``;

export default function Search() {
  const navigation = useNavigation();
  const { width: windowWidth, height: windowHeight } = useWindowDimensions();

  const headerTitle = () => (
    <TextInput
      onChangeText={(text: string) => setValue("keyword", text)}
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

  const { register, handleSubmit, setValue, watch } = useForm<IFormProps>();
  const onCompleted = async (data: any) => {
    const {
      searchPhotos: { ok, error, photos },
    } = data;
  };


  console.log(watch("keyword"));
  console.log(data);

  const registerObj = { required: true, minLength: 1 };
  useEffect(() => {
    navigation.setOptions({ headerTitle });
    register("keyword", registerObj);
  }, [register]);

  return (
    <ScrollWithoutFeedbackLayout loading={loading}>
      <Text>hello</Text>
    </ScrollWithoutFeedbackLayout>
  );
}
