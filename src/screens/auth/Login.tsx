import React, { useEffect, useRef } from "react";
import { useNavigation } from "@react-navigation/native";
import { gql, useMutation } from "@apollo/client";
import { logUserIn } from "../../../apollo";
import { login, loginVariables } from "../../__generated__/login";
import { useForm } from "react-hook-form";
import AuthLayout from "../../components/layouts/AuthLayout";
import { AuthTextInput } from "../../styles/inputs";
import SolidBtn from "../../components/buttons/SolidBtn";
import TextBtn from "../../components/buttons/TextBtn";
import { colors } from "../../styles/colors";

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

export default function Login({ route: { params } }: any) {
  const navigation = useNavigation();
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
  const onCompleted = async (data: ILoginProps) => {
    const {
      login: { ok, error, token },
    } = data;
    if (ok) await logUserIn(token);
  };

  const [loginMutation, { loading }] = useMutation<login, loginVariables>(
    LOGIN_MUTATION,
    { onCompleted }
  );

  const registerObj = { required: true, minLength: 5, maxLength: 20 };
  useEffect(() => {
    register("username", registerObj);
    register("password", registerObj);
  }, [register]);

  return (
    <AuthLayout>
      <AuthTextInput
        ref={usernameRef}
        onChangeText={(text: string) => setValue("username", text)}
        onSubmitEditing={() => onFocusNext(passwordRef)}
        value={watch("username")}
        placeholder="Username"
        placeholderTextColor={colors.grayDark}
        returnKeyType="next"
        autoCapitalize="none"
      />
      <AuthTextInput
        ref={passwordRef}
        onChangeText={(text: string) => setValue("password", text)}
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
      <TextBtn
        onPress={() => navigation.navigate("CreateAccount")}
        text="Create Account"
      />
    </AuthLayout>
  );
}
