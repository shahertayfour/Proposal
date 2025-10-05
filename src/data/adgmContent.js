/**
 * ADGM Academy × Maharat Presentation Content
 * Stage 1: School of Coders Lab Enablement
 */

export const presentationMeta = {
  title: 'Maharat × ADGM Academy',
  subtitle: 'Stage 1 - School of Coders Lab Enablement',
  version: '1.0',
  date: 'October 2025'
};

export const slideData = [
  {
    id: 1,
    type: 'cover',
    title: 'Maharat × ADGM Academy',
    subtitle: 'Stage 1 - School of Coders Lab Enablement',
    tagline: 'Building the Foundation for UAE\'s Future Coders',
    footer: 'Emirati-Founded • Trusted Across the UAE Tech Ecosystem'
  },
  {
    id: 2,
    type: 'about',
    title: 'Who We Are',
    subline: 'UAE-based skills development platform empowering talent, technology, and institutions.',
    bullets: [
      'Specialists in AI, Robotics, and Digital Transformation - registered with ADGM.',
      'Trained 500+ youth participants with 50+ established partnerships across government and enterprise.',
      'Trusted by EDGE Group and UAE Federal Youth Authority.'
    ],
    chips: [
      'Lab Enablement',
      'Custom Programs',
      'Measurable Outcomes',
      'Hands-On Training',
      'Emerging Technologies'
    ]
  },
  {
    id: 3,
    type: 'challenge',
    title: 'The School of Coders Today',
    subline: 'The vision is strong - but the lab is not yet operational.',
    bullets: [
      'The existing lab is underutilized and not configured for hands-on training.',
      'Certification testing is the current priority - all resources are focused on maintaining testing operations.',
      'There is a lost opportunity to activate the School of Coders and train the next generation of tech talent.'
    ],
    callout: 'This assessment center can be transformed into a dual-purpose lab - unlocking the School of Coders opportunity while serving as an assessment center to statistically validate course effectiveness.'
  },
  {
    id: 4,
    type: 'plan',
    title: 'Stage 1 - Prepare and Launch the School of Coders Lab',
    subline: 'Quick-start enablement to activate training within 2 months.',
    bullets: [
      'Configure 12 workstations with isolated VMs for AI, Coding, Cyber & Networking sessions.',
      'Pre-install toolsets and provide Lab Handbook + Runbook + Acceptance Tests.',
      'Align with ADGM Academy and clients to design programs that fit their exact requirements.'
    ],
    cost: 'Investment: AED 5,000 per workstation (≈ AED 60,000 total setup).',
    deliverables: [
      'Environment Setup',
      'Secure VM Images',
      'Cyber/Network Toolkits',
      'Automation Platform',
      'User Guide',
      'SOP'
    ]
  },
  {
    id: 5,
    type: 'programs',
    title: 'Maharat Training Portfolio – Programs Overview',
    subline: 'Comprehensive programs across three pillars, designed for every skill level and aligned with UAE AI 2031.',
    pillars: [
      {
        name: '🧠 Artificial Intelligence (AI)',
        color: '#4B3095',
        programs: [
          {
            level: 'Beginner',
            title: 'AI Fundamentals & Prompt Engineering',
            description: 'Learn core AI concepts, ethical use, and prompt creation for AI tools.',
            duration: '2 days',
            price: 'AED 2,000-3,000'
          },
          {
            level: 'Intermediate',
            title: 'Applied Machine Learning with Python',
            description: 'Hands-on training in model building, data processing, and analysis.',
            duration: '5 days',
            price: 'AED 4,000-5,000'
          },
          {
            level: 'Advanced',
            title: 'AI for Business Strategy & Leadership',
            description: 'Design and lead AI transformation initiatives aligned with UAE AI 2031.',
            duration: '3 days',
            price: 'AED 3,000-4,000'
          }
        ]
      },
      {
        name: '💻 Coding & Software Development',
        color: '#286EE1',
        programs: [
          {
            level: 'Beginner',
            title: 'Introduction to Python Programming',
            description: 'Master basic programming logic, syntax, and problem-solving using Python.',
            duration: '3 days',
            price: 'AED 2,500-3,500'
          },
          {
            level: 'Intermediate',
            title: 'Web Development Bootcamp (HTML, CSS, JS)',
            description: 'Develop interactive web applications through hands-on coding projects.',
            duration: '5 days',
            price: 'AED 4,000-5,000'
          },
          {
            level: 'Advanced',
            title: 'Software Engineering & Deployment',
            description: 'Implement version control, CI/CD pipelines, and cloud deployment.',
            duration: '1 week',
            price: 'AED 5,000-6,000'
          }
        ]
      },
      {
        name: '🌐 General Technology & Digital Transformation',
        color: '#10B981',
        programs: [
          {
            level: 'Beginner',
            title: 'Digital Foundations & Technology Essentials',
            description: 'Understand the essentials of AI, Cloud, IoT, and Cybersecurity.',
            duration: '2 days',
            price: 'AED 2,000-3,000'
          },
          {
            level: 'Intermediate',
            title: 'Workflow Automation & Digital Efficiency',
            description: 'Create efficient digital workflows using automation platforms.',
            duration: '4 days',
            price: 'AED 3,500-4,500'
          },
          {
            level: 'Advanced',
            title: 'Digital Strategy & Cloud Leadership',
            description: 'Develop strategic digital transformation and governance frameworks.',
            duration: '3 days',
            price: 'AED 3,000-4,000'
          }
        ]
      }
    ],
    pricingNote: 'Program pricing is determined based on duration, notice period, and complexity. Maharat maintains a flexible pricing structure to align with ADGM Academy\'s schedules and ensure value across all collaborations.'
  },
  {
    id: 6,
    type: 'nextsteps',
    title: 'Next Steps',
    subline: 'A clear roadmap from approval to successful program delivery.',
    steps: [
      {
        number: '01',
        title: 'Approve Stage 1 Mobilisation',
        description: 'ADGM Academy approves the lab setup proposal and Maharat begins immediate mobilization.',
        timeline: 'Week 1',
        icon: 'check'
      },
      {
        number: '02',
        title: 'Lab Setup & Configuration',
        description: 'Configure 12 workstations with isolated VMs, pre-install toolsets, and prepare lab handbook with SOPs.',
        timeline: 'Weeks 2-6',
        icon: 'settings'
      },
      {
        number: '03',
        title: 'Pilot Launch',
        description: 'Validate lab readiness with acceptance tests and launch the first pilot training session.',
        timeline: 'Week 8',
        icon: 'rocket'
      },
      {
        number: '04',
        title: 'Joint Program Design Workshop',
        description: 'Collaborate with ADGM Academy to select courses, customize curricula, and schedule deliveries.',
        timeline: 'Week 9-10',
        icon: 'users'
      },
      {
        number: '05',
        title: 'Program Delivery & Scale',
        description: 'Begin full program delivery across AI, Coding, and General Tech pillars with continuous improvement.',
        timeline: 'Ongoing',
        icon: 'trend'
      }
    ],
    cta: 'Ready to empower the next wave of coders? Let\'s launch the School of Coders together.'
  }
];
