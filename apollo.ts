import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
  makeVar,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { offsetLimitPagination } from "@apollo/client/utilities";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const isLoggedInVar = makeVar<boolean>(false);
export const tokenVar = makeVar<string>("");

const TOKEN = "token";

export const logUserIn = async (token: string | undefined) => {
  await AsyncStorage.setItem(TOKEN, token);
  isLoggedInVar(true);
  tokenVar(token);
};

export const logUserOut = async () => {
  await AsyncStorage.removeItem(TOKEN);
  isLoggedInVar(false);
  tokenVar("");
};

const httpLink = createHttpLink({
  uri: "https://andend.herokuapp.com/graphql",
});

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      token: tokenVar(),
      authorization: tokenVar(),
    },
  };
});

export const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        seeFeed: offsetLimitPagination(),
      },
    },
  },
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          seeFeed: offsetLimitPagination(),
        },
      },
    },
  }),
});

export default client;
