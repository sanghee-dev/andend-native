import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function CreateAccount({ navigation }: any) {
  return (
    <View>
      <StatusBar style="auto" />
      <Text>CreateAccount</Text>
      <TouchableOpacity onPress={() => navigation.navigate("Login")}>
        <Text>Login</Text>
      </TouchableOpacity>
    </View>
  );
}
