import React from 'react';
import { motion } from 'framer-motion';
import './Contact.css';
import { content } from '../content';

const Contact = () => {
  const { contact } = content;
  
  return (
    <section id="contact">
      <div className="container">
        <motion.div 
          className="contact-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">{contact.sectionTitle}</h2>
          <p style={{ color: 'var(--text-secondary)', marginTop: '1rem', fontSize: '0.9rem' }}>
            {contact.subtitle}
          </p>
          
          <div className="contact-links">
            {contact.links.map((link, index) => (
              <motion.a 
                key={index}
                href={link.url} 
                className="contact-link"
                target={link.url.startsWith('http') ? '_blank' : undefined}
                rel={link.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2 }}
              >
                {link.label}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
