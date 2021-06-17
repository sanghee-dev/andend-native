import styled from "styled-components/native";
import { colors, space } from "./styles";

export const ButtonContainer = styled.View`
  width: 100%;
  align-items: center;
  position: absolute;
  bottom: 32px;
`;

const ButtonSharedProps = `
  width: 80%;
  align-items: center;
  padding: ${space.paddingTopBottom};
  border-radius: 100;
  opacity: ${(props: any) => (props.disabled ? 0.5 : 1)};
`;
const ButtonTextSharedProps = `
  font-weight: 500;
  font-size: 18px;
`;

export const BlueButton = styled.TouchableOpacity`
  ${ButtonSharedProps};
  background-color: ${colors.blue};
`;
export const BlueButtonText = styled.Text`
  ${ButtonTextSharedProps};
  color: ${colors.white};
`;

export const TextButton = styled.TouchableOpacity`
  ${ButtonSharedProps};
`;
export const TextButtonText = styled.Text`
  ${ButtonTextSharedProps};
  color: ${colors.blue};
`;
export const FacebookText = styled.Text`
  ${ButtonTextSharedProps};
  color: ${colors.facebookColor};
`;
