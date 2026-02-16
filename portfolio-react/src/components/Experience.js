import React from 'react';
import { motion } from 'framer-motion';
import './Experience.css';
import { content } from '../content';

const Experience = () => {
  const { experience } = content;
  
  return (
    <section id="experience">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">{experience.sectionTitle}</h2>
        </motion.div>
        
        <div className="experience-list">
          {experience.items.map((exp, index) => (
            <motion.div
              key={exp.id}
              className="experience-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="experience-header">
                <h3>{exp.company}</h3>
                <span className="experience-time">{exp.time}</span>
              </div>
              <p className="experience-role">{exp.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
