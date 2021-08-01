import { ApolloServer, gql } from "apollo-server-micro";
import Cors from "micro-cors";


const typeDefs = gql`
  type Query {
    albums: String,
    artista: String
  }
`;



const resolvers = {
  Query: {
    albums: (_parent, _args, _context) => {
      return "Hello teste";
    },
    artista: (_parent, _args, _context) => {
      return "Artista"
    }
  },
};


const cors = Cors({
  allowMethods: ["GET", "POST", "OPTIONS"]
});

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers
});

const handler = apolloServer.createHandler({ path: "/api/graphql" });

export const config = {
  api: {
    bodyParser: false
  }
};

export default cors(handler);
