import React from 'react';
import './Footer.css';
import { content } from '../content';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <p>{content.footer.text}</p>
      </div>
    </footer>
  );
};

export default Footer;
