var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  brand: {
    type: String,
    required: false,
  },
  order: {
    type: Schema.Types.ObjectId,
    ref: 'Order',
  },
});

// This creates our model from the above schema, using mongoose's model method
var Product = mongoose.model('Product', ProductSchema);

// Export the Article model
module.exports = Product;
