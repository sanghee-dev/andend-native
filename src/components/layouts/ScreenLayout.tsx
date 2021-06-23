import React from "react";
import { ActivityIndicator } from "react-native";
import styled from "styled-components/native";
import { colors } from "../../styles/colors";

interface IProps {
  children: React.ReactNode;
  loading: boolean;
}

const View = styled.View`
  flex: 1;
  align-items: center;
  background-color: ${colors.white};
`;

export default function ScreenLayout({ children, loading }: IProps) {
  return (
    <View>
      {loading ? (
        <ActivityIndicator color={colors.main} size="small" />
      ) : (
        <>{children}</>
      )}
    </View>
  );
}
