const User = require('../../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const userResolvers = {
  Query: {},
  Mutation: {
    register(
      _,
      { input: { email, password, confirmPassword, username } },
      ctx,
      info
    ) {
      const enPass = bcrypt.enc;
    },
  },
};

module.exports = userResolvers;
