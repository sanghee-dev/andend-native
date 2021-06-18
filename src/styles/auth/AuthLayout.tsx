import React from "react";
import styled from "styled-components/native";
import { colors } from "../styles";

const Container = styled.View`
  flex: 1;
  background-color: ${colors.white};
  justify-content: center;
  align-items: center;
`;

export const Logo = styled.Image`
  max-width: 50%;
  width: 100%; /* for web */
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
