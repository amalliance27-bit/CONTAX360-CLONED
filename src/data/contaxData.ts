import { BpoService, TeamMember, Certification, JobOpening, CaseStudy } from '../types';

export const CONTAX_SERVICES: BpoService[] = [
  {
    id: 'customer-interaction',
    title: 'Customer Interaction Services',
    shortDesc: '24/7/365 omnichannel contact center solutions delivering exceptional first-contact resolution across voice, chat, email, and social media.',
    fullDesc: 'Empower your customer journeys with empathetic, highly trained customer care professionals. Operating in synchronized U.S. time zones with native English fluency and neutral accents, our agents turn routine support into long-term brand advocacy.',
    icon: 'Headphones',
    highlights: [
      'Inbound customer support & technical helpdesk',
      'Outbound customer engagement, retention & welcome calls',
      'Live chat, email ticket management & SMS messaging',
      'Social media community monitoring & sentiment triage'
    ],
    metrics: '94.8% First Contact Resolution (FCR) | 82+ Net Promoter Score',
    deliverables: [
      'Omnichannel routing platform with CRM sync',
      'Continuous speech analytics and sentiment tracking',
      'Customized Tier 1 & Tier 2 resolution workflows',
      'Dedicated QA scoring and weekly calibration sessions'
    ],
    channels: ['Voice (Inbound/Outbound)', 'Live Chat', 'Email Ticketing', 'SMS & WhatsApp', 'Social Media Messaging']
  },
  {
    id: 'finance-accounting',
    title: 'Finance & Accounting BPO',
    shortDesc: 'End-to-end accounting support, accounts payable/receivable management, automated reconciliations, and payroll processing.',
    fullDesc: 'Streamline your fiscal operations with certified accounting specialists. From three-way invoice matching to complex bank reconciliations and financial reporting, we bring rigorous GAAP compliance and precision to your back-office financial ledger.',
    icon: 'Calculator',
    highlights: [
      'Accounts Payable (AP) invoice coding, matching & validation',
      'Accounts Receivable (AR) billing, collections & cash application',
      'General ledger reconciliations & month-end closing support',
      'Payroll calculation, tax filings & expense audit processing'
    ],
    metrics: '99.94% Ledger Accuracy | 48-Hour Faster Month-End Close',
    deliverables: [
      'Automated ERP ingestion (QuickBooks, NetSuite, SAP, Sage)',
      'Multi-currency reconciliations & treasury reporting',
      'Audit-ready electronic document archives',
      'Daily DSO (Days Sales Outstanding) tracking'
    ],
    channels: ['Secure ERP Portals', 'Automated EDI/API', 'Direct Invoicing', 'Encrypted File Transfer']
  },
  {
    id: 'back-office',
    title: 'Back-Office Transaction Processing',
    shortDesc: 'High-speed data normalization, application processing, claims verification, and digital content moderation with 99.9% accuracy.',
    fullDesc: 'Eliminate administrative bottlenecks and manual processing friction. Our specialized data operations squads execute rigorous data verification, policy underwriting support, document digitization, and workflow processing at scale.',
    icon: 'FileText',
    highlights: [
      'Complex document indexing, OCR correction & data capture',
      'Application verification, underwriting triage & KYC vetting',
      'Warranty, rebates & insurance claims processing',
      'Order fulfillment, vendor management & inventory reconciliations'
    ],
    metrics: '5.2M+ Annual Documents Processed | < 2hr Average Turnaround',
    deliverables: [
      'Dual-key data validation protocols',
      'Automated exception queue handling',
      'Digital document vault with search indexing',
      'Real-time SLA status and backlog dashboards'
    ],
    channels: ['Secure Web Portals', 'Batch SFTP', 'Direct Database Feeds', 'Workflow API Integration']
  },
  {
    id: 'legal-healthcare',
    title: 'Legal & Healthcare Services',
    shortDesc: 'HIPAA-compliant patient coordination, insurance verification, medical billing, legal document review, and transcription.',
    fullDesc: 'Purpose-built operations adhering strictly to HIPAA and HITECH guidelines. Our specialized healthcare practice coordinates patient scheduling, pre-authorizations, electronic health record (EHR) upkeep, and medical billing code audits with total data privacy.',
    icon: 'Activity',
    highlights: [
      'Patient intake, appointment scheduling & reminder calls',
      'Health insurance eligibility & prior authorization verification',
      'Medical coding (ICD-10, CPT) & claims denial management',
      'Legal deposition summaries, e-discovery tagging & case filing'
    ],
    metrics: '100% HIPAA Compliance Score | 18% Reduced Claim Denials',
    deliverables: [
      'HIPAA-hardened isolated VDI workstations with clean-desk audits',
      'EHR/EMR integration (Epic, Cerner, AthenaHealth, Kareo)',
      'Medical credentialing verification pipeline',
      'BAA (Business Associate Agreement) institutional enforcement'
    ],
    channels: ['Encrypted VoIP', 'HIPAA Secure Chat', 'HL7/FHIR EHR Feeds', 'Encrypted Fax/DocuSign']
  },
  {
    id: 'it-software',
    title: 'IT & Software Operations',
    shortDesc: 'Tier 1 to 3 technical service desk, infrastructure monitoring, software QA testing, and cloud operations support.',
    fullDesc: 'Extend your engineering and IT organization with dedicated technical staff. Whether supporting enterprise software end-users, triaging cloud infrastructure alerts, or running regression QA suites, our technical professionals resolve issues around the clock.',
    icon: 'Laptop',
    highlights: [
      '24/7 Service Desk & end-user hardware/software troubleshooting',
      'Network Operations Center (NOC) monitoring & alert escalation',
      'Manual and automated QA software regression testing',
      'Database maintenance, cloud provisioning & user administration'
    ],
    metrics: '12-Minute Average MTTR (Mean Time to Resolution) | 99.98% System Uptime',
    deliverables: [
      'ITIL-aligned ticketing workflows (Jira, ServiceNow, Zendesk)',
      'Tiered technical escalation matrix with engineering handoff',
      'Comprehensive runbooks and knowledge base curation',
      'Quarterly security patch audits and telemetry reporting'
    ],
    channels: ['Remote Desktop Access', 'Slack/Teams Connect', 'Jira Service Management', 'Direct Telecom Trunk']
  },
  {
    id: 'managed-security',
    title: 'Managed Security & Risk Governance',
    shortDesc: 'PCI-DSS certified financial security, fraud monitoring, identity authentication, and institutional compliance auditing.',
    fullDesc: 'Protect your brand reputation and customer sensitive data with multi-layered operational security. Contax360 operates clean-room facilities with biometric access control, screen watermarking, strict no-recording policies, and continuous network intrusion monitoring.',
    icon: 'ShieldCheck',
    highlights: [
      'PCI-DSS Level 1 payment processing with zero agent credit card exposure',
      'Transaction fraud monitoring & suspicious pattern alert triage',
      'Biometric & dual-factor facility physical access control',
      'Comprehensive SOC 2, HIPAA, and GDPR audit adherence'
    ],
    metrics: 'Zero Security Breaches in 18 Years | PCI-DSS Compliant Clean-Room Floors',
    deliverables: [
      'Dual-layer biometric authentication for all production centers',
      'Agent clean-desk policy with mobile phone lockup rooms',
      'Screen watermarking and USB-port hardware disabling',
      'Third-party penetration testing and compliance audit reports'
    ],
    channels: ['Encrypted Payment Gateways', 'IVR Tokenization', 'SIEM Security Logging', 'SOC Alert Monitoring']
  }
];

