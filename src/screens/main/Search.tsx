import React, { useEffect, useState } from "react";
import { useWindowDimensions } from "react-native";
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

const TextInput = styled.TextInput`
  background-color: ${colors.white};
  color: ${colors.black};
  font-size: ${fonts.title};
  border: ${borders.border};
  padding: 6px 12px;
  border-radius: 100px;
`;
const Text = styled.Text``;

export default function Search() {
  const [isRefreshing, setIsRefreshing] = useState<boolean>(false);
  const navigation = useNavigation();
  const { width: windowWidth, height: windowHeight } = useWindowDimensions();

  const headerTitle = () => (
    <TextInput
      onChangeText={(text: string) => setValue("keyword", text)}
      // onSubmitEditing={handleSubmit(onValid)}
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
  // const onValid = (data: any) => {
  //   if (!loading) searchPhotosQuery({ variables: { ...data } });
  // };
  // const onCompleted = async (data: any) => {
  //   const {
  //     searchPhotos: { ok, error, photos },
  //   } = data;
  // };

  // const [searchPhotosQuery, { loading }] = useQuery(SEARCH_PHOTOS_QUERY, {
  //   onCompleted,
  // });

  console.log(watch("keyword"));

  const registerObj = { required: true, minLength: 1 };
  useEffect(() => {
    navigation.setOptions({ headerTitle });
    register("keyword", registerObj);
  }, [register]);

  return (
    <ScrollWithoutFeedbackLayout loading={false}>
      <Text>hello</Text>
    </ScrollWithoutFeedbackLayout>
  );
}
