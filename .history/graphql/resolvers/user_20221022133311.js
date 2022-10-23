const User = require('../../models/User');

const userResolvers = {
  Query: {},
  Mutation: {
    register(_, { input }, ctx, info) {},
  },
};

module.exports = userResolvers;
