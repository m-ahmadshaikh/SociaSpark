const Post = require('../../models/Post');

const postResolvers = {
  Query: {
    async getPost(_, { postID }) {
      try {
        const post = Post.findById(postID);
        if (post) {
          return post;
        } else {
        }
      } catch (error) {
        throw new Error(error);
      }
    },
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
