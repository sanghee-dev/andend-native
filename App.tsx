import React, { useState } from "react";
import { ApolloProvider } from "@apollo/client";
import client from "./apollo";
import AppLoading from "expo-app-loading";
import { Asset } from "expo-asset";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import LoggedOutNav from "./src/navigators/LoggedOutNav";
import { AppearanceProvider, useColorScheme } from "react-native-appearance";

export default function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const colorScheme = useColorScheme();

  const preload = () => {
    const fontsToLoad = [Ionicons.font];
    const fontPromises = fontsToLoad.map((font) => Font.loadAsync(font));
    const imagesToLoad = [
      require("./assets/logo.png"),
      "https://user-images.githubusercontent.com/61302874/121893131-94ab4300-cd58-11eb-90ec-22caac21f50f.png",
    ];
    const imagePromises = imagesToLoad.map((image) => Asset.loadAsync(image));

    return Promise.all([...fontPromises, ...imagePromises]);
  };
  const onFinish = () => setLoading(false);
  const onError = () => console.warn;

  return loading ? (
    <AppLoading startAsync={preload} onFinish={onFinish} onError={onError} />
  ) : (
    <ApolloProvider client={client}>
      <AppearanceProvider>
        <LoggedOutNav />
      </AppearanceProvider>
    </ApolloProvider>
  );
}
