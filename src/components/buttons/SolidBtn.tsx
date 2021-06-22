import React from "react";
import styled from "styled-components/native";
import { colors } from "../../styles/colors";
import { ButtonSharedProps, ButtonTextSharedProps } from "../../styles/buttons";

interface IProps {
  onPress: () => any;
  text: string;
  style?: any;
}

const Button = styled.TouchableOpacity`
  ${ButtonSharedProps};
  background-color: ${colors.main};
  opacity: ${(props: any) => (props.disabled ? 0.5 : 1)};
`;
const ButtonText = styled.Text`
  ${ButtonTextSharedProps};
  color: ${colors.white};
`;

export default function SubmitBtn({ onPress, text }: IProps) {
  return (
    <Button onPress={onPress}>
      <ButtonText>{text}</ButtonText>
    </Button>
  );
}
