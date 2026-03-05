import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import './ProjectDetail.css';
import './InstantMediaDetail.css';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, delay, ease: [0.25, 0.1, 0.25, 1] }
});

/* ── Pipeline flow component — horizontal, minimal ─────────────────────────── */
const Pipeline = ({ steps, label }) => (
  <div className="im-pipeline-wrap">
    {label && <p className="im-pipeline-label">{label}</p>}
    <div className="im-pipeline">
      {steps.map((step, i) => (
        <React.Fragment key={i}>
          <div className="im-pipe-item">
            <div className={`im-pipe-dot im-pipe-dot--${step.type || 'default'}`}>
              {i + 1}
            </div>
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
  </div>
);

/* ── Bottleneck flow — special treatment for the problem diagram ────────────── */
const BottleneckFlow = () => (
  <div className="im-bottleneck-flow">
    <div className="im-bf-step im-bf-step--neutral">Vehicle Acquired</div>
    <span className="im-bf-arrow">→</span>
    <div className="im-bf-step im-bf-step--delay">Up to 30 Days Offline</div>
    <span className="im-bf-arrow">→</span>
    <div className="im-bf-step im-bf-step--neutral">Detailing + Shoot</div>
    <span className="im-bf-arrow">→</span>
    <div className="im-bf-step im-bf-step--end">Listing Live</div>
    <p className="im-bf-caption">No impressions. No leads. Holding cost accruing the entire time.</p>
  </div>
);

/* ── Sticky note ───────────────────────────────────────────────────────────── */
const Sticky = ({ color = 'yellow', label, children }) => (
  <div className={`im-sticky im-sticky--${color}`}>
    {label && <span className="im-sticky-label">{label}</span>}
    <p>{children}</p>
  </div>
);

/* ── Main component ────────────────────────────────────────────────────────── */
const InstantMediaDetail = () => {
  const navigate = useNavigate();
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="pd-page">

      {/* Back */}
      <motion.button className="pd-back" onClick={() => navigate('/')}
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}>
        <span className="pd-back-arrow">&#8592;</span> Back
      </motion.button>

      {/* ── HERO ─────────────────────────────────────────────────────────────── */}
      <section className="pd-hero">
        <div className="container">
          <motion.div className="section-header pd-section-header"
            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}>
            <div className="project-tags pd-tags">
              {['Automotive SaaS', 'Product Strategy', 'Velocity Feature', 'MVP'].map((t, i) => (
                <span key={i} className="tag">{t}</span>
              ))}
            </div>
            <h1 className="pd-title">
              Instant Media – Reducing Time-to-Live in Automotive Retail
            </h1>
            <p className="pd-lead">
              Dealers were ready to sell the moment a vehicle arrived. The system made them
              wait 3–5 days for photos. This feature collapsed that gap to zero.
            </p>
          </motion.div>

          <motion.div className="pd-meta"
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.12, ease: [0.25, 0.1, 0.25, 1] }}>
            <div className="pd-meta-item">
              <span className="pd-meta-label">Role</span>
              <span className="pd-meta-value">Senior Product Designer</span>
            </div>
            <div className="pd-meta-item">
              <span className="pd-meta-label">Company</span>
              <span className="pd-meta-value">Spyne AI</span>
            </div>
            <div className="pd-meta-item">
              <span className="pd-meta-label">Duration</span>
              <span className="pd-meta-value">2024–2025</span>
            </div>
          </motion.div>
        </div>

      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          01 — THE BOTTLENECK
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="pd-section">
        <div className="container">
          <motion.div className="pd-section-content im-section-wide" {...fadeUp()}>
            <span className="im-chip">01 — The Bottleneck</span>
            <h2 className="section-title pd-section-title">
              Every day offline is a day the vehicle can't earn
            </h2>
            <p className="pd-body">
              In automotive retail, <strong>inventory velocity is revenue</strong>. Vehicles accumulate
              daily holding cost — <strong>floorplan interest, depreciation, lot space</strong> — from the
              moment they're acquired. After acquisition, the detailing, staging, and
              photoshoot process can take anywhere from a few days to <strong>close to a month</strong>.
              Every one of those days, the vehicle is <strong>invisible online</strong>.
            </p>

            <BottleneckFlow />

          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          02 — WHAT WE LEARNED
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="pd-section">
        <div className="container">
          <motion.div className="pd-section-content im-section-wide" {...fadeUp()}>
            <span className="im-chip">02 — Research & Insight</span>
            <h2 className="section-title pd-section-title">
              The gap no one had named
            </h2>
            <p className="pd-body">
              Dealer interviews, live workflow observation, and a sweep of competitors —
              AutoTrader, DealerSocket, CDK Global, OEM systems — surfaced a consistent
              blind spot.
            </p>

            <div className="im-stickies">
              <Sticky color="yellow" label="Competitor finding">
                Every platform requires at least one media asset before a listing can be published.
              </Sticky>
              <Sticky color="blue" label="Competitor finding">
                No platform surfaces time-to-live as a dealer-facing KPI. Nobody's measuring it.
              </Sticky>
              <Sticky color="pink" label="Used-vehicle gap">
                Used vehicle workflows have no support for instant placeholder media at scale.
              </Sticky>
              <Sticky color="green" label="Dealer workaround">
                Dealers were uploading a single blurry photo just to make the listing go live — introducing trust risk.
              </Sticky>
              <Sticky color="peach" label="Consumer finding">
                Buyers browsing early don't need perfect photos. They need to know the vehicle exists.
              </Sticky>
              <Sticky color="yellow" label="Search behaviour">
                Freshness algorithms surface newly listed inventory. Day-1 listings get more early exposure than day-5 listings.
              </Sticky>
            </div>

            <blockquote className="im-pull-quote">
              The problem wasn't missing photos. It was the assumption that photos had to come first.
            </blockquote>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          03 — THE FEATURE
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="pd-section">
        <div className="container">
          <motion.div className="pd-section-content im-section-wide" {...fadeUp()}>
            <span className="im-chip">03 — The Feature</span>
            <h2 className="section-title pd-section-title">
              List today. Replace tomorrow.
            </h2>
            <p className="pd-body">
              Instant Media matches a vehicle to representative images from two sources —
              the dealer's own Rooftop Library or the OEM catalog — and enables one-click
              publish with a consumer-facing transparency badge. When real photos arrive,
              one tap replaces everything and the badge disappears.
            </p>

            <div className="im-nvu-grid">
              <div className="im-nvu-card">
                <p className="im-nvu-title new">New Vehicles</p>
                <p className="im-nvu-note">
                  OEM catalog images are widely expected. Higher tolerance for representative imagery.
                </p>
                <Pipeline steps={[
                  { label: 'Acquire', type: 'blue' },
                  { label: 'OEM Catalog', type: 'default' },
                  { label: 'Trim Match', type: 'default' },
                  { label: 'Publish', type: 'green' }
                ]} />
              </div>

              <div className="im-nvu-card">
                <p className="im-nvu-title used">Used Vehicles</p>
                <p className="im-nvu-note">
                  Higher trust bar. Confidence scoring + mandatory transparency badge required.
                </p>
                <Pipeline steps={[
                  { label: 'Acquire', type: 'blue' },
                  { label: 'Rooftop Lib', type: 'default' },
                  { label: 'Conf. Score', type: 'default' },
                  { label: 'Badge', type: 'blue' },
                  { label: 'Publish', type: 'green' }
                ]} />
              </div>
            </div>

            <div className="im-ba-screenshots">
              <div className="im-ba-screen">
                <span className="im-ba-screen-tag before">Before</span>
                <img src="/images/im-upload-empty.png" alt="Empty media upload screen — listing blocked, waiting for photos" className="im-screenshot" />
                <p className="im-screenshot-caption">Upload screen sits empty. No media = no listing. Dealer waits for the photoshoot.</p>
              </div>
              <div className="im-ba-screen">
                <span className="im-ba-screen-tag after">After</span>
                <img src="/images/im-trigger.png" alt="Instant Media trigger — Go live instantly banner with matched stock images" className="im-screenshot" />
                <p className="im-screenshot-caption">Instant Media surfaces in context — "Go live instantly with your media library" with matched vehicles ready to use.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          04 — DECISIONS
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="pd-section">
        <div className="container">
          <motion.div className="pd-section-content im-section-wide" {...fadeUp()}>
            <span className="im-chip">04 — Key Decisions</span>
            <h2 className="section-title pd-section-title">
              Three wrong turns before the right one
            </h2>

            <div className="im-decisions">
              <div className="im-decision">
                <span className="im-decision-badge no">Rejected</span>
                <div className="im-decision-body">
                  <p className="im-decision-title">Require photos before publish</p>
                  <p className="im-decision-desc">The status quo. Solves nothing — dealers still wait. Problem is upstream of the UI.</p>
                </div>
              </div>

              <div className="im-decision">
                <span className="im-decision-badge no">Rejected</span>
                <div className="im-decision-body">
                  <p className="im-decision-title">Publish with unlabeled generic images</p>
                  <p className="im-decision-desc">Removes friction for dealers but destroys buyer trust when photos don't match. Non-starter.</p>
                </div>
              </div>

              <div className="im-decision">
                <span className="im-decision-badge no">Rejected</span>
                <div className="im-decision-body">
                  <p className="im-decision-title">Manual browse of past inventory</p>
                  <p className="im-decision-desc">Dealers manually searching thousands of past records defeats the purpose. Too slow.</p>
                </div>
              </div>

              <div className="im-decision final">
                <span className="im-decision-badge yes">Shipped</span>
                <div className="im-decision-body">
                  <p className="im-decision-title">Auto-match + transparency badge + one-click publish</p>
                  <p className="im-decision-desc">VIN or YMMT input → auto-matched image from Rooftop Library or OEM catalog → confidence score preview → publish with consumer badge. No new dashboards. Lives inside the existing Media section.</p>
                </div>
              </div>
            </div>

            {/* User flows */}
            <p className="im-sub-label">User flows</p>
            <div className="im-flows-stack">
              <div className="im-flow-card">
                <p className="im-flow-card-label">Flow A — VIN available</p>
                <Pipeline steps={[
                  { label: 'Enter VIN', type: 'blue' },
                  { label: 'Decode', type: 'default' },
                  { label: 'Fetch Match', type: 'blue' },
                  { label: 'Preview', type: 'default' },
                  { label: 'Publish', type: 'green' }
                ]} />
              </div>
              <div className="im-flow-card">
                <p className="im-flow-card-label">Flow B — No VIN (YMMT input)</p>
                <Pipeline steps={[
                  { label: 'Enter YMMT', type: 'blue' },
                  { label: 'Fetch Match', type: 'blue' },
                  { label: 'Preview', type: 'default' },
                  { label: 'Publish', type: 'green' }
                ]} />
              </div>
              <div className="im-flow-card">
                <p className="im-flow-card-label">Flow C — Replace with actual photos</p>
                <Pipeline steps={[
                  { label: 'Upload Photos', type: 'blue' },
                  { label: 'Confirm Replace', type: 'default' },
                  { label: 'Badge Removed', type: 'default' },
                  { label: 'Live ✓', type: 'green' }
                ]} />
              </div>
            </div>

            <div className="im-flow-screenshots">
              <div className="im-flow-screen">
                <span className="im-flow-screen-step">Step 1 — YMMT Input</span>
                <img src="/images/im-ymmt-input.png" alt="YMMT input form — enter Year, Make, Model, Trim to find matching stock images" className="im-screenshot" />
                <p className="im-screenshot-caption">Year, Make, Model, Trim input with Find Matches</p>
              </div>
              <div className="im-flow-screen">
                <span className="im-flow-screen-step">Step 2 — Finding Matches</span>
                <img src="/images/im-finding-match.png" alt="Loading state — finding best matching vehicle images from library" className="im-screenshot" />
                <p className="im-screenshot-caption">Matching against Rooftop Library or OEM catalog</p>
              </div>
              <div className="im-flow-screen">
                <span className="im-flow-screen-step">Step 3 — Select Match</span>
                <img src="/images/im-match-results.png" alt="Match results grid showing Best Match badge and Use Media buttons" className="im-screenshot" />
                <p className="im-screenshot-caption">Confidence-scored results with Best Match highlight</p>
              </div>
              <div className="im-flow-screen">
                <span className="im-flow-screen-step">Step 4 — Live</span>
                <img src="/images/im-live-listing.png" alt="Live listing with representative images and Not an Actual Vehicle transparency badge" className="im-screenshot" />
                <p className="im-screenshot-caption">Listing live with transparency badge on every image</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          05 — DESIGN ITERATIONS
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="pd-section">
        <div className="container">
          <motion.div className="pd-section-content im-section-wide" {...fadeUp()}>
            <span className="im-chip">05 — Design Iterations</span>
            <h2 className="section-title pd-section-title">
              How the UI evolved
            </h2>
            <p className="pd-body">
              Five distinct approaches were explored before the final design. Each iteration
              changed how the feature was surfaced — the entry point, the layout, and the
              level of contextual guidance — before converging on the inline trigger with
              confidence-scored results.
            </p>

            <div className="im-flow-screenshots">
              <div className="im-flow-screen">
                <span className="im-flow-screen-step">Iteration 1 — Explicit CTA entry point</span>
                <img src="/images/im-iter-1.png" alt="Early iteration — Enter VIN or Enter Vehicle Details CTA at the bottom of the upload screen" className="im-screenshot" />
                <p className="im-screenshot-caption">Dealer had to manually choose between "Enter VIN" or "Enter Vehicle Details" — required an extra decision before seeing any matches.</p>
              </div>
              <div className="im-flow-screen">
                <span className="im-flow-screen-step">Iteration 2 — Stock library with variant details</span>
                <img src="/images/im-iter-2.png" alt="Iteration showing stock library import with variant cards showing color and trim information" className="im-screenshot" />
                <p className="im-screenshot-caption">Surfaced matched variants with colour and trim details upfront — richer cards but too much information density at the selection stage.</p>
              </div>
              <div className="im-flow-screen">
                <span className="im-flow-screen-step">Iteration 3 — Side panel, grid layout</span>
                <img src="/images/im-iter-3.png" alt="Split layout — upload on left, Cloned Media suggestion panel on right with 2x2 image grid" className="im-screenshot" />
                <p className="im-screenshot-caption">Persistent side panel kept upload and match selection visible together — but split focus and felt cluttered on smaller viewports.</p>
              </div>
              <div className="im-flow-screen">
                <span className="im-flow-screen-step">Iteration 4 — Side panel, list layout</span>
                <img src="/images/im-iter-4.png" alt="Side panel variant with list layout showing vehicle details row by row" className="im-screenshot" />
                <p className="im-screenshot-caption">Switched the side panel to a list with exterior and interior colour per row — more scannable, but still competing with the upload zone.</p>
              </div>
              <div className="im-flow-screen">
                <span className="im-flow-screen-step">Iteration 5 — Inline full-width panel</span>
                <img src="/images/im-iter-5.png" alt="Full-width inline panel below upload area showing matched vehicle thumbnails in a row" className="im-screenshot" />
                <p className="im-screenshot-caption">Moved matches below the upload area as a full-width inline section — reduced conflict with the upload zone and became the foundation for the shipped design.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          06 — IMPACT
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="pd-section">
        <div className="container">
          <motion.div className="pd-section-content im-section-wide" {...fadeUp()}>
            <span className="im-chip">06 — Impact</span>
            <h2 className="section-title pd-section-title">
              What changed
            </h2>

            <div className="im-ba-wrap">
              <div className="im-ba-row before">
                <span className="im-ba-tag">Before</span>
                <span className="im-ba-text">
                  3–5 day offline window · zero impressions during delay ·
                  lost early buyer intent · holding cost accumulates with no return
                </span>
              </div>
              <div className="im-ba-row after">
                <span className="im-ba-tag">After</span>
                <span className="im-ba-text">
                  Same-day listing from acquisition · impressions from day zero ·
                  early buyer intent captured · faster inventory turn velocity
                </span>
              </div>
            </div>

            <div className="im-metrics">
              <div className="im-metric">
                <div className="im-metric-val">↓ 80%</div>
                <div className="im-metric-lbl">Time-to-live reduction</div>
              </div>
              <div className="im-metric">
                <div className="im-metric-val">Day 0</div>
                <div className="im-metric-lbl">Listings live from acquisition</div>
              </div>
              <div className="im-metric">
                <div className="im-metric-val">48h</div>
                <div className="im-metric-lbl">Early buyer window preserved</div>
              </div>
              <div className="im-metric">
                <div className="im-metric-val">↑ VLR</div>
                <div className="im-metric-lbl">Listing readiness rate</div>
              </div>
            </div>

          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          06 — REFLECTION
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="pd-section pd-impact-section">
        <div className="container">
          <motion.div className="pd-section-content im-section-wide" {...fadeUp()}>
            <span className="im-chip">07 — Reflection</span>
            <h2 className="section-title pd-section-title">
              This wasn't a media feature
            </h2>
            <p className="pd-body">
              Instant Media is a velocity feature. The name is incidental — what it actually
              does is eliminate an operational gap that no one had named. The hardest part
              was the reframe: once the problem became "delay" rather than "missing photos",
              the solution became obvious.
            </p>

            <p className="pd-body">
              The numbers make the cost of inaction hard to ignore. A dealer carrying 150
              used vehicles at an average holding cost of <strong>$45 per vehicle per day</strong> burns
              <strong> $6,750 every single day</strong> those vehicles sit unsold. The 3–5 day offline window
              before a photoshoot is complete costs a mid-sized dealership between
              <strong> $20,250 and $33,750 per inventory cycle</strong> — in pure holding cost alone,
              before a single dollar of lost lead revenue is counted.
            </p>

            <div className="im-stat-row">
              <div className="im-stat">
                <span className="im-stat-val">$45</span>
                <span className="im-stat-lbl">avg. holding cost per vehicle per day<br/>(floorplan interest + depreciation + lot)</span>
              </div>
              <div className="im-stat">
                <span className="im-stat-val">$6,750</span>
                <span className="im-stat-lbl">burned daily on a 150-vehicle lot<br/>while inventory sits offline</span>
              </div>
              <div className="im-stat">
                <span className="im-stat-val">$243K–$405K</span>
                <span className="im-stat-lbl">preventable annual cost per dealership<br/>from the offline window alone</span>
              </div>
            </div>

            <p className="pd-body">
              Vehicles listed in the first 48 hours after acquisition receive significantly
              more early buyer engagement — search freshness algorithms reward new inventory.
              Each day faster to market saves $45 in holding cost and captures leads that
              would otherwise go to a competing listing.               Across 150 vehicles turning 12 cycles a year, closing the 3–5 day offline
              gap recovers between <strong>$243,000 and $405,000 annually</strong> for a single
              dealership — in holding cost alone, with no change to the photoshoot process,
              no new staff, and no additional ad spend.
            </p>

            <blockquote className="im-pull-quote">
              Operational friction often hides inside workflow gaps, not missing capabilities.
              The capability to show a listing existed. The gap was the assumption that photos had to come first.
            </blockquote>

            <p className="pd-body">
              The three rejected iterations weren't wasted — each ruled out a path that looked
              reasonable and would have failed differently. What shipped was deliberately scoped
              as an <strong>MVP</strong>: the smallest version that could validate the core hypothesis —
              that reducing time-to-live to day zero measurably improves early impressions and
              lead volume. Everything else was intentionally deferred.
            </p>

          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          07 — WHAT COMES NEXT
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="pd-section pd-impact-section">
        <div className="container">
          <motion.div className="pd-section-content im-section-wide" {...fadeUp()}>
            <span className="im-chip">08 — What Comes Next</span>
            <h2 className="section-title pd-section-title">
              Future prospects
            </h2>
            <p className="pd-body">
              Phase 1 validated the velocity hypothesis. These are the natural next steps —
              each building on the foundation without changing what already works.
            </p>

            <div className="im-future-list">
              <div className="im-future-item">
                <span className="im-future-num">01</span>
                <div>
                  <p className="im-future-title">Time-to-live as a dealer KPI</p>
                  <p className="im-future-desc">Surface average time-to-live per vehicle, per lot, and per market as a first-class metric in the dealer dashboard. Velocity without visibility is half a solution.</p>
                </div>
              </div>
              <div className="im-future-item">
                <span className="im-future-num">02</span>
                <div>
                  <p className="im-future-title">AI trim and colour detection</p>
                  <p className="im-future-desc">Automatically validate matched images against VIN-decoded trim and exterior colour using AI — reducing false matches and improving confidence scoring accuracy.</p>
                </div>
              </div>
              <div className="im-future-item">
                <span className="im-future-num">03</span>
                <div>
                  <p className="im-future-title">Bulk automation at acquisition</p>
                  <p className="im-future-desc">Trigger Instant Media automatically the moment a vehicle is logged in the system — eliminating the manual step entirely for high-volume dealers.</p>
                </div>
              </div>
              <div className="im-future-item">
                <span className="im-future-num">04</span>
                <div>
                  <p className="im-future-title">Auction platform integration</p>
                  <p className="im-future-desc">Connect directly with auction feeds so vehicles can be listed the moment they are won at auction — before they physically arrive at the lot.</p>
                </div>
              </div>
              <div className="im-future-item">
                <span className="im-future-num">05</span>
                <div>
                  <p className="im-future-title">Conversion analytics on Instant Media listings</p>
                  <p className="im-future-desc">Track lead rate, view-to-contact ratio, and days-to-sale for Instant Media listings vs standard listings — to close the measurement loop on the velocity hypothesis.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default InstantMediaDetail;
