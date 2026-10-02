import React, { useState, useEffect } from 'react';

interface HeroProps {
  onOpenContact: () => void;
  onNavigate: (sectionId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenContact,
  onNavigate,
}) => {
  const dynamicWords = ['contact', 'call', 'text', 'SMS', 'message'];
  const [wordIndex, setWordIndex] = useState(0);
  const [fadeAnim, setFadeAnim] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeAnim(false);
      setTimeout(() => {
        setWordIndex((prev) => (prev + 1) % dynamicWords.length);
        setFadeAnim(true);
      }, 300);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const heroBg = "https://contax360.com/wp-content/uploads/2021/06/main-hero-background-image-scaled.jpg";

  const locations = [
    {
      title: 'Nearshore - Jamaica',
      desc: 'With 2 locations in Jamaica, we provide high-value services with a native English-speaking workforce located in U.S. time zones.',
      img: 'https://contax360.com/wp-content/uploads/2021/04/jamaica-contax-uai-258x179.png'
    },
    {
      title: 'Onshore - Florida',
      desc: 'U.S. based resources provide a full spectrum of services from our Florida facility, Virtual, or co-located in your facility.',
      img: 'https://contax360.com/wp-content/uploads/2021/04/florida-contax-uai-258x179.png'
    },
    {
      title: 'Virtual - Worldwide',
      desc: 'Our advanced WFH infrastructure allows for virtual agents to be deployed from almost any location globally',
      img: 'https://contax360.com/wp-content/uploads/2021/04/globe-contax-icon3-uai-258x179.png'
    }
  ];

  return (
    <div id="hero" className="relative">
      
      {/* 1. Main Hero Stage (Exact RevSlider Clone matching PDF) */}
      <section className="relative min-h-[560px] lg:min-h-[660px] flex items-center bg-slate-950 overflow-hidden">
        {/* Background Call Center Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center sm:bg-[center_top] no-repeat"
          style={{ backgroundImage: `url(${heroBg})` }}
        >
          {/* Natural dark vignette to match original */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/70 to-slate-900/40" />
        </div>

        {/* Hero Content with padding-top for fixed header */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-32 pb-20 sm:pt-36 sm:pb-24 w-full">
          <div className="max-w-2xl text-left">
            
            {/* Contax 360 Logo Banner Graphic matching exact design */}
            <div className="mb-5 sm:mb-6">
              <img
                src="/images/blue-lol.jpg"
                alt="CONTAX 360 BPO Solutions"
                className="h-16 sm:h-20 md:h-24 w-auto object-contain rounded-md shadow-lg border border-blue-500/20"
                onError={(e) => {
                  e.currentTarget.src = "https://raw.githubusercontent.com/amalliance27-bit/Ask247-Website-Promo/4cccbcdd7efb6ed18131d1d98250782e678fd0b1/blue%20lol.jpg";
                }}
              />
            </div>

            {/* Top kicker */}
            <p className="text-xl sm:text-2xl font-light text-white tracking-wide mb-2 opacity-95">
              We're redefining BPO
            </p>

            {/* Main Rotating Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] mb-8">
              One{' '}
              <span 
                className={`inline-block text-[#006cff] transition-all duration-300 transform ${
                  fadeAnim ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 -translate-y-2 scale-95'
                }`}
              >
                {dynamicWords[wordIndex]}
              </span>{' '}
              at a time
            </h1>

            {/* Authentic LET'S TALK Button (Matching PDF) */}
            <div>
              <button
                onClick={onOpenContact}
                className="px-8 py-3.5 text-xs font-bold uppercase tracking-wider text-white bg-[#006cff] hover:bg-blue-700 rounded-sm transition-all duration-150 shadow-md cursor-pointer"
              >
                LET'S TALK
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Three Delivery Hubs (Nearshore Jamaica, Onshore Florida, Virtual Worldwide) */}
      <section className="bg-white py-16 lg:py-20 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
            {locations.map((loc, idx) => (
              <div 
                key={idx} 
                className="flex flex-col items-center text-center group cursor-pointer"
                onClick={() => onNavigate('services')}
              >
                {/* Official Icon */}
                <div className="w-44 h-32 flex items-center justify-center mb-4 transition-transform duration-200 group-hover:scale-105">
                  <img
                    src={loc.img}
                    alt={loc.title}
                    className="max-h-28 w-auto object-contain"
                    onError={(e) => {
                      e.currentTarget.style.opacity = '0.3';
                    }}
                  />
                </div>

                <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-3">
                  {loc.title}
                </h3>

                <p className="text-[13px] text-slate-600 leading-relaxed max-w-sm">
                  {loc.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};
