import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import './ProjectDetail.css';
import './InventoryListingDetail.css';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, delay, ease: [0.25, 0.1, 0.25, 1] }
});

/* ── Insight card ───────────────────────────────────────────────────────── */
const Insight = ({ color = 'yellow', label, children }) => (
  <div className={`im-sticky im-sticky--${color}`}>
    {label && <span className="im-sticky-label">{label}</span>}
    <p>{children}</p>
  </div>
);

/* ── Action reason chip ─────────────────────────────────────────────────── */
const ActionReason = ({ label, count, type = 'block' }) => (
  <div className={`inv-action-reason inv-action-reason--${type}`}>
    <span className="inv-action-reason-count">{count}</span>
    <span className="inv-action-reason-label">{label}</span>
    <span className="inv-action-reason-arrow">&#8594;</span>
  </div>
);

/* ── Score tier badge ───────────────────────────────────────────────────── */
const ScoreTier = ({ label, range, tier }) => (
  <div className={`inv-score-tier inv-score-tier--${tier}`}>
    <span className="inv-score-tier-label">{label}</span>
    <span className="inv-score-tier-range">{range}</span>
  </div>
);

/* ── Sparkline bar chart (6-week trend mockup) ──────────────────────────── */
const SparkBars = ({ values, color = 'blue' }) => {
  const max = Math.max(...values);
  return (
    <div className="inv-spark-wrap">
      {values.map((v, i) => (
        <div key={i} className="inv-spark-bar-col">
          <div
            className={`inv-spark-bar inv-spark-bar--${color}`}
            style={{ height: `${(v / max) * 100}%` }}
          />
          <span className="inv-spark-week">W{i + 1}</span>
        </div>
      ))}
    </div>
  );
};

/* ── Image placeholder ──────────────────────────────────────────────────── */
const ImagePlaceholder = ({ label }) => (
  <div className="inv-img-placeholder">
    <span className="inv-img-placeholder-label">{label}</span>
    <span className="inv-img-placeholder-note">Image coming soon</span>
  </div>
);