export const LEADERSHIP_TEAM: TeamMember[] = [
  {
    name: 'Jacqueline Sutherland',
    role: 'Founder & Chief Executive Officer',
    bio: 'Jacqueline founded Contax360 in 2007 with a clear mission: to build a premier, agile BPO solutions provider that merges Caribbean talent with world-class operational discipline. Under her stewardship, Contax360 has grown from a boutique call center to a multinational, woman- and minority-owned enterprise supporting Fortune 500 brands.',
    location: 'Montego Bay, Jamaica / Plantation, FL',
    avatarBg: 'bg-blue-600',
    initials: 'JS'
  },
  {
    name: 'Mario Ellington',
    role: 'Director of Operations',
    bio: 'With over 18 years of high-volume contact center management experience across retail, fintech, and telecommunications, Mario oversees daily operational execution, workforce scheduling, and client SLA compliance across both Montego Bay and Kingston centers.',
    location: 'Montego Bay, Jamaica',
    avatarBg: 'bg-emerald-600',
    initials: 'ME'
  },
  {
    name: 'Caray McKenzie',
    role: 'Director of Technology & Infrastructure',
    bio: 'Caray architects the carrier-grade telecom redundancy, secure VDI systems, and cloud connectivity that powers Contax360. He ensures 99.99% network uptime across dual undersea fiber loops and manages PCI-DSS and HIPAA-compliant data topologies.',
    location: 'Kingston, Jamaica',
    avatarBg: 'bg-cyan-600',
    initials: 'CM'
  },
  {
    name: 'Ashley Vance',
    role: 'Head of Client Services & Partnerships',
    bio: 'Ashley leads client onboarding, partnership governance, and account growth strategy from our U.S. Headquarters in Plantation, Florida. She acts as the strategic liaison ensuring seamless alignment between US enterprise executive teams and nearshore operations.',
    location: 'Plantation, Florida, USA',
    avatarBg: 'bg-indigo-600',
    initials: 'AV'
  },
  {
    name: 'Thalia Campbell',
    role: 'Head of Quality Assurance & Human Capital',
    bio: 'Thalia directs Contax360’s talent acquisition, training academy, and continuous quality assurance framework. Her employee-first culture programs have produced one of the lowest agent attrition rates in the Caribbean BPO sector.',
    location: 'Montego Bay, Jamaica',
    avatarBg: 'bg-purple-600',
    initials: 'TC'
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    id: 'hipaa',
    title: 'HIPAA Compliant',
    badge: 'HEALTHCARE READY',
    description: 'Full adherence to Health Insurance Portability and Accountability Act standards for Protected Health Information (PHI).',
    auditStandard: '45 CFR Part 160 & 164',
    accreditedBy: 'Independent Third-Party Healthcare Compliance Audit'
  },
  {
    id: 'pci-dss',
    title: 'PCI-DSS Certified',
    badge: 'PAYMENT SECURITY',
    description: 'Payment Card Industry Data Security Standard certification guaranteeing safe handling, tokenization, and processing of credit card data.',
    auditStandard: 'PCI-DSS Level 1 / Service Provider Standard',
    accreditedBy: 'Qualified Security Assessor (QSA) Verified'
  },
  {
    id: 'nmsdc-mbe',
    title: 'NMSDC MBE Certified',
    badge: 'DIVERSITY CERTIFIED',
    description: 'Official certification by the National Minority Supplier Development Council as a bona fide Minority Business Enterprise.',
    auditStandard: 'US Supplier Diversity Standards',
    accreditedBy: 'National Minority Supplier Development Council'
  },
  {
    id: 'women-owned',
    title: 'Women-Owned Enterprise',
    badge: 'WOSB / WBENC RECOGNIZED',
    description: 'Certified woman-owned and managed business process outsourcing firm, championing executive diversity and equal opportunity leadership.',
    auditStandard: 'Women’s Business Enterprise National Standards',
    accreditedBy: 'Women-Owned Small Business & Diversity Councils'
  }
];

