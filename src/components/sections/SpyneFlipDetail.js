import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import './ProjectDetail.css';
import './SpyneFlipDetail.css';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, delay, ease: [0.25, 0.1, 0.25, 1] }
});

const Pipeline = ({ steps }) => (
  <div className="im-pipeline">
    {steps.map((step, i) => (
      <React.Fragment key={i}>
        <div className="im-pipe-item">
          <span className={`im-pipe-step-label im-pipe-step-label--${step.type || 'default'}`}>
            {step.label}
          </span>
        </div>
        {i < steps.length - 1 && (
          <span className="im-pipe-arrow" aria-hidden="true">→</span>
        )}
      </React.Fragment>
    ))}
  </div>
);

const CapCard = ({ icon, title, desc }) => (
  <div className="sf-cap-card">
    <span className="sf-cap-icon" aria-hidden="true">{icon}</span>
    <p className="sf-cap-title">{title}</p>
    <p className="sf-cap-desc">{desc}</p>
  </div>
);

const SpyneFlipDetail = () => {
  const navigate = useNavigate();
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="pd-page">

      <motion.button className="pd-back" onClick={() => navigate('/')}
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}>
        <span className="pd-back-arrow">&#8592;</span> Back
      </motion.button>

      {/* ══ HERO ══════════════════════════════════════════════════════════════ */}
      <section className="pd-hero">
        <div className="container">
          <motion.div className="section-header pd-section-header"
            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}>
            <div className="project-tags pd-tags">
              {['Sales Enablement', 'Chrome Extension', 'Internal Tool', 'Demo Experience'].map((t, i) => (
                <span key={i} className="tag">{t}</span>
              ))}
            </div>
            <h1 className="pd-title">
              Transforming Automotive Sales Demos with Real-Time Website Transformation
            </h1>
            <p className="pd-lead">
              A Chrome extension that opens any dealer website and instantly transforms it with
              Spyne AI media and Vini AI, turning a prospect's own live site into the demo.
            </p>
          </motion.div>

          <motion.div className="pd-meta"
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.12, ease: [0.25, 0.1, 0.25, 1] }}>
            <div className="pd-meta-item">
              <span className="pd-meta-label">Company</span>
              <span className="pd-meta-value">Spyne AI</span>
            </div>
            <div className="pd-meta-item">
              <span className="pd-meta-label">Product</span>
              <span className="pd-meta-value">Spyne Flip</span>
            </div>
            <div className="pd-meta-item">
              <span className="pd-meta-label">Timeline</span>
              <span className="pd-meta-value">2024–2025</span>
            </div>
            <div className="pd-meta-item">
              <span className="pd-meta-label">Extension</span>
              <a
                className="sf-store-link"
                href="https://chromewebstore.google.com/detail/spyne-flip-20/bdgaepajbhafcdjfoomgiofedhjiimob?hl=en&pli=1"
                target="_blank"
                rel="noopener noreferrer"
              >
                Chrome Web Store ↗
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══ 01 CONTEXT ════════════════════════════════════════════════════════ */}
      <section className="pd-section">
        <div className="container">
          <motion.div className="pd-section-content im-section-wide" {...fadeUp()}>
            <span className="im-chip">01: Context</span>
            <h2 className="section-title pd-section-title">
              Two strong products. One hard sales problem.
            </h2>
            <p className="pd-body">
              Spyne provides AI-powered vehicle media for dealerships: studio backgrounds,
              360-degree spins, and optimised image ordering. <strong>Vini</strong> is Spyne's
              AI receptionist embedded in the vehicle viewer on dealer websites. Both products
              transform the dealer experience, but demonstrating that transformation to a
              prospect who hasn't signed up yet was a persistent gap.
            </p>

            <div className="sf-context-flow">
              <div className="sf-context-step">
                <span className="sf-context-step-label">Spyne AI Media</span>
                <p className="sf-context-step-desc">Studio backgrounds, 360 spins, hero-angle image ordering</p>
              </div>
              <span className="sf-context-arrow">+</span>
              <div className="sf-context-step sf-context-step--highlight">
                <span className="sf-context-step-label">Vini AI</span>
                <p className="sf-context-step-desc">Vehicle-aware AI receptionist on dealer VDP pages</p>
              </div>
              <span className="sf-context-arrow">→</span>
              <div className="sf-context-step">
                <span className="sf-context-step-label">Sales Demo Gap</span>
                <p className="sf-context-step-desc">No way to show both products live on the prospect's actual website</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══ 02 PROBLEM ════════════════════════════════════════════════════════ */}
      <section className="pd-section">
        <div className="container">
          <motion.div className="pd-section-content im-section-wide" {...fadeUp()}>
            <span className="im-chip">02: Problem</span>
            <h2 className="section-title pd-section-title">
              Sales teams were selling a transformation they couldn't show.
            </h2>

            <div className="im-stickies">
              <div className="im-sticky im-sticky--pink">
                <span className="im-sticky-label">Manual prep</span>
                <p>Sales reps spent 2–3 hours per demo manually uploading images and configuring environments before each call.</p>
              </div>
              <div className="im-sticky im-sticky--yellow">
                <span className="im-sticky-label">Fake demos</span>
                <p>Prospects saw a generic mock site, not their own. The leap from "demo environment" to "my actual website" was too large.</p>
              </div>
              <div className="im-sticky im-sticky--blue">
                <span className="im-sticky-label">Low trust</span>
                <p>"Will this actually work on my site?" There was no live answer to that question. Trust depended on hope, not evidence.</p>
              </div>
              <div className="im-sticky im-sticky--green">
                <span className="im-sticky-label">Two separate setups</span>
                <p>Showing Spyne media and Vini AI together required two different demo environments. The combined story was rarely told.</p>
              </div>
            </div>

            <div className="sf-insight-highlight">
              <span className="sf-insight-highlight-label">Core insight</span>
              <p className="sf-insight-highlight-text">
                The strongest sales moment occurs when dealers see their own website transform
                instantly. Real inventory. Real site. The closer the demo is to the prospect's
                reality, the faster the deal closes.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══ 03 SOLUTION ═══════════════════════════════════════════════════════ */}
      <section className="pd-section">
        <div className="container">
          <motion.div className="pd-section-content im-section-wide" {...fadeUp()}>
            <span className="im-chip">03: Solution</span>
            <h2 className="section-title pd-section-title">
              A Chrome extension that transforms any dealer website in real time
            </h2>
            <p className="pd-body">
              Open a dealer's live website, activate Spyne Flip, and their vehicle images are
              immediately replaced with AI-processed studio backgrounds. Toggle Vini AI, and
              the receptionist appears on their vehicle detail pages, exactly as it would for
              a live customer. No integration, no setup, no CMS access required.
            </p>

            <div className="im-flows-stack">
              <div className="im-flow-card">
                <p className="im-flow-card-label">Spyne Media Flow</p>
                <Pipeline steps={[
                  { label: 'Open dealer site', type: 'blue' },
                  { label: 'Activate extension', type: 'default' },
                  { label: 'Images detected', type: 'default' },
                  { label: 'AI backgrounds applied', type: 'green' }
                ]} />
              </div>
              <div className="im-flow-card">
                <p className="im-flow-card-label">Vini AI Flow</p>
                <Pipeline steps={[
                  { label: 'Navigate to VDP', type: 'blue' },
                  { label: 'Toggle Vini on', type: 'default' },
                  { label: 'Vini live on their site', type: 'green' }
                ]} />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══ 04 HOW IT WORKS ═══════════════════════════════════════════════════ */}
      <section className="pd-section">
        <div className="container">
          <motion.div className="pd-section-content im-section-wide" {...fadeUp()}>
            <span className="im-chip">04: How It Works</span>
            <h2 className="section-title pd-section-title">
              Five steps from install to live transformation
            </h2>

            <div className="sf-steps">
              <div className="sf-step">
                <span className="sf-step-num">01</span>
                <div className="sf-step-body">
                  <p className="sf-step-title">Install the extension</p>
                  <p className="sf-step-desc">One-time install from the Chrome Web Store. Authenticated with Spyne credentials. No further configuration.</p>
                </div>
              </div>
              <div className="sf-step">
                <span className="sf-step-num">02</span>
                <div className="sf-step-body">
                  <p className="sf-step-title">Detect vehicle image containers</p>
                  <p className="sf-step-desc">The extension scans the page for vehicle carousels and image grids using automotive page patterns.</p>
                </div>
              </div>
              <div className="sf-step">
                <span className="sf-step-num">03</span>
                <div className="sf-step-body">
                  <p className="sf-step-title">Replace images with AI studio backgrounds</p>
                  <p className="sf-step-desc">Vehicle images are sent to Spyne's API. Studio backgrounds replace originals in place, on the live site, in seconds.</p>
                </div>
              </div>
              <div className="sf-step">
                <span className="sf-step-num">04</span>
                <div className="sf-step-body">
                  <p className="sf-step-title">Optimise gallery order (hero angle first)</p>
                  <p className="sf-step-desc">The image set is reordered to show the best merchandising angle first, mirroring a live Spyne customer's experience.</p>
                </div>
              </div>
              <div className="sf-step">
                <span className="sf-step-num">05</span>
                <div className="sf-step-body">
                  <p className="sf-step-title">Activate Vini AI on vehicle detail pages</p>
                  <p className="sf-step-desc">A single toggle surfaces Vini on the VDP with vehicle-aware greetings, exactly as buyers would experience it.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══ 05 FEATURES ═══════════════════════════════════════════════════════ */}
      <section className="pd-section">
        <div className="container">
          <motion.div className="pd-section-content im-section-wide" {...fadeUp()}>
            <span className="im-chip">05: Feature Highlights</span>
            <h2 className="section-title pd-section-title">
              What the extension does
            </h2>

            <div className="sf-cap-grid">
              <CapCard icon="⚡" title="Real-time transformation" desc="Vehicle images replaced with AI studio backgrounds on the dealer's live site, instantly." />
              <CapCard icon="🎨" title="Consistent studio backgrounds" desc="Every vehicle gets a professional, clean background regardless of original photo quality." />
              <CapCard icon="📐" title="Optimised gallery order" desc="Best merchandising angle surfaced first, matching what Spyne customers experience by default." />
              <CapCard icon="🤖" title="Vini AI on VDPs" desc="Toggle Vini onto any vehicle detail page to demo the AI receptionist in full context." />
              <CapCard icon="✋" title="Draggable control panel" desc="Minimal floating panel the rep can position off-screen during a call, keeping the demo clean." />
              <CapCard icon="🌐" title="Any dealer website" desc="No CMS access, API keys, or dealer integration needed. Works on any automotive site." />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══ 06 DESIGN DECISIONS ═══════════════════════════════════════════════ */}
      <section className="pd-section">
        <div className="container">
          <motion.div className="pd-section-content im-section-wide" {...fadeUp()}>
            <span className="im-chip">06: Design Decisions</span>
            <h2 className="section-title pd-section-title">
              The decisions that made the demo feel real
            </h2>

            <div className="sf-decisions">
              <div className="sf-decision">
                <span className="sf-decision-badge sf-decision-badge--no">Rejected</span>
                <div className="sf-decision-body">
                  <p className="sf-decision-title">Fixed position control panel</p>
                  <p className="sf-decision-desc">Blocked the dealer's view of their own site during screen-share, breaking the "real website" illusion the extension was designed to create.</p>
                </div>
              </div>
              <div className="sf-decision">
                <span className="sf-decision-badge sf-decision-badge--no">Rejected</span>
                <div className="sf-decision-body">
                  <p className="sf-decision-title">Spyne-branded demo overlay</p>
                  <p className="sf-decision-desc">Adding a prominent banner to signal "powered by Spyne" broke immersion. Dealers wanted to see their site, not a product wrapper.</p>
                </div>
              </div>
              <div className="sf-decision">
                <span className="sf-decision-badge sf-decision-badge--no">Rejected</span>
                <div className="sf-decision-body">
                  <p className="sf-decision-title">Cloned demo environment</p>
                  <p className="sf-decision-desc">Hosting a Spyne-scraped clone of the dealer's site carried legal risk, latency, and still wasn't the dealer's actual live website.</p>
                </div>
              </div>
              <div className="sf-decision sf-decision--final">
                <span className="sf-decision-badge sf-decision-badge--yes">Shipped</span>
                <div className="sf-decision-body">
                  <p className="sf-decision-title">Draggable, minimal control panel on the live site</p>
                  <p className="sf-decision-desc">Compact toggles for Spyne media, gallery order, and Vini AI. Fully draggable so the rep can tuck it out of view. No Spyne branding on the transformed site, only inside the extension panel. The dealer sees their own website, transformed.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══ 07 BEFORE VS AFTER ════════════════════════════════════════════════ */}
      <section className="pd-section">
        <div className="container">
          <motion.div className="pd-section-content im-section-wide" {...fadeUp()}>
            <span className="im-chip">07: Before vs After</span>
            <h2 className="section-title pd-section-title">
              What changed in the sales experience
            </h2>

            <div className="im-ba-wrap">
              <div className="im-ba-row before">
                <span className="im-ba-tag">Before</span>
                <span className="im-ba-text">
                  2–3 hrs manual prep · generic mock site · products shown separately · "will this work on my site?" objection every call
                </span>
              </div>
              <div className="im-ba-row after">
                <span className="im-ba-tag">After</span>
                <span className="im-ba-text">
                  Under 30s to live demo · real dealer website · Spyne + Vini shown together · objection replaced with "when can we start?"
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══ 08 IMPACT ════════════════════════════════════════════════════════ */}
      <section className="pd-section">
        <div className="container">
          <motion.div className="pd-section-content im-section-wide" {...fadeUp()}>
            <span className="im-chip">08: Impact</span>
            <h2 className="section-title pd-section-title">
              What the tool enabled
            </h2>

            <div className="im-metrics">
              <div className="im-metric">
                <div className="im-metric-val">&lt; 30s</div>
                <div className="im-metric-lbl">Activation to live transformation on any dealer website</div>
              </div>
              <div className="im-metric">
                <div className="im-metric-val">0</div>
                <div className="im-metric-lbl">Manual setup steps before each demo</div>
              </div>
              <div className="im-metric">
                <div className="im-metric-val">2-in-1</div>
                <div className="im-metric-lbl">Spyne media + Vini AI shown together in one session for the first time</div>
              </div>
              <div className="im-metric">
                <div className="im-metric-val">Any site</div>
                <div className="im-metric-lbl">Works on any automotive dealer website with no integration required</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══ 09 LEARNINGS ═════════════════════════════════════════════════════ */}
      <section className="pd-section pd-impact-section">
        <div className="container">
          <motion.div className="pd-section-content im-section-wide" {...fadeUp()}>
            <span className="im-chip">09: Key Learnings</span>
            <h2 className="section-title pd-section-title">
              Internal tools shape external perception
            </h2>

            <div className="im-future-list">
              <div className="im-future-item">
                <span className="im-future-num">01</span>
                <div>
                  <p className="im-future-title">Live demos create trust that slides never will</p>
                  <p className="im-future-desc">Seeing their own cars transformed in real time bypassed every skepticism a deck couldn't. Designing for the live moment changed every decision in this project.</p>
                </div>
              </div>
              <div className="im-future-item">
                <span className="im-future-num">02</span>
                <div>
                  <p className="im-future-title">Internal tools directly affect external adoption</p>
                  <p className="im-future-desc">Spyne Flip was a sales tool, but its impact was measured in prospect confidence. Better demos meant faster customer decisions.</p>
                </div>
              </div>
              <div className="im-future-item">
                <span className="im-future-num">03</span>
                <div>
                  <p className="im-future-title">The control surface is part of the experience</p>
                  <p className="im-future-desc">On a screen-share call, everything the prospect sees is part of the demo. The draggable panel kept the extension invisible so the transformation could speak for itself.</p>
                </div>
              </div>
            </div>

            <blockquote className="im-pull-quote">
              The best sales tool is the one that makes the product sell itself.
            </blockquote>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default SpyneFlipDetail;
