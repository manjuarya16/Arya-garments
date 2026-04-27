import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import axios from 'axios';
import { ShoppingBag, Star, CheckCircle } from 'lucide-react';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState('All');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await axios.get('http://localhost:5000/api/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const categories = ['All', 'School Uniforms', 'Company Uniforms', 'Other Industries'];
  const filteredProducts = filter === 'All' ? products : products.filter(p => p.category === filter);

  return (
    <div style={{ backgroundColor: 'var(--background)', minHeight: '100vh', paddingBottom: '4rem' }}>
      
      {/* Products Hero Banner */}
      <section className="products-hero">
        <div className="products-hero-bg"></div>
        <div className="container hero-content">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="hero-title" style={{ fontSize: '3.5rem', color: 'white', marginBottom: '1rem' }}>
              Explore Our Collection
            </h1>
            <p className="hero-subtitle" style={{ color: 'rgba(255,255,255,0.9)', maxWidth: '600px', margin: '0 auto' }}>
              Premium garments engineered for comfort, durability, and a professional appearance. Find the perfect fit for your organization.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container" style={{ marginTop: '-4rem', position: 'relative', zIndex: 10 }}>
        {/* Advanced Filters */}
        <div className="filter-container glass-card" style={{ padding: '1.5rem', borderRadius: '1rem', marginBottom: '4rem' }}>
          {categories.map(category => (
            <button
              key={category}
              className={`filter-btn ${filter === category ? 'active' : ''}`}
              onClick={() => setFilter(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {loading ? (
          <div className="text-center">
            <motion.div 
              animate={{ rotate: 360 }} 
              transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
              style={{ display: 'inline-block' }}
            >
              <ShoppingBag size={48} color="var(--primary)" />
            </motion.div>
            <p className="mt-4" style={{ color: 'var(--text-muted)' }}>Loading premium products...</p>
          </div>
        ) : (
          <motion.div className="product-grid" layout>
            <AnimatePresence>
              {filteredProducts.map((product, index) => (
                <motion.div
                  key={product._id || index}
                  className="product-card glass-card"
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  layout
                  whileHover={{ y: -10 }}
                >
                  <div className="product-image-container">
                    <img src={product.imageUrl} alt={product.name} className="product-image" />
                    <div className="product-badge">
                      <Star size={14} style={{ fill: 'currentColor', marginRight: '4px' }} /> Premium Quality
                    </div>
                    <div className="product-overlay">
                      <button className="btn btn-primary btn-sm">View Details</button>
                    </div>
                  </div>
                  
                  <div className="product-info">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                      <span className="product-category">{product.category}</span>
                      <span style={{ color: 'var(--primary)', display: 'flex', alignItems: 'center', fontSize: '0.8rem', fontWeight: 600 }}>
                        <CheckCircle size={14} style={{ marginRight: '4px' }} /> In Stock
                      </span>
                    </div>
                    <h3 className="product-name">{product.name}</h3>
                    <p className="product-desc">{product.description}</p>
                    <div className="product-footer">
                      <button className="btn btn-secondary" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem', width: '100%' }}>Request Information</button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}
        
        {!loading && filteredProducts.length === 0 && (
          <div className="text-center mt-4 mb-8 glass-card" style={{ padding: '4rem' }}>
            <ShoppingBag size={64} color="var(--border)" style={{ margin: '0 auto 1rem auto' }} />
            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>No products found</h3>
            <p style={{ color: 'var(--text-muted)' }}>We couldn't find any products in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
