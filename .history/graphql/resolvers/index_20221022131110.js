const postResolvers = require('./post');
const userResolvers = require('./user');

resolvers = {
  Query: {
    ...userResolvers.Query,
    ...postResolvers.Query,
  },
};

export default resolvers;
