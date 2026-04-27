const express = require('express');
const router = express.Router();
const Product = require('../models/Product');
const Contact = require('../models/Contact');

// Get all products
router.get('/products', async (req, res) => {
  try {
    const category = req.query.category;
    const filter = category ? { category } : {};
    const products = await Product.find(filter);
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

const nodemailer = require('nodemailer');

// Submit contact form
router.post('/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body;
    
    // Save to DB
    const newContact = new Contact({ name, email, message });
    await newContact.save();

    // Send email notification
    if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS
        }
      });

      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: 'manjuarya102@gmail.com',
        subject: `New Arga Garments Inquiry from ${name}`,
        text: `You have received a new inquiry from the website.\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
      };

      await transporter.sendMail(mailOptions);
      console.log('Email notification sent to manjuarya102@gmail.com');
    } else {
      console.log('Email credentials not set. Email not sent.');
    }

    res.status(201).json({ message: 'Contact submitted successfully!' });
  } catch (err) {
    console.error(err);
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
