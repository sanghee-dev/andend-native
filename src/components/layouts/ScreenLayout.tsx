import React from "react";
import { ActivityIndicator } from "react-native";
import styled from "styled-components/native";
import { colors } from "../../styles/colors";

const View = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${colors.white};
`;

export default function ScreenLayout({ children, loading }: any) {
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
