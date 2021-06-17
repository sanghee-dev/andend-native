import React from "react";
import { StatusBar } from "expo-status-bar";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function Welcome({ navigation }: any) {
  return (
    <View>
      <StatusBar style="auto" />
      <MaterialCommunityIcons name="coffee-outline" size={24} color="black" />
      <TouchableOpacity onPress={() => navigation.navigate("CreateAccount")}>
        <Text>Create Account</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Login")}>
        <Text>Login</Text>
      </TouchableOpacity>
    </View>
  );
}
