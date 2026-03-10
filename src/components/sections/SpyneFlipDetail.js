import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import './ProjectDetail.css';
import './SpyneFlipDetail.css';
import DesignGallery from '../ui/DesignGallery';

const SF_IMAGES = [
  { src: '/images/sf-splash.png',       caption: 'Extension splash — Transform your dealership in a click' },
  { src: '/images/sf-install.png',      caption: 'Step 1 — Install from Chrome Web Store, activate on any dealer site' },
  { src: '/images/sf-detect.png',       caption: 'Step 2 — Extension detects vehicle image containers on the live page' },
  { src: '/images/sf-choose.png',       caption: 'Step 3 — Choose products to demo: Studio AI, Vini AI, or both' },
  { src: '/images/sf-transform.png',    caption: 'Step 4 — Select background style and trigger transformation' },
  { src: '/images/sf-processing.png',   caption: 'Step 5 — Both products process in parallel, progress visible in real time' },
  { src: '/images/sf-score-before.png', caption: 'Before — Original lot photos, website score 7.6 Needs Improvement' },
  { src: '/images/sf-after.png',        caption: 'After — Studio backgrounds live across full inventory, Vini AI active' },
  { src: '/images/sf-score-after.png',  caption: 'Result — Website score 9.0, Top 1% of Spyne Dealers' },
];

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

          <DesignGallery images={SF_IMAGES} title="Spyne Flip — Design Screens">
            {({ open, openAt }) => (
              <>
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
                  <div className="pd-meta-item">
                    <span className="pd-meta-label">Designs</span>
                    <button className="sf-store-link sf-gallery-btn" onClick={open}>
                      View all screens ↗
                    </button>
                  </div>
                </motion.div>

                <motion.div
                  className="pd-preview-strip"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
                >
                  <div className="pd-preview-images">
                    {[0, 2, 6, 7, 8].map((imgIdx, i) => (
                      <img
                        key={i}
                        loading="lazy"
                        src={SF_IMAGES[imgIdx].src}
                        alt={SF_IMAGES[imgIdx].caption}
                        className="pd-preview-img"
                        onClick={() => openAt(imgIdx)}
                      />
                    ))}
                  </div>
                  <div className="pd-preview-footer">
                    <a href="#design-walkthrough" className="pd-preview-note">Full design walkthrough further below ↓</a>
                    <button className="pd-preview-cta" onClick={open}>View all 9 screens ↗</button>
                  </div>
                </motion.div>
              </>
            )}
          </DesignGallery>
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

            <div className="im-flow-screenshots">
              <div className="im-flow-screen">
                <img
                  src="/images/sf-splash.png"
                  alt="Spyne Flip extension splash screen showing the tagline: Transform your dealership in a click"
                  className="im-screenshot"
                />
                <p className="im-screenshot-caption">The extension launches with a single clear purpose. No configuration wizard, no onboarding friction.</p>
              </div>
            </div>

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
      <section id="design-walkthrough" className="pd-section">
        <div className="container">
          <motion.div className="pd-section-content im-section-wide" {...fadeUp()}>
            <span className="im-chip">04: How It Works</span>
            <h2 className="section-title pd-section-title">
              Five steps from install to live transformation
            </h2>

            <div className="im-flow-screenshots">

              <div className="im-flow-screen">
                <span className="im-flow-screen-step">Step 1 — Install & open any dealer site</span>
                <img
                  src="/images/sf-install.png"
                  alt="Chrome extensions panel showing Spyne Flip listed under extensions requesting access to the current site"
                  className="im-screenshot"
                />
                <p className="im-screenshot-caption">One-time install from the Chrome Web Store. The extension appears in the Chrome toolbar and requests access to the current dealer site.</p>
              </div>

              <div className="im-flow-screen">
                <span className="im-flow-screen-step">Step 2 — Detect vehicles on the page</span>
                <img
                  src="/images/sf-detect.png"
                  alt="Dealer website with 8 vehicle image containers highlighted in pink borders. Extension panel shows 8 Vehicle Found."
                  className="im-screenshot"
                />
                <p className="im-screenshot-caption">The extension scans the DOM and highlights every vehicle image container. "8 Vehicle Found" confirms detection before anything is changed.</p>
              </div>

              <div className="im-flow-screen">
                <span className="im-flow-screen-step">Step 3 — Choose products to demo</span>
                <img
                  src="/images/sf-choose.png"
                  alt="Extension panel showing Studio AI and Vini product cards with Enable button. Detected vehicle count shown above."
                  className="im-screenshot"
                />
                <p className="im-screenshot-caption">Sales rep selects which products to demonstrate: Studio AI, Vini AI, or both. This is the only decision point before transformation.</p>
              </div>

              <div className="im-flow-screen">
                <span className="im-flow-screen-step">Step 4 — Select background and transform</span>
                <img
                  src="/images/sf-transform.png"
                  alt="Extension panel showing background selection options with Spyne library thumbnails. Transform CTA button at bottom."
                  className="im-screenshot"
                />
                <p className="im-screenshot-caption">Background style selected from Spyne's library. A single tap on Transform sends all detected images to the Spyne API for processing.</p>
              </div>

              <div className="im-flow-screen">
                <span className="im-flow-screen-step">Step 5 — Processing in real time</span>
                <img
                  src="/images/sf-processing.png"
                  alt="Extension panel showing Processing started with 02:30 min remaining. Studio AI showing 10/32 processed, Vini AI processing."
                  className="im-screenshot"
                />
                <p className="im-screenshot-caption">Both products process simultaneously. The panel shows live progress: Studio AI images replaced in batches, Vini AI initialising alongside.</p>
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

            <div className="im-ba-screenshots">
              <div className="im-ba-screen">
                <span className="im-ba-screen-tag before">Before</span>
                <img
                  src="/images/sf-score-before.png"
                  alt="Dealer website with original lot photos and showroom images. Extension panel shows website score 7.6 Needs Improvement."
                  className="im-screenshot"
                />
                <p className="im-screenshot-caption">Original dealer site: parking lot and showroom photos, inconsistent angles, website score 7.6. Every prospect sees this version without Spyne.</p>
              </div>
              <div className="im-ba-screen">
                <span className="im-ba-screen-tag after">After</span>
                <img
                  src="/images/sf-after.png"
                  alt="Same dealer website with all vehicles now showing clean studio backgrounds. Vini AI avatar visible in bottom right corner."
                  className="im-screenshot"
                />
                <p className="im-screenshot-caption">Spyne Flip applied: all vehicles show consistent studio backgrounds, gallery order optimised, Vini AI live in the bottom corner. This is the prospect's own site.</p>
              </div>
            </div>

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

            <div className="im-flow-screenshots">
              <div className="im-flow-screen">
                <img
                  src="/images/sf-score-after.png"
                  alt="Extension panel showing website score 9.0 Top 1% of Dealers after Spyne transformation. Before/After score comparison visible."
                  className="im-screenshot"
                />
                <p className="im-screenshot-caption">After transformation: website score jumps to 9.0, placing the dealer in the top 1% of Spyne dealers. The score is generated automatically and shared directly with the prospect during the call.</p>
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
