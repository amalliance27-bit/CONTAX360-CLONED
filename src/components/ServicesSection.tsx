import React, { useState } from 'react';
import { Check } from 'lucide-react';

interface ServicesSectionProps {
  onOpenQuoteModal: (serviceName?: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onOpenQuoteModal,
}) => {
  const [selectedServiceId, setSelectedServiceId] = useState<string | null>(null);

  const services = [
    {
      id: 'customer-interaction',
      title: 'Customer Interaction',
      iconUrl: 'https://contax360.com/wp-content/uploads/2021/05/contax-360-service-icon-call-center-blue.png',
      desc: 'We provide a full range of Omni-Channel services from traditional phone and email to fully integrated chat and social media.',
      details: [
        'Inbound & outbound voice customer care',
        'Live web chat and instant messaging support',
        'Email ticketing and customer query resolution',
        'Social media monitoring, response & engagement',
        'Customer satisfaction (CSAT) & Net Promoter Score (NPS) tracking'
      ]
    },
    {
      id: 'finance-accounting',
      title: 'Finance & Accounting',
      iconUrl: 'https://contax360.com/wp-content/uploads/2021/05/contax-360-service-icon-calculator-blue.png',
      desc: 'We streamline and enhance your finance and accounting processes to increase efficiency and maintain compliance',
      details: [
        'Accounts Payable (AP) invoice processing and three-way matching',
        'Accounts Receivable (AR) management and credit collections',
        'General ledger posting and bank account reconciliations',
        'Payroll calculation, tax compliance, and expense auditing',
        'Month-end financial close and reporting packages'
      ]
    },
    {
      id: 'back-office',
      title: 'Back-office Transactions',
      iconUrl: 'https://contax360.com/wp-content/uploads/2021/05/contax-360-service-icon-financial-blue.png',
      desc: 'We help organizations increase customer satisfaction with services ranging from data entry to complex transactions requiring compliance and validation.',
      details: [
        'High-accuracy data entry, document indexing & OCR remediation',
        'Application processing, underwriting review & KYC validation',
        'Order fulfillment, inventory reconciliation & vendor data updates',
        'Claims verification, rebates & warranty transaction management',
        'Digital content moderation and catalog updates'
      ]
    },
    {
      id: 'legal-healthcare',
      title: 'Legal & Healthcare Processing',
      iconUrl: 'https://contax360.com/wp-content/uploads/2021/05/contax-360-service-icon-medical-blue.png',
      desc: 'We support the most demanding and complex processes as an adjunct to your team or to offload critical and time-consuming tasks',
      details: [
        '100% HIPAA-compliant patient intake and appointment scheduling',
        'Health insurance eligibility and prior authorization verification',
        'Medical billing coding (ICD-10, CPT) & claims denial management',
        'Medical transcription and electronic health record (EHR) upkeep',
        'Legal deposition summaries, case filing & e-discovery indexing'
      ]
    },
    {
      id: 'it-software',
      title: 'IT & Software Operations',
      iconUrl: 'https://contax360.com/wp-content/uploads/2021/05/contax-360-service-icon-IT-blue.png',
      desc: 'Our technical expertise allows us to provide multi-tiered support for customers or employees',
      details: [
        '24/7/365 Tier 1, 2, and 3 technical service desk',
        'Network Operations Center (NOC) monitoring & alert escalation',
        'Software quality assurance (QA) regression & automated testing',
        'Cloud infrastructure monitoring (AWS, Azure, GCP)',
        'Active Directory user provisioning and software license management'
      ]
    },
    {
      id: 'managed-security',
      title: 'Managed Security',
      iconUrl: 'https://contax360.com/wp-content/uploads/2021/05/contax-360-service-icon-data-lock-blue.png',
      desc: 'We provide 24x7 MSSP services to extend your information security and network operations capabilities',
      details: [
        'PCI-DSS Level 1 compliant secure payment card processing',
        'Biometric physical floor access and clean-room workstation policy',
        'Security Information & Event Management (SIEM) log monitoring',
        'Transaction fraud detection and dispute investigation',
        'Vulnerability assessments, patch management, and audit support'
      ]
    }
  ];

  return (
    <section id="services" className="py-20 lg:py-28 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Authentic Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#002b66] tracking-tight mb-4">
            BPO &amp; KPO Services
          </h2>
          <div className="w-16 h-1 bg-[#006cff] mx-auto rounded-full mb-4" />
          <p className="text-sm sm:text-base text-slate-600">
            Tailored business and knowledge process outsourcing engineered to elevate customer satisfaction and operational margins.
          </p>
        </div>

        {/* 6 Grid of Services (Original Layout) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {services.map((svc) => (
            <div
              key={svc.id}
              className="bg-white rounded-2xl p-8 border border-slate-100 hover:border-blue-200 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center group"
            >
              {/* Authentic Blue Service Icon */}
              <div className="w-24 h-24 rounded-full bg-slate-50 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-200">
                <img
                  src={svc.iconUrl}
                  alt={svc.title}
                  className="w-16 h-16 object-contain"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#006cff] transition-colors mb-3">
                {svc.title}
              </h3>

              {/* Description */}
              <p className="text-[13px] text-slate-600 leading-relaxed mb-6 flex-1">
                {svc.desc}
              </p>

              {/* Deep Details Drawer */}
              {selectedServiceId === svc.id && (
                <div className="w-full text-left bg-blue-50/60 p-4 rounded-xl mb-4 border border-blue-100 text-xs text-slate-700 animate-in fade-in duration-200">
                  <div className="font-bold text-blue-900 mb-2">Scope of Operations:</div>
                  <ul className="space-y-1.5">
                    {svc.details.map((d, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <Check className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex items-center gap-2 w-full pt-2">
                <button
                  onClick={() => setSelectedServiceId(selectedServiceId === svc.id ? null : svc.id)}
                  className="flex-1 py-2 px-3 text-xs font-semibold text-slate-700 hover:text-blue-700 bg-slate-50 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
                >
                  {selectedServiceId === svc.id ? 'Hide Scope' : 'View Scope'}
                </button>

                <button
                  onClick={() => onOpenQuoteModal(svc.title)}
                  className="py-2 px-4 text-xs font-bold text-white bg-[#006cff] hover:bg-blue-700 rounded-lg transition-colors cursor-pointer flex items-center gap-1.5"
                >
                  <span>Inquire</span>
                  <span className="text-blue-200 text-sm leading-none font-bold">·</span>
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
