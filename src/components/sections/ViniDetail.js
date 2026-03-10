import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import './ProjectDetail.css';
import './ViniDetail.css';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, delay, ease: [0.25, 0.1, 0.25, 1] }
});

/* ── Pipeline flow reused from IM ────────────────────────────────────────── */
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

/* ── Capability card ────────────────────────────────────────────────────────── */
const CapCard = ({ icon, title, desc }) => (
  <div className="vn-cap-card">
    <span className="vn-cap-icon" aria-hidden="true">{icon}</span>
    <p className="vn-cap-title">{title}</p>
    <p className="vn-cap-desc">{desc}</p>
  </div>
);

/* ── Research tag chip ──────────────────────────────────────────────────────── */
const ResearchTag = ({ name, type }) => (
  <span className={`vn-research-tag vn-research-tag--${type}`}>{name}</span>
);

/* ── Insight card ───────────────────────────────────────────────────────────── */
const InsightCard = ({ num, title, desc }) => (
  <div className="vn-insight-card">
    <span className="vn-insight-num">{num}</span>
    <div>
      <p className="vn-insight-title">{title}</p>
      <p className="vn-insight-desc">{desc}</p>
    </div>
  </div>
);

/* ── Shared numbered list item ──────────────────────────────────────────────── */
const ListItem = ({ num, title, desc, accent }) => (
  <div className={`vn-list-item${accent ? ' vn-list-item--accent' : ''}`}>
    <span className="vn-list-num">{num}</span>
    <div className="vn-list-body">
      <p className="vn-list-title">{title}</p>
      <p className="vn-list-desc">{desc}</p>
    </div>
  </div>
);

