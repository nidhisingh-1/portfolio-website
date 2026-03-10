import React from 'react';
import { motion } from 'framer-motion';
import './Projects.css';
import { content } from '../../content';
import LazyImage from '../ui/LazyImage';

const Projects = () => {
  const { projects } = content;

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1]
      }
    })
  };

  return (
    <section id="work">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <h2 className="section-title">{projects.sectionTitle}</h2>
        </motion.div>

        <div className="projects-grid">
          {projects.items.map((project, index) => (
            <motion.article
              key={project.id}
              className={`project-card${project.comingSoon ? ' project-card--coming-soon' : ''}`}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              onClick={project.comingSoon ? undefined : () => window.open(`/work/${project.slug}`, '_blank', 'noopener,noreferrer')}
            >
              {project.comingSoon && (
                <span className="coming-soon-badge">Currently building</span>
              )}
              {project.image && (
                <LazyImage
                  src={project.image}
                  alt={project.title}
                  wrapperClassName="project-image"
                />
              )}
              <div className="project-content">
                <div className="project-tags">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="tag">{tag}</span>
                  ))}
                </div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <p className="project-impact">{project.impact}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
