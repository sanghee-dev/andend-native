import React from "react";
import styled from "styled-components/native";
import { colors } from "../../styles/styles";
import { ButtonSharedProps, ButtonTextSharedProps } from "../../styles/buttons";
import { Ionicons } from "@expo/vector-icons";

const TextButton = styled.TouchableOpacity`
  ${ButtonSharedProps};
`;
const FacebookText = styled.Text`
  ${ButtonTextSharedProps};
  color: ${colors.facebookColor};
`;

export default function FacebookBtn() {
  const goToFacebookLogin = () => {};

  return (
    <TextButton onPress={goToFacebookLogin}>
      <FacebookText>
        <Ionicons name="logo-facebook" size={20} />
        {` Log in With Facebook`}
      </FacebookText>
    </TextButton>
  );
}
