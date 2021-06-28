import React from "react";
import styled from "styled-components/native";
import { colors } from "../../styles/colors";

const Container = styled.View`
  flex: 1;
  background-color: ${colors.white};
`;
const Top = styled.View`
  flex: 1;
`;
const Bottom = styled.View`
  flex: 1;
  background-color: ${colors.grayLight};
`;

export default function SelectPhoto() {
  return (
    <Container>
      <Top></Top>
      <Bottom></Bottom>
    </Container>
  );
}
