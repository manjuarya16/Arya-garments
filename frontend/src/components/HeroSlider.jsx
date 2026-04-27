import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1598032895397-b9472444bf93?auto=format&fit=crop&w=1920&q=80',
    title: 'Premium School Uniforms',
    desc: 'Crafting comfortable, durable, and smart uniforms for the leaders of tomorrow.',
    link: '/products',
    btnText: 'View Collection'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1920&q=80',
    title: 'Corporate Elegance',
    desc: 'Elevate your brand identity with our tailored, professional corporate attire.',
    link: '/contact',
    btnText: 'Request Quote'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1623832863920-5694a500902c?auto=format&fit=crop&w=1920&q=80',
    title: 'Industrial Safety Gear',
    desc: 'High-visibility, heavy-duty garments designed for demanding environments.',
    link: '/products',
    btnText: 'Explore Gear'
  }
];

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrent(current === slides.length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? slides.length - 1 : current - 1);
  };

  return (
    <div className="slider-container">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          className="slide"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img src={slides[current].image} alt={slides[current].title} className="slide-image" />
          <div className="container slide-content">
            <motion.div 
              className="slide-text"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <h1 className="slide-title">{slides[current].title}</h1>
              <p className="slide-desc">{slides[current].desc}</p>
              <Link to={slides[current].link} className="btn btn-primary">
                {slides[current].btnText} <ArrowRight size={20} style={{ marginLeft: '8px' }} />
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      <button className="slider-arrow left" onClick={prevSlide}>
        <ChevronLeft size={24} />
      </button>
      <button className="slider-arrow right" onClick={nextSlide}>
        <ChevronRight size={24} />
      </button>

      <div className="slider-dots">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === current ? 'active' : ''}`}
            onClick={() => setCurrent(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
