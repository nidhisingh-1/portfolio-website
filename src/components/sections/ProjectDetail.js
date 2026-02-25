import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { content } from '../../content';
import './ProjectDetail.css';

const ProjectDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const project = content.projects.items.find(p => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <div className="pd-notfound">
        <p>Project not found.</p>
        <button onClick={() => navigate('/')}>← Back</button>
      </div>
    );
  }

  return (
    <div className="pd-page">

      {/* Back link — sits in the same fixed sidebar position as the nav */}
      <motion.button
        className="pd-back"
        onClick={() => navigate('/')}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        <span className="pd-back-arrow">&#8592;</span>
        Back
      </motion.button>

      {/* Hero section — same structure as all landing sections */}
      <section className="pd-hero">
        <div className="container">
          <motion.div
            className="section-header pd-section-header"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className="project-tags pd-tags">
              {project.tags.map((tag, i) => (
                <span key={i} className="tag">{tag}</span>
              ))}
            </div>
            <h1 className="pd-title">{project.title}</h1>
            <p className="pd-lead">{project.description}</p>
          </motion.div>

          {/* Meta row — styled like experience items */}
          <motion.div
            className="pd-meta"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.12, ease: [0.25, 0.1, 0.25, 1] }}
          >
            {project.role && (
              <div className="pd-meta-item">
                <span className="pd-meta-label">Role</span>
                <span className="pd-meta-value">{project.role}</span>
              </div>
            )}
            {project.duration && (
              <div className="pd-meta-item">
                <span className="pd-meta-label">Duration</span>
                <span className="pd-meta-value">{project.duration}</span>
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Hero image */}
      {project.image && (
        <motion.div
          className="container"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <div className="pd-image project-image">
            <img src={project.image} alt={project.title} />
          </div>
        </motion.div>
      )}

      {/* Overview */}
      {project.overview && (
        <section className="pd-section">
          <div className="container">
            <motion.div
              className="pd-section-content"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <h2 className="section-title pd-section-title">Overview</h2>
              <p className="pd-body">{project.overview}</p>
            </motion.div>
          </div>
        </section>
      )}

      {/* Highlights — each item styled like an experience row */}
      {project.highlights && (
        <section className="pd-section">
          <div className="container">
            <div className="pd-section-content">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <h2 className="section-title pd-section-title">What I did</h2>
              </motion.div>
              <div className="pd-highlights-list">
                {project.highlights.map((item, i) => (
                  <motion.div
                    key={i}
                    className="pd-highlight-item"
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.06, ease: [0.25, 0.1, 0.25, 1] }}
                  >
                    <p>{item}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Impact */}
      {project.impact && (
        <section className="pd-section pd-impact-section">
          <div className="container">
            <div className="pd-section-content">
              <motion.p
                className="project-impact pd-impact"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
              >
                {project.impact}
              </motion.p>
            </div>
          </div>
        </section>
      )}

    </div>
  );
};

export default ProjectDetail;
