import React from "react";
import styled from "styled-components/native";

interface IProps {
  uri: string | undefined;
  size: number;
  style?: any;
}

const Image = styled.Image``;

export default function Avatar({ uri, size, style }: IProps) {
  return (
    <Image
      source={{ uri }}
      resizeMode="contain"
      style={{ width: size, height: size, ...style }}
    />
  );
}
