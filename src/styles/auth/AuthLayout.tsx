import React from "react";
import styled from "styled-components/native";
import { colors } from "../styles";

const Container = styled.View`
  flex: 1;
  background-color: ${colors.white};
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.Image`
  max-width: 50%;
  margin-top: 80px;
`;

export default function AuthLayout({ children }: any) {
  return (
    <Container>
      {/* <Logo source={require("../../../assets/logo.png")} resizeMode="contain" /> */}
      {children}
    </Container>
  );
}
