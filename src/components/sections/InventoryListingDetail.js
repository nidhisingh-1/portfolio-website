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

/* ── Pipeline flow ──────────────────────────────────────────────────────── */
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
    <span className="inv-action-reason-arrow">→</span>
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
              {['Inventory Intelligence', 'Enterprise UX', 'Data Tables', 'Metrics Design'].map((t, i) => (
                <span key={i} className="tag">{t}</span>
              ))}
            </div>
            <h1 className="pd-title">
              Inventory Listing & VDP — Turning a Media Tool into an Inventory Intelligence Dashboard
            </h1>
            <p className="pd-lead">
              Spyne's inventory view was a grid of vehicle cards showing media processing
              status. Dealers had no visibility into <em>why</em> vehicles weren't ready to sell,
              how their listing quality compared to the market, or how long it took
              their inventory to go live. We rebuilt it around five objectives: image quality,
              set completeness, hero consistency, website readiness, and time to market.
            </p>
          </motion.div>

          <motion.div className="pd-meta"
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.12, ease: [0.25, 0.1, 0.25, 1] }}>
            <div className="pd-meta-item">
              <span className="pd-meta-label">Role</span>
              <span className="pd-meta-value">Product Designer</span>
            </div>
            <div className="pd-meta-item">
              <span className="pd-meta-label">Company</span>
              <span className="pd-meta-value">Spyne AI</span>
            </div>
            <div className="pd-meta-item">
              <span className="pd-meta-label">Duration</span>
              <span className="pd-meta-value">2024–2025</span>
            </div>
            <div className="pd-meta-item">
              <span className="pd-meta-label">Focus</span>
              <span className="pd-meta-value">Inventory UX · Metrics · VDP · Table Design</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          01 — THE BEFORE
      ══════════════════════════════════════════════════════════════════ */}
      <section className="pd-section">
        <div className="container">
          <motion.div className="pd-section-content im-section-wide" {...fadeUp()}>
            <span className="im-chip">01 — Where We Started</span>
            <h2 className="section-title pd-section-title">
              A media processing grid masquerading as inventory management
            </h2>
            <p className="pd-body">
              The original inventory view was built to track media jobs — whether photos were
              processed, in queue, uploading, or failed. Dealers could see vehicle cards and
              their media pipeline state, but nothing more. It answered: <em>did the photos process?</em>
              It couldn't answer: <em>is this vehicle ready to sell? How does my inventory compare
              to competitors? Why are 178 of my 290 vehicles not ready to go live?</em>
            </p>

            <div className="im-flow-screenshots">
              <div className="im-flow-screen">
                <span className="im-flow-screen-step">Before — Card grid: media status only</span>
                <img
                  src="/images/inv-listing-before.png"
                  alt="Original inventory view — card grid showing vehicle thumbnails with media processing status tags: Processed, In Queue, Failed, In Review"
                  className="im-screenshot"
                />
                <p className="im-screenshot-caption">
                  The original Console inventory view. Each card shows vehicle details and media pipeline state —
                  Processed, In Queue, Failed, In Review. No visibility into publishing readiness, listing quality,
                  or time to market. Dealers had to click into each vehicle to understand what needed attention.
                </p>
              </div>
            </div>

            <div className="im-ba-wrap">
              <div className="im-ba-row before">
                <span className="im-ba-tag">Gaps</span>
                <span className="im-ba-text">
                  No publishing readiness signal · no listing quality score · no time-to-market visibility ·
                  action items hidden inside individual vehicle records · no benchmark against market ·
                  no concept of "not ready to sell"
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          02 — OBJECTIVES
      ══════════════════════════════════════════════════════════════════ */}
      <section className="pd-section">
        <div className="container">
          <motion.div className="pd-section-content im-section-wide" {...fadeUp()}>
            <span className="im-chip">02 — Design Objectives</span>
            <h2 className="section-title pd-section-title">
              Five things the inventory view needed to communicate
            </h2>
            <p className="pd-body">
              Before sketching anything, we aligned on what the page needed to do.
              Dealer research, sales team feedback, and competitive analysis surfaced
              five distinct information needs — each previously invisible.
            </p>

            <div className="inv-objectives">
              {[
                {
                  num: '01',
                  title: 'Image quality',
                  desc: 'Show dealers whether their photos meet the quality bar required for high-converting listings — resolution, lighting, background, and presentation standard.'
                },
                {
                  num: '02',
                  title: 'Set completeness',
                  desc: 'A vehicle needs a minimum image set (exterior angles, interior, engine bay) to be competitive. Surface which vehicles are under the threshold — the "Less than 8 media" problem.'
                },
                {
                  num: '03',
                  title: 'Hero angle consistency',
                  desc: 'The hero image is the thumbnail buyers see in search results. Wrong hero angle kills click-through. Dealers needed to know which listings had a weak lead image.'
                },
                {
                  num: '04',
                  title: 'Website listing readiness',
                  desc: 'Are vehicles published to the dealer\'s website and third-party marketplaces (Vauto, Cars.com etc.)? Is there a sync issue? The listing score captures the combined readiness signal.'
                },
                {
                  num: '05',
                  title: 'Time to market',
                  desc: 'How long does it take from VIN creation in Spyne to the first live publish? This is the velocity KPI — every extra day costs holding cost and loses early buyer intent.'
                },
              ].map((obj) => (
                <div key={obj.num} className="inv-objective-row">
                  <span className="inv-objective-num">{obj.num}</span>
                  <div>
                    <p className="inv-objective-title">{obj.title}</p>
                    <p className="inv-objective-desc">{obj.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="inv-objective-add">
              <span className="inv-clone-callout-label">Sixth objective — added through research</span>
              <p>
                Guide dealers to <strong>actively improve their score</strong>, not just observe it.
                The inventory health display needed to be actionable — not a vanity metric.
                Every score state needed a clear "Fix it" path.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          03 — RESEARCH & INSIGHT
      ══════════════════════════════════════════════════════════════════ */}
      <section className="pd-section">
        <div className="container">
          <motion.div className="pd-section-content im-section-wide" {...fadeUp()}>
            <span className="im-chip">03 — Research & Insight</span>
            <h2 className="section-title pd-section-title">
              What was invisible was hurting dealers the most
            </h2>
            <p className="pd-body">
              Dealer interviews, session recordings, and CS escalation data showed a
              consistent pattern: dealers who churned or escalated weren't failing at
              uploading photos — they were failing to understand <em>which</em> vehicles
              needed what, and <em>why</em> their inventory wasn't converting online.
            </p>

            <div className="im-stickies">
              <Insight color="yellow" label="Dealer research">
                "I don't know why some of my vehicles aren't showing up on Cars.com. I assumed Spyne handled all of it."
              </Insight>
              <Insight color="blue" label="CS escalation pattern">
                The most common support ticket: "Why is my vehicle not published?" — almost always caused by an action item the dealer hadn't seen.
              </Insight>
              <Insight color="pink" label="Competitive gap">
                Dealers in the bottom 10% of listing scores were 3× more likely to churn. But they weren't being shown their score or how to fix it.
              </Insight>
              <Insight color="green" label="High-value insight">
                "No Photos" was the #1 action item blocking listings — but dealers on existing Instant Media had a one-tap fix available. It wasn't surfaced.
              </Insight>
              <Insight color="peach" label="IMS sync pain">
                Dealers receiving inventory from AMS/IMS platforms (Vauto, CDK) had no way to see last sync time. They were calling support when inventory updates were stale.
              </Insight>
              <Insight color="yellow" label="Time to market">
                The average time from VIN creation to first publish was 13 days. Dealers didn't know this. They had no idea their inventory was sitting offline for nearly two weeks.
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
          04 — THE REDESIGN
      ══════════════════════════════════════════════════════════════════ */}
      <section className="pd-section">
        <div className="container">
          <motion.div className="pd-section-content im-section-wide" {...fadeUp()}>
            <span className="im-chip">04 — The Redesign</span>
            <h2 className="section-title pd-section-title">
              From card grid to inventory intelligence dashboard
            </h2>
            <p className="pd-body">
              The redesign restructured the inventory view around a single question dealers
              ask every morning: <strong>what do I need to do today to get more vehicles live?</strong>
              The top of the page answers at scale — how many vehicles need attention and
              why. The table answers per vehicle. The metric cards track velocity and score.
            </p>

            <div className="im-flow-screenshots">
              <div className="im-flow-screen">
                <span className="im-flow-screen-step">After — Inventory intelligence dashboard</span>
                <img
                  src="/images/inv-listing-after.png"
                  alt="Redesigned inventory page — shows 178 vehicles not ready to sell, action item breakdown (No Photos, No 360 Spin, CGI Photos etc), Website Listing Score 7.6, Average Time to Market 13 days, and inventory table with Media and Publishing status columns"
                  className="im-screenshot"
                />
                <p className="im-screenshot-caption">
                  The redesigned Retail Suite inventory page. Top strip surfaces "178 vehicles not ready to sell"
                  with specific reasons. Website Listing Score and Average Time to Market appear as metric cards
                  with benchmarking. The table shows Media processing state and Publishing platform status
                  side by side, with a Clone Media CTA for vehicles missing photos.
                </p>
              </div>
            </div>

            <div className="im-ba-wrap" style={{ marginTop: '2.5rem' }}>
              <div className="im-ba-row before">
                <span className="im-ba-tag">Before</span>
                <span className="im-ba-text">
                  Card grid · media pipeline state only (Processed / Failed / In Queue) ·
                  no count of vehicles needing action · no listing score · no time-to-market data ·
                  publishing status hidden inside vehicle records
                </span>
              </div>
              <div className="im-ba-row after">
                <span className="im-ba-tag">After</span>
                <span className="im-ba-text">
                  Table view · "not ready to sell" count with top reasons surfaced at top ·
                  Website Listing Score with percentile benchmarking · Average Time to Market per platform ·
                  Media + Publishing columns inline · Clone Media CTA on media-missing rows ·
                  IMS sync source and last-synced time visible
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          05 — ACTION ITEMS
      ══════════════════════════════════════════════════════════════════ */}
      <section className="pd-section">
        <div className="container">
          <motion.div className="pd-section-content im-section-wide" {...fadeUp()}>
            <span className="im-chip">05 — Action Items — Not Ready to Sell</span>
            <h2 className="section-title pd-section-title">
              Named, counted, and routable
            </h2>
            <p className="pd-body">
              The top of the inventory page now leads with the most operationally urgent
              signal: <strong>how many vehicles can't be sold right now, and exactly why.</strong>
              Each reason is a named category with a count and a direct "Fix it" path.
              Dealers see the full picture at a glance — without opening a single vehicle record.
            </p>

            <div className="inv-action-reasons-grid">
              <ActionReason label="No Photos" count="34" type="block" />
              <ActionReason label="No 360 Spin" count="34" type="block" />
              <ActionReason label="CGI Photos" count="34" type="warn" />
              <ActionReason label="Incomplete Photoset" count="34" type="warn" />
              <ActionReason label="Less than 8 media" count="34" type="warn" />
              <ActionReason label="Wrong hero angle" count="34" type="warn" />
            </div>

            <p className="pd-body" style={{ marginTop: '1.5rem' }}>
              The action item categories map directly to the five design objectives.
              <strong> No Photos</strong> and <strong>Incomplete Photoset</strong> address set completeness.
              <strong> Wrong hero angle</strong> addresses hero consistency.
              <strong> CGI Photos</strong> flags AI-generated imagery that may not meet marketplace
              standards. Each category links to a filtered view of the relevant vehicles.
            </p>

            <div className="inv-clone-callout">
              <span className="inv-clone-callout-label">Design decision — counting vs. listing</span>
              <p>
                Early designs surfaced action items as a list of vehicles. We moved to
                <strong> category-first with counts</strong> because dealers managing 290 vehicles
                don't start with a list — they start with a number. "34 vehicles have no photos"
                is a workload signal. Clicking it filters the table. The number comes first,
                the list is one tap away.
              </p>
            </div>

            <p className="im-sub-label">VIN cloning entry from the table</p>
            <div className="im-flows-stack">
              <div className="im-flow-card">
                <p className="im-flow-card-label">No Photos → Clone Media → Published (same day)</p>
                <Pipeline steps={[
                  { label: 'Action: No Photos', type: 'blue' },
                  { label: 'Table row', type: 'default' },
                  { label: 'Clone Media →', type: 'blue' },
                  { label: 'VIN Match', type: 'default' },
                  { label: 'Confidence Preview', type: 'default' },
                  { label: 'Published Day 0', type: 'green' }
                ]} />
              </div>
              <div className="im-flow-card">
                <p className="im-flow-card-label">Wrong hero angle → Fix in VDP → Re-publish</p>
                <Pipeline steps={[
                  { label: 'Action: Hero Angle', type: 'blue' },
                  { label: 'Open Vehicle', type: 'default' },
                  { label: 'Images tab', type: 'default' },
                  { label: 'Set hero image', type: 'default' },
                  { label: 'Re-publish', type: 'green' }
                ]} />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          06 — INVENTORY HEALTH SCORE
      ══════════════════════════════════════════════════════════════════ */}
      <section className="pd-section">
        <div className="container">
          <motion.div className="pd-section-content im-section-wide" {...fadeUp()}>
            <span className="im-chip">06 — Inventory Health — Website Listing Score</span>
            <h2 className="section-title pd-section-title">
              A single number that captures listing quality across the entire lot
            </h2>
            <p className="pd-body">
              The Website Listing Score aggregates image quality, set completeness,
              hero consistency, and publishing readiness into a single 0–10 score per dealer.
              It updates in near real-time and is benchmarked against the dealer's percentile
              among all Spyne customers — giving context the raw number alone can't provide.
            </p>

            <div className="inv-score-tiers">
              <ScoreTier label="Poor" range="≤ 5.0" tier="poor" />
              <ScoreTier label="Good" range="5.1 – 8.0" tier="good" />
              <ScoreTier label="Excellent" range="8.1 – 10.0" tier="excellent" />
            </div>

            <p className="pd-body">
              The dealership in the screenshots above has a score of <strong>7.6 (Good)</strong> —
              but sits in the <strong>bottom 10th percentile</strong> of all dealers. The score
              alone would feel acceptable. The percentile context makes the gap visible and
              the "Fix it" path urgent.
            </p>

            <div className="inv-hover-card">
              <span className="inv-hover-card-label">Hover state — 6-week score trend</span>
              <p className="inv-hover-card-desc">
                Hovering the score card reveals the weekly average score for the past 6 weeks,
                allowing dealers to track whether their inventory health is improving or degrading.
                Weeks with no inventory show as zero — removing ambiguity about data gaps.
              </p>
              <div className="inv-sparkline-demo">
                <SparkBars values={[5.2, 6.1, 6.8, 7.0, 7.4, 7.6]} color="blue" />
                <div className="inv-spark-meta">
                  <span className="inv-spark-current">Current: 7.6</span>
                  <span className="inv-spark-trend">↑ +2.4 over 6 weeks</span>
                </div>
              </div>
            </div>

            <div className="inv-score-scope">
              <span className="inv-clone-callout-label">Score scope by inventory type</span>
              <div className="inv-score-scope-grid">
                <div className="inv-scope-item">
                  <span className="inv-scope-tab">All</span>
                  <p>Combined score across all active inventory. Highest-level health signal.</p>
                </div>
                <div className="inv-scope-item">
                  <span className="inv-scope-tab">New</span>
                  <p>Score calculated only from new vehicle VINs. OEM image standards apply.</p>
                </div>
                <div className="inv-scope-item">
                  <span className="inv-scope-tab">Pre-owned</span>
                  <p>Score for used vehicles only. Higher bar — actual photo sets required for trust.</p>
                </div>
              </div>
              <p className="inv-score-scope-note">
                Sold vehicles are excluded from all score calculations.
                The score reflects active, sellable inventory only.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          07 — TIME TO MARKET
      ══════════════════════════════════════════════════════════════════ */}
      <section className="pd-section">
        <div className="container">
          <motion.div className="pd-section-content im-section-wide" {...fadeUp()}>
            <span className="im-chip">07 — Time to Market</span>
            <h2 className="section-title pd-section-title">
              13 days. Dealers had no idea.
            </h2>
            <p className="pd-body">
              Average Time to Market measures the gap between VIN creation in Spyne and the
              first successful publish to a marketplace. For the dealer shown in the screenshots,
              that number was <strong>13 days</strong> — and they were in the <strong>bottom 10th percentile</strong>.
              Before this redesign, no dealer could see this number. It simply wasn't displayed.
            </p>

            <div className="im-metrics">
              <div className="im-metric">
                <div className="im-metric-val">13 days</div>
                <div className="im-metric-lbl">Average time from VIN creation to first live publish — shown in the screenshots above</div>
              </div>
              <div className="im-metric">
                <div className="im-metric-val">Bot. 10%</div>
                <div className="im-metric-lbl">Percentile context — the score alone doesn't tell the full story</div>
              </div>
              <div className="im-metric">
                <div className="im-metric-val">Platform</div>
                <div className="im-metric-lbl">Shown per publishing platform — Vauto, Cars.com, dealer website, etc.</div>
              </div>
              <div className="im-metric">
                <div className="im-metric-val">7d / 30d / 90d</div>
                <div className="im-metric-lbl">Date range selector — auto-extends if no VINs in the shorter window</div>
              </div>
            </div>

            <p className="pd-body">
              The metric is platform-aware. A dealer publishing to Vauto, their website, and
              Cars.com sees a separate TAT per platform — because each has a different
              pipeline. The dropdown lets them switch between platforms without navigating away.
            </p>

            <div className="inv-hover-card">
              <span className="inv-hover-card-label">Hover state — 6-week publish trend per platform</span>
              <p className="inv-hover-card-desc">
                Hovering the Time to Market card shows a multi-line chart — one line per publishing
                platform — across the last 6 weeks. Dealers can see whether a platform's TAT is
                worsening (sync issue, API delay) or improving (workflow optimisation, Instant Media adoption).
              </p>
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

            <div className="inv-ttm-rules">
              <span className="inv-clone-callout-label">Calculation rules</span>
              <div className="inv-rules-list">
                <div className="inv-rule-item">
                  <span className="inv-rule-dot" />
                  <p>Measures VIN creation timestamp → first successful platform publish. Captures Spyne's own processing + handoff time.</p>
                </div>
                <div className="inv-rule-item">
                  <span className="inv-rule-dot" />
                  <p>Sold vehicles excluded. The metric reflects active inventory only — so it's always forward-looking.</p>
                </div>
                <div className="inv-rule-item">
                  <span className="inv-rule-dot" />
                  <p>Visible only to customers with active publishing enabled. No publishing = no meaningful TTM signal.</p>
                </div>
                <div className="inv-rule-item">
                  <span className="inv-rule-dot" />
                  <p>Auto date-range fallback: default 7d → extends to 30d → 90d if no VINs created in the shorter window.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          08 — IMS SYNC + INVENTORY STRUCTURE
      ══════════════════════════════════════════════════════════════════ */}
      <section className="pd-section">
        <div className="container">
          <motion.div className="pd-section-content im-section-wide" {...fadeUp()}>
            <span className="im-chip">08 — IMS Sync & Inventory Structure</span>
            <h2 className="section-title pd-section-title">
              Multi-source sync visibility and cleaner inventory segmentation
            </h2>
            <p className="pd-body">
              Many dealerships receive inventory from external IMS platforms — Vauto, CDK, DealerSocket.
              When inventory updates stopped appearing, dealers had no idea whether it was a sync
              failure or expected behaviour. We surfaced <strong>last synced time and source</strong>
              in the top right of the inventory page — with support for multiple IMS sources per rooftop.
            </p>

            <div className="inv-ims-card">
              <div className="inv-ims-row">
                <span className="inv-ims-label">Source</span>
                <span className="inv-ims-value">Vauto · DealerSocket</span>
              </div>
              <div className="inv-ims-row">
                <span className="inv-ims-label">Last synced</span>
                <span className="inv-ims-value inv-ims-value--ok">12 Jul '25, 7:27 PM</span>
              </div>
            </div>

            <p className="pd-body" style={{ marginTop: '1.5rem' }}>
              The inventory is also split into <strong>Active</strong> and <strong>Sold</strong> — previously
              mixed together. Within Active, vehicles are tabbed as <strong>All / New / Pre-owned</strong>,
              each showing vehicle counts. Inventory health and Time to Market recalculate per tab —
              so a dealer checking their used vehicle score sees only pre-owned VINs in the calculation.
            </p>

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
          09 — THE VDP
      ══════════════════════════════════════════════════════════════════ */}
      <section className="pd-section">
        <div className="container">
          <motion.div className="pd-section-content im-section-wide" {...fadeUp()}>
            <span className="im-chip">09 — Vehicle Detail Page</span>
            <h2 className="section-title pd-section-title">
              Actions Required at the top. Every channel's publish state in one view.
            </h2>
            <p className="pd-body">
              The vehicle detail page (VDP) is where dealers go to understand and act on a
              specific unit. The redesign gives the left panel to what matters operationally:
              <strong> Actions Required</strong> (the specific blockers keeping this vehicle from
              being sellable) and <strong>Publishing Status</strong> (which platforms this vehicle
              is live on, when it was last synced, and what's pending).
            </p>

            <div className="im-flow-screenshots">
              <div className="im-flow-screen">
                <span className="im-flow-screen-step">Vehicle Detail Page — Actions Required + Publishing Status panel</span>
                <img
                  src="/images/inv-vdp-detail.png"
                  alt="Vehicle detail page showing Actions Required panel (No Photos 34, CGI Photos 1, Less than 8 media 34), Publishing Status section with Vauto platform sync states, and main content area with image gallery and vehicle spec details"
                  className="im-screenshot"
                />
                <p className="im-screenshot-caption">
                  The VDP left panel leads with Actions Required — No Photos (34), CGI Photos (1), Less than 8 media (34) —
                  each with a count and a direct action path. Below it, Publishing Status shows each platform (Vauto ×3 here)
                  with last-published timestamp, sync state (Sync Awaiting, Not published yet), and VIN details missing prompts.
                  The main pane hosts the image gallery, vehicle details spec grid, and tab navigation.
                </p>
              </div>
            </div>

            <p className="im-sub-label">VDP information hierarchy decisions</p>
            <div className="im-decisions">
              <div className="im-decision final">
                <span className="im-decision-badge yes">Kept</span>
                <div className="im-decision-body">
                  <p className="im-decision-title">Actions Required panel above Publishing Status in the left rail</p>
                  <p className="im-decision-desc">Dealers open the VDP to do something. Leading with what's blocking the vehicle — not what's already published — aligns the layout with the primary intent. Publishing status is secondary: it confirms what happened, not what needs to happen.</p>
                </div>
              </div>

              <div className="im-decision final">
                <span className="im-decision-badge yes">Kept</span>
                <div className="im-decision-body">
                  <p className="im-decision-title">Tab navigation for media types (Images · 360 Spin · Video Tour · 3D)</p>
                  <p className="im-decision-desc">Each media type has its own production status and completeness state. Separating them into tabs prevents the mixed-media list problem — dealers can focus on one type at a time without scrolling past irrelevant states.</p>
                </div>
              </div>

              <div className="im-decision">
                <span className="im-decision-badge no">Rejected</span>
                <div className="im-decision-body">
                  <p className="im-decision-title">Actions Required as a modal or notification banner</p>
                  <p className="im-decision-desc">Early designs surfaced blockers in a dismissible banner at the top of the page. Dealers dismissed them immediately. Moving actions to a persistent left panel — always visible regardless of scroll position — kept them in view without demanding attention.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          10 — IMPACT
      ══════════════════════════════════════════════════════════════════ */}
      <section className="pd-section">
        <div className="container">
          <motion.div className="pd-section-content im-section-wide" {...fadeUp()}>
            <span className="im-chip">10 — Impact</span>
            <h2 className="section-title pd-section-title">
              What changed when inventory became visible
            </h2>

            <div className="im-metrics">
              <div className="im-metric">
                <div className="im-metric-val">0 → 13d</div>
                <div className="im-metric-lbl">Time to market made visible for the first time — dealers can now act on it</div>
              </div>
              <div className="im-metric">
                <div className="im-metric-val">6 categories</div>
                <div className="im-metric-lbl">Named action reasons replacing a generic "not ready" signal</div>
              </div>
              <div className="im-metric">
                <div className="im-metric-val">Percentile</div>
                <div className="im-metric-lbl">Benchmark context added to listing score — drives improvement intent</div>
              </div>
              <div className="im-metric">
                <div className="im-metric-val">↓ Support</div>
                <div className="im-metric-lbl">Reduction in "why isn't my vehicle published?" escalations</div>
              </div>
            </div>

            <div className="im-ba-wrap">
              <div className="im-ba-row before">
                <span className="im-ba-tag">Before</span>
                <span className="im-ba-text">
                  Card grid showing media pipeline state · no listing quality score · no time-to-market metric ·
                  no action reason categories · no IMS sync visibility · no inventory segmentation ·
                  publishing status buried inside each vehicle record
                </span>
              </div>
              <div className="im-ba-row after">
                <span className="im-ba-tag">After</span>
                <span className="im-ba-text">
                  Action-reason header with vehicle counts per category · Website Listing Score with percentile benchmark ·
                  Time to Market per platform with date range control · 6-week trend on hover for both metrics ·
                  IMS source + last-sync time visible · Active/Sold split with All/New/Pre-owned tabs ·
                  VDP Actions Required panel + per-platform Publishing Status
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          11 — REFLECTION
      ══════════════════════════════════════════════════════════════════ */}
      <section className="pd-section pd-impact-section">
        <div className="container">
          <motion.div className="pd-section-content im-section-wide" {...fadeUp()}>
            <span className="im-chip">11 — Reflection</span>
            <h2 className="section-title pd-section-title">
              The data was there. The design wasn't.
            </h2>
            <p className="pd-body">
              Every metric on this page — listing score, time to market, action reasons —
              was derivable from data Spyne already had. The transformation wasn't
              a new backend capability. It was a design decision about what to surface,
              in what hierarchy, and with what context.
            </p>
            <p className="pd-body">
              The hardest constraint was <strong>not adding noise</strong>. Early designs tried to
              show everything: every action item, every platform, every sync event.
              The result was cognitive overload that dealers ignored. The shipped design
              ruthlessly prioritises: counts before lists, category before detail, score
              before breakdown. The detail is always one tap away — but it doesn't lead.
            </p>

            <blockquote className="im-pull-quote">
              "178 vehicles not ready to sell" is more powerful than a list of 178 vehicles.
              Numbers create urgency. Lists create work.
            </blockquote>

            <div className="im-future-list" style={{ marginTop: '2rem' }}>
              <div className="im-future-item">
                <span className="im-future-num">01</span>
                <div>
                  <p className="im-future-title">Bulk fix for action categories</p>
                  <p className="im-future-desc">Select all 34 "No Photos" vehicles → trigger Clone Media for the entire batch. Currently requires per-vehicle action. High-value for high-volume lots.</p>
                </div>
              </div>
              <div className="im-future-item">
                <span className="im-future-num">02</span>
                <div>
                  <p className="im-future-title">Score improvement recommendations</p>
                  <p className="im-future-desc">When a dealer is in the bottom 10%, surface the top 3 actions that would move their score the most — not a full checklist, just the highest-leverage interventions.</p>
                </div>
              </div>
              <div className="im-future-item">
                <span className="im-future-num">03</span>
                <div>
                  <p className="im-future-title">TTM target setting</p>
                  <p className="im-future-desc">Let dealers set a time-to-market target (e.g. "get to 5 days") and show progress toward it — turning the metric from observation into a goal.</p>
                </div>
              </div>
              <div className="im-future-item">
                <span className="im-future-num">04</span>
                <div>
                  <p className="im-future-title">Per-vehicle TTM breakdown</p>
                  <p className="im-future-desc">Show each stage of a vehicle's journey — intake → media processing → review → publish — so dealers can pinpoint where their pipeline slows down.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default InventoryListingDetail;
