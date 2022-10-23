const { Types } = require('mongoose');
const Post = require('../../models/Post');
const checkAuth = require('../../utils/check-auth');

const postResolvers = {
  Mutation: {
    async createPost(_, { body }, context) {
      const { username, email, id } = checkAuth(context);

      const post = new Post({
        body: body,
        user: id,
        username: username,
        createdAt: new Date().toISOString(),
      });
    },
  },
  Query: {
    async getPost(_, { postID }) {
      try {
        const post = await Post.findById(Types.ObjectId(postID));
        if (post) {
          return { ...post._doc, id: post._id };
        } else {
          throw new Error('Post not found');
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
