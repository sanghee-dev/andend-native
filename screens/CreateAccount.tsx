import React from "react";
import { StatusBar } from "expo-status-bar";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";

export default function CreateAccount() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text>CreateAccount</Text>
      <MaterialCommunityIcons name="coffee-outline" size={24} color="black" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
