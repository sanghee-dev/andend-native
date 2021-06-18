import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://0b2222d60e48.ngrok.io/graphql",
  cache: new InMemoryCache(),
});

export default client;
