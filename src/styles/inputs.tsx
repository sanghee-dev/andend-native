import styled from "styled-components/native";
import { colors } from "./colors";
import { fonts } from "./fonts";
import { spaces } from "./spaces";

export const AuthTextInput = styled.TextInput`
  width: 90%;
  align-items: center;
  margin-bottom: ${(props: any) =>
    props.lastChild ? spaces.unit : spaces.unit / 2}px;
  padding: 12px;
  border-radius: 4;
  border: 0.5px solid ${colors.gray};
  background-color: ${colors.grayLight};
  font-size: ${fonts.text};
`;
