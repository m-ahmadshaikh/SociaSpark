const User = require('../../models/User');

const userResolvers = {
  Query: {},
  Mutation: {
    register(
      _,
      { input: { email, password, confirmPassword, username } },
      ctx,
      info
    ) {},
  },
};

module.exports = userResolvers;
