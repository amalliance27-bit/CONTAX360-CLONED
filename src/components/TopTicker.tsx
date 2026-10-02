import React, { useState, useEffect, useRef } from 'react';

export const TopTicker: React.FC = () => {
  const [estTime, setEstTime] = useState<string>('');
  const [mercuryStatus, setMercuryStatus] = useState<string>('');
  const [isHovered, setIsHovered] = useState(false);

  const trackRef = useRef<HTMLDivElement>(null);
  const posRef = useRef<number>(0);

  // Mercury in Retrograde date ranges (2025-2027)
  const retrogradeRanges = [
    { start: new Date('2025-03-14'), end: new Date('2025-04-07'), label: 'Apr 7, 2025' },
    { start: new Date('2025-07-17'), end: new Date('2025-08-11'), label: 'Aug 11, 2025' },
    { start: new Date('2025-11-09'), end: new Date('2025-11-29'), label: 'Nov 29, 2025' },
    { start: new Date('2026-02-25'), end: new Date('2026-03-20'), label: 'Mar 20, 2026' },
    { start: new Date('2026-06-29'), end: new Date('2026-07-23'), label: 'Jul 23, 2026' },
    { start: new Date('2026-10-24'), end: new Date('2026-11-13'), label: 'Nov 13, 2026' },
    { start: new Date('2027-02-09'), end: new Date('2027-03-03'), label: 'Mar 3, 2027' },
    { start: new Date('2027-06-10'), end: new Date('2027-07-04'), label: 'Jul 4, 2027' },
    { start: new Date('2027-10-07'), end: new Date('2027-10-28'), label: 'Oct 28, 2027' },
  ];

  useEffect(() => {
    const updateTimeAndAstro = () => {
      const now = new Date();

      // Format Date & Time in US Eastern Time (EST / EDT)
      const formatter = new Intl.DateTimeFormat('en-US', {
        timeZone: 'America/New_York',
        weekday: 'short',
        month: 'short',
        day: 'numeric',
        year: 'numeric',
        hour: 'numeric',
        minute: '2-digit',
        second: '2-digit',
        timeZoneName: 'short'
      });
      setEstTime(formatter.format(now));

      // Calculate Mercury in Retrograde
      const activeRange = retrogradeRanges.find(
        (r) => now >= r.start && now <= r.end
      );

      if (activeRange) {
        setMercuryStatus(`Mercury in Retrograde until ${activeRange.label}`);
      } else {
        const nextRange = retrogradeRanges.find((r) => now < r.start);
        if (nextRange) {
          const nextStartStr = nextRange.start.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
          setMercuryStatus(`Mercury Direct (Next Retrograde: ${nextStartStr} – ${nextRange.label})`);
        } else {
          setMercuryStatus(`Mercury in Retrograde until Nov 13, 2026`);
        }
      }
    };

    updateTimeAndAstro();
    const interval = setInterval(updateTimeAndAstro, 1000);
    return () => clearInterval(interval);
  }, []);

  const tickerItems = [
    estTime ? `EST: ${estTime}` : 'EST Time: Live Synchronized',
    mercuryStatus || 'Mercury in Retrograde until Nov 13, 2026',
    'Toll-Free USA & Canada: 1-877-447-4627',
    'Jamaica Direct: +1 876-618-3600',
    'Email: info@contax360.com',
    'Nearshore HQ: 1 Mangrove Way, Freeport Montego Bay, Jamaica',
    'U.S. HQ: Plantation Corporate Center, Florida 33324',
    'Certified Woman & Minority-Owned Business Enterprise',
    'Operating in Synchronized US Time Zones (EST / CST)',
    '100% HIPAA Compliant & PCI-DSS Certified',
    'Walk-In Interviews: Mon – Fri, 9:00 AM – 3:00 PM at Montego Bay Campus',
    'Nearshore Labor Savings: 50% – 70% vs US Domestic Call Centers',
  ];

  // Active JavaScript animation loop (guaranteed to scroll on every device & iframe)
  useEffect(() => {
    let animationFrameId: number;

    const animate = () => {
      const el = trackRef.current;
      if (el && !isHovered) {
        posRef.current += 0.85; // Speed
        const singleSetWidth = el.scrollWidth / 2;
        if (posRef.current >= singleSetWidth) {
          posRef.current = 0;
        }
        el.style.transform = `translate3d(-${posRef.current}px, 0, 0)`;
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isHovered]);

  return (
    <div 
      className="relative w-full bg-[#001f3f] text-slate-200 text-[11px] font-medium tracking-wide py-1.5 overflow-hidden border-b border-blue-900/60 select-none z-50 cursor-default"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={() => setIsHovered(true)}
      onTouchEnd={() => setIsHovered(false)}
    >
      <div 
        ref={trackRef}
        className="inline-flex whitespace-nowrap will-change-transform"
        style={{ display: 'inline-flex', width: 'max-content' }}
      >
        {/* Double the list for continuous infinite looping */}
        {[...tickerItems, ...tickerItems].map((item, index) => (
          <span key={index} className="inline-flex items-center mx-4">
            <span className="text-blue-400 mr-2 text-[12px] font-bold leading-none">·</span>
            <span className={item.startsWith('EST:') ? 'text-amber-300 font-bold' : item.startsWith('Mercury') ? 'text-cyan-300 font-bold' : 'text-slate-200'}>
              {item}
            </span>
          </span>
        ))}
      </div>
    </div>
  );
};
