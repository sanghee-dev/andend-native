import React from "react";
import styled from "styled-components/native";
import ScreenLayout from "../../components/layouts/ScreenLayout";
import LogOutBtn from "../../components/buttons/LogOutBtn";

export default function Me() {
  return (
    <ScreenLayout loading={false}>
      <LogOutBtn />
    </ScreenLayout>
  );
}
