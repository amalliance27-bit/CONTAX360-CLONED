import React from 'react';

interface LeadershipSectionProps {
  onEnterServiceDesk: () => void;
}

export const LeadershipSection: React.FC<LeadershipSectionProps> = ({
  onEnterServiceDesk,
}) => {
  const team = [
    {
      name: 'Jacqueline Sutherland',
      role: 'Founder/CEO',
      img: 'https://contax360.com/wp-content/uploads/2021/05/contax-360-ourteam-jackie-sq-uai-258x258.jpg',
      bio: 'Leading Contax360 with over 18 years of executive BPO mastery, bringing strategic vision and customer-first alignment across Jamaica and North America.',
      onClick: undefined
    },
    {
      name: 'Ashley Martin',
      role: 'Project Director',
      img: 'https://contax360.com/wp-content/uploads/2021/05/contax-360-ourteam-ashley-sq-uai-258x258.jpg',
      bio: 'Oversees enterprise account onboarding, milestone governance, and client partnership execution with meticulous operational precision.',
      onClick: undefined
    },
    {
      name: 'Talia Cooke-Johnson',
      role: 'Human Resources Manager',
      img: 'https://contax360.com/wp-content/uploads/2021/05/contax-360-ourteam-thalia-sq-uai-258x258.jpg',
      bio: 'Champions Contax360’s talent recruitment, career development academies, and people-first culture across all operational campuses.',
      onClick: undefined
    },
    {
      name: 'Mario Ellington',
      role: 'Director of Operations',
      img: 'https://contax360.com/wp-content/uploads/2021/05/contax-360-ourteam-mario-sq-uai-258x258.jpg',
      bio: 'Manages high-velocity contact center floor execution, workforce management (WFM), and strict SLA compliance for global clients.',
      onClick: undefined
    },
    {
      name: 'Caray McKenzie',
      role: 'Director of Information Technology',
      img: 'https://contax360.com/wp-content/uploads/2021/05/contax-360-ourteam-caray-sq-uai-258x258.jpg',
      bio: 'Directs carrier-grade telecom redundancy, secure VDI systems, and cloud infrastructure ensuring 99.99% operational uptime.',
      onClick: undefined
    },
    {
      name: 'Pandora Lee',
      role: 'Digital Concierge',
      img: '/pandora.webp',
      bio: 'Guides visitors to business solutions, client support, and our Montego Bay operations. Directs Room 03 Service Desk.',
      onClick: onEnterServiceDesk
    }
  ];

  return (
    <section id="team" className="py-20 lg:py-28 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#002b66] tracking-tight mb-4">
            Meet Our Team
          </h2>
          <div className="w-16 h-1 bg-[#006cff] mx-auto rounded-full mb-4" />
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            We’re proud to be recognized as a Women &amp; Minority Owned Business. As an owner-operated BPO service, we have provided unparalleled service for over 14 years.
          </p>
        </div>

        {/* 6-Card Grid: All 6 cards identical in styling and layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {team.map((member, idx) => (
            <div
              key={idx}
              onClick={member.onClick}
              className={`bg-white rounded-2xl overflow-hidden border border-slate-100 hover:border-blue-300 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col group text-center ${
                member.onClick ? 'cursor-pointer' : ''
              }`}
            >
              {/* Photo */}
              <div className="aspect-square w-full overflow-hidden bg-slate-100 relative">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    e.currentTarget.style.opacity = '0.4';
                  }}
                />
              </div>

              {/* Text info */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#006cff] transition-colors leading-tight mb-1">
                    {member.name}
                  </h3>
                  <p className="text-xs font-semibold text-slate-500 mb-2">
                    {member.role}
                  </p>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed pt-2 border-t border-slate-100">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