export const CAREER_OPENINGS: JobOpening[] = [
  {
    id: 'csr-mobay',
    title: 'Customer Experience Specialist (Inbound/Chat)',
    department: 'Customer Care',
    location: 'Freeport Montego Bay, Jamaica (On-Site)',
    type: 'Full-Time, Permanent',
    shifts: 'Flexible Day / Afternoon / Evening (US EST Synchronized)',
    requirements: [
      'Minimum 18 years of age with valid government ID, TRN, and NIS',
      'Passionate communicator with excellent oral & written English proficiency',
      'Minimum 3 CXC/CSEC subjects including English Language',
      'Basic computer literacy and minimum 30 WPM typing speed',
      'Pass background verification and drug screen'
    ],
    responsibilities: [
      'Deliver friendly, high-touch support to US customer base via voice and chat',
      'Navigate CRM and product catalogs to resolve billing and product inquiries',
      'Maintain target first-contact resolution and CSAT satisfaction scores',
      'Collaborate with team leaders on weekly quality coaching'
    ]
  },
  {
    id: 'healthcare-intake',
    title: 'Healthcare Patient Intake Representative',
    department: 'Healthcare Support',
    location: 'Kingston, Jamaica / Virtual WFH',
    type: 'Full-Time',
    shifts: 'Monday – Friday, 8:00 AM – 5:00 PM EST',
    requirements: [
      '1+ years medical clinic or healthcare call center experience preferred',
      'Familiarity with medical terminology and insurance verification',
      'Understanding of patient confidentiality and HIPAA awareness',
      'Strong empathy and active listening skills'
    ],
    responsibilities: [
      'Verify patient eligibility and insurance coverage with major US payers',
      'Schedule appointments and document referrals in client EHR systems',
      'Address patient pre-authorization inquiries accurately and with compassion'
    ]
  },
  {
    id: 'team-lead-bpo',
    title: 'Operations Team Lead - Retail Account',
    department: 'Operations',
    location: 'Freeport Montego Bay, Jamaica',
    type: 'Full-Time',
    shifts: 'Rotational Shifts',
    requirements: [
      '2+ years experience in a contact center leadership or supervisory capacity',
      'Proven track record managing agent KPIs, attendance, and SLA performance',
      'Proficiency in workforce management (WFM) tools and coaching frameworks',
      'Tertiary education in business management or related field is an asset'
    ],
    responsibilities: [
      'Lead and mentor a pod of 15-20 customer care representatives',
      'Conduct daily huddles, floor support, and weekly 1-on-1 performance coaching',
      'Monitor real-time call queues, handle escalations, and report to Account Manager'
    ]
  },
  {
    id: 'it-helpdesk',
    title: 'Technical Support Specialist (Tier 2 Helpdesk)',
    department: 'IT & Infrastructure',
    location: 'Montego Bay, Jamaica / Hybrid',
    type: 'Full-Time',
    shifts: 'Rotational 24/7 Coverage',
    requirements: [
      'Diploma or Degree in Computer Science, Information Technology, or equivalent',
      'CompTIA A+, Network+, or Microsoft 365 certification advantageous',
      'Solid understanding of Windows Server, Active Directory, VoIP/SIP networks',
      'Exceptional diagnostic problem-solving abilities'
    ],
    responsibilities: [
      'Triage incoming IT tickets from enterprise clients and remote workforce',
      'Configure agent VDI images, headset hardware, and dual-monitor stations',
      'Monitor firewall throughput, redundant fiber failovers, and backup generators'
    ]
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    clientType: 'North American E-Commerce Fashion Retailer',
    industry: 'Omnichannel Retail & Apparel',
    challenge: 'Client faced 350% seasonal surges during Q4 holidays with skyrocketing domestic temp agency costs ($29/hr) and 45-minute average hold times.',
    solution: 'Contax360 mobilized 85 nearshore customer care specialists in Montego Bay within 21 days, integrating directly into Shopify, Gorgias, and Zendesk with native English voice and live chat.',
    results: [
      { label: 'Cost Reduction', value: '58%' },
      { label: 'Avg Hold Time', value: '< 24s' },
      { label: 'Holiday CSAT', value: '96.2%' }
    ],
    quote: "Contax360 didn't just handle our holiday volume; their Jamaican agents delivered higher customer warmth and product knowledge than our domestic US team at less than half the operating budget.",
    author: "VP of Customer Experience, Leading Direct-to-Consumer Brand"
  },
  {
    clientType: 'US Multi-State Specialty Healthcare Network',
    industry: 'Healthcare & Patient Services',
    challenge: 'Prior authorization delays and high billing error rates led to a 17.8% insurance claim denial rate and delayed patient treatment schedules.',
    solution: 'Deployed a dedicated 30-FTE HIPAA-compliant intake and medical billing audit squad in Kingston with clean-room workstations and direct EHR integration.',
    results: [
      { label: 'Claim Denials Dropped', value: '1.9%' },
      { label: 'Annual Savings', value: '$840K' },
      { label: 'Audit Compliance', value: '100%' }
    ],
    quote: "Their HIPAA compliance is rock-solid. Contax360 cleared our six-month billing backlog in under 60 days while drastically speeding up patient care authorizations.",
    author: "Chief Financial Officer, Regional Medical Group"
  },
  {
    clientType: 'Fast-Growing FinTech & Neo-Banking Platform',
    industry: 'Financial Technology',
    challenge: 'Need for 24/7 fraud alert verification, dispute resolution, and cardholder support requiring strict PCI-DSS Level 1 compliance and zero downtime.',
    solution: 'Constructed an isolated biometric clean-room facility in Freeport Montego Bay with 45 licensed fraud specialists operating in 24/7 rotational shifts.',
    results: [
      { label: 'Fraud Detection Rate', value: '99.4%' },
      { label: 'SLA Adherence', value: '99.9%' },
      { label: 'Ramp-up Time', value: '18 Days' }
    ],
    quote: "The seamless cultural alignment and same-time-zone collaboration with Jamaica gave us total peace of mind for our banking members.",
    author: "Head of Operations, FinTech Unicorn"
  }
];

