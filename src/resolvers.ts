import { neo4jgraphql } from "neo4j-graphql-js";

const resolvers = {
  Query: {
    Player(object, params, ctx, resolveInfo) {
      return neo4jgraphql(object, params, ctx, resolveInfo);
    }
  }
};

export default resolvers;