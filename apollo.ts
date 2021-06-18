import { ApolloClient, InMemoryCache, makeVar } from "@apollo/client";

export const isLoggedInVar = makeVar<boolean>(false);

const client = new ApolloClient({
  uri: "http://0b2222d60e48.ngrok.io/graphql",
  cache: new InMemoryCache(),
});

export default client;
