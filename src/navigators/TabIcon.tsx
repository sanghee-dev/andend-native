import React from "react";
import { Ionicons } from "@expo/vector-icons";

interface IProps {
  iconName: string;
  focused: boolean;
  color: string;
}

export default function TabIcon({ iconName, focused, color }: IProps) {
  return (
    <Ionicons
      name={focused ? iconName : `${iconName}-outline`}
      color={color}
      size={22}
    />
  );
}
