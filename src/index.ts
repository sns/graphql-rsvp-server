import { makeAugmentedSchema } from "neo4j-graphql-js";
import { v1 as neo4j } from "neo4j-driver";
import { ApolloServer } from "apollo-server";
import typeDefs from "./typeDefs";

const driver = neo4j.driver(
  "bolt://localhost:8888",
  neo4j.auth.basic("neo4j", "neo4j")
);

const schema = makeAugmentedSchema({ typeDefs });
const server = new ApolloServer({ schema, context: { driver } });
 
server.listen(4000, '0.0.0.0').then(({ url }) => {
  console.log(`GraphQL API ready at ${url}`);
});