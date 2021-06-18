import styled from "styled-components/native";
import { colors, fonts, spaces } from "./styles";

export const AuthTextInput = styled.TextInput`
  width: 90%;
  align-items: center;
  padding: 14px;
  border-radius: 4;
  border: 1px solid ${colors.gray};
  background-color: ${colors.grayLight};
  font-size: ${fonts.text};
`;
