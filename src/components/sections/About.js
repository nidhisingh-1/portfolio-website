import React from 'react';
import { motion } from 'framer-motion';
import './About.css';
import { content } from '../../content';

import figmaLogo from '../../assets/tools/figma.svg';
import adobeLogo from '../../assets/tools/adobe.png';
import cursorLogo from '../../assets/tools/cursor.png';
import notionLogo from '../../assets/tools/notion.png';
import v0Logo from '../../assets/tools/v0.svg';

// darkInvert: true → logo is dark-coloured, invert it in dark mode
// width: per-logo box width (px) tuned for visual balance at height: 36px
const tools = [
  { name: 'Figma',                src: figmaLogo,  darkInvert: false, width: 120 },
  { name: 'Adobe Creative Suite', src: adobeLogo,  darkInvert: false, width: 110 },
  { name: 'Notion',               src: notionLogo, darkInvert: true,  width: 36  },
  { name: 'Cursor',               src: cursorLogo, darkInvert: true,  width: 110 },
  { name: 'v0',                   src: v0Logo,     darkInvert: true,  width: 52  },
];

const About = () => {
  const { about } = content;

  return (
    <section id="about">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <h2 className="section-title">{about.sectionTitle}</h2>
        </motion.div>

        <motion.div
          className="about-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
        >
          {about.paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </motion.div>

        {/* Tools Marquee */}
        <motion.div
          className="tools-section"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <h3 className="tools-title">Tools & Technologies</h3>
          <div className="marquee">
            {/* Render twice for seamless infinite loop */}
            {[0, 1].map((set) => (
              <div key={set} className="marquee-content" aria-hidden={set === 1 ? 'true' : undefined}>
                {tools.map((tool) => (
                  <div key={tool.name} className="marquee-item" title={tool.name} style={{ width: tool.width + 'px' }}>
                    <img
                      src={tool.src}
                      alt={tool.name}
                      className={`marquee-logo${tool.darkInvert ? ' marquee-logo-dark-invert' : ''}`}
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
