import React from "react";
import styled from "styled-components/native";
import { colors } from "../../styles/colors";
import { ButtonSharedProps, ButtonTextSharedProps } from "../../styles/buttons";

interface IProps {
  onPress: () => any;
  text: string;
  style?: any;
}

const TextButton = styled.TouchableOpacity`
  ${ButtonSharedProps};
`;
const TextButtonText = styled.Text`
  ${ButtonTextSharedProps};
  color: ${colors.main};
`;

export default function SolidBtn({ onPress, text }: IProps) {
  return (
    <TextButton onPress={onPress}>
      <TextButtonText>{text}</TextButtonText>
    </TextButton>
  );
}
