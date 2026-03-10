// ========================================
// PORTFOLIO CONTENT
// Update this file to change all content on your website
// ========================================

import spyneFlipThumbnail from './assets/spyne-flip.png';
import smartViewThumbnail from './assets/smart-view.png';
import instantMediaThumbnail from './assets/instant media.png';

export const content = {
  // NAVIGATION MENU
  navigation: [
    { id: 'hero', label: 'Hello' },
    { id: 'work', label: 'Work' },
    { id: 'about', label: 'About me' },
    { id: 'experience', label: 'Experience' },
    { id: 'hobbies', label: 'Hobbies' },
    { id: 'contact', label: 'Contact' },
    { id: 'resume', label: 'Resume', type: 'download' }
  ],

  // HERO SECTION
  hero: {
    name: 'Nidhi',
    title: 'Product Designer',
    tagline: 'I answer user questions with thoughtful design + AI.',
    currentCompany: 'Spyne AI',
    currentLocation: 'Gurugram',
    previousWork: 'Conversational AI & Inventory Management',
    previousCompany1: 'Intervue.io',
    previousWork2: 'Platform Design & Branding',
    previousCompany2: 'Coto',
    description: "I'm a Product Designer with 3+ years of experience crafting user-centered digital experiences. I specialize in end-to-end product design, leading complex 0→1 initiatives, and balancing user empathy with business impact."
  },

  // PROJECTS SECTION
  projects: {
    sectionTitle: "Things I've Shipped",
    items: [
      {
        id: 9,
        slug: 'spyne-flip',
        image: spyneFlipThumbnail,
        tags: ['Sales Enablement', 'Chrome Extension', 'Internal Tool', 'Demo Experience'],
        title: 'Spyne Flip: Transforming Automotive Sales Demos with Real-Time Website Transformation',
        description: 'Designed a Chrome extension that lets sales teams open any dealership website and instantly transform it with Spyne AI studio backgrounds and Vini AI, turning a live prospect\'s own site into a compelling real-time demo.',
        impact: 'Impact: Zero demo prep time; any dealer website transformed in under 30 seconds; Spyne media and Vini AI demonstrated together for the first time',
        overview: 'Sales teams were selling a transformation they couldn\'t show. Spyne Flip is a Chrome extension that changes that, replacing vehicle images on any dealer website with Spyne AI-processed studio backgrounds and activating Vini AI, all live, on the prospect\'s real site.',
        role: 'Product Designer',
        duration: 'Spyne AI · 2024–2025',
        highlights: [
          'Identified the demo trust gap through sales team interviews and win/loss analysis',
          'Designed a draggable minimal control panel to keep the extension invisible during screen-share calls',
          'Enabled real-time vehicle image replacement on any dealer website without CMS access or API keys',
          'Solved the two-product demo problem by combining Spyne media and Vini AI in a single extension flow',
          'Rejected full-page overlays and cloned site approaches in favour of transforming the live dealer website directly'
        ]
      },
      {
        id: 8,
        slug: 'vini',
        image: smartViewThumbnail,
        tags: ['Conversational AI', 'Automotive SaaS', 'Embedded Widget', '0→1 Feature'],
        title: 'Vini AI Receptionist for Automotive Dealer Websites',
        description: 'Designed Vini, an AI receptionist embedded directly inside the Spyne-powered vehicle image viewer solving iframe isolation, generic chat, and zero vehicle-context awareness in one product.',
        impact: 'Impact: Vehicle-aware AI chat at peak buyer intent; zero dealer dev effort to activate; 6 lead-capture actions inside the viewer',
        overview: 'Dealer websites have chat widgets. Buyers ignore them. The problem is structural widgets live outside the viewer, know nothing about the vehicle, and break inside iframes. Vini embeds a named, vehicle-aware AI assistant directly into the Spyne viewer, where buyer intent is highest.',
        role: 'Product Designer',
        duration: 'Spyne AI · 2024–2025',
        highlights: [
          'Identified iframe isolation as the root blocker for all third-party chat solutions in the Spyne viewer',
          'Researched 10 US dealer groups and 7 automotive chat platforms to map the competitive gap',
          'Defined the core insight: highest buyer intent occurs during active vehicle image browsing',
          'Introduced a named AI persona (Vini) to shift perception from generic chatbot to branded assistant',
          'Designed 6 in-context capabilities: vehicle Q&A, offers, similar cars, test drive, appointment, enquiry',
          'Eliminated dealer dev effort activation is a single toggle in the Spyne dashboard'
        ]
      },
      {
        id: 6,
        slug: 'instant-media',
        image: instantMediaThumbnail,
        tags: ['Automotive SaaS', 'Product Strategy', 'Velocity Feature'],
        title: 'Instant Media – Reducing Time-to-Live in Automotive Retail',
        description: 'Designed a zero-friction media publishing feature enabling dealers to list vehicles same-day using matched OEM or rooftop catalog images eliminating the 2–5 day offline window between acquisition and listing.',
        impact: 'Impact: Reduced time-to-live by up to 80%, enabling same-day listing from day of vehicle acquisition',
        overview: 'A velocity feature disguised as a media tool. Instant Media solves the most overlooked operational bottleneck in automotive retail: the gap between vehicle acquisition and when a listing goes live online.',
        role: 'Senior Product Designer',
        duration: 'Spyne AI · 2024–2025',
        highlights: [
          'Identified time-to-live as a core operational KPI through dealer interviews and workflow observation',
          'Designed VIN-based and YMMT-based media matching flows for both new and used inventory',
          'Introduced confidence scoring and transparency badges to maintain consumer trust for used vehicles',
          'Defined MVP scope to prioritise velocity validation over feature completeness',
          'Rejected 3 design iterations before landing on the auto-match with transparent labelling approach'
        ]
      },
      {
        id: 7,
        slug: 'inventory-listing-vdp',
        comingSoon: true,
        image: '/images/inv-listing-after.png',
        tags: ['Inventory Intelligence', 'Enterprise UX', 'Metrics Design', 'VDP'],
        title: 'Inventory Listing & VDP Turning a Media Tool into an Intelligence Dashboard',
        description: 'Transformed Spyne\'s card-grid inventory view into an action-item dashboard. Surfaced "not ready to sell" counts by reason, Website Listing Score with percentile benchmarking, Time to Market per publishing platform, and a VDP with Actions Required + Publishing Status always visible.',
        impact: 'Impact: Time to market made visible for first time; 6 named action categories replace a generic "not ready" signal',
        overview: 'The original inventory view showed media processing status. It couldn\'t answer: why are 178 vehicles not ready? How does our listing quality compare? How long does it take to go live? The redesign turned five invisibilities image quality, set completeness, hero consistency, website readiness, and time to market into actionable data.',
        role: 'Product Designer',
        duration: 'Spyne AI · 2024–2025',
        highlights: [
          'Defined five inventory intelligence objectives from dealer research and CS escalation data',
          'Designed "not ready to sell" header with named action categories and vehicle counts',
          'Built Website Listing Score with Poor/Good/Excellent tiers and 6-week hover trend',
          'Created Time to Market metric with per-platform breakdown and date range selector',
          'Redesigned VDP with persistent Actions Required panel and per-platform Publishing Status',
          'Added IMS sync source visibility and Active/Sold split with All/New/Pre-owned tabs'
        ]
      },
    ]
  },

  // ABOUT SECTION
  about: {
    sectionTitle: 'About me',
    paragraphs: [
      "I'm a Product Designer with 3+ years of experience crafting user-centered digital experiences. I specialize in end-to-end product design, leading complex 0→1 initiatives, and balancing user empathy with business impact.",
      "I have strong proficiency in Figma, Adobe Creative Suite, prototyping tools, and even basics of React, HTML, CSS, and JavaScript. I'm always learning and exploring how design and technology can come together to create delightful experiences."
    ]
  },

  // EXPERIENCE SECTION
  experience: {
    sectionTitle: 'Experience',
    items: [
      {
        id: 1,
        company: 'Spyne AI',
        role: 'Product Designer',
        time: 'June 2024 - Present'
      },
      {
        id: 2,
        company: 'Intervue.io',
        role: 'UI/UX Designer',
        time: 'Jan 2023 - May 2024'
      },
      {
        id: 3,
        company: 'Coto',
        role: 'Product Design Researcher (Internship)',
        time: 'Oct 2022 - Dec 2022'
      },
      {
        id: 4,
        company: 'Coding Blocks',
        role: 'Creative Designer (Internship)',
        time: 'Apr 2022 - Sep 2022'
      }
    ]
  },

  // HOBBIES & CREATIVE SECTION
  hobbies: {
    sectionTitle: 'Hobbies & Creative',
    description: 'Beyond design, I love exploring creative outlets and personal interests.',
    images: [
      {
        src: '/images/hobby1.jpg',
        alt: 'Iced coffee with a city view',
        caption: 'Coffee runs & city views'
      },
      {
        src: '/images/hobby6.png',
        alt: 'Digital illustration of a smoothie bowl on iPad',
        caption: 'Digital illustrating'
      },
      {
        src: '/images/hobby2.jpg',
        alt: 'Pizza slice with a ketchup heart in a cozy restaurant',
        caption: 'Café dates & good food'
      },
      {
        src: '/images/hobby3.jpg',
        alt: 'Art journal with wave pattern and watercolor painting',
        caption: 'Art journaling'
      },
      {
        src: '/images/hobby4.jpg',
        alt: 'Homemade corn cheese toast with sauce',
        caption: 'Cooking experiments'
      },
      {
        src: '/images/hobby5.jpg',
        alt: 'Starry night over snow-capped mountains at Tosh, Kasol',
        caption: 'Travelling'
      },
      {
        src: '/images/hobby7.jpg',
        alt: 'Digital illustration of a matcha latte on iPad',
        caption: 'Digital art – matcha latte illustration'
      }
    ]
  },

  // CONTACT SECTION
  contact: {
    sectionTitle: "Let's connect",
    subtitle: "I'm always interested in hearing about new projects and opportunities.",
    links: [
      { label: 'Email', url: 'mailto:nidhi232singh@gmail.com' },
      { label: 'LinkedIn', url: 'https://www.linkedin.com/in/nidhisingh30/' },
      { label: 'Instagram', url: 'https://www.instagram.com/coffeehoeee' },
      { label: 'X (Twitter)', url: 'https://x.com/nidhisingh_30/' }
    ]
  },

  // FOOTER
  footer: {
    text: '© 2026 Nidhi. Crafted in Figma ✨ Brought to life with Cursor.'
  }
};
