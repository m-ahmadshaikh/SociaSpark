const { Types } = require('mongoose');
const Post = require('../../models/Post');
const checkAuth = require('../../utils/check-auth');

const commentResolver = {
  Mutation: {
    createComment: async (_, { postId, body }, context) => {
      const user = checkAuth(context);
      const post = await Post.findById(Types.ObjectId(postId));
      if (body.trim() === '') {
        throw new Error('Body is empty');
      }
    },
    deleteComment: () => {},
    likePost: () => {},
  },
};
module.exports = commentResolver;
