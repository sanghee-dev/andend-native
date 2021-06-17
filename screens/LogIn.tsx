import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function Login({ navigation }: any) {
  return (
    <>
      <StatusBar style="auto" />
      <Text>Login</Text>
      <TouchableOpacity onPress={() => navigation.navigate("CreateAccount")}>
        <Text>Create Account</Text>
      </TouchableOpacity>
    </>
  );
}
