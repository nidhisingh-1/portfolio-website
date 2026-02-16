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
    title: 'UX Designer',
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
        image: '/images/project-placeholder.jpg',
        tags: ['Conversational AI', 'Product Design', '0→1 Launch'],
        title: 'Vini - AI-Powered Conversational Platform',
        description: 'Led end-to-end UX for Spyne\'s Conversational AI platform from scratch. Designed onboarding, agent management, live chat, calls, and Smart View features for direct customer-dealer engagement.',
        impact: 'Impact: Launched complete conversational AI platform from 0→1'
      },
      {
        id: 2,
        image: '/images/project-placeholder2.jpg',
        tags: ['Enterprise UX', 'AI Integration', 'Information Architecture'],
        title: 'AI-Powered Inventory Management System',
        description: 'Designed Spyne\'s inventory management system for used car dealers. Covered vehicle onboarding, pricing prediction, invoicing, publishing, and sales management. Simplified complex workflows while maintaining data density.',
        impact: 'Impact: Streamlined dealer operations, reducing manual work significantly'
      },
      {
        id: 3,
        image: '/images/project-placeholder.jpg',
        tags: ['Design Systems', 'Workflow Optimization', 'Media Generation'],
        title: 'Virtual Studio Platform Unification',
        description: 'Unified multiple media generation pipelines (images, 360° spins, video tours) into a single Virtual Studio platform. Created cohesive experience across different media types.',
        impact: 'Impact: Reduced workflow complexity and improved efficiency'
      },
      {
        id: 4,
        image: '/images/project-placeholder2.jpg',
        tags: ['Platform Revamp', 'Branding', 'Design Leadership'],
        title: 'Intervue.io Complete Platform Redesign',
        description: 'Led complete design revamp and branding as sole designer. Redesigned landing pages, dashboards, interviewer flows, and built scalable UI systems for question banks and assignments.',
        impact: 'Impact: Improved conversion rates and student engagement'
      },
      {
        id: 5,
        image: '/images/project-placeholder.jpg',
        tags: ['User Research', 'Prototyping', 'User Testing'],
        title: 'Talkout - Real-Time Voice Conversations (Coto)',
        description: 'Designed and tested voice conversation features and swipe-based content flows. Conducted user research and iterative testing to improve retention and in-app activity.',
        impact: 'Impact: Improved user retention through engaging voice features'
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
