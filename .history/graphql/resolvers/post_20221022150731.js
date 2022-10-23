const Post = require('../../models/Post');

const postResolvers = {
  Query: {
    async getPosts() {},
    posts: async () => {
      try {
        const posts = Post.find({});
        return posts;
      } catch (error) {
        throw new Error(error);
      }
    },
  },
};

module.exports = postResolvers;
