import dotenv from "dotenv";
dotenv.config();
import ApolloClient from "apollo-client";
import gql from "graphql-tag";
import seedMutations from "./seed-mutations";
import fetch from "isomorphic-fetch";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";

const client = new ApolloClient({
  link: new HttpLink({ uri: process.env.GRAPHQL_URI, fetch }),
  cache: new InMemoryCache()
});
client.mutate({
    mutation: gql(seedMutations)
}).then(data => console.log(data))
.catch(error => console.error(error));
