import React, { useEffect, useRef } from "react";
import { gql, useMutation } from "@apollo/client";
import { useForm } from "react-hook-form";
import AuthLayout from "../components/auth/AuthLayout";
import { AuthTextInput } from "../styles/inputs";
import SolidBtn from "../components/buttons/SolidBtn";
import TextBtn from "../components/buttons/TextBtn";
import { colors } from "../styles/styles";

interface ICreateAccountProps {
  createAccount: {
    ok: boolean;
    error?: string;
  };
}
interface IFormProps {
  firstName: string;
  lastName?: string;
  username: string;
  email: string;
  password: string;
}

const CREATE_ACCOUNT_MUTATION = gql`
  mutation createAccount(
    $firstName: String!
    $lastName: String
    $username: String!
    $email: String!
    $password: String!
  ) {
    createAccount(
      firstName: $firstName
      lastName: $lastName
      username: $username
      email: $email
      password: $password
    ) {
      ok
      error
    }
  }
`;

export default function CreateAccount({ navigation }: any) {
  const firstNameRef = useRef<HTMLDivElement>();
  const lastNameRef = useRef<HTMLDivElement>();
  const usernameRef = useRef<HTMLDivElement>();
  const emailRef = useRef<HTMLDivElement>();
  const passwordRef = useRef<HTMLDivElement>();

  const { register, handleSubmit, getValues, setValue, watch } =
    useForm<IFormProps>();

  const onFocusNext = (next: any) => {
    next?.current?.focus();
  };
  const onValid = (data: any) => {
    if (!loading) createAccountMutation({ variables: { ...data } });
  };
  const onCompleted = (data: ICreateAccountProps) => {
    const {
      createAccount: { ok, error },
    } = data;
    const { username, password } = getValues();
    if (ok) navigation.navigate("Login", { username, password });
  };

  const [createAccountMutation, { loading }] = useMutation(
    CREATE_ACCOUNT_MUTATION,
    {
      onCompleted,
    }
  );

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
        onChangeText={(text: string) => setValue("firstName", text)}
        onSubmitEditing={() => onFocusNext(lastNameRef)}
        placeholder="First Name"
        placeholderTextColor={colors.grayDark}
        returnKeyType="next"
        autoFocus={true}
      />
      <AuthTextInput
        ref={lastNameRef}
        onChangeText={(text: string) => setValue("lastName", text)}
        onSubmitEditing={() => onFocusNext(usernameRef)}
        placeholder="Last Name"
        placeholderTextColor={colors.grayDark}
        returnKeyType="next"
      />
      <AuthTextInput
        ref={usernameRef}
        onChangeText={(text: string) => setValue("username", text)}
        onSubmitEditing={() => onFocusNext(emailRef)}
        placeholder="Username"
        placeholderTextColor={colors.grayDark}
        returnKeyType="next"
        autoCapitalize="none"
      />
      <AuthTextInput
        ref={emailRef}
        onChangeText={(text: string) => setValue("email", text)}
        onSubmitEditing={() => onFocusNext(passwordRef)}
        placeholder="Email"
        placeholderTextColor={colors.grayDark}
        keyboardType="email-address"
        returnKeyType="next"
      />
      <AuthTextInput
        ref={passwordRef}
        onChangeText={(text: string) => setValue("password", text)}
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
        disabled={
          !watch("firstName") ||
          !watch("lastName") ||
          !watch("username") ||
          !watch("email") ||
          !watch("password")
        }
        loading={loading}
        text="Create Account"
        style={{ marginBottom: 8 }}
      />
      <TextBtn onPress={goToLogin} text="Login" />
    </AuthLayout>
  );
}
