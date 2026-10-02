import React from 'react';
import { Users, Headphones, Radio, Mic } from 'lucide-react';

interface LobbyDoorwaysProps {
  onEnterServiceDesk: () => void;
  onEnterLoungeRoom: () => void;
  onEnterCareersRoom: () => void;
}

export const LobbyDoorways: React.FC<LobbyDoorwaysProps> = ({
  onEnterServiceDesk,
  onEnterLoungeRoom,
  onEnterCareersRoom,
}) => {
  return (
    <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-[#006cff] mb-2 block">
            Dedicated Rooms
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#002b66] tracking-tight">
            Explore Dedicated Rooms
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-2">
            Step beyond the main lobby into the Customer-Service Desk, the upcoming Listening Lounge, or our Careers portal.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Room 1: Customer-Service Desk (Pandora) */}
          <div 
            onClick={onEnterServiceDesk}
            className="bg-[#0b1320] text-white rounded-2xl p-7 border border-slate-800 hover:border-cyan-500 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group cursor-pointer"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-blue-600/30 text-cyan-400 border border-cyan-500/30 flex items-center justify-center">
                  <Headphones className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-cyan-400 bg-cyan-950/60 px-2.5 py-0.5 rounded-full border border-cyan-800">
                  Room 03
                </span>
              </div>

              <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors mb-2">
                The Customer-Service Desk
              </h3>

              <p className="text-xs text-slate-400 leading-relaxed mb-6">
                “A human need. A clear next step.” Direct business services inquiries, reach existing client support, or inquire with digital concierge Pandora Lee.
              </p>
            </div>

            <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs font-bold text-cyan-400">
              <span>Enter Desk Room</span>
              <Mic className="w-4 h-4" />
            </div>
          </div>

          {/* Room 2: Listening Lounge & Radio (Soon to Come) */}
          <div 
            onClick={onEnterLoungeRoom}
            className="bg-[#0f172a] text-white rounded-2xl p-7 border border-slate-800 hover:border-amber-500 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group cursor-pointer"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-amber-600/20 text-amber-400 border border-amber-500/30 flex items-center justify-center">
                  <Radio className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400 bg-amber-950/60 px-2.5 py-0.5 rounded-full border border-amber-800">
                  Room 06 · Live On Air
                </span>
              </div>

              <h3 className="text-lg font-bold text-white group-hover:text-amber-300 transition-colors mb-2">
                The Listening Lounge &amp; Radio
              </h3>

              <p className="text-xs text-slate-400 leading-relaxed mb-6">
                Caribbean ambient soundscapes, Montego Bay chill-out lo-fi, and live campus radio broadcast stream with interactive audio synthesizer.
              </p>
            </div>

            <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs font-bold text-amber-400">
              <span>Tune into Lounge Room</span>
              <Radio className="w-4 h-4" />
            </div>
          </div>

          {/* Room 3: Careers & Walk-In Hub */}
          <div 
            onClick={onEnterCareersRoom}
            className="bg-white rounded-2xl p-7 border border-slate-200 hover:border-blue-400 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group cursor-pointer"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 border border-blue-200 flex items-center justify-center">
                  <Users className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-200">
                  Careers Hub
                </span>
              </div>

              <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-2">
                Join the 360 Family
              </h3>

              <p className="text-xs text-slate-600 leading-relaxed mb-6">
                Walk-in interviews Monday–Friday (9AM–3PM) at our Freeport Montego Bay campus, employee benefits, and online resume application portal.
              </p>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-blue-600">
              <span>Enter Careers Room</span>
              <Users className="w-4 h-4" />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
