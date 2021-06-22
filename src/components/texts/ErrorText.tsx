import React from "react";
import styled from "styled-components/native";
import { colors } from "../../styles/colors";
import { fonts } from "../../styles/fonts";

interface IProps {
  text: string;
}

const Text = styled.Text`
  color: ${colors.red};
  font-size: ${fonts.text};
`;

export default function ErrorText({ text }: IProps) {
  return <Text>{text}</Text>;
}
