const User = require('../../models/User');

const userResolvers = {
  Query: {},
  Mutation: {
    register(_, __, ctx, info) {},
  },
};

module.exports = userResolvers;
