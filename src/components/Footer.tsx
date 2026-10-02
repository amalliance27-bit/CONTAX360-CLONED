import React from 'react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onOpenQuoteModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onOpenQuoteModal,
}) => {
  return (
    <footer className="bg-[#111111] text-slate-300 text-xs py-16 sm:py-20 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Column 1: Company blurb */}
          <div className="space-y-4">
            <p className="text-[13px] text-slate-400 leading-relaxed">
              Contax360 BPO Solutions is a privately owned and managed business process outsourcing company operating in the US and Jamaica with a focus on bringing the best solution through our onshore and nearshore facilities for clients.
            </p>
          </div>

          {/* Column 2: Menu */}
          <div className="space-y-3">
            <h5 className="text-sm font-bold uppercase tracking-wider text-white">
              Menu
            </h5>
            <ul className="space-y-2 text-[13px]">
              <li>
                <button 
                  onClick={() => {
                    onNavigate('hero');
                    window.scrollTo(0, 0);
                  }} 
                  className="text-slate-400 hover:text-white transition-colors cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('services')} 
                  className="text-slate-400 hover:text-white transition-colors cursor-pointer"
                >
                  Services
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('team')} 
                  className="text-slate-400 hover:text-white transition-colors cursor-pointer"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('service-desk')} 
                  className="text-cyan-400 font-bold hover:underline transition-colors cursor-pointer"
                >
                  Service Desk (Room 03)
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('careers')} 
                  className="text-slate-400 hover:text-white transition-colors cursor-pointer"
                >
                  Careers
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('contact')} 
                  className="text-slate-400 hover:text-white transition-colors cursor-pointer"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Contax 360 HQ */}
          <div className="space-y-3">
            <h5 className="text-sm font-bold uppercase tracking-wider text-white">
              Contax 360 HQ
            </h5>
            <p className="text-[13px] text-slate-400 leading-relaxed">
              1 Mangrove Way, Freeport<br />
              Montego Bay, Jamaica, W.I.
            </p>
            <div className="pt-2 text-[12px] text-slate-400">
              <span className="font-bold text-white block">U.S. Headquarters:</span>
              Plantation Corporate Center<br />
              Plantation, Florida 33324, USA
            </div>
          </div>

          {/* Column 4: Start a conversation */}
          <div className="space-y-3">
            <h5 className="text-sm font-bold uppercase tracking-wider text-white">
              Start a conversation
            </h5>
            <p className="text-[13px]">
              <a 
                href="mailto:info@contax360.com" 
                className="text-[#006cff] hover:underline font-medium block mb-1"
              >
                info@contax360.com
              </a>
              <a 
                href="tel:18774474627" 
                className="text-white hover:text-blue-400 font-bold text-sm block"
              >
                +1 877-447-4627
              </a>
            </p>

            <div className="pt-3">
              <button
                onClick={onOpenQuoteModal}
                className="px-5 py-2 text-xs font-bold uppercase tracking-wider text-white bg-[#006cff] hover:bg-blue-600 rounded-full transition-colors cursor-pointer shadow-sm"
              >
                CONTACT US
              </button>
            </div>
          </div>

        </div>

        {/* Bottom line */}
        <div className="mt-14 pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
          <div>
            &copy; {new Date().getFullYear()} Contax360 BPO Solutions. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <button onClick={() => onNavigate('services')} className="hover:text-white">Services</button>
            <button onClick={() => onNavigate('team')} className="hover:text-white">Leadership</button>
            <button onClick={() => onNavigate('service-desk')} className="hover:text-white">Service Desk</button>
            <button onClick={() => onNavigate('careers')} className="hover:text-white">Careers</button>
            <button onClick={() => onNavigate('contact')} className="hover:text-white">Contact</button>
          </div>
        </div>

      </div>
    </footer>
  );
};
