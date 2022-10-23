var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var postSchema = new Schema({
  body: String,
  username: String,
  createdAt: String,
  comments: [],
});

// This creates our model from the above schema, using mongoose's model method
const Post = mongoose.model('Post', postSchema);

// Export the Article model
module.exports = Post;
