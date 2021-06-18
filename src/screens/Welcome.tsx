import React from "react";
import AuthLayout from "../components/auth/AuthLayout";
import SolidBtn from "../components/buttons/SolidBtn";
import TextBtn from "../components/buttons/TextBtn";

export default function Welcome({ navigation }: any) {
  const goToCreateAccount = () => navigation.navigate("CreateAccount");
  const goToLogin = () => navigation.navigate("Login");

  return (
    <AuthLayout>
      <SolidBtn
        onPress={goToCreateAccount}
        disabled={false}
        text="Create Account"
        style={{ marginBottom: 8 }}
      />
      <TextBtn onPress={goToLogin} text="Login" />
    </AuthLayout>
  );
}
