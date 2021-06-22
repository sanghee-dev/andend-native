import React from "react";
import { useNavigation } from "@react-navigation/native";
import styled from "styled-components/native";
import { colors } from "../../styles/colors";
import { logUserOut } from "../../../apollo";
import { ButtonSharedProps, ButtonTextSharedProps } from "../../styles/buttons";

const Button = styled.TouchableOpacity`
  ${ButtonSharedProps};
  background-color: ${colors.main};
`;
const ButtonText = styled.Text`
  ${ButtonTextSharedProps};
  color: ${colors.white};
`;

export default function LogOutBtn() {
  const navigation = useNavigation();

  return (
    <Button onPress={logUserOut}>
      <ButtonText>Log out</ButtonText>
    </Button>
  );
}
