/**
 * CASE STUDY TEMPLATE
 * ─────────────────────────────────────────────────────────────────────────────
 * 1. Copy this file and rename it: YourNameDetail.js
 * 2. Copy CaseStudyTemplate.css  → YourNameDetail.css
 * 3. Replace every instance of "xx" / "XX" with your 2-letter prefix
 *    (e.g. "ds" for Design System, "ob" for Onboarding)
 * 4. Replace all [PLACEHOLDER] text with real content
 * 5. Add your route and import in App.js (see CASE_STUDY_GUIDE.md)
 * ─────────────────────────────────────────────────────────────────────────────
 */

import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import './ProjectDetail.css';
import './CaseStudyTemplate.css'; // rename to YourNameDetail.css

/* ── Animation helper ──────────────────────────────────────────────────────── */
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, delay, ease: [0.25, 0.1, 0.25, 1] }
});

/* ── Pipeline / flow diagram ───────────────────────────────────────────────── */
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

/* ── Main component ────────────────────────────────────────────────────────── */
const CaseStudyTemplate = () => {
  const navigate = useNavigate();
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="pd-page">

      {/* Back button: fixed, top-left */}
      <motion.button className="pd-back" onClick={() => navigate('/')}
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}>
        <span className="pd-back-arrow">&#8592;</span> Back
      </motion.button>

      {/* ══════════════════════════════════════════════════════════════════════
          HERO: project title, tags, and meta row
          ─────────────────────────────────────────────────────────────────────
          Edit: tags array, h1 title, pd-lead summary, and pd-meta values.
          Add or remove pd-meta-item rows as needed.
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="pd-hero">
        <div className="container">
          <motion.div className="section-header pd-section-header"
            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}>

            <div className="project-tags pd-tags">
              {['Tag One', 'Tag Two', 'Tag Three'].map((t, i) => (
                <span key={i} className="tag">{t}</span>
              ))}
            </div>

            <h1 className="pd-title">
              [PROJECT NAME]: [ONE-LINE DESCRIPTOR]
            </h1>

            <p className="pd-lead">
              [Two or three sentences. What was the problem? What did you build?
              What was the most important outcome? Keep it sharp and concrete.]
            </p>
          </motion.div>

          <motion.div className="pd-meta"
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.12, ease: [0.25, 0.1, 0.25, 1] }}>
            <div className="pd-meta-item">
              <span className="pd-meta-label">Company</span>
              <span className="pd-meta-value">[Company Name]</span>
            </div>
            <div className="pd-meta-item">
              <span className="pd-meta-label">Focus</span>
              <span className="pd-meta-value">[Domain · Method · Output]</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          01: CONTEXT
          ─────────────────────────────────────────────────────────────────────
          Where does this product sit? What is the user's world?
          Good elements: body paragraph, simple flow diagram or context card grid.
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="pd-section">
        <div className="container">
          <motion.div className="pd-section-content im-section-wide" {...fadeUp()}>
            <span className="im-chip">01: Context</span>
            <h2 className="section-title pd-section-title">
              [Where this product sits in the user's world]
            </h2>
            <p className="pd-body">
              [Set the scene. Who uses this product? What is their goal? What system
              or workflow does this feature live inside? One or two paragraphs max,
              enough context for someone unfamiliar with the domain to follow the rest.]
            </p>
            <p className="pd-body">
              [Optional second paragraph. End with the question this project was trying to answer.]
            </p>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          02: THE PROBLEM
          ─────────────────────────────────────────────────────────────────────
          What was broken or missing? Make it concrete: numbers help.
          Good elements: before-row, sticky cards, or a bottleneck flow.
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="pd-section">
        <div className="container">
          <motion.div className="pd-section-content im-section-wide" {...fadeUp()}>
            <span className="im-chip">02: The Problem</span>
            <h2 className="section-title pd-section-title">
              [A one-line statement of what was wrong]
            </h2>
            <p className="pd-body">
              [Describe the problem from the user's perspective. What could they not do?
              What did they not know? What did the old experience force them to do?
              Use a concrete number or example if possible.]
            </p>

            {/* Option A: Before row */}
            <div className="im-ba-wrap">
              <div className="im-ba-row before">
                <span className="im-ba-tag">Gaps</span>
                <span className="im-ba-text">
                  [Gap one] · [Gap two] · [Gap three] · [Gap four]
                </span>
              </div>
            </div>

            {/* Option B: Sticky insight cards: remove Option A if using this */}
            {/*
            <div className="im-stickies">
              <div className="im-sticky im-sticky--pink">
                <span className="im-sticky-label">Problem area</span>
                <p>[What users experienced: direct quote or close paraphrase]</p>
              </div>
              <div className="im-sticky im-sticky--yellow">
                <span className="im-sticky-label">Problem area</span>
                <p>[Another problem they faced]</p>
              </div>
              <div className="im-sticky im-sticky--blue">
                <span className="im-sticky-label">Problem area</span>
                <p>[Third problem]</p>
              </div>
            </div>
            */}

          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          03: RESEARCH & INSIGHT
          ─────────────────────────────────────────────────────────────────────
          What did you learn? From whom? What was the reframe?
          Good elements: sticky cards (3 or 6), a pull quote, sub-labels.
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="pd-section">
        <div className="container">
          <motion.div className="pd-section-content im-section-wide" {...fadeUp()}>
            <span className="im-chip">03: Research & Insight</span>
            <h2 className="section-title pd-section-title">
              [What you learned that changed the direction]
            </h2>
            <p className="pd-body">
              [Briefly describe the research methods: interviews, session recordings,
              competitive analysis, data pull. Who did you talk to?
              How many? What were you trying to understand?]
            </p>

            <div className="im-stickies">
              <div className="im-sticky im-sticky--yellow">
                <span className="im-sticky-label">[Source / method]</span>
                <p>[Finding. Write as if quoting or directly reporting: not summarising.]</p>
              </div>
              <div className="im-sticky im-sticky--blue">
                <span className="im-sticky-label">[Source / method]</span>
                <p>[Finding.]</p>
              </div>
              <div className="im-sticky im-sticky--pink">
                <span className="im-sticky-label">[Source / method]</span>
                <p>[Finding.]</p>
              </div>
              <div className="im-sticky im-sticky--green">
                <span className="im-sticky-label">[Source / method]</span>
                <p>[Finding.]</p>
              </div>
              <div className="im-sticky im-sticky--peach">
                <span className="im-sticky-label">[Source / method]</span>
                <p>[Finding.]</p>
              </div>
              <div className="im-sticky im-sticky--yellow">
                <span className="im-sticky-label">[Source / method]</span>
                <p>[Finding.]</p>
              </div>
            </div>

            <blockquote className="im-pull-quote">
              [The central reframe in one sentence. What did the research make obvious
              that wasn't obvious before?]
            </blockquote>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          04: DESIGN OBJECTIVES
          ─────────────────────────────────────────────────────────────────────
          What did the solution need to do? Numbered, specific, measurable.
          Good elements: numbered list (im-future-list), callout block.
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="pd-section">
        <div className="container">
          <motion.div className="pd-section-content im-section-wide" {...fadeUp()}>
            <span className="im-chip">04: Design Objectives</span>
            <h2 className="section-title pd-section-title">
              [What the solution needed to communicate or enable]
            </h2>
            <p className="pd-body">
              [Before sketching anything, what did you align on? List the specific
              things the design needed to make possible or visible.]
            </p>

            <div className="im-future-list">
              <div className="im-future-item">
                <span className="im-future-num">01</span>
                <div>
                  <p className="im-future-title">[Objective name]</p>
                  <p className="im-future-desc">[What this objective means in practice and why it matters.]</p>
                </div>
              </div>
              <div className="im-future-item">
                <span className="im-future-num">02</span>
                <div>
                  <p className="im-future-title">[Objective name]</p>
                  <p className="im-future-desc">[What this objective means in practice and why it matters.]</p>
                </div>
              </div>
              <div className="im-future-item">
                <span className="im-future-num">03</span>
                <div>
                  <p className="im-future-title">[Objective name]</p>
                  <p className="im-future-desc">[What this objective means in practice and why it matters.]</p>
                </div>
              </div>
            </div>

          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          05: THE SOLUTION
          ─────────────────────────────────────────────────────────────────────
          What did you build? How does it work?
          Good elements: pipeline flow, screenshot strip, before/after pair.
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="pd-section">
        <div className="container">
          <motion.div className="pd-section-content im-section-wide" {...fadeUp()}>
            <span className="im-chip">05: The Solution</span>
            <h2 className="section-title pd-section-title">
              [What you built in one declarative sentence]
            </h2>
            <p className="pd-body">
              [Describe the solution concretely. What does the user see?
              What can they do now that they couldn't before?
              What is the core mechanic? One paragraph.]
            </p>

            {/* Flow diagram: remove if not applicable */}
            <div className="im-flows-stack">
              <div className="im-flow-card">
                <p className="im-flow-card-label">Flow A: [Primary use case]</p>
                <Pipeline steps={[
                  { label: '[Entry point]', type: 'blue' },
                  { label: '[Step 2]', type: 'default' },
                  { label: '[Step 3]', type: 'default' },
                  { label: '[Outcome]', type: 'green' }
                ]} />
              </div>
              <div className="im-flow-card">
                <p className="im-flow-card-label">Flow B: [Alternate path]</p>
                <Pipeline steps={[
                  { label: '[Entry point]', type: 'blue' },
                  { label: '[Step 2]', type: 'default' },
                  { label: '[Outcome]', type: 'green' }
                ]} />
              </div>
            </div>

            {/* Screenshots: replace src with real image paths */}
            <div className="im-flow-screenshots">
              <div className="im-flow-screen">
                <span className="im-flow-screen-step">Step 1: [Screen name]</span>
                <img
                  src="/images/xx-screen-1.png"
                  alt="[Detailed description of what the screen shows]"
                  className="im-screenshot"
                />
                <p className="im-screenshot-caption">[One sentence on what this screen shows and why it matters.]</p>
              </div>
              <div className="im-flow-screen">
                <span className="im-flow-screen-step">Step 2: [Screen name]</span>
                <img
                  src="/images/xx-screen-2.png"
                  alt="[Detailed description]"
                  className="im-screenshot"
                />
                <p className="im-screenshot-caption">[Caption.]</p>
              </div>
            </div>

          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          06: KEY DECISIONS
          ─────────────────────────────────────────────────────────────────────
          What did you reject and why? What did you ship and why?
          Good elements: decisions list with Rejected / Shipped badges.
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="pd-section">
        <div className="container">
          <motion.div className="pd-section-content im-section-wide" {...fadeUp()}>
            <span className="im-chip">06: Key Decisions</span>
            <h2 className="section-title pd-section-title">
              [What you chose and what you ruled out]
            </h2>

            <div className="im-decisions">

              <div className="im-decision">
                <span className="im-decision-badge no">Rejected</span>
                <div className="im-decision-body">
                  <p className="im-decision-title">[Approach name]</p>
                  <p className="im-decision-desc">[Why this seemed reasonable and why it didn't work. Be specific about the failure mode.]</p>
                </div>
              </div>

              <div className="im-decision">
                <span className="im-decision-badge no">Rejected</span>
                <div className="im-decision-body">
                  <p className="im-decision-title">[Approach name]</p>
                  <p className="im-decision-desc">[Why rejected.]</p>
                </div>
              </div>

              <div className="im-decision final">
                <span className="im-decision-badge yes">Shipped</span>
                <div className="im-decision-body">
                  <p className="im-decision-title">[The chosen approach]</p>
                  <p className="im-decision-desc">[What it is. Why it works. What tradeoffs it accepts. What it intentionally defers.]</p>
                </div>
              </div>

            </div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          07: DESIGN ITERATIONS
          ─────────────────────────────────────────────────────────────────────
          How did the UI evolve? Show the exploration, not just the final.
          Good elements: screenshot strip with iteration labels.
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="pd-section">
        <div className="container">
          <motion.div className="pd-section-content im-section-wide" {...fadeUp()}>
            <span className="im-chip">07: Design Iterations</span>
            <h2 className="section-title pd-section-title">
              How the design evolved
            </h2>
            <p className="pd-body">
              [How many iterations? What changed between them: entry point,
              information hierarchy, layout pattern, interaction model?
              Be specific about what each iteration got wrong.]
            </p>

            <div className="im-flow-screenshots">
              <div className="im-flow-screen">
                <span className="im-flow-screen-step">Iteration 1: [What this version tried]</span>
                <img
                  src="/images/xx-iter-1.png"
                  alt="[What the screen shows]"
                  className="im-screenshot"
                />
                <p className="im-screenshot-caption">[What this version was testing and why it didn't work.]</p>
              </div>
              <div className="im-flow-screen">
                <span className="im-flow-screen-step">Iteration 2: [What changed]</span>
                <img
                  src="/images/xx-iter-2.png"
                  alt="[What the screen shows]"
                  className="im-screenshot"
                />
                <p className="im-screenshot-caption">[Caption.]</p>
              </div>
              <div className="im-flow-screen">
                <span className="im-flow-screen-step">Final: [What you shipped]</span>
                <img
                  src="/images/xx-iter-final.png"
                  alt="[What the screen shows]"
                  className="im-screenshot"
                />
                <p className="im-screenshot-caption">[Why this version works. What the previous iterations taught you.]</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          08: IMPACT
          ─────────────────────────────────────────────────────────────────────
          What changed? Concrete numbers > vague outcomes.
          Good elements: metrics grid, before/after rows, stat row.
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="pd-section">
        <div className="container">
          <motion.div className="pd-section-content im-section-wide" {...fadeUp()}>
            <span className="im-chip">08: Impact</span>
            <h2 className="section-title pd-section-title">
              What changed
            </h2>

            <div className="im-ba-wrap">
              <div className="im-ba-row before">
                <span className="im-ba-tag">Before</span>
                <span className="im-ba-text">
                  [Old state point one] · [Old state point two] · [Old state point three]
                </span>
              </div>
              <div className="im-ba-row after">
                <span className="im-ba-tag">After</span>
                <span className="im-ba-text">
                  [New state point one] · [New state point two] · [New state point three]
                </span>
              </div>
            </div>

            <div className="im-metrics">
              <div className="im-metric">
                <div className="im-metric-val">[↓ X%]</div>
                <div className="im-metric-lbl">[What this metric measures]</div>
              </div>
              <div className="im-metric">
                <div className="im-metric-val">[Number]</div>
                <div className="im-metric-lbl">[What this metric measures]</div>
              </div>
              <div className="im-metric">
                <div className="im-metric-val">[↑ Outcome]</div>
                <div className="im-metric-lbl">[What this metric measures]</div>
              </div>
              <div className="im-metric">
                <div className="im-metric-val">[Result]</div>
                <div className="im-metric-lbl">[What this metric measures]</div>
              </div>
            </div>

          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          09: WHAT COMES NEXT
          ─────────────────────────────────────────────────────────────────────
          What would you build next, and why? Shows strategic thinking.
          Good elements: numbered future list (im-future-list).
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="pd-section">
        <div className="container">
          <motion.div className="pd-section-content im-section-wide" {...fadeUp()}>
            <span className="im-chip">09: What Comes Next</span>
            <h2 className="section-title pd-section-title">
              Future prospects
            </h2>
            <p className="pd-body">
              [Phase 1 validated X. These are the natural next steps: each building
              on the foundation without changing what already works.]
            </p>

            <div className="im-future-list">
              <div className="im-future-item">
                <span className="im-future-num">01</span>
                <div>
                  <p className="im-future-title">[Next feature or initiative]</p>
                  <p className="im-future-desc">[What it is, why it's the logical next step, and what it would enable.]</p>
                </div>
              </div>
              <div className="im-future-item">
                <span className="im-future-num">02</span>
                <div>
                  <p className="im-future-title">[Next feature or initiative]</p>
                  <p className="im-future-desc">[Description.]</p>
                </div>
              </div>
              <div className="im-future-item">
                <span className="im-future-num">03</span>
                <div>
                  <p className="im-future-title">[Next feature or initiative]</p>
                  <p className="im-future-desc">[Description.]</p>
                </div>
              </div>
              <div className="im-future-item">
                <span className="im-future-num">04</span>
                <div>
                  <p className="im-future-title">[Next feature or initiative]</p>
                  <p className="im-future-desc">[Description.]</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          10: REFLECTION
          ─────────────────────────────────────────────────────────────────────
          What did this teach you? What would you do differently?
          Good elements: body paragraphs, stat row, pull quote.
          This is the LAST section: add pd-impact-section for extra padding.
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="pd-section pd-impact-section">
        <div className="container">
          <motion.div className="pd-section-content im-section-wide" {...fadeUp()}>
            <span className="im-chip">10: Reflection</span>
            <h2 className="section-title pd-section-title">
              [The central learning in one phrase]
            </h2>
            <p className="pd-body">
              [What was the hardest part? What surprised you?
              What would you do differently? Be honest: this section shows
              design maturity more than any other.]
            </p>
            <p className="pd-body">
              [Optional: quantify the cost of inaction, or the value of
              the reframe that unlocked the solution.]
            </p>

            <blockquote className="im-pull-quote">
              [The one-sentence takeaway. Should feel like something a
              senior designer would quote in a talk.]
            </blockquote>

          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default CaseStudyTemplate;
