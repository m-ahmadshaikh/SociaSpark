const { Types } = require('mongoose');
const Post = require('../../models/Post');

const commentResolver = {
  Mutation: {
    createComment: async (_, { postId }) => {
      const post = await Post.findById(Types.ObjectId(postId));
    },
    deleteComment: () => {},
    likePost: () => {},
  },
};
module.exports = commentResolver;
