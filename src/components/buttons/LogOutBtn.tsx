import React from "react";
import styled from "styled-components/native";
import { colors } from "../../styles/styles";
import { logUserOut } from "../../../apollo";
import { ButtonSharedProps, ButtonTextSharedProps } from "../../styles/buttons";

const SolidButton = styled.TouchableOpacity`
  ${ButtonSharedProps};
  background-color: ${colors.green};
`;
const SolidButtonText = styled.Text`
  ${ButtonTextSharedProps};
  color: ${colors.white};
`;

export default function LogOutBtn() {
  return (
    <SolidButton onPress={logUserOut}>
      <SolidButtonText>Log out</SolidButtonText>
    </SolidButton>
  );
}
