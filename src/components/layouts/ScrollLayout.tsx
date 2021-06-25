import React from "react";
import { ActivityIndicator } from "react-native";
import styled from "styled-components/native";
import { colors } from "../../styles/colors";

interface IProps {
  children: React.ReactNode;
  loading: boolean;
  style?: any;
}

const View = styled.View`
  width: 100%;
  align-items: center;
  background-color: ${colors.white};
`;

export default function ScrollLayout({ children, loading, style }: IProps) {
  return (
    <View style={style}>
      {loading ? (
        <ActivityIndicator color={colors.main} size="small" />
      ) : (
        children
      )}
    </View>
  );
}
