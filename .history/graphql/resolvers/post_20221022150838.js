const Post = require('../../models/Post');

const postResolvers = {
  Query: {
    async getPost(_, { postID }) {
      try {
        Post.findOne({ _id: postID });
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
