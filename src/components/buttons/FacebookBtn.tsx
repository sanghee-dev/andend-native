import React from "react";
import { TextButton, FacebookText } from "../../styles/buttons";
import { Ionicons } from "@expo/vector-icons";

export default function FacebookBtn() {
  const goToFacebookLogin = () => {};

  return (
    <TextButton onPress={goToFacebookLogin}>
      <FacebookText>
        <Ionicons name="logo-facebook" size={20} />
        {` Log in With Facebook`}
      </FacebookText>
    </TextButton>
  );
}
