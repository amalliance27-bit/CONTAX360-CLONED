import React, { useState, useRef, useEffect } from 'react';
import { Menu, X, Search, ChevronDown, Radio } from 'lucide-react';
import { TopTicker } from './TopTicker';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeSection,
  onNavigate,
  onOpenContact,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const logoUrl = "https://contax360.com/wp-content/uploads/2021/08/Logo-CONTAX-360-3-uai-258x95.png";

  const handleMouseEnter = (menuKey: string) => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setActiveDropdown(menuKey);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    const query = searchQuery.toLowerCase();
    setSearchOpen(false);

    if (query.includes('desk') || query.includes('pandora') || query.includes('service') || query.includes('support')) {
      onNavigate('service-desk');
    } else if (query.includes('radio') || query.includes('lounge') || query.includes('music')) {
      onNavigate('lounge');
    } else if (query.includes('job') || query.includes('career') || query.includes('apply')) {
      onNavigate('careers');
    } else if (query.includes('contact') || query.includes('phone') || query.includes('email')) {
      onOpenContact();
    } else {
      onNavigate('services');
    }
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-white">
      {/* 1. Ticker ABOVE the banner */}
      <TopTicker />

      {/* 2. Main Header matching exact PDF & Contax360 style */}
      <header className="w-full bg-white border-b border-slate-200 py-3.5 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          {/* Logo on Left */}
          <button
            onClick={() => {
              onNavigate('hero');
              window.scrollTo(0, 0);
            }}
            className="flex items-center cursor-pointer text-left focus:outline-none"
            aria-label="Contax360 Home"
          >
            <img
              src={logoUrl}
              alt="Contax 360 BPO SOLUTIONS"
              className="h-9 sm:h-11 w-auto object-contain"
            />
          </button>

          {/* Navigation Links with Surgical Dropdown Menus */}
          <div className="hidden lg:flex items-center space-x-6">
            <nav className="flex items-center space-x-6 text-[12px] font-bold tracking-wider text-slate-800">
              
              {/* HOME */}
              <button
                onClick={() => onNavigate('hero')}
                className={`transition-colors uppercase cursor-pointer py-1 relative ${
                  activeSection === 'hero' || activeSection === 'lobby'
                    ? 'text-[#006cff] font-extrabold'
                    : 'text-slate-800 hover:text-[#006cff]'
                }`}
              >
                <span>HOME</span>
                {(activeSection === 'hero' || activeSection === 'lobby') && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#006cff] rounded-full" />
                )}
              </button>

              {/* SERVICES (with Dropdown) */}
              <div 
                className="relative"
                onMouseEnter={() => handleMouseEnter('services')}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  onClick={() => onNavigate('services')}
                  className={`flex items-center gap-1 transition-colors uppercase cursor-pointer py-1 ${
                    activeSection === 'services' ? 'text-[#006cff] font-extrabold' : 'text-slate-800 hover:text-[#006cff]'
                  }`}
                >
                  <span>SERVICES</span>
                  <ChevronDown className="w-3.5 h-3.5 opacity-60" />
                </button>

                {activeDropdown === 'services' && (
                  <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-xl shadow-2xl border border-slate-100 py-2.5 z-50 animate-in fade-in duration-150">
                    <button
                      onClick={() => { onNavigate('services'); setActiveDropdown(null); }}
                      className="w-full text-left px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                    >
                      Customer Interaction Services
                    </button>
                    <button
                      onClick={() => { onNavigate('services'); setActiveDropdown(null); }}
                      className="w-full text-left px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                    >
                      Finance &amp; Accounting (F&amp;A)
                    </button>
                    <button
                      onClick={() => { onNavigate('services'); setActiveDropdown(null); }}
                      className="w-full text-left px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                    >
                      Back Office Transactions
                    </button>
                    <button
                      onClick={() => { onNavigate('services'); setActiveDropdown(null); }}
                      className="w-full text-left px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                    >
                      Legal Processing Outsourcing
                    </button>
                    <button
                      onClick={() => { onNavigate('services'); setActiveDropdown(null); }}
                      className="w-full text-left px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                    >
                      Healthcare Processing Outsourcing
                    </button>
                    <button
                      onClick={() => { onNavigate('services'); setActiveDropdown(null); }}
                      className="w-full text-left px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                    >
                      IT &amp; Software (ITO)
                    </button>
                  </div>
                )}
              </div>

              {/* ABOUT US (with Dropdown) */}
              <div 
                className="relative"
                onMouseEnter={() => handleMouseEnter('about')}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  onClick={() => onNavigate('about')}
                  className={`flex items-center gap-1 transition-colors uppercase cursor-pointer py-1 ${
                    activeSection === 'about' ? 'text-[#006cff] font-extrabold' : 'text-slate-800 hover:text-[#006cff]'
                  }`}
                >
                  <span>ABOUT US</span>
                  <ChevronDown className="w-3.5 h-3.5 opacity-60" />
                </button>

                {activeDropdown === 'about' && (
                  <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-xl shadow-2xl border border-slate-100 py-2.5 z-50 animate-in fade-in duration-150">
                    <button
                      onClick={() => { onNavigate('about'); setActiveDropdown(null); }}
                      className="w-full text-left px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                    >
                      Our Company &amp; History
                    </button>
                    <button
                      onClick={() => { onNavigate('team'); setActiveDropdown(null); }}
                      className="w-full text-left px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                    >
                      Leadership &amp; Team
                    </button>
                    <button
                      onClick={() => { onNavigate('hero'); setActiveDropdown(null); }}
                      className="w-full text-left px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                    >
                      Locations (Montego Bay &amp; Florida)
                    </button>
                    <button
                      onClick={() => { onNavigate('certifications'); setActiveDropdown(null); }}
                      className="w-full text-left px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                    >
                      Certifications &amp; Diversity
                    </button>
                  </div>
                )}
              </div>

              {/* CAREERS (with Dropdown) */}
              <div 
                className="relative"
                onMouseEnter={() => handleMouseEnter('careers')}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  onClick={() => onNavigate('careers')}
                  className={`flex items-center gap-1 transition-colors uppercase cursor-pointer py-1 ${
                    activeSection === 'careers' || activeSection === 'careers-room' ? 'text-[#006cff] font-extrabold' : 'text-slate-800 hover:text-[#006cff]'
                  }`}
                >
                  <span>CAREERS</span>
                  <ChevronDown className="w-3.5 h-3.5 opacity-60" />
                </button>

                {activeDropdown === 'careers' && (
                  <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-xl shadow-2xl border border-slate-100 py-2.5 z-50 animate-in fade-in duration-150">
                    <button
                      onClick={() => { onNavigate('careers'); setActiveDropdown(null); }}
                      className="w-full text-left px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                    >
                      Room 02 · Careers Room
                    </button>
                    <button
                      onClick={() => { onNavigate('careers'); setActiveDropdown(null); }}
                      className="w-full text-left px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                    >
                      Walk-In Interviews (Mon–Fri 9AM–3PM)
                    </button>
                    <button
                      onClick={() => { onNavigate('careers'); setActiveDropdown(null); }}
                      className="w-full text-left px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                    >
                      Employee Benefits &amp; Perks
                    </button>
                    <button
                      onClick={() => { onNavigate('careers'); setActiveDropdown(null); }}
                      className="w-full text-left px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                    >
                      Apply Online Portal
                    </button>
                  </div>
                )}
              </div>

              {/* ROOMS (with Dropdown) */}
              <div 
                className="relative"
                onMouseEnter={() => handleMouseEnter('rooms')}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  className={`flex items-center gap-1 transition-colors uppercase cursor-pointer py-1 ${
                    activeSection === 'service-desk' || activeSection === 'lounge' ? 'text-[#006cff] font-extrabold' : 'text-slate-800 hover:text-[#006cff]'
                  }`}
                >
                  <span>ROOMS</span>
                  <ChevronDown className="w-3.5 h-3.5 opacity-60" />
                </button>

                {activeDropdown === 'rooms' && (
                  <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-xl shadow-2xl border border-slate-100 py-2.5 z-50 animate-in fade-in duration-150">
                    <button
                      onClick={() => { onNavigate('hero'); setActiveDropdown(null); }}
                      className="w-full text-left px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition-colors flex items-center justify-between"
                    >
                      <span>Room 01 · Main Lobby</span>
                      <span className="text-[10px] text-slate-400 font-normal">Active</span>
                    </button>
                    <button
                      onClick={() => { onNavigate('careers'); setActiveDropdown(null); }}
                      className="w-full text-left px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition-colors flex items-center justify-between"
                    >
                      <span>Room 02 · Careers Hub</span>
                      <span className="text-[10px] text-blue-500 font-bold">Montego Bay</span>
                    </button>
                    <button
                      onClick={() => { onNavigate('service-desk'); setActiveDropdown(null); }}
                      className="w-full text-left px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition-colors flex items-center justify-between"
                    >
                      <span>Room 03 · Service Desk</span>
                      <span className="text-[10px] text-cyan-500 font-bold">Pandora Lee</span>
                    </button>
                    <button
                      onClick={() => { onNavigate('lounge'); setActiveDropdown(null); }}
                      className="w-full text-left px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition-colors flex items-center justify-between"
                    >
                      <span>Room 06 · Listening Lounge</span>
                      <span className="text-[10px] text-emerald-500 font-bold">Live Radio</span>
                    </button>
                  </div>
                )}
              </div>

              {/* Direct links: DESK & LOUNGE */}
              <button
                onClick={() => onNavigate('service-desk')}
                className={`transition-colors uppercase cursor-pointer py-1 relative ${
                  activeSection === 'service-desk'
                    ? 'text-[#006cff] font-extrabold'
                    : 'text-slate-800 hover:text-[#006cff]'
                }`}
              >
                <span>DESK</span>
              </button>

              <button
                onClick={() => onNavigate('lounge')}
                className={`transition-colors uppercase cursor-pointer py-1 relative ${
                  activeSection === 'lounge'
                    ? 'text-[#006cff] font-extrabold'
                    : 'text-slate-800 hover:text-[#006cff]'
                }`}
              >
                <span>LOUNGE</span>
              </button>
            </nav>

            {/* Rectangular Outlined [ CONTACT ] Button matching PDF */}
            <button
              onClick={onOpenContact}
              className="px-5 py-2 text-[12px] font-bold uppercase tracking-wider text-slate-900 border border-slate-800 hover:border-[#006cff] hover:text-[#006cff] rounded-xs transition-colors cursor-pointer"
            >
              CONTACT
            </button>

            {/* Search Icon matching PDF */}
            <div className="relative">
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                className="p-1.5 text-slate-700 hover:text-[#006cff] transition-colors cursor-pointer"
                aria-label="Search"
              >
                <Search className="w-4 h-4" />
              </button>

              {searchOpen && (
                <form
                  onSubmit={handleSearchSubmit}
                  className="absolute right-0 top-10 w-64 bg-white p-2 rounded-xl shadow-xl border border-slate-200 z-50 flex gap-2"
                >
                  <input
                    type="text"
                    autoFocus
                    placeholder="Search site..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="flex-1 text-xs px-2.5 py-1.5 border border-slate-200 rounded-md focus:outline-none focus:border-blue-600 text-slate-800"
                  />
                  <button
                    type="submit"
                    className="px-3 py-1.5 text-xs font-bold text-white bg-blue-600 rounded-md"
                  >
                    Go
                  </button>
                </form>
              )}
            </div>

          </div>

          {/* Mobile menu toggle */}
          <div className="flex lg:hidden items-center gap-3">
            <button
              onClick={onOpenContact}
              className="px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-wider text-slate-900 border border-slate-800 rounded-xs"
            >
              CONTACT
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 text-slate-800 hover:text-blue-600 rounded-lg"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>

        {/* Mobile dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-slate-200 px-6 pt-4 pb-6 mt-3 shadow-xl">
            <div className="flex flex-col space-y-3">
              <button
                onClick={() => { onNavigate('hero'); setMobileMenuOpen(false); }}
                className="text-left text-xs uppercase font-bold tracking-wider py-1.5 text-slate-800"
              >
                HOME
              </button>
              <button
                onClick={() => { onNavigate('services'); setMobileMenuOpen(false); }}
                className="text-left text-xs uppercase font-bold tracking-wider py-1.5 text-slate-800"
              >
                SERVICES
              </button>
              <button
                onClick={() => { onNavigate('about'); setMobileMenuOpen(false); }}
                className="text-left text-xs uppercase font-bold tracking-wider py-1.5 text-slate-800"
              >
                ABOUT US
              </button>
              <button
                onClick={() => { onNavigate('careers'); setMobileMenuOpen(false); }}
                className="text-left text-xs uppercase font-bold tracking-wider py-1.5 text-slate-800"
              >
                CAREERS
              </button>
              <button
                onClick={() => { onNavigate('service-desk'); setMobileMenuOpen(false); }}
                className="text-left text-xs uppercase font-bold tracking-wider py-1.5 text-blue-600"
              >
                ROOM 03 · SERVICE DESK (PANDORA)
              </button>
              <button
                onClick={() => { onNavigate('lounge'); setMobileMenuOpen(false); }}
                className="text-left text-xs uppercase font-bold tracking-wider py-1.5 text-emerald-600"
              >
                ROOM 06 · LIVE RADIO LOUNGE (104.7 FM)
              </button>

              <div className="pt-3 border-t border-slate-100">
                <button
                  onClick={() => { onOpenContact(); setMobileMenuOpen(false); }}
                  className="w-full py-2.5 text-xs font-bold text-center uppercase tracking-wider text-white bg-blue-600 rounded-md"
                >
                  CONTACT US
                </button>
              </div>
            </div>
          </div>
        )}
      </header>
    </div>
  );
};
