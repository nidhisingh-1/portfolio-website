// ========================================
// PORTFOLIO CONTENT
// Update this file to change all content on your website
// ========================================

export const content = {
  // NAVIGATION MENU
  navigation: [
    { id: 'hero', label: 'Hello' },
    { id: 'work', label: 'Work' },
    { id: 'about', label: 'About me' },
    { id: 'experience', label: 'Experience' },
    { id: 'hobbies', label: 'Hobbies' },
    { id: 'contact', label: 'Contact' },
    { id: 'resume', label: 'Resume', type: 'download', url: '/resume.pdf' }
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
    sectionTitle: 'Selected Work',
    items: [
      {
        id: 1,
        slug: 'vini-conversational-platform',
        image: '/images/project-placeholder.jpg',
        tags: ['Conversational AI', 'Product Design', '0→1 Launch'],
        title: 'Vini - AI-Powered Conversational Platform',
        description: 'Led end-to-end UX for Spyne\'s Conversational AI platform from scratch. Designed onboarding, agent management, live chat, calls, and Smart View features for direct customer-dealer engagement.',
        impact: 'Impact: Launched complete conversational AI platform from 0→1',
        overview: 'Vini is Spyne\'s flagship conversational AI product built to enable direct engagement between car dealers and their customers. I owned the full design from zero — from early concept sprints through to shipped features.',
        role: 'Lead Product Designer',
        duration: 'June 2024 – Present',
        highlights: [
          'Designed the full onboarding flow for dealers and their agents from scratch',
          'Created the agent management dashboard including live chat and call monitoring',
          'Built the "Smart View" feature that surfaces AI-driven conversation insights',
          'Ran usability testing across 3 rounds to refine information hierarchy',
          'Collaborated closely with engineers to ensure pixel-perfect handoffs'
        ]
      },
      {
        id: 2,
        slug: 'inventory-management-system',
        image: '/images/project-placeholder2.jpg',
        tags: ['Enterprise UX', 'AI Integration', 'Information Architecture'],
        title: 'AI-Powered Inventory Management System',
        description: 'Designed Spyne\'s inventory management system for used car dealers. Covered vehicle onboarding, pricing prediction, invoicing, publishing, and sales management. Simplified complex workflows while maintaining data density.',
        impact: 'Impact: Streamlined dealer operations, reducing manual work significantly',
        overview: 'A complex enterprise product for used car dealers to manage their entire inventory lifecycle — from vehicle intake to sale. The challenge was reducing manual effort while keeping all the data density dealers rely on.',
        role: 'Product Designer',
        duration: 'June 2024 – Present',
        highlights: [
          'Mapped end-to-end dealer workflows through contextual inquiry sessions',
          'Designed AI-assisted pricing prediction UI with confidence indicators',
          'Simplified multi-step vehicle onboarding to a single linear flow',
          'Created invoicing and publishing modules with consistent interaction patterns',
          'Built scalable design system components reused across 6+ screens'
        ]
      },
      {
        id: 3,
        slug: 'virtual-studio-platform',
        image: '/images/project-placeholder.jpg',
        tags: ['Design Systems', 'Workflow Optimization', 'Media Generation'],
        title: 'Virtual Studio Platform Unification',
        description: 'Unified multiple media generation pipelines (images, 360° spins, video tours) into a single Virtual Studio platform. Created cohesive experience across different media types.',
        impact: 'Impact: Reduced workflow complexity and improved efficiency',
        overview: 'Spyne\'s Virtual Studio had grown into separate, disconnected tools for different media types. I led the unification effort to bring images, 360° spins, and video tours into a single coherent platform.',
        role: 'Product Designer',
        duration: 'Oct 2024 – Feb 2025',
        highlights: [
          'Audited all existing pipelines and identified overlapping interaction patterns',
          'Created a shared component library spanning all media types',
          'Designed a unified job queue and status system for all media generation tasks',
          'Reduced the number of distinct UI states by 40% through consolidation',
          'Worked with PMs to define a phased rollout strategy to minimise disruption'
        ]
      },
      {
        id: 4,
        slug: 'intervue-platform-redesign',
        image: '/images/project-placeholder2.jpg',
        tags: ['Platform Revamp', 'Branding', 'Design Leadership'],
        title: 'Intervue.io Complete Platform Redesign',
        description: 'Led complete design revamp and branding as sole designer. Redesigned landing pages, dashboards, interviewer flows, and built scalable UI systems for question banks and assignments.',
        impact: 'Impact: Improved conversion rates and student engagement',
        overview: 'As the sole designer at Intervue.io, I took ownership of the entire product and brand — from the public marketing site to the core interviewer and candidate flows.',
        role: 'UI/UX Designer (Sole Designer)',
        duration: 'Jan 2023 – May 2024',
        highlights: [
          'Rebuilt the brand identity including logo, colour system, and typography',
          'Redesigned the candidate dashboard reducing time-to-first-action by 35%',
          'Created a scalable question bank UI supporting 10,000+ questions',
          'Designed interview scheduling and feedback flows used daily by interviewers',
          'Established and maintained a Figma component library from scratch'
        ]
      },
      {
        id: 5,
        slug: 'talkout-voice-conversations',
        image: '/images/project-placeholder.jpg',
        tags: ['User Research', 'Prototyping', 'User Testing'],
        title: 'Talkout - Real-Time Voice Conversations (Coto)',
        description: 'Designed and tested voice conversation features and swipe-based content flows. Conducted user research and iterative testing to improve retention and in-app activity.',
        impact: 'Impact: Improved user retention through engaging voice features',
        overview: 'Talkout was a real-time voice feature within the Coto social platform. My role was to research, prototype, and test interaction patterns that would drive daily active usage among Coto\'s creator communities.',
        role: 'Product Design Researcher (Intern)',
        duration: 'Oct 2022 – Dec 2022',
        highlights: [
          'Conducted 12 user interviews to understand voice interaction habits',
          'Built interactive prototypes for 3 different entry-point flows',
          'Designed a swipe-based content discovery feed for voice rooms',
          'Ran 2 rounds of usability testing and synthesised findings into actionable insights',
          'Collaborated with senior designers to incorporate findings into the final design'
        ]
      }
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
        alt: 'Hobby 1',
        caption: 'Creative pursuit 1'
      },
      {
        src: '/images/hobby2.jpg',
        alt: 'Hobby 2',
        caption: 'Creative pursuit 2'
      },
      {
        src: '/images/hobby3.jpg',
        alt: 'Hobby 3',
        caption: 'Creative pursuit 3'
      },
      {
        src: '/images/hobby4.jpg',
        alt: 'Hobby 4',
        caption: 'Creative pursuit 4'
      },
      {
        src: '/images/hobby5.jpg',
        alt: 'Hobby 5',
        caption: 'Creative pursuit 5'
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
