import React from 'react';
import { motion } from 'framer-motion';
import './Projects.css';
import { content } from '../content';

const Projects = () => {
  const { projects } = content;
  
  const cardVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: 'easeOut'
      }
    })
  };

  return (
    <section id="work">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">{projects.sectionTitle}</h2>
        </motion.div>
        
        <div className="projects-grid">
          {projects.items.map((project, index) => (
            <motion.article
              key={project.id}
              className="project-card"
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              whileHover={{ x: 8, transition: { duration: 0.2 } }}
            >
              <div className="project-tags">
                {project.tags.map((tag, i) => (
                  <span key={i} className="tag">{tag}</span>
                ))}
              </div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <p className="project-impact">{project.impact}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
