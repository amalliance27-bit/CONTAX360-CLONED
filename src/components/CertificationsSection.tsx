import React from 'react';

export const CertificationsSection: React.FC = () => {
  const certifications = [
    {
      id: 'nmsdc',
      name: 'NMSDC MBE Certified',
      img: 'https://contax360.com/wp-content/uploads/2021/05/nmsdc-mbe-certifiedcontax-360-certification-uai-258x133.png',
      alt: 'NMSDC Minority Business Enterprise Certification'
    },
    {
      id: 'women-owned',
      name: 'Women-Owned Certified',
      img: 'https://contax360.com/wp-content/uploads/2021/05/women-owned-certified-contax-360-certificatio-uai-258x133.png',
      alt: 'Women-Owned Certified Business Enterprise'
    },
    {
      id: 'hipaa',
      name: 'HIPAA Compliant',
      img: 'https://contax360.com/wp-content/uploads/2021/05/hippa-compliant-contax-360-certification-1-uai-258x133.png',
      alt: 'HIPAA Compliant Healthcare Data Protection'
    },
    {
      id: 'pci-dss',
      name: 'PCI-DSS Certified',
      img: 'https://contax360.com/wp-content/uploads/2021/05/pci-contax-360-certification-uai-258x133.png',
      alt: 'PCI-DSS Payment Card Data Security Standard'
    }
  ];

  return (
    <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Subtle section label */}
        <div className="text-center mb-10 max-w-2xl mx-auto">
          <p className="text-sm font-medium text-slate-600">
            We’re proud to be recognized as a <span className="font-bold text-slate-800">Women &amp; Minority Owned Business</span>. As an owner-operated BPO service, we have provided unparalleled service for over 14 years.
          </p>
        </div>

        {/* 4 Authentic Logos Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 items-center justify-center">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="bg-white rounded-xl p-4 sm:p-6 border border-slate-200/80 shadow-2xs hover:shadow-md transition-shadow duration-200 flex items-center justify-center aspect-[258/133]"
            >
              <img
                src={cert.img}
                alt={cert.alt}
                className="max-h-16 sm:max-h-20 max-w-full object-contain grayscale-0 hover:scale-105 transition-transform duration-200"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
