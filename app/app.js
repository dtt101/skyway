import express from 'express';
import graphqlHTTP from 'express-graphql';
import { skySchema } from './skySchema';

const app = express();

app.use('/graphql', graphqlHTTP({ schema: skySchema, graphiql: true }));

export default app;
