const User = require('../../models/Post');

const userResolvers = {
  Query: {
    users: async () => {
      try {
        constusers = User.find({});
        returnusers;
      } catch (error) {
        throw new Error(error);
      }
    },
  },
};

module.exports = userResolvers;