/* ── Main component ─────────────────────────────────────────────────────────── */
const ViniDetail = () => {
  const navigate = useNavigate();
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="pd-page">

      {/* Back */}
      <motion.button className="pd-back" onClick={() => navigate('/')}
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}>
        <span className="pd-back-arrow">&#8592;</span> Back
      </motion.button>

      {/* ══════════════════════════════════════════════════════════════════════
          HERO
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="pd-hero">
        <div className="container">
          <motion.div className="section-header pd-section-header"
            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}>
            <div className="project-tags pd-tags">
              {['Conversational AI', 'Automotive SaaS', 'Embedded Widget', '0→1 Feature'].map((t, i) => (
                <span key={i} className="tag">{t}</span>
              ))}
            </div>
            <h1 className="pd-title">
              Designing Vini AI Receptionist for Automotive Dealer Websites
            </h1>
            <p className="pd-lead">
              Dealer websites have chat. Buyers ignore it. Vini embeds a vehicle-aware
              AI receptionist directly inside the Spyne-powered image viewer so the
              conversation starts where the intent already is.
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
              <span className="pd-meta-value">Vini AI</span>
            </div>
            <div className="pd-meta-item">
              <span className="pd-meta-label">Timeline</span>
              <span className="pd-meta-value">2024–2025</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          01 CONTEXT
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="pd-section">
        <div className="container">
          <motion.div className="pd-section-content im-section-wide" {...fadeUp()}>
            <span className="im-chip">01: Context</span>
            <h2 className="section-title pd-section-title">
              Where Spyne sits in the dealership ecosystem
            </h2>
            <p className="pd-body">
              Automotive dealerships use Spyne to create and manage vehicle media: 360° spins,
              background replacement, and image sets. This media is then embedded directly on the
              dealer's own website through a <strong>Spyne-powered vehicle viewer iframe</strong>.
              Buyers browsing inventory interact with that viewer every time they spin a car,
              change the angle, or examine a feature.
            </p>

            <div className="vn-context-flow">
              <div className="vn-context-step">
                <p className="vn-context-step-label">Dealer</p>
                <p className="vn-context-step-desc">Uploads vehicle inventory & media via Spyne dashboard</p>
              </div>
              <span className="vn-context-arrow">→</span>
              <div className="vn-context-step">
                <p className="vn-context-step-label">Spyne Platform</p>
                <p className="vn-context-step-desc">Processes media, generates 360° viewer, powers listings</p>
              </div>
              <span className="vn-context-arrow">→</span>
              <div className="vn-context-step vn-context-step--highlight">
                <p className="vn-context-step-label">Iframe Viewer</p>
                <p className="vn-context-step-desc">Embedded on dealer website. This is where buyers spend their time.</p>
              </div>
              <span className="vn-context-arrow">→</span>
              <div className="vn-context-step">
                <p className="vn-context-step-label">Buyer</p>
                <p className="vn-context-step-desc">Browses, spins, and evaluates vehicles on the dealer site</p>
              </div>
            </div>

            <p className="pd-body">
              Spyne already owns the highest-attention surface on the dealer's website: the
              vehicle viewer. The question became: what happens when a buyer has a question
              while browsing inside that viewer?
            </p>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          02 PROBLEM
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="pd-section">
        <div className="container">
          <motion.div className="pd-section-content im-section-wide" {...fadeUp()}>
            <span className="im-chip">02: Problem</span>
            <h2 className="section-title pd-section-title">
              Chat exists on dealer websites. Buyers don't use it.
            </h2>
            <p className="pd-body">
              Dealerships spend thousands on third-party chat platforms. Yet live chat
              engagement rates on automotive websites hover between <strong>2–5%</strong>.
              The reasons are structural, not cosmetic.
            </p>

            <div className="im-stickies vn-problem-grid">
              <div className="im-sticky im-sticky--pink">
                <span className="im-sticky-label">Discoverability</span>
                <p>Chat bubbles hide in the bottom corner. Buyers browsing vehicle images never leave the viewer to look for a chat widget.</p>
              </div>
              <div className="im-sticky im-sticky--yellow">
                <span className="im-sticky-label">Context-blindness</span>
                <p>Generic chat widgets don't know which vehicle the buyer is looking at. Every conversation starts from zero, creating friction.</p>
              </div>
              <div className="im-sticky im-sticky--blue">
                <span className="im-sticky-label">Iframe isolation</span>
                <p>The Spyne viewer runs inside an iframe. Standard chat widgets injected at the parent page level are invisible inside the viewer environment.</p>
              </div>
              <div className="im-sticky im-sticky--green">
                <span className="im-sticky-label">Broken browsing flow</span>
                <p>Clicking a chat widget outside the viewer interrupts the browsing session. The buyer loses their place in the image carousel.</p>
              </div>
            </div>

            <blockquote className="im-pull-quote">
              The problem wasn't that dealers didn't have chat. It was that the chat
              wasn't where the buyer's attention was.
            </blockquote>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          03 RESEARCH
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="pd-section">
        <div className="container">
          <motion.div className="pd-section-content im-section-wide" {...fadeUp()}>
            <span className="im-chip">03: Research</span>
            <h2 className="section-title pd-section-title">
              What the market looks like today
            </h2>
            <p className="pd-body">
              A sweep of US dealership groups and automotive chat platforms revealed consistent
              patterns and consistent gaps.
            </p>

            <span className="vn-sub-heading">Dealer websites studied</span>
            <div className="vn-research-tags">
              {[
                'Paragon Acura', 'Paragon Honda', 'Richmond Honda', 'AutoNation',
                'CarMax', 'Penske Automotive', 'Lithia Motors',
                'Sonic Automotive', 'Hendrick Automotive Group', 'Group 1 Automotive'
              ].map(name => (
                <ResearchTag key={name} name={name} type="dealer" />
              ))}
            </div>

            <span className="vn-sub-heading">Chat platforms benchmarked</span>
            <div className="vn-research-tags">
              {[
                'Gubagoo', 'CarNow', 'ActivEngage', 'Podium',
                'Impel AI', 'Drift', 'Intercom'
              ].map(name => (
                <ResearchTag key={name} name={name} type="platform" />
              ))}
            </div>

            <span className="vn-sub-heading">Patterns observed</span>
            <div className="vn-findings">
              <div className="vn-finding">
                <span className="vn-finding-tag">Placement</span>
                <p className="vn-finding-text">Every platform places the chat widget as a floating button anchored to the bottom-right of the viewport. None are embedded inside the vehicle viewer.</p>
              </div>
              <div className="vn-finding">
                <span className="vn-finding-tag">Context</span>
                <p className="vn-finding-text">No platform passes vehicle context (VIN, model, trim) automatically into the chat session. Agents ask buyers to describe the vehicle they're looking at.</p>
              </div>
              <div className="vn-finding">
                <span className="vn-finding-tag">Iframe</span>
                <p className="vn-finding-text">All third-party chat scripts inject into the parent page's DOM. They are inaccessible from within iframe-hosted experiences like the Spyne viewer.</p>
              </div>
              <div className="vn-finding">
                <span className="vn-finding-tag">Tone</span>
                <p className="vn-finding-text">Platforms like Gubagoo and CarNow present as "Live Chat" or "Talk to an Agent." None frame the experience as a named, branded AI assistant.</p>
              </div>
              <div className="vn-finding">
                <span className="vn-finding-tag">Discoverability</span>
                <p className="vn-finding-text">CarMax and AutoNation showed the highest chat engagement, attributed to persistent, high-contrast placement and proactive invite triggers. Still under 8%.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          04 KEY UX PROBLEMS
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="pd-section">
        <div className="container">
          <motion.div className="pd-section-content im-section-wide" {...fadeUp()}>
            <span className="im-chip">04: Key UX Problems</span>
            <h2 className="section-title pd-section-title">
              Four problems that compound each other
            </h2>

            <div className="vn-insights-grid">
              <InsightCard
                num="01"
                title="Poor discoverability"
                desc="Widgets placed outside the primary viewing area are out of sight and out of mind. A buyer focused on a 360° spin won't scroll to the page footer to find a chat button."
              />
              <InsightCard
                num="02"
                title="Static, generic widgets"
                desc="Chat widgets show the same greeting regardless of what vehicle the buyer is viewing. There's no connection between the content and the conversation."
              />
              <InsightCard
                num="03"
                title="No vehicle context awareness"
                desc="Without knowing the current vehicle, every chat session requires re-orientation. Buyers answer questions about which car, which trim, which colour before getting to their actual question."
              />
              <InsightCard
                num="04"
                title="Disconnected from browsing"
                desc="Opening a chat interrupts the browsing session. The buyer must choose: keep looking at the car, or start a conversation. This binary choice reduces engagement with both."
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          05 KEY INSIGHT
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="pd-section">
        <div className="container">
          <motion.div className="pd-section-content im-section-wide" {...fadeUp()}>
            <span className="im-chip">05: Key Insight</span>
            <h2 className="section-title pd-section-title">
              The moment of highest intent
            </h2>

            <div className="vn-insight-highlight">
              <p className="vn-insight-highlight-label">Core insight</p>
              <p className="vn-insight-highlight-text">
                The highest user intent in the car-buying journey happens while the buyer
                is actively browsing vehicle images. That's when questions form: pricing,
                availability, features, financing. That's the moment to be present.
              </p>
            </div>

            <p className="pd-body">
              Every other touchpoint (email forms, phone calls, external chat) asks the
              buyer to leave the browsing experience to get an answer. The insight was simple:
              bring the answer to where the question happens. The Spyne viewer is already
              embedded on the dealer's website. It's already the highest-attention surface.
              It's where Vini should live.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          06 DESIGN GOAL
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="pd-section">
        <div className="container">
          <motion.div className="pd-section-content im-section-wide" {...fadeUp()}>
            <span className="im-chip">06: Design Goal</span>
            <h2 className="section-title pd-section-title">
              A conversational assistant that feels native to the viewing experience
            </h2>

            <div className="vn-goal-row">
              <div className="vn-goal-item">
                <span className="vn-goal-label">From</span>
                <p className="vn-goal-text">A floating chat button outside the viewer that requires leaving the browsing context to get help</p>
              </div>
              <div className="vn-goal-item">
                <span className="vn-goal-label">To</span>
                <p className="vn-goal-text">A vehicle-aware AI assistant embedded directly inside the Spyne viewer, available without breaking the browse flow</p>
              </div>
            </div>

            <div className="vn-principles">
              {[
                { title: 'Contextual by default', desc: 'Knows the vehicle, trim, and current view before the first message is sent.' },
                { title: 'Present without interrupting', desc: "Visible while browsing. Doesn't demand attention. Doesn't break the scroll." },
                { title: 'Human, not robotic', desc: 'Feels like a dealership receptionist: warm, helpful, knowledgeable. Not a form.' },
                { title: 'Low friction entry', desc: 'One tap to open. No account, no form, no pre-qualification required.' },
              ].map(({ title, desc }) => (
                <div key={title} className="vn-principle">
                  <span className="vn-principle-dot" aria-hidden="true" />
                  <div className="vn-principle-body">
                    <p className="vn-principle-title">{title}</p>
                    <p className="vn-principle-desc">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          07 CONCEPT: INTRODUCING VINI
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="pd-section">
        <div className="container">
          <motion.div className="pd-section-content im-section-wide" {...fadeUp()}>
            <span className="im-chip">07: Concept</span>
            <h2 className="section-title pd-section-title">
              Meet Vini the AI receptionist
            </h2>
            <p className="pd-body">
              Vini is not a chatbot. Chatbots answer questions from a script.
              Vini is designed to feel like the dealership's best receptionist: someone who
              knows the inventory, greets buyers by vehicle, and guides them naturally toward
              the next step, whether that's a test drive, a financing conversation, or a simple
              question about availability.
            </p>

            <div className="vn-concept-cards">
              <div className="vn-concept-card">
                <p className="vn-concept-card-label">Chatbot</p>
                <ul className="vn-concept-list">
                  <li>Keyword-triggered responses</li>
                  <li>No vehicle awareness</li>
                  <li>Generic greetings</li>
                  <li>Scripted decision trees</li>
                  <li>Feels like a form</li>
                </ul>
              </div>
              <div className="vn-concept-card vn-concept-card--highlight">
                <p className="vn-concept-card-label">Vini</p>
                <ul className="vn-concept-list">
                  <li>Knows the vehicle being viewed</li>
                  <li>Contextual, natural conversation</li>
                  <li>Personalized to each buyer session</li>
                  <li>Guides toward dealership actions</li>
                  <li>Feels like a helpful person</li>
                </ul>
              </div>
            </div>

            <blockquote className="im-pull-quote">
              The name Vini is intentional. A named assistant with a consistent personality
              is remembered. A chat widget is not.
            </blockquote>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          08 SOLUTION
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="pd-section">
        <div className="container">
          <motion.div className="pd-section-content im-section-wide" {...fadeUp()}>
            <span className="im-chip">08: Solution</span>
            <h2 className="section-title pd-section-title">
              Vini lives inside the viewer not beside it
            </h2>
            <p className="pd-body">
              The core technical and design decision: embed Vini directly within the Spyne
              vehicle viewer iframe. This solves the iframe isolation problem and removes the
              context gap simultaneously. When Vini opens, it already knows the VIN, make,
              model, trim, and which image set the buyer is viewing.
            </p>

            <div className="vn-list">
              <ListItem num="01" title="Buyer browses vehicle"              desc="Interacts with the 360° viewer embedded on the dealer's VDP page" />
              <ListItem num="02" title="Vini appears in context"            desc="A subtle, non-intrusive entry point within the viewer, tied to the current vehicle" />
              <ListItem num="03" title="Conversation starts vehicle-aware"  desc="Vini greets with the specific vehicle. No re-orientation needed before the first reply." />
              <ListItem num="04" title="Lead captured"                      desc="Test drive, appointment or enquiry completed without leaving the browsing context" accent />
            </div>

            <div className="vn-principles">
              {[
                { title: 'Iframe-native',                   desc: 'Vini renders inside the viewer, solving third-party script isolation entirely.' },
                { title: 'Vehicle context passed automatically', desc: 'VIN, YMMT, and active media set are surfaced to Vini at open time.' },
                { title: 'No browsing interruption',        desc: 'The widget opens inline within the viewer rather than overlaying the full page.' },
              ].map(({ title, desc }) => (
                <div key={title} className="vn-principle">
                  <span className="vn-principle-dot" aria-hidden="true" />
                  <div className="vn-principle-body">
                    <p className="vn-principle-title">{title}</p>
                    <p className="vn-principle-desc">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          09 CAPABILITIES
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="pd-section">
        <div className="container">
          <motion.div className="pd-section-content im-section-wide" {...fadeUp()}>
            <span className="im-chip">09: Capabilities</span>
            <h2 className="section-title pd-section-title">
              What Vini can do
            </h2>
            <p className="pd-body">
              Six core capabilities, each designed to move a buyer from interest to action
              without redirecting them away from the vehicle.
            </p>

            <div className="vn-cap-grid">
              <CapCard
                icon="💬"
                title="Ask questions about the vehicle"
                desc="Buyers ask about specs, features, trim differences, colours, and availability. Vini responds with accurate, vehicle-specific answers."
              />
              <CapCard
                icon="🏷️"
                title="View current offers"
                desc="Surface active dealer offers, lease rates, and financing promotions relevant to the specific vehicle being viewed."
              />
              <CapCard
                icon="🔍"
                title="Discover similar vehicles"
                desc="Recommend comparable inventory on the lot by price range, features, or availability, keeping the buyer engaged even if the first vehicle isn't right."
              />
              <CapCard
                icon="🚗"
                title="Book a test drive"
                desc="Schedule a test drive directly from the conversation. Date, time, and contact info collected in context without leaving the viewer."
              />
              <CapCard
                icon="📅"
                title="Schedule an appointment"
                desc="Connect the buyer with the sales team for a service appointment, financing discussion, or general dealership visit."
              />
              <CapCard
                icon="📩"
                title="Send an enquiry"
                desc="Capture name, contact, and intent, creating a qualified lead in the dealer's CRM without requiring the buyer to fill out a separate form."
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          10 DESIGN ITERATIONS
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="pd-section">
        <div className="container">
          <motion.div className="pd-section-content im-section-wide" {...fadeUp()}>
            <span className="im-chip">10: Design Iterations</span>
            <h2 className="section-title pd-section-title">
              Three concepts before the right framing
            </h2>
            <p className="pd-body">
              The interface went through three distinct conceptual directions before landing
              on the embedded, character-driven approach. Each iteration changed the fundamental
              frame, not just the visual treatment.
            </p>

            <div className="vn-iterations">
              {[
                {
                  verdict: 'Rejected',
                  verdictClass: 'vn-verdict--no',
                  title: 'Generic chat bubble on the viewer',
                  desc: 'Solved iframe placement but not the deeper problem: no vehicle context, no personality, no reason to engage over the dealer\'s existing chat solution.',
                },
                {
                  verdict: 'Rejected',
                  verdictClass: 'vn-verdict--no',
                  title: 'Vehicle-aware chat panel',
                  desc: 'Surfaced vehicle details and quick-action buttons but felt like a feature panel, not a conversation. The conversational layer felt bolted on.',
                },
                {
                  verdict: 'Shipped',
                  verdictClass: 'vn-verdict--yes',
                  title: 'Vini named, character-driven assistant',
                  desc: 'A named AI persona that greets with the specific vehicle, offers contextual prompts, and maintains personality throughout. The vehicle-aware greeting alone signals relevance before the buyer types a word.',
                  final: true,
                },
              ].map(({ verdict, verdictClass, title, desc, final: isFinal }) => (
                <div key={title} className={`vn-iteration${isFinal ? ' vn-iteration--final' : ''}`}>
                  <span className={`vn-iteration-verdict ${verdictClass}`}>{verdict}</span>
                  <div className="vn-iteration-body">
                    <p className="vn-iteration-title">{title}</p>
                    <p className="vn-iteration-desc">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          11 TECHNICAL INTEGRATION
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="pd-section">
        <div className="container">
          <motion.div className="pd-section-content im-section-wide" {...fadeUp()}>
            <span className="im-chip">11: Technical Integration</span>
            <h2 className="section-title pd-section-title">
              One script tag. Zero workflow changes.
            </h2>
            <p className="pd-body">
              Dealer adoption is the hardest part of any embedded widget. The integration model
              had to require no developer resources and no changes to the dealer's existing
              website stack.
            </p>

            <div className="vn-tech-flow">
              <Pipeline steps={[
                { label: 'Dealer enables Vini', type: 'blue' },
                { label: 'Spyne injects script', type: 'default' },
                { label: 'Viewer loads with Vini', type: 'default' },
                { label: 'VIN context passed', type: 'default' },
                { label: 'Vini live', type: 'green' }
              ]} />
            </div>

            <div className="vn-list">
              <ListItem num="01" title="Script deployment via Spyne dashboard"  desc="Dealers activate Vini with a single toggle. A script tag is automatically appended to the Spyne viewer embed with no manual code changes required." />
              <ListItem num="02" title="Iframe-internal rendering"              desc="Vini renders inside the viewer's iframe context, not at the parent page level. This makes it immune to the DOM isolation that breaks all third-party chat widgets." />
              <ListItem num="03" title="Automatic vehicle context passing"      desc="The viewer passes VIN, YMMT data, and active media set to Vini at initialisation. No additional dealer configuration needed." />
              <ListItem num="04" title="CRM lead delivery"                      desc="Leads are delivered via ADF/XML to any dealership CRM (the industry standard). No new integrations required on the dealer's side." />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          12 IMPACT
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="pd-section">
        <div className="container">
          <motion.div className="pd-section-content im-section-wide" {...fadeUp()}>
            <span className="im-chip">12: Impact</span>
            <h2 className="section-title pd-section-title">
              What changes when the conversation is in the right place
            </h2>

            <div className="im-ba-wrap">
              <div className="im-ba-row before">
                <span className="im-ba-tag">Before</span>
                <span className="im-ba-text">
                  2–5% chat engagement · generic widget outside viewer · zero vehicle context ·
                  buyer must leave browsing to ask a question · iframe isolation blocks third-party chat
                </span>
              </div>
              <div className="im-ba-row after">
                <span className="im-ba-tag">After</span>
                <span className="im-ba-text">
                  Vini visible within the viewer at peak intent · vehicle-aware from first message ·
                  lead capture without interrupting the browse · no iframe compatibility issues ·
                  one activation step for any Spyne dealer
                </span>
              </div>
            </div>

            <div className="im-metrics">
              <div className="im-metric">
                <div className="im-metric-val">&lt; 8%</div>
                <div className="im-metric-lbl">Industry chat engagement rate on dealer websites. What Vini is designed to beat.</div>
              </div>
              <div className="im-metric">
                <div className="im-metric-val">0</div>
                <div className="im-metric-lbl">Developer steps to activate. Single toggle in the Spyne dashboard.</div>
              </div>
              <div className="im-metric">
                <div className="im-metric-val">6</div>
                <div className="im-metric-lbl">Lead capture paths available in-viewer: test drive, appointment, enquiry and more</div>
              </div>
              <div className="im-metric">
                <div className="im-metric-val">1 tap</div>
                <div className="im-metric-lbl">To start a vehicle-aware conversation without leaving the image viewer</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          13: WHAT COMES NEXT
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="pd-section">
        <div className="container">
          <motion.div className="pd-section-content im-section-wide" {...fadeUp()}>
            <span className="im-chip">13: What Comes Next</span>
            <h2 className="section-title pd-section-title">
              Future prospects
            </h2>
            <p className="pd-body">
              Phase 1 validated the core hypothesis: chat engagement increases when the
              conversation is embedded where buyer intent already lives. These are the
              natural next steps: each building on the foundation without changing what works.
            </p>

            <div className="im-future-list">
              <div className="im-future-item">
                <span className="im-future-num">01</span>
                <div>
                  <p className="im-future-title">Engagement analytics for dealers</p>
                  <p className="im-future-desc">Surface conversation rate, lead capture rate, and most common buyer questions as a first-class dashboard for dealers. Velocity without visibility is half a solution: the same principle that drove the Inventory redesign applies here.</p>
                </div>
              </div>
              <div className="im-future-item">
                <span className="im-future-num">02</span>
                <div>
                  <p className="im-future-title">Proactive invite triggers</p>
                  <p className="im-future-desc">Surface Vini automatically after a buyer has spent meaningful time on a vehicle: based on dwell time or number of images viewed: rather than waiting for them to seek help. The highest-intent moment, made explicit.</p>
                </div>
              </div>
              <div className="im-future-item">
                <span className="im-future-num">03</span>
                <div>
                  <p className="im-future-title">Multi-vehicle session memory</p>
                  <p className="im-future-desc">When a buyer browses several vehicles in the same session, Vini should remember the full context: enabling comparisons, surfacing differences, and guiding toward a shortlist. Today, each vehicle opens a fresh session.</p>
                </div>
              </div>
              <div className="im-future-item">
                <span className="im-future-num">04</span>
                <div>
                  <p className="im-future-title">Live agent handoff</p>
                  <p className="im-future-desc">When Vini detects high-intent signals: repeated pricing questions, "is this still available?": surface a contextual handoff to a real agent with the full conversation as context. Zero re-orientation for the agent or buyer.</p>
                </div>
              </div>
              <div className="im-future-item">
                <span className="im-future-num">05</span>
                <div>
                  <p className="im-future-title">Dealer personality customisation</p>
                  <p className="im-future-desc">Let dealers set Vini's tone: formal, friendly, or premium: to match their brand. A luxury dealership and a volume used-car lot have very different voices. Vini should feel like their receptionist, not a generic AI widget.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          14: KEY LEARNINGS
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="pd-section pd-impact-section">
        <div className="container">
          <motion.div className="pd-section-content im-section-wide" {...fadeUp()}>
            <span className="im-chip">14: Key Learnings</span>
            <h2 className="section-title pd-section-title">
              What this project taught me
            </h2>

            <div className="vn-list">
              <ListItem num="01" title="Placement is a product decision, not a UX detail"    desc="Where a feature lives determines whether it gets used. Moving chat into the viewer wasn't a visual tweak. It was a rethink of where buyer intent actually lives." />
              <ListItem num="02" title="Technical constraints can be design constraints"      desc="The iframe isolation that blocked all third-party chat wasn't a blocker. It was the reason a native solution had value. Constraints well-understood become competitive moats." />
              <ListItem num="03" title="Persona and personality change perceived utility"     desc="Buyers who saw 'Chat' saw friction. Buyers who saw 'Vini' and their vehicle name saw relevance. Same capability, different framing, different engagement." />
              <ListItem num="04" title="Adoption design is as important as product design"   desc="The best feature doesn't ship if dealers can't turn it on. Zero-dev activation was as important a design decision as the widget interface itself." />
              <ListItem num="05" title="Context removes friction better than simplicity alone" desc="Simplifying the UI helped. But knowing the vehicle before the conversation started removed a different kind of friction: the cognitive effort of re-establishing context." />
            </div>

            <blockquote className="im-pull-quote">
              Vini isn't a chat product. It's a lead capture product with a conversational interface.
              That reframe changed every design decision that followed.
            </blockquote>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default ViniDetail;