export const OFFICE_LOCATIONS = [
  {
    name: 'Montego Bay Headquarters (Nearshore Campus)',
    address: '1 Mangrove Way, Freeport, Montego Bay, St. James, Jamaica W.I.',
    phone: '+1 876-618-3600 / +1 877-447-4627',
    features: [
      'Beachside corporate campus in Freeport commercial zone',
      'Dual undersea fiber-optic links (Flow & Digicel)',
      'Dual Cummins commercial backup generators with 14-day fuel reserve',
      'Biometric clean-room floors with 500+ seat capacity'
    ],
    timezone: 'EST (UTC-5) - No daylight savings shift'
  },
  {
    name: 'Kingston Operations Center (Tech & Financial Hub)',
    address: 'New Kingston Commercial District, Kingston, Jamaica',
    phone: '+1 876-929-2260',
    features: [
      'Proximity to University of the West Indies & UTech talent pipeline',
      'Specialized hub for Finance, Accounting, and Healthcare BPO',
      'Dedicated training academy and conference auditorium',
      'High-security network operations facility'
    ],
    timezone: 'EST (UTC-5)'
  },
  {
    name: 'Plantation, Florida (U.S. Corporate Headquarters)',
    address: 'Plantation Corporate Center, Fort Lauderdale Area, FL 33324, USA',
    phone: '+1 877-447-4627 (Toll-Free USA & Canada)',
    features: [
      'Client relationship management & executive partnership governance',
      'U.S. domestic onshore escalation and project management',
      '90-minute flight proximity to Jamaica nearshore operations',
      'Direct contracts under US legal jurisdiction'
    ],
    timezone: 'Eastern Standard Time (EST)'
  }
];
