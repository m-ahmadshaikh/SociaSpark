var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var postSchema = new Schema({
  username: String,
  email: String,
  password: String,
  createdAt: String,
});

// This creates our model from the above schema, using mongoose's model method
const Post = mongoose.model('Post', postSchema);

// Export the Article model
module.exports = Post;
