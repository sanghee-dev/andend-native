import React from "react";
import { ActivityIndicator } from "react-native";
import styled from "styled-components/native";
import { colors } from "../../styles/styles";
import { ButtonSharedProps, ButtonTextSharedProps } from "../../styles/buttons";

interface IProps {
  onPress: () => any;
  disabled: boolean;
  loading?: boolean;
  text: string;
  style?: any;
}

const SolidButton = styled.TouchableOpacity`
  ${ButtonSharedProps};
  background-color: ${colors.main};
  opacity: ${(props: any) => (props.disabled ? 0.5 : 1)};
`;
const SolidButtonText = styled.Text`
  ${ButtonTextSharedProps};
  color: ${colors.white};
`;

export default function SolidBtn({ onPress, disabled, loading, text }: IProps) {
  return (
    <SolidButton onPress={onPress} disabled={disabled}>
      {loading ? (
        <ActivityIndicator size="small" color={colors.white} />
      ) : (
        <SolidButtonText>{text}</SolidButtonText>
      )}
    </SolidButton>
  );
}
