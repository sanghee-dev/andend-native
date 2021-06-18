import styled from "styled-components/native";
import { colors, fonts, spaces } from "./styles";

export const AuthTextInput = styled.TextInput`
  width: 90%;
  align-items: center;
  padding: 12px;
  border-radius: 4;
  border: 0.5px solid ${colors.gray};
  background-color: ${colors.grayLight};
  font-size: ${fonts.text};
`;