/* ── Main component ─────────────────────────────────────────────────────── */
const InventoryListingDetail = () => {
  const navigate = useNavigate();
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="pd-page">

      {/* Back */}
      <motion.button className="pd-back" onClick={() => navigate('/')}
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}>
        <span className="pd-back-arrow">&#8592;</span> Back
      </motion.button>

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section className="pd-hero">
        <div className="container">
          <motion.div className="section-header pd-section-header"
            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}>
            <div className="project-tags pd-tags">
              {['Inventory Intelligence', 'Enterprise UX', 'Metrics Design', 'VDP'].map((t, i) => (
                <span key={i} className="tag">{t}</span>
              ))}
            </div>
            <h1 className="pd-title">
              Inventory Listing &amp; VDP: Turning a Media Tool into an Intelligence Dashboard
            </h1>
            <p className="pd-lead">
              Spyne's inventory page tracked media jobs. It couldn't tell dealers why vehicles
              weren't selling, how their listing quality stacked up, or how long inventory
              sat offline before going live. We redesigned it around five objectives: image quality,
              set completeness, hero consistency, website readiness, and time to market,
              making each one visible and actionable.
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
              <span className="pd-meta-value">Inventory & VDP</span>
            </div>
            <div className="pd-meta-item">
              <span className="pd-meta-label">Timeline</span>
              <span className="pd-meta-value">2024–2025</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          01: THE PROBLEM
      ══════════════════════════════════════════════════════════════════ */}
      <section className="pd-section">
        <div className="container">
          <motion.div className="pd-section-content im-section-wide" {...fadeUp()}>
            <span className="im-chip">01: The Problem</span>
            <h2 className="section-title pd-section-title">
              Dealers had 290 vehicles. They could see 0 reasons why 178 weren't selling.
            </h2>
            <p className="pd-body">
              The original inventory view showed whether photos had processed, nothing else.
              No publishing readiness. No listing quality. No time to market. Dealers who needed
              to act had to click into every individual vehicle to find out what was wrong.
            </p>

            <ImagePlaceholder label="Before: Card grid, media status only" />

            <div className="im-ba-wrap" style={{ marginTop: '1.5rem' }}>
              <div className="im-ba-row before">
                <span className="im-ba-tag">Gaps</span>
                <span className="im-ba-text">
                  No publishing readiness &middot; no listing quality score &middot; no time-to-market data &middot;
                  action items buried inside individual vehicle records &middot; no "not ready to sell" concept
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          02: RESEARCH
      ══════════════════════════════════════════════════════════════════ */}
      <section className="pd-section">
        <div className="container">
          <motion.div className="pd-section-content im-section-wide" {...fadeUp()}>
            <span className="im-chip">02: Research</span>
            <h2 className="section-title pd-section-title">
              The data existed. Dealers just couldn't see it.
            </h2>
            <p className="pd-body">
              Dealer interviews, session recordings, and CS escalation data pointed at the
              same problem:               dealers weren't ignoring their inventory health, they had no
              surface to see it on.
            </p>

            <div className="im-stickies">
              <Insight color="yellow" label="Dealer research">
                "I don't know why some of my vehicles aren't showing up on Cars.com. I assumed Spyne handled all of it."
              </Insight>
              <Insight color="blue" label="Top CS ticket">
                "Why is my vehicle not published?", almost always caused by an action item the dealer hadn't seen.
              </Insight>
              <Insight color="pink" label="Churn signal">
                Dealers in the bottom 10% of listing scores were 3&#215; more likely to churn, but they weren't being shown their score.
              </Insight>
              <Insight color="green" label="Hidden fix">
                "No Photos" was the #1 blocker. Dealers on Instant Media had a one-tap fix available. It wasn't surfaced anywhere.
              </Insight>
              <Insight color="yellow" label="Time to market">
                Average time from VIN creation to first publish: 13 days. Dealers had no idea. It simply wasn't shown anywhere.
              </Insight>
            </div>

            <blockquote className="im-pull-quote">
              Dealers weren't ignoring their inventory health. They couldn't see it.
              The data existed. The surface didn't.
            </blockquote>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          03: THE REDESIGN
      ══════════════════════════════════════════════════════════════════ */}
      <section className="pd-section">
        <div className="container">
          <motion.div className="pd-section-content im-section-wide" {...fadeUp()}>
            <span className="im-chip">03: The Redesign</span>
            <h2 className="section-title pd-section-title">
              From card grid to inventory intelligence dashboard
            </h2>
            <p className="pd-body">
              The redesign answers one question dealers ask every morning: <strong>what do I need
              to do today to get more vehicles live?</strong> The top of the page shows how many
              vehicles need attention and exactly why. Metric cards track listing quality and
              velocity. Table rows let dealers act without navigating away.
            </p>

            <ImagePlaceholder label="After: Inventory intelligence dashboard" />

            <div className="im-ba-wrap" style={{ marginTop: '1.5rem' }}>
              <div className="im-ba-row before">
                <span className="im-ba-tag">Before</span>
                <span className="im-ba-text">
                  Card grid &middot; media pipeline state only &middot; no action count &middot; no listing score &middot;
                  no time-to-market &middot; publishing status hidden inside each vehicle
                </span>
              </div>
              <div className="im-ba-row after">
                <span className="im-ba-tag">After</span>
                <span className="im-ba-text">
                  Table view &middot; "not ready to sell" count with named reasons &middot; Website Listing Score
                  with percentile benchmark &middot; Time to Market per platform &middot; Media + Publishing columns
                  inline &middot; IMS sync source visible
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          04: ACTION ITEMS
      ══════════════════════════════════════════════════════════════════ */}
      <section className="pd-section">
        <div className="container">
          <motion.div className="pd-section-content im-section-wide" {...fadeUp()}>
            <span className="im-chip">04: Not Ready to Sell</span>
            <h2 className="section-title pd-section-title">
              Named, counted, routable
            </h2>
            <p className="pd-body">
              The page leads with how many vehicles can't be sold right now, and exactly why.
              Each reason is a named category with a count and a direct path to fix it.
              No opening individual records. No guessing.
            </p>

            <div className="inv-action-reasons-grid">
              <ActionReason label="No Photos" count="34" type="block" />
              <ActionReason label="No 360 Spin" count="34" type="block" />
              <ActionReason label="CGI Photos" count="34" type="warn" />
              <ActionReason label="Incomplete Photoset" count="34" type="warn" />
              <ActionReason label="Less than 8 media" count="34" type="warn" />
              <ActionReason label="Wrong hero angle" count="34" type="warn" />
            </div>

            <div className="inv-clone-callout">
              <span className="inv-clone-callout-label">Design decision</span>
              <p>
                Early designs listed individual vehicles with problems.                 We shifted to
                <strong> category-first with counts</strong>, because dealers managing 290 vehicles
                start with a number, not a list. "34 vehicles have no photos" is a workload signal.
                Clicking it filters the table. The list is one tap away.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          05: LISTING SCORE & TIME TO MARKET
      ══════════════════════════════════════════════════════════════════ */}
      <section className="pd-section">
        <div className="container">
          <motion.div className="pd-section-content im-section-wide" {...fadeUp()}>
            <span className="im-chip">05: Metrics</span>
            <h2 className="section-title pd-section-title">
              Two numbers that never existed before
            </h2>
            <p className="pd-body">
              We introduced two new metrics, both derived from data Spyne already had,
              neither ever shown to dealers before.
            </p>

            <div className="inv-metrics-pair">
              <div className="inv-metric-block">
                <p className="inv-metric-block-title">Website Listing Score</p>
                <p className="inv-metric-block-desc">
                  A 0&#8211;10 score per dealer aggregating image quality, set completeness, hero consistency,
                  and publishing readiness. Benchmarked against all Spyne customers, so a score of 7.6
                  means something different when you're in the bottom 10th percentile.
                </p>
                <div className="inv-score-tiers">
                  <ScoreTier label="Poor" range="&#8804; 5.0" tier="poor" />
                  <ScoreTier label="Good" range="5.1 &#8211; 8.0" tier="good" />
                  <ScoreTier label="Excellent" range="8.1 &#8211; 10.0" tier="excellent" />
                </div>
                <div className="inv-hover-card">
                  <span className="inv-hover-card-label">Hover: 6-week score trend</span>
                  <p className="inv-hover-card-desc">Shows weekly average score for the past 6 weeks so dealers can see if their inventory health is improving.</p>
                  <div className="inv-sparkline-demo">
                    <SparkBars values={[5.2, 6.1, 6.8, 7.0, 7.4, 7.6]} color="blue" />
                    <div className="inv-spark-meta">
                      <span className="inv-spark-current">Current: 7.6</span>
                      <span className="inv-spark-trend">&#8593; +2.4 over 6 weeks</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="inv-metric-block">
                <p className="inv-metric-block-title">Average Time to Market</p>
                <p className="inv-metric-block-desc">
                  Time from VIN creation in Spyne to first live publish on any marketplace.
                  For the dealer in our research: <strong>13 days</strong>, and they had no idea.
                  Shown per publishing platform with a 7d / 30d / 90d date range selector.
                </p>
                <div className="inv-hover-card">
                  <span className="inv-hover-card-label">Hover: 6-week publish trend per platform</span>
                  <p className="inv-hover-card-desc">Shows one line per publishing platform across 6 weeks, so dealers can see if a platform's turnaround is getting better or worse.</p>
                  <div className="inv-sparkline-demo">
                    <div className="inv-spark-legend">
                      <span className="inv-spark-legend-item inv-spark-legend-item--blue">Vauto</span>
                      <span className="inv-spark-legend-item inv-spark-legend-item--green">Website</span>
                      <span className="inv-spark-legend-item inv-spark-legend-item--orange">Cars.com</span>
                    </div>
                    <div className="inv-multi-spark">
                      <SparkBars values={[18, 16, 15, 14, 14, 13]} color="blue" />
                      <SparkBars values={[22, 20, 17, 15, 14, 12]} color="green" />
                      <SparkBars values={[25, 22, 20, 18, 16, 15]} color="orange" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          06: THE VDP
      ══════════════════════════════════════════════════════════════════ */}
      <section className="pd-section">
        <div className="container">
          <motion.div className="pd-section-content im-section-wide" {...fadeUp()}>
            <span className="im-chip">06: Vehicle Detail Page</span>
            <h2 className="section-title pd-section-title">
              What's blocking this vehicle. Where it's published.
            </h2>
            <p className="pd-body">
              The VDP left panel leads with <strong>Actions Required</strong>, showing the specific
              blockers keeping this vehicle off the market, and <strong>Publishing Status</strong>
              below it, showing every platform's state. Dealers open the VDP to do something.
              The layout reflects that.
            </p>

            <ImagePlaceholder label="Vehicle Detail Page: Actions Required + Publishing Status" />

            <div className="im-decisions" style={{ marginTop: '2rem' }}>
              <div className="im-decision final">
                <span className="im-decision-badge yes">Kept</span>
                <div className="im-decision-body">
                  <p className="im-decision-title">Actions Required above Publishing Status in the left rail</p>
                  <p className="im-decision-desc">Publishing status confirms what happened. Actions Required says what needs to happen. The primary task comes first.</p>
                </div>
              </div>
              <div className="im-decision">
                <span className="im-decision-badge no">Rejected</span>
                <div className="im-decision-body">
                  <p className="im-decision-title">Actions as a dismissible banner</p>
                  <p className="im-decision-desc">Dealers dismissed banners immediately. A persistent left panel keeps blockers visible without demanding attention.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          07: INVENTORY STRUCTURE
      ══════════════════════════════════════════════════════════════════ */}
      <section className="pd-section">
        <div className="container">
          <motion.div className="pd-section-content im-section-wide" {...fadeUp()}>
            <span className="im-chip">07: Inventory Structure</span>
            <h2 className="section-title pd-section-title">
              Active vs. Sold. IMS sync always visible.
            </h2>
            <p className="pd-body">
              Inventory is now split into <strong>Active</strong> and <strong>Sold</strong>, previously
              mixed together. Within Active, vehicles tab as <strong>All / New / Pre-owned</strong>.
              Both metrics recalculate per tab.               IMS last-sync time and source appear in the page header,
              so dealers stop calling support when inventory updates look stale.
            </p>

            <div className="inv-ims-card">
              <div className="inv-ims-row">
                <span className="inv-ims-label">Source</span>
                <span className="inv-ims-value">Vauto &middot; DealerSocket</span>
              </div>
              <div className="inv-ims-row">
                <span className="inv-ims-label">Last synced</span>
                <span className="inv-ims-value inv-ims-value--ok">12 Jul '25, 7:27 PM</span>
              </div>
            </div>

            <div className="inv-tab-structure">
              <div className="inv-tab-demo">
                <div className="inv-tab inv-tab--active">Active <span className="inv-tab-count">290</span></div>
                <div className="inv-tab">Sold</div>
              </div>
              <div className="inv-subtab-demo">
                <div className="inv-subtab inv-subtab--active">All <span className="inv-tab-count">290</span></div>
                <div className="inv-subtab">New <span className="inv-tab-count">112</span></div>
                <div className="inv-subtab">Pre-owned <span className="inv-tab-count">178</span></div>
              </div>
              <p className="inv-tab-note">Each tab recalculates inventory score and time to market for its own vehicle set only.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          08: IMPACT & REFLECTION
      ══════════════════════════════════════════════════════════════════ */}
      <section className="pd-section pd-impact-section">
        <div className="container">
          <motion.div className="pd-section-content im-section-wide" {...fadeUp()}>
            <span className="im-chip">08: Impact &amp; Reflection</span>
            <h2 className="section-title pd-section-title">
              The data was there. The design wasn't.
            </h2>

            <div className="im-metrics">
              <div className="im-metric">
                <div className="im-metric-val">0 &#8594; 13d</div>
                <div className="im-metric-lbl">Time to market made visible for the first time</div>
              </div>
              <div className="im-metric">
                <div className="im-metric-val">6 reasons</div>
                <div className="im-metric-lbl">Named action categories replacing a generic "not ready" signal</div>
              </div>
              <div className="im-metric">
                <div className="im-metric-val">Percentile</div>
                <div className="im-metric-lbl">Benchmark context added to listing score</div>
              </div>
              <div className="im-metric">
                <div className="im-metric-val">&#8595; Support</div>
                <div className="im-metric-lbl">Fewer "why isn't my vehicle published?" escalations</div>
              </div>
            </div>

            <p className="pd-body" style={{ marginTop: '2rem' }}>
              Every metric on this page was derivable from data Spyne already had.
              The transformation wasn't a new backend capability, it was a design decision
              about what to surface, in what order, and with what context.
            </p>

            <blockquote className="im-pull-quote">
              "178 vehicles not ready to sell" is more powerful than a list of 178 vehicles.
              Numbers create urgency. Lists create work.
            </blockquote>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default InventoryListingDetail;
