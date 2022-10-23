const User = require('../../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const userResolvers = {
  Query: {},
  Mutation: {
    async register(
      _,
      { input: { email, password, confirmPassword, username } },
      ctx,
      info
    ) {
      password = await bcrypt.hash(password, 12);
      const newUser = User({
        email,
        password,
        createdAt: new Date().toISOString(),
        username,
      });
    },
  },
};

module.exports = userResolvers;
