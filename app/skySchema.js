import co from 'co';
import {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString,
    GraphQLBoolean,
    GraphQLNonNull
} from 'graphql';

import {
  getCustomer,
  getRouter,
  getMicrofilter
} from './skyData.js';

let customerType = new GraphQLObjectType({
  name: 'Customer',
  description: 'A customer',
  fields: () => ({
    id: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'The customer id'
    },
    firstName: {
      type: GraphQLString,
      description: 'Customer first name'
    },
    surname: {
      type: GraphQLString,
      description: 'Customer surname'
    }
  })
});

let routerType = new GraphQLObjectType({
  name: 'Router',
  description: 'A router',
  fields: () => ({
    id: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'The router id'
    },
    microfilter: {
      type: GraphQLBoolean,
      description: 'Has a microfilter installed',
      resolve: parent => {
        return co(getMicrofilter(parent));
      }
    },
    model: {
      type: GraphQLString,
      description: 'The router model'
    },
    serialNumber: {
      type: GraphQLString,
      description: 'Serial number'
    }
  })
});

let queryType = new GraphQLObjectType({
  name: 'Query',
  fields: () => ({
    customer: {
      type: customerType,
      args: {
        id: {
          description: 'ID of customer',
          type: new GraphQLNonNull(GraphQLString)
        }
      },
      resolve: (root, { id }) => getCustomer(id),
    },
    router: {
      type: routerType,
      args: {
        id: {
          description: 'ID of router',
          type: new GraphQLNonNull(GraphQLString)
        }
      },
      resolve: (root, { id }) => getRouter(id),
    }
  })
});

export const skySchema = new GraphQLSchema({
  query: queryType
});
