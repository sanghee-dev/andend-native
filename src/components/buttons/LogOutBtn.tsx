import React from "react";
import styled from "styled-components/native";
import { colors } from "../../styles/styles";
import { logUserOut } from "../../../apollo";

const SolidButton = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
  border-radius: 100;
  background-color: ${colors.green};
`;

export default function LogOutBtn() {
  return <SolidButton onPress={logUserOut}></SolidButton>;
}
