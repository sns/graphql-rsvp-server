import  * as dotenv from "dotenv";
dotenv.config();
import { makeAugmentedSchema } from "neo4j-graphql-js";
import { v1 as neo4j } from "neo4j-driver";
import { ApolloServer } from "apollo-server";
import typeDefs from "./typeDefs";

const driver = neo4j.driver(
  process.env.NEO4J_BOLT_URL,
  neo4j.auth.basic(process.env.NEO4J_USER, process.env.NEO4J_PASS)
);

const schema = makeAugmentedSchema({ typeDefs });
const server = new ApolloServer({ schema, context: { driver }, playground: true });

server.listen(4000, '0.0.0.0').then(({ url }) => {
  console.log(`GraphQL API ready at ${url}`);
});