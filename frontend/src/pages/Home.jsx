import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import axios from 'axios';
import API_BASE_URL from '../api/config';
import HeroSlider from '../components/HeroSlider';
import { Scissors, Factory, CheckCircle, PackageSearch, PenTool, Shirt, Phone, Mail, MapPin } from 'lucide-react';

const Home = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });
    try {
      const response = await axios.post(`${API_BASE_URL}/contact`, formData);
      setStatus({ type: 'success', message: response.data.message || 'Message sent successfully!' });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setStatus({ type: 'error', message: 'Something went wrong. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const services = [
    { icon: <Scissors size={32} />, title: 'Stitching with Packing', desc: 'Precision stitching combined with retail-ready premium packaging for immediate distribution.' },
    { icon: <Factory size={32} />, title: 'Bulk Production', desc: 'High-capacity, end-to-end manufacturing handling any volume with unwavering quality.' },
    { icon: <PenTool size={32} />, title: 'Designing & Logo Embroidery', desc: 'Custom designs expertly digitized and embroidered to showcase your brand identity.' },
    { icon: <CheckCircle size={32} />, title: 'Quality Assurance', desc: 'Rigorous multi-step inspection protocols ensuring durability and perfection.' },
    { icon: <PackageSearch size={32} />, title: 'Material Sourcing', desc: 'Access to premium, sustainable fabrics and materials tailored to your needs.' },
    { icon: <Shirt size={32} />, title: 'Custom Tailoring', desc: 'Bespoke fitting and pattern making for unique corporate or school requirements.' }
  ];

  const processes = [
    { step: '01', title: 'Consultation & Design', desc: 'We discuss your requirements, select fabrics, and finalize the design.' },
    { step: '02', title: 'Sample Creation', desc: 'A physical prototype is crafted for your review and approval.' },
    { step: '03', title: 'Mass Production', desc: 'Our state-of-the-art facility manufactures your garments with precision.' },
    { step: '04', title: 'Quality & Delivery', desc: 'Every piece is inspected, packed securely, and delivered on time.' }
  ];

  return (
    <div>
      <HeroSlider />

      {/* Services Section */}
      <section className="section-padding">
        <div className="container">
          <h2 className="section-title">Our Premium Services</h2>
          <p className="section-subtitle">Comprehensive manufacturing solutions tailored for your brand's success.</p>
          <div className="services-grid">
            {services.map((svc, idx) => (
              <motion.div 
                key={idx} className="service-card glass-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <div className="service-icon">{svc.icon}</div>
                <h3 style={{ marginBottom: '1rem', fontSize: '1.25rem' }}>{svc.title}</h3>
                <p style={{ color: 'var(--text-muted)' }}>{svc.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section (New) */}
      <section className="section-padding bg-alt">
        <div className="container">
          <h2 className="section-title">Our Manufacturing Process</h2>
          <p className="section-subtitle">A seamless journey from concept to reality.</p>
          <div className="process-grid">
            {processes.map((process, index) => (
              <motion.div 
                key={index}
                className="process-card"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className="process-step">{process.step}</div>
                <h3 className="process-title">{process.title}</h3>
                <p className="process-desc">{process.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="section-padding">
        <div className="container about-grid">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="image-wrapper">
              <img src="https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800&q=80" alt="Garment Factory" className="about-image glass-img" />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '1.5rem' }}>About Arya Garments</h2>
            <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', fontSize: '1.1rem' }}>
              With years of excellence in the textile industry, Arya Garments has established itself as a premier manufacturer of high-quality uniforms. 
              We believe that a great uniform doesn't just look good—it instills confidence, fosters team spirit, and prioritizes safety.
            </p>
            <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', fontSize: '1.1rem' }}>
              From initial design consultation to final delivery, our dedicated team ensures every stitch meets our rigorous standards. 
              We partner with schools, leading companies, and industrial sectors to deliver apparel that truly represents their brand.
            </p>
            <Link to="/products" className="btn btn-primary">Discover Our Quality</Link>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-alt" style={{ position: 'relative', overflow: 'hidden' }}>
        {/* Background Accents */}
        <div style={{ position: 'absolute', top: '-10%', right: '-5%', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(5, 150, 105, 0.08) 0%, transparent 70%)', borderRadius: '50%', filter: 'blur(40px)', zIndex: 0 }}></div>
        <div style={{ position: 'absolute', bottom: '-10%', left: '-5%', width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(5, 150, 105, 0.05) 0%, transparent 70%)', borderRadius: '50%', filter: 'blur(30px)', zIndex: 0 }}></div>

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">Ready to upgrade your uniforms? Send us your requirements for a free quote.</p>
          
          <div className="contact-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '4rem', alignItems: 'start' }}>
            
            {/* Info Side */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div style={{ marginBottom: '3rem' }}>
                <h3 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1.5rem', color: 'var(--text-main)', lineHeight: 1.2 }}>
                  Let's create something <span style={{ color: 'var(--primary)' }}>extraordinary</span> together.
                </h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', marginBottom: '2.5rem' }}>
                  Our team of experts is ready to help you design and manufacture the perfect uniforms for your organization. Reach out today for a consultation.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  {[
                    { icon: <Phone size={24} />, label: 'Call Us', value: '+91 9923023884', color: '#10b981' },
                    { icon: <Mail size={24} />, label: 'Email Us', value: 'manjuarya102@gmail.com', color: '#3b82f6' },
                    { icon: <MapPin size={24} />, label: 'Visit Us', value: 'Panchvati, Nashik', color: '#f59e0b' }
                  ].map((item, i) => (
                    <motion.div 
                      key={i}
                      whileHover={{ x: 10 }}
                      style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', padding: '1rem', background: 'var(--surface)', borderRadius: '1.25rem', border: '1px solid var(--border)', boxShadow: 'var(--shadow-sm)' }}
                    >
                      <div style={{ width: '50px', height: '50px', borderRadius: '1rem', background: `${item.color}15`, color: item.color, display: 'flex', alignItems: 'center', justifyCenter: 'center', flexShrink: 0, paddingLeft: '13px' }}>
                        {item.icon}
                      </div>
                      <div>
                        <p style={{ margin: 0, fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--text-muted)', letterSpacing: '0.05em' }}>{item.label}</p>
                        <p style={{ margin: 0, fontSize: '1.05rem', fontWeight: 600, color: 'var(--text-main)' }}>{item.value}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Decorative Support Card */}
              <div style={{ background: 'var(--secondary)', color: 'white', padding: '2rem', borderRadius: '1.5rem', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: '-20px', right: '-20px', width: '100px', height: '100px', background: 'var(--primary)', borderRadius: '50%', opacity: 0.2 }}></div>
                <h4 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.5rem' }}>Dedicated Support</h4>
                <p style={{ margin: 0, opacity: 0.8, fontSize: '0.95rem' }}>We provide end-to-end guidance from fabric selection to final delivery.</p>
              </div>
            </motion.div>

            {/* Form Side */}
            <motion.div 
              className="glass-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              style={{ 
                width: '100%', margin: 0, padding: '3.5rem', borderRadius: '2.5rem', 
                border: '1px solid var(--border)', background: 'var(--surface)',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.08)' 
              }}
            >
              <div style={{ marginBottom: '2.5rem' }}>
                <h3 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '0.75rem', color: 'var(--text-main)' }}>Send a Message</h3>
                <div style={{ width: '50px', height: '4px', background: 'var(--primary)', borderRadius: '2px' }}></div>
              </div>

              {status.message && (
                <motion.div 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  style={{
                    padding: '1.25rem', marginBottom: '2rem', borderRadius: '1rem',
                    backgroundColor: status.type === 'success' ? 'rgba(52, 211, 153, 0.15)' : 'rgba(248, 113, 113, 0.15)',
                    color: status.type === 'success' ? 'var(--primary-dark)' : '#991b1b',
                    border: `1px solid ${status.type === 'success' ? 'var(--primary-light)' : '#fecaca'}`,
                    fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.75rem'
                  }}
                >
                  {status.type === 'success' ? <CheckCircle size={24} /> : <span style={{ fontSize: '1.5rem' }}>⚠️</span>}
                  {status.message}
                </motion.div>
              )}

              <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '1.5rem' }}>
                <div className="form-group" style={{ margin: 0 }}>
                  <label htmlFor="home-name" className="form-label" style={{ fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>Full Name</label>
                  <input type="text" id="home-name" name="name" className="form-input" value={formData.name} onChange={handleChange} required placeholder="e.g. John Doe" 
                    style={{ background: 'var(--background)', borderRadius: '1rem', padding: '1.1rem', border: '1px solid var(--border)', fontSize: '1rem' }} />
                </div>
                <div className="form-group" style={{ margin: 0 }}>
                  <label htmlFor="home-email" className="form-label" style={{ fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>Email Address</label>
                  <input type="email" id="home-email" name="email" className="form-input" value={formData.email} onChange={handleChange} required placeholder="e.g. john@example.com" 
                    style={{ background: 'var(--background)', borderRadius: '1rem', padding: '1.1rem', border: '1px solid var(--border)', fontSize: '1rem' }} />
                </div>
                <div className="form-group" style={{ margin: 0 }}>
                  <label htmlFor="home-message" className="form-label" style={{ fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>Your Message</label>
                  <textarea id="home-message" name="message" className="form-textarea" value={formData.message} onChange={handleChange} required placeholder="Tell us about your requirements..." 
                    style={{ background: 'var(--background)', borderRadius: '1rem', padding: '1.1rem', border: '1px solid var(--border)', minHeight: '160px', fontSize: '1rem' }}></textarea>
                </div>
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit" className="btn btn-primary" 
                  style={{ width: '100%', padding: '1.25rem', fontSize: '1.1rem', borderRadius: '1rem', marginTop: '1rem', fontWeight: 700, letterSpacing: '0.02em' }} 
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Processing...' : 'Send Message'}
                </motion.button>
              </form>
            </motion.div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
