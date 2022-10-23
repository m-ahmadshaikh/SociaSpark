const { Types } = require('mongoose');
const Post = require('../../models/Post');
const checkAuth = require('../../utils/check-auth');

const commentResolver = {
  Mutation: {
    createComment: async (_, { postId }, context) => {
      const user = checkAuth(context);
      const post = await Post.findById(Types.ObjectId(postId));
    },
    deleteComment: () => {},
    likePost: () => {},
  },
};
module.exports = commentResolver;
