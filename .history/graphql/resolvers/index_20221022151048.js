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
  },
};

module.exports = resolvers;
