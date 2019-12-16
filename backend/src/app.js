import express from 'express';
import expressGraphQL from 'express-graphql';
import cors from 'cors';
import graphQLExpress from 'express-graphql';
import { makeExecutableSchema } from 'graphql-tools';

import { typeDefs } from './types/Query';
import { resolvers } from './types/Resolvers';

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

const app = express();

app.use(cors());

app.use('/', graphQLExpress({
  schema,
  pretty: true,
  graphiql: true
}));

app.listen(5000);

console.log('Server started on port 5000');
