import React from 'react';
import './Footer.css';

const Footer = ({ copyright, socialLinks }) => {
  return (
    <footer className="footer">
      <div className="copyright">{copyright}</div>
      <div className="social-links">
        {socialLinks.map((link, index) => (
          <a key={index} href={link.url} target="_blank" rel="noopener noreferrer">
            {link.icon}
          </a>
        ))}
      </div>
    </footer>
  );
};

export default Footer;