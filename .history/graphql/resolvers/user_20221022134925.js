const User = require('../../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { SECRET_KEY } = require('../../config');
const { UserInputError } = require('apollo-server');
const userResolvers = {
  Query: {},
  Mutation: {
    async register(
      _,
      { input: { email, password, confirmPassword, username } },
      ctx,
      info
    ) {
      const user = await User.findOne({ username });
      if (user) {
        throw new UserInputError('U');
      }

      password = await bcrypt.hash(password, 12);
      const newUser = new User({
        email,
        password,
        createdAt: new Date().toISOString(),
        username,
      });
      const res = await newUser.save();
      const token = jwt.sign(
        {
          username,
          email,
          id: res.id,
        },
        SECRET_KEY,
        { expiresIn: '1h' }
      );
      return { ...res._doc, id: res.id, token };
    },
  },
};

module.exports = userResolvers;