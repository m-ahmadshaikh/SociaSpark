var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  email: String,
});

// This creates our model from the above schema, using mongoose's model method
var Product = mongoose.model('Product', ProductSchema);

// Export the Article model
module.exports = Product;
