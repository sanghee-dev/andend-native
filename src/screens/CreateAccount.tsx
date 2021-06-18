import React, { useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import AuthLayout from "../components/auth/AuthLayout";
import { AuthTextInput } from "../styles/inputs";
import SolidBtn from "../components/buttons/SolidBtn";
import TextBtn from "../components/buttons/TextBtn";
import { colors } from "../styles/styles";

export default function CreateAccount({ navigation }: any) {
  let loading = false;

  const { register, handleSubmit, setValue } = useForm();

  const firstNameRef = useRef<HTMLDivElement>();
  const lastNameRef = useRef<HTMLDivElement>();
  const usernameRef = useRef<HTMLDivElement>();
  const emailRef = useRef<HTMLDivElement>();
  const passwordRef = useRef<HTMLDivElement>();

  const onFocusNext = (next: any) => {
    next?.current?.focus();
  };
  const onValid = (data: any) => {
    console.log(data);
  };

  const registerObj = { required: true, minLength: 5, maxLength: 20 };
  useEffect(() => {
    register("firstName", registerObj);
    register("lastName", registerObj);
    register("username", registerObj);
    register("email", registerObj);
    register("password", registerObj);
  }, [register]);

  const goToLogin = () => navigation.navigate("Login");

  return (
    <AuthLayout>
      <AuthTextInput
        ref={firstNameRef}
        onChangeText={(text) => setValue("firstName", text)}
        onSubmitEditing={() => onFocusNext(lastNameRef)}
        placeholder="First Name"
        placeholderTextColor={colors.grayDark}
        returnKeyType="next"
        autoFocus={true}
      />
      <AuthTextInput
        ref={lastNameRef}
        onChangeText={(text) => setValue("lastName", text)}
        onSubmitEditing={() => onFocusNext(usernameRef)}
        placeholder="Last Name"
        placeholderTextColor={colors.grayDark}
        returnKeyType="next"
      />
      <AuthTextInput
        ref={usernameRef}
        onChangeText={(text) => setValue("username", text)}
        onSubmitEditing={() => onFocusNext(emailRef)}
        placeholder="Username"
        placeholderTextColor={colors.grayDark}
        returnKeyType="next"
        autoCapitalize="none"
      />
      <AuthTextInput
        ref={emailRef}
        onChangeText={(text) => setValue("email", text)}
        onSubmitEditing={() => onFocusNext(passwordRef)}
        placeholder="Email"
        placeholderTextColor={colors.grayDark}
        keyboardType="email-address"
        returnKeyType="next"
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

      <SolidBtn
        onPress={handleSubmit(onValid)}
        disabled={false}
        loading={loading}
        text="Create Account"
        style={{ marginBottom: 8 }}
      />
      <TextBtn onPress={goToLogin} text="Login" />
    </AuthLayout>
  );
}
