import React, { useEffect, useRef } from "react";
import { gql, useMutation } from "@apollo/client";
import { isLoggedInVar } from "../../apollo";
import { useForm } from "react-hook-form";
import AuthLayout from "../components/auth/AuthLayout";
import { AuthTextInput } from "../styles/inputs";
import SolidBtn from "../components/buttons/SolidBtn";
import TextBtn from "../components/buttons/TextBtn";
import { colors } from "../styles/styles";

interface ILoginProps {
  login: {
    ok: boolean;
    error?: string;
    token?: string;
  };
}
interface IFormProps {
  username: string;
  password: string;
}

const LOGIN_MUTATION = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      ok
      error
      token
    }
  }
`;

export default function Login({ navigation, route: { params } }: any) {
  const usernameRef = useRef<HTMLDivElement>();
  const passwordRef = useRef<HTMLDivElement>();
  const { register, handleSubmit, setValue, watch } = useForm<IFormProps>({
    defaultValues: { username: params?.username, password: params?.password },
  });

  const onFocusNext = (next: any) => {
    next?.current?.focus();
  };
  const onValid = (data: any) => {
    if (!loading) loginMutation({ variables: { ...data } });
  };
  const onCompleted = (data: ILoginProps) => {
    const {
      login: { ok, error, token },
    } = data;
    if (ok) isLoggedInVar(true);
  };

  const [loginMutation, { loading }] = useMutation(LOGIN_MUTATION, {
    onCompleted,
  });

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
        value={watch("username")}
        placeholder="Username"
        placeholderTextColor={colors.grayDark}
        returnKeyType="next"
        autoCapitalize="none"
      />
      <AuthTextInput
        ref={passwordRef}
        onChangeText={(text) => setValue("password", text)}
        onSubmitEditing={handleSubmit(onValid)}
        value={watch("password")}
        placeholder="Password"
        placeholderTextColor={colors.grayDark}
        secureTextEntry={true}
        returnKeyType="done"
        lastChild={true}
      />

      {/* error message */}

      <SolidBtn
        onPress={handleSubmit(onValid)}
        disabled={!watch("username") || !watch("password")}
        loading={loading}
        text="Log in"
        style={{ marginBottom: 8 }}
      />
      <TextBtn onPress={goToCreateAccount} text="Create Account" />
    </AuthLayout>
  );
}
