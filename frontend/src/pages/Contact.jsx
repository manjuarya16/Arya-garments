import React, { useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import { MapPin, Phone, Mail, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    try {
      const response = await axios.post('http://localhost:5000/api/contact', formData);
      setStatus({ type: 'success', message: response.data.message || 'Message sent successfully!' });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setStatus({
        type: 'error',
        message: error.response?.data?.message || 'Something went wrong. Please try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div style={{ backgroundColor: 'var(--background)', minHeight: '100vh', paddingBottom: '4rem' }}>

      {/* Contact Hero Banner */}
      <section className="contact-hero">
        <div className="contact-hero-bg"></div>
        <div className="container hero-content">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="hero-title" style={{ fontSize: '3.5rem', color: 'white', marginBottom: '1rem' }}>
              Let's Start a Conversation
            </h1>
            <p className="hero-subtitle" style={{ color: 'rgba(255,255,255,0.9)', maxWidth: '600px', margin: '0 auto' }}>
              Have questions about bulk orders, custom designs, or our manufacturing process? We are here to help.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container" style={{ marginTop: '-4rem', position: 'relative', zIndex: 10 }}>
        <div className="contact-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'start' }}>

          {/* Contact Form */}
          <motion.div
            className="contact-container glass-card"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            style={{ margin: 0, width: '100%', padding: '3rem' }}
          >
            <h2 style={{ marginBottom: '1.5rem', fontSize: '1.5rem', fontWeight: 700 }}>Send a Message</h2>

            {status.message && (
              <motion.div 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                style={{
                  padding: '1.25rem', marginBottom: '1.5rem', borderRadius: '0.75rem',
                  backgroundColor: status.type === 'success' ? 'rgba(52, 211, 153, 0.15)' : 'rgba(248, 113, 113, 0.15)',
                  color: status.type === 'success' ? 'var(--primary-dark)' : '#991b1b',
                  border: `1px solid ${status.type === 'success' ? 'var(--primary-light)' : '#fecaca'}`,
                  fontWeight: 600,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem'
                }}
              >
                {status.type === 'success' ? <CheckCircle size={24} style={{ color: 'var(--primary)' }} /> : <span style={{ fontSize: '1.5rem' }}>⚠️</span>}
                {status.message}
              </motion.div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name" className="form-label">Full Name</label>
                <input type="text" id="name" name="name" className="form-input" value={formData.name} onChange={handleChange} required placeholder="John Doe" />
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">Email Address</label>
                <input type="email" id="email" name="email" className="form-input" value={formData.email} onChange={handleChange} required placeholder="john@example.com" />
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">Your Message</label>
                <textarea id="message" name="message" className="form-textarea" value={formData.message} onChange={handleChange} required placeholder="Tell us about your requirements..."></textarea>
              </div>

              <button type="submit" className="btn btn-primary" style={{ width: '100%' }} disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </motion.div>

          {/* Map and Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="glass-card" style={{ padding: '2rem', borderRadius: '1.5rem', marginBottom: '2rem' }}>
              <h2 style={{ marginBottom: '1.5rem', fontSize: '1.5rem', fontWeight: 700 }}>Our Information</h2>

              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem', color: 'var(--text-muted)' }}>
                <MapPin size={20} style={{ color: 'var(--primary)', marginRight: '1rem' }} />
                <span>Arya Garments, Dhanial Tower Besment, Back side of Ambika misal, Sukenkar len, Panchvati, Nashik 422003</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem', color: 'var(--text-muted)' }}>
                <Phone size={20} style={{ color: 'var(--primary)', marginRight: '1rem' }} />
                <span>+91 9923023884</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', color: 'var(--text-muted)' }}>
                <Mail size={20} style={{ color: 'var(--primary)', marginRight: '1rem' }} />
                <span>manjuarya102@gmail.com</span>
              </div>
            </div>

            {/* Google Maps Embed */}
            <div className="glass-card" style={{ borderRadius: '1.5rem', overflow: 'hidden', height: '350px' }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9806950005705!2d-73.99026218459414!3d40.75141017932766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1625068412144!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="Our Location"
              ></iframe>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
