const { UserInputError } = require('apollo-server');
const { Types } = require('mongoose');
const Post = require('../../models/Post');
const checkAuth = require('../../utils/check-auth');

const commentResolver = {
  Mutation: {
    createComment: async (_, { postId, body }, context) => {
      const user = checkAuth(context);
      const post = await Post.findById(Types.ObjectId(postId));
      if (body.trim() === '') {
        throw new UserInputError('Empty Comment', {
          errors: {
            body: 'Comment body must not be empty',
          },
        });
      }
      if (post) {
        post.comments.unshift({
          body,
          username: user.username,
          createdAt: new Date().toISOString(),
        });
      }
    },
    deleteComment: () => {},
    likePost: () => {},
  },
};
module.exports = commentResolver;
