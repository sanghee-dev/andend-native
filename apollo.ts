import { ApolloClient, InMemoryCache, makeVar } from "@apollo/client";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const isLoggedInVar = makeVar<boolean>(false);

export const logUserIn = async (token) => {
  await AsyncStorage.multiSet([
    ["token", JSON.stringify(token)],
    ["loggedIn", JSON.stringify("true")],
  ]);
  isLoggedInVar(true);
};

const client = new ApolloClient({
  uri: "http://7b92550ebcdf.ngrok.io/graphql",
  cache: new InMemoryCache(),
});

export default client;
