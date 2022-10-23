const { AuthenticationError } = require('apollo-server');
const { Types } = require('mongoose');
const Post = require('../../models/Post');
const checkAuth = require('../../utils/check-auth');

const postResolvers = {
  Subscription: {
    newPost: {
      subscribe: (_, __, { pubsub }) => pubsub.asyncIterator(['New_POST']),
    },
  },
  Mutation: {
    async deletePost(_, { id }, context) {
      const user = checkAuth(context);

      try {
        const post = await Post.findById(Types.ObjectId(id));
        if (!post) {
          return 'Post does not exist';
        }
        if (post.username === user.username) {
          const res = await Post.findByIdAndDelete(Types.ObjectId(id));
          if (res) {
            return 'Successfully deleted the post';
          }
        }
        throw new AuthenticationError('You are not the author of the post');
      } catch (error) {
        throw new Error(error);
      }
    },
    async createPost(_, { body }, context) {
      const { username, email, id } = checkAuth(context);
      console.log(username);
      const newPost = new Post({
        body: body,
        user: id,
        username: username,
        createdAt: new Date().toISOString(),
      });
      const post = await newPost.save();
      context.pubsub.publish('NEW_POST');
      return post;
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
        const posts = Post.find({}).sort({ createdAt: -1 });
        return posts;
      } catch (error) {
        throw new Error(error);
      }
    },
  },
};

module.exports = postResolvers;
