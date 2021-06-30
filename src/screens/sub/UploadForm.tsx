import React, { useEffect } from "react";
import { ActivityIndicator, Text, View, TouchableOpacity } from "react-native";
import { useForm } from "react-hook-form";
import { useNavigation } from "@react-navigation/native";
import styled from "styled-components/native";
import ScrollWithoutFeedbackLayout from "../../components/layouts/ScrollWithoutFeedbackLayout";
import { colors } from "../../styles/colors";

const Container = styled.View`
  flex: 1;
  background-color: black;
  padding: 0px 50px;
`;
const Photo = styled.Image`
  height: 350px;
`;
const CaptionContainer = styled.View`
  margin-top: 30px;
`;
const Caption = styled.TextInput`
  background-color: white;
  color: black;
  padding: 10px 20px;
  border-radius: 100px;
`;
const HeaderRightText = styled.Text`
  color: ${colors.main};
  font-size: 16px;
  font-weight: 600;
  margin-right: 7px;
`;

export default function UploadForm({ route }) {
  const navigation = useNavigation();

  const HeaderRightLoading = () => (
    <ActivityIndicator size="small" color="white" style={{ marginRight: 10 }} />
  );
  const onValid = ({ caption }) => {};
  const { register, handleSubmit, setValue } = useForm();
  useEffect(() => {
    navigation.setOptions({
      headerRight: HeaderRightLoading,
      headerLeft: () => null,
    });
    register("caption");
  }, [register]);

  return (
    <ScrollWithoutFeedbackLayout loading={false}>
      <Container>
        <Photo resizeMode="contain" source={{ uri: route?.params?.file }} />
        <CaptionContainer>
          <Caption
            returnKeyType="done"
            placeholder="Write a caption..."
            placeholderTextColor="rgba(0, 0, 0, 0.5)"
            onSubmitEditing={handleSubmit(onValid)}
            onChangeText={(text) => setValue("caption", text)}
          />
        </CaptionContainer>
      </Container>
    </ScrollWithoutFeedbackLayout>
  );
}
