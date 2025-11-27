export interface Experience {
  role: string;
  company: string;
  duration: string;
}

export interface Founder {
  id: string;
  name: string;
  role: string;
  location: string;
  skills: string[];
  bio: string;
  image: string;
  matchScore?: number;
  experience: Experience[];
  education: string;
  equityExpectation: string;
  commitmentLevel: string;
  interests: string[];
}

export enum ViewMode {
  DIRECTORY = 'DIRECTORY',
  PROFILE = 'PROFILE',
  MATCHING = 'MATCHING'
}

export interface NavItem {
  label: string;
  href: string;
}