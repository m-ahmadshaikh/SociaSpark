const { UserInputError } = require('apollo-server');
const { Types } = require('mongoose');
const Post = require('../../models/Post');
const checkAuth = require('../../utils/check-auth');

const commentResolver = {
  Mutation: {
    deleteComment: async (_, { postId, commentId }, context) => {
      const { username } = checkAuth(context);

      const post = await Post.findById(Types.ObjectId(postId));
      if (!post) {
        throw new Error('Post not found');
      }
      const commentIndex = post.comments.findIndex(
        (com) => com._id === commentId
      );
      if (post.comments[commentIndex].username === username) {
        post.splice(1, commentIndex);
      }
    },
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
        await post.save();
        return post;
      }
      throw new UserInputError('Post not found');
    },
    deleteComment: () => {},
    likePost: () => {},
  },
};
module.exports = commentResolver;
