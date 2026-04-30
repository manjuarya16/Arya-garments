const sequelize = require('./config/database');
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

const seedDatabase = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connected to PostgreSQL for seeding...');
    
    // Sync models and drop existing data
    await sequelize.sync({ force: true });
    console.log('Database synced (all tables recreated).');

    await Product.bulkCreate(dummyProducts);
    console.log('Data seeded successfully!');
    
    process.exit(0);
  } catch (err) {
    console.error('Failed to seed data:', err);
    process.exit(1);
  }
};

seedDatabase();
