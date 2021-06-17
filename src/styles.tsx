import styled from "styled-components/native";

export const colors = {
  blue: "rgb(0,149,246)",
  red: "rgb(240,73,86)",
  gray: "rgb(160,160,160)",
  grayLight: "rgb(220,220,220)",
  grayDark: "rgb(130,130,130)",
  facebookColor: "rgb(56,81,133)",
  white: "rgb(255,255,255)",
  black: "rgb(0,0,0)",
};

const spaceUnit = 8;
const ratio = 1.5;
export const space = {
  margin: `${spaceUnit}px`,
  marginTopBottom: `${spaceUnit}px ${spaceUnit * ratio}px`,
  padding: `${spaceUnit}px`,
  paddingTopBottom: `${spaceUnit}px ${spaceUnit * ratio}px`,
};

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${colors.white};
`;

export const Text = styled.Text``;

const ButtonSharedProps = `
  width: 80%;
  align-items: center;
  padding: ${space.paddingTopBottom};
  border-radius: 100;
`;
export const BlueButton = styled.TouchableOpacity`
  ${ButtonSharedProps};
  background-color: ${colors.blue};
`;
export const TextButton = styled.TouchableOpacity`
  ${ButtonSharedProps};
`;

const ButtonTextSharedProps = `
  font-weight: 500;
  font-size: 16px;
`;
export const BlueButtonText = styled.Text`
  ${ButtonTextSharedProps};
  color: ${colors.white};
`;
export const TextButtonText = styled.Text`
  ${ButtonTextSharedProps};
  color: ${colors.blue};
`;

export const Logo = styled.Image`
  max-width: 50%;
`;
