const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: { type: String, required: true, enum: ['School Uniforms', 'Company Uniforms', 'Other Industries'] },
  description: { type: String, required: true },
  imageUrl: { type: String, required: true },
  price: { type: Number },
});

module.exports = mongoose.model('Product', productSchema);
