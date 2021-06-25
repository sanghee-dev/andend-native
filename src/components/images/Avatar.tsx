import React from "react";
import styled from "styled-components/native";
import { colors } from "../../styles/colors";
import { borders } from "../../styles/borders";
import { Ionicons } from "@expo/vector-icons";

interface IProps {
  uri: string | undefined;
  size: number;
  style?: any;
}

const Image = styled.Image`
  border: ${borders.border};
`;
const Icon = styled.View`
  border: ${borders.border};
  justify-content: flex-start;
  align-items: flex-end;
`;

export default function Avatar({ uri, size, style }: IProps) {
  return uri ? (
    <Image
      source={{ uri }}
      resizeMode="contain"
      style={{ width: size, height: size, borderRadius: size, ...style }}
    />
  ) : (
    <Icon style={{ width: size, height: size, borderRadius: size, ...style }}>
      <Ionicons
        name="flower-outline" // "flower-sharp"
        size={size * 0.92}
        style={{
          color: colors.black,
        }}
      />
    </Icon>
  );
}
