import { ApolloClient, InMemoryCache, makeVar } from "@apollo/client";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const isLoggedInVar = makeVar<boolean>(false);
export const tokenVar = makeVar<string>("");

export const logUserIn = async (token: string | undefined) => {
  await AsyncStorage.multiSet([
    ["token", token],
    ["loggedIn", "yes"],
  ]);
  isLoggedInVar(true);
  tokenVar(token);
};

export const logUserOut = async () => {
  await AsyncStorage.multiRemove(["token", "loggedIn"]);
  isLoggedInVar(false);
  tokenVar("");
};

const client = new ApolloClient({
  uri: "http://7b92550ebcdf.ngrok.io/graphql",
  cache: new InMemoryCache(),
});

export default client;
