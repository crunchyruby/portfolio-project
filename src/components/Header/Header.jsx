import React from 'react';
import './Header.css';

const Header = ({ title, links }) => {
  return (
    <header className="header">
      <div className="logo">{title}</div>
      <nav className="navigation">
        <ul>
          {links.map((link, index) => (
            <li key={index}>
              <a href={link.url}>{link.text}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;