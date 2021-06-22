import React from "react";
import styled from "styled-components/native";
import { colors } from "../../styles/colors";
import { ButtonSharedProps, ButtonTextSharedProps } from "../../styles/buttons";
import { Ionicons } from "@expo/vector-icons";

const Button = styled.TouchableOpacity`
  ${ButtonSharedProps};
`;
const ButtonText = styled.Text`
  ${ButtonTextSharedProps};
  color: ${colors.facebookColor};
`;

export default function FacebookBtn() {
  const goToFacebookLogin = () => {};

  return (
    <Button onPress={goToFacebookLogin}>
      <ButtonText>
        <Ionicons name="logo-facebook" size={20} />
        {` Log in With Facebook`}
      </ButtonText>
    </Button>
  );
}
