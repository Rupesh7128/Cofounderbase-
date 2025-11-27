import { Founder } from './types';

export const MOCK_FOUNDERS: Founder[] = [
  {
    id: '1',
    name: 'Elena Rodriguez',
    role: 'CTO / Technical Co-founder',
    location: 'San Francisco, CA',
    skills: ['AI/ML', 'Python', 'System Arch', 'TensorFlow'],
    bio: 'Ex-Google engineer looking to build the next generation of logistics AI. I have built 2 SaaS products to $10k MRR and now looking for the big swing. Need a biz-savvy partner who can handle sales.',
    image: 'https://picsum.photos/200/200?random=1',
    matchScore: 98,
    experience: [
      { role: 'Senior Staff Engineer', company: 'Google', duration: '4 years' },
      { role: 'Backend Lead', company: 'Stripe', duration: '2 years' }
    ],
    education: 'MS Computer Science, Stanford',
    equityExpectation: '40% - 60%',
    commitmentLevel: 'Full-time',
    interests: ['Logistics', 'Deep Tech', 'Automation']
  },
  {
    id: '2',
    name: 'David Chen',
    role: 'CPO / Product Visionary',
    location: 'Austin, TX',
    skills: ['Product Design', 'Growth', 'UX', 'Figma'],
    bio: 'Serial entrepreneur with 1 exit. Passionate about health-tech and longevity. I focus on user-centric design and rapid prototyping.',
    image: 'https://picsum.photos/200/200?random=2',
    matchScore: 92,
    experience: [
      { role: 'Head of Product', company: 'Oura', duration: '3 years' },
      { role: 'Founder', company: 'FitCheck (Acquired)', duration: '5 years' }
    ],
    education: 'MBA, Harvard Business School',
    equityExpectation: '50/50 Split',
    commitmentLevel: 'Full-time',
    interests: ['HealthTech', 'Consumer Social', 'Longevity']
  },
  {
    id: '3',
    name: 'Sarah Jenkins',
    role: 'CEO / Operations',
    location: 'New York, NY',
    skills: ['Fundraising', 'B2B Sales', 'Strategy', 'Legal'],
    bio: 'MBA graduate with strong network in FinTech. Looking for a technical builder to execute on a validated DeFi concept.',
    image: 'https://picsum.photos/200/200?random=3',
    matchScore: 85,
    experience: [
      { role: 'VP of Operations', company: 'Brex', duration: '3 years' },
      { role: 'Investment Banker', company: 'Goldman Sachs', duration: '4 years' }
    ],
    education: 'BS Economics, UPenn',
    equityExpectation: 'Negotiable',
    commitmentLevel: 'Full-time',
    interests: ['FinTech', 'Web3', 'Crypto']
  },
  {
    id: '4',
    name: 'Marcus Johnson',
    role: 'Full Stack Wizard',
    location: 'Remote (London)',
    skills: ['React', 'Node.js', 'Web3', 'Solidity'],
    bio: 'Building decentralized social networks. I love shipping fast and breaking things. Need someone who understands community building and tokenomics.',
    image: 'https://picsum.photos/200/200?random=4',
    matchScore: 88,
    experience: [
      { role: 'Senior Dev', company: 'Consensys', duration: '2 years' },
      { role: 'Freelance Architect', company: 'Self-employed', duration: '5 years' }
    ],
    education: 'Self-taught',
    equityExpectation: '20% - 40%',
    commitmentLevel: 'Part-time to start',
    interests: ['Social Graph', 'DAO', 'Creator Economy']
  }
];

export const YOUFORM_LINK = "https://app.youform.com/forms/btouwemq";
export const LAUNCH_DATE = "January 1, 2026";