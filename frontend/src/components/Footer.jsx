import React from 'react';
import { Shirt } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-logo">
          <Shirt size={24} style={{ display: 'inline-block', marginRight: '8px', verticalAlign: 'middle' }} />
          Arya Garments
        </div>
        <p className="footer-text mt-4" style={{ fontSize: '0.875rem' }}>
          &copy; {new Date().getFullYear()} Arya Garments. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
