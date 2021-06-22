import React from "react";
import { useNavigation } from "@react-navigation/native";
import AuthLayout from "../../components/layouts/AuthLayout";
import SubmitBtn from "../../components/buttons/SubmitBtn";
import TextBtn from "../../components/buttons/TextBtn";

export default function Welcome() {
  const navigation = useNavigation();

  return (
    <AuthLayout>
      <SubmitBtn
        onPress={() => navigation.navigate("CreateAccount")}
        disabled={false}
        text="Create Account"
        style={{ marginBottom: 8 }}
      />
      <TextBtn onPress={() => navigation.navigate("Login")} text="Login" />
    </AuthLayout>
  );
}
