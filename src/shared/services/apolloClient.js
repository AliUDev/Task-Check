import { ApolloClient, ApolloLink, InMemoryCache } from "@apollo/client";
import { HttpLink } from "apollo-link-http";
import { BaseUrl } from "../utils/constants";
import { createUploadLink } from "apollo-upload-client";

const httpLink = new HttpLink({
  uri: BaseUrl,
});

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: createUploadLink({
    uri: BaseUrl,
  }),
});

// ApolloLink.from([httpLink]),
