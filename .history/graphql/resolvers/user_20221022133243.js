const User = require('../../models/User');

const userResolvers = {
  Query: {},
  Mutation: {
    register(parent, args, ctx, info) {},
  },
};

module.exports = userResolvers;
