import React, { useEffect, useRef } from "react";
import { ActivityIndicator } from "react-native";
import { useForm } from "react-hook-form";
import AuthLayout from "../components/auth/AuthLayout";
import { AuthTextInput } from "../styles/inputs";
import {
  SolidButton,
  SolidButtonText,
  TextButton,
  TextButtonText,
} from "../styles/buttons";
import { colors } from "../styles/styles";

export default function Login({ navigation }: any) {
  let loading = false;

  const { register, handleSubmit, setValue } = useForm();
  const usernameRef = useRef<HTMLDivElement>();
  const passwordRef = useRef<HTMLDivElement>();

  const onFocusNext = (next: any) => {
    next?.current?.focus();
  };
  const onValid = (data: any) => {
    console.log(data);
  };

  const registerObj = { required: true, minLength: 5, maxLength: 20 };
  useEffect(() => {
    register("username", registerObj);
    register("password", registerObj);
  }, [register]);

  const goToCreateAccount = () => navigation.navigate("CreateAccount");

  return (
    <AuthLayout>
      <AuthTextInput
        ref={usernameRef}
        onChangeText={(text) => setValue("username", text)}
        onSubmitEditing={() => onFocusNext(passwordRef)}
        placeholder="Username"
        placeholderTextColor={colors.grayDark}
        returnKeyType="next"
        autoCapitalize="none"
      />
      <AuthTextInput
        ref={passwordRef}
        onChangeText={(text) => setValue("password", text)}
        onSubmitEditing={handleSubmit(onValid)}
        placeholder="Password"
        placeholderTextColor={colors.grayDark}
        secureTextEntry={true}
        returnKeyType="done"
        lastChild={true}
      />

      {/* error message */}

      <SolidButton
        onPress={handleSubmit(onValid)}
        disabled={false}
        style={{ marginBottom: 8 }}
      >
        {loading ? (
          <ActivityIndicator size="small" color={colors.green} />
        ) : (
          <SolidButtonText>Log in</SolidButtonText>
        )}
      </SolidButton>
      <TextButton onPress={goToCreateAccount}>
        <TextButtonText>Create Account</TextButtonText>
      </TextButton>
    </AuthLayout>
  );
}
