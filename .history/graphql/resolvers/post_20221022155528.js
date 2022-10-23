const { Types } = require('mongoose');
const Post = require('../../models/Post');
const checkAuth = require('../../utils/check-auth');

const postResolvers = {
  Mutation: {
    async deletePost(_, { id }) {
      try {
        const res = await Post.findByIdAndDelete(Types.ObjectId(id));
        if (res) {
          return 'Successfully deleted the post';
        }
        return 'Post does not exist';
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
