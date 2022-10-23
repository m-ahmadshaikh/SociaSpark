const commentResolver = require('./comments');
const postResolvers = require('./post');
const userResolvers = require('./user');

resolvers = {
  Query: {
    ...userResolvers.Query,
    ...postResolvers.Query,
  },
  Mutation: {
    ...userResolvers.Mutation,
    ...postResolvers.Mutation,
    ...commentResolver.Mutation,
  },
  Subscription: {
    ...postResolvers.Subscription,
  },
};

module.exports = resolvers;
