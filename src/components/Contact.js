import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Contact.css';
import { content } from '../content';

const Contact = () => {
  const { contact } = content;
  const [copiedEmail, setCopiedEmail] = useState(false);
  
  const handleCopyEmail = (email) => {
    navigator.clipboard.writeText(email).then(() => {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    });
  };
  
  return (
    <section id="contact">
      <div className="container">
        <motion.div 
          className="contact-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <h2 className="section-title">{contact.sectionTitle}</h2>
          <p style={{ color: 'var(--text-secondary)', marginTop: '1rem', fontSize: '0.9rem' }}>
            {contact.subtitle}
          </p>
          
          <div className="contact-links">
            {contact.links.map((link, index) => (
              link.url.startsWith('mailto:') ? (
                <motion.div 
                  key={index}
                  className="email-link-wrapper"
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="contact-link email-trigger">
                    {link.label}
                  </span>
                  <div className="email-tooltip">
                    <span className="email-address">{link.url.replace('mailto:', '')}</span>
                    <button 
                      className="tooltip-copy-btn"
                      onClick={() => handleCopyEmail(link.url.replace('mailto:', ''))}
                      aria-label="Copy email"
                    >
                      <svg 
                        className="tooltip-copy-icon" 
                        width="16" 
                        height="16" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2"
                      >
                        {copiedEmail ? (
                          <path d="M20 6L9 17l-5-5" />
                        ) : (
                          <>
                            <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                          </>
                        )}
                      </svg>
                    </button>
                  </div>
                </motion.div>
              ) : (
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
              )
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
