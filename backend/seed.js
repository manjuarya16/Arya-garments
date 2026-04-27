const mongoose = require('mongoose');
const Product = require('./models/Product');
require('dotenv').config();

const dummyProducts = [
  {
    name: 'Classic School Shirt',
    category: 'School Uniforms',
    description: 'High-quality, breathable white shirt for daily school use.',
    imageUrl: 'https://images.unsplash.com/photo-1598032895397-b9472444bf93?auto=format&fit=crop&w=800&q=80',
    price: 15.99
  },
  {
    name: 'School Pleated Skirt',
    category: 'School Uniforms',
    description: 'Durable pleated skirt in navy blue.',
    imageUrl: 'https://images.unsplash.com/photo-1522062635955-4702fb7d13b4?auto=format&fit=crop&w=800&q=80',
    price: 19.99
  },
  {
    name: 'Corporate Blazer',
    category: 'Company Uniforms',
    description: 'Premium tailored blazer for a professional corporate look.',
    imageUrl: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80',
    price: 89.99
  },
  {
    name: 'Industrial Safety Coverall',
    category: 'Other Industries',
    description: 'High-visibility safety coveralls with reflective stripes.',
    imageUrl: 'https://images.unsplash.com/photo-1623832863920-5694a500902c?auto=format&fit=crop&w=800&q=80',
    price: 45.00
  },
  {
    name: 'Hospitality Apron',
    category: 'Other Industries',
    description: 'Stain-resistant black apron for restaurants and cafes.',
    imageUrl: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=800&q=80',
    price: 12.50
  }
];

mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/garment-manufacturing')
  .then(async () => {
    console.log('Connected to MongoDB. Seeding data...');
    await Product.deleteMany({});
    await Product.insertMany(dummyProducts);
    console.log('Data seeded successfully!');
    mongoose.disconnect();
  })
  .catch(err => {
    console.error('Failed to seed data', err);
    mongoose.disconnect();
  });
