export type ServiceId = 
  | 'customer-interaction'
  | 'finance-accounting'
  | 'back-office'
  | 'legal-healthcare'
  | 'it-software'
  | 'managed-security';

export interface BpoService {
  id: ServiceId;
  title: string;
  shortDesc: string;
  fullDesc: string;
  icon: string;
  highlights: string[];
  metrics: string;
  deliverables: string[];
  channels: string[];
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  location: string;
  avatarBg: string;
  initials: string;
}

export interface Certification {
  id: string;
  title: string;
  badge: string;
  description: string;
  auditStandard: string;
  accreditedBy: string;
}

export interface JobOpening {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  shifts: string;
  requirements: string[];
  responsibilities: string[];
}

export interface CaseStudy {
  clientType: string;
  industry: string;
  challenge: string;
  solution: string;
  results: {
    label: string;
    value: string;
  }[];
  quote: string;
  author: string;
}
