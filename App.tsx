import React, { useState } from "react";
import { ApolloProvider, useReactiveVar } from "@apollo/client";
import client, { isLoggedInVar, tokenVar, cache } from "./apollo";
import { NavigationContainer } from "@react-navigation/native";
import AppLoading from "expo-app-loading";
import { Asset } from "expo-asset";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import { AppearanceProvider, useColorScheme } from "react-native-appearance";
import LoggedOutNav from "./src/navigators/LoggedOutNav";
import LoggedInNav from "./src/navigators/LoggedInNav";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AsyncStorageWrapper, persistCache } from "apollo3-cache-persist";

export default function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const isLoggedIn = useReactiveVar(isLoggedInVar);
  const colorScheme = useColorScheme();

  const preloadAssets = () => {
    const fontsToLoad = [Ionicons.font];
    const fontPromises = fontsToLoad.map((font) => Font.loadAsync(font));
    const imagesToLoad = [
      require("./assets/logo.png"),
      "https://user-images.githubusercontent.com/61302874/121893131-94ab4300-cd58-11eb-90ec-22caac21f50f.png",
    ];
    const imagePromises = imagesToLoad.map((image) => Asset.loadAsync(image));
    return Promise.all([...fontPromises, ...imagePromises]);
  };
  const preload = async () => {
    const token = await AsyncStorage.getItem("token");
    if (token) {
      isLoggedInVar(true);
      tokenVar(token);
    }
    await persistCache({
      cache,
      storage: new AsyncStorageWrapper(AsyncStorage),
    });
    return await preloadAssets();
  };
  const onFinish = () => setLoading(false);
  const onError = () => console.warn;

  return loading ? (
    <AppLoading startAsync={preload} onFinish={onFinish} onError={onError} />
  ) : (
    <ApolloProvider client={client}>
      <AppearanceProvider>
        <NavigationContainer>
          {isLoggedIn ? <LoggedInNav /> : <LoggedOutNav />}
        </NavigationContainer>
      </AppearanceProvider>
    </ApolloProvider>
  );
}
