const User = require('../../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { SECRET_KEY } = require('../../config');
const { UserInputError } = require('apollo-server');
const {
  validateRegisterInput,
  validateLoginInput,
} = require('../../utils/validators');

const generateToken = async ({ username, email, id }) => {
  return await jwt.sign(
    {
      username,
      email,
      id,
    },
    SECRET_KEY,
    { expiresIn: '1h' }
  );
};

const userResolvers = {
  Query: {},
  Mutation: {
    async register(
      _,
      { input: { email, password, confirmPassword, username } }
    ) {
      const user = await User.findOne({ username });
      if (user) {
        throw new UserInputError('username is taken', {
          errors: { username: 'This Username is taken' },
        });
      }

      const { errors, valid } = validateRegisterInput(
        username,
        email,
        password,
        confirmPassword
      );

      if (!valid) {
        throw new UserInputError('Errors', errors);
      }
      password = await bcrypt.hash(password, 12);
      const newUser = new User({
        email,
        password,
        createdAt: new Date().toISOString(),
        username,
      });
      const res = await newUser.save();
      const token = generateToken(res);

      return { ...res._doc, id: res.id, token };
    },
    async login(_, { username, password }) {
      const { errors, valid } = validateLoginInput(username, password);
      const user = await User.findOne({ username });

      if (!user) {
        errors.general = 'user not found';
        throw new UserInputError('User not found', errors);
      }
      const match = await bcrypt.compare(password, user.password);
      if (!match) {
        errors.general = 'user not found';
        throw new UserInputError('Wrong Credentials', errors);
      }
      const token = generateToken(user);
      return {
        ...user._doc,
        id: user._id,
        token,
      };
    },
  },
};

module.exports = userResolvers;
