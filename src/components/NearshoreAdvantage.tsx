import React, { useState } from 'react';
import { 
  Check, 
  MapPin, 
  Building2 
} from 'lucide-react';
import { OFFICE_LOCATIONS } from '../data/contaxData';

interface NearshoreAdvantageProps {
  onOpenQuoteModal: () => void;
}

export const NearshoreAdvantage: React.FC<NearshoreAdvantageProps> = ({ onOpenQuoteModal }) => {
  const [activeLocationIndex, setActiveLocationIndex] = useState(0);

  const comparisonData = [
    {
      metric: 'Time Zone Alignment',
      nearshore: 'Synchronized (EST / CST) - 100% same working hours',
      domestic: 'Synchronized (EST to PST)',
      offshore: '10 to 13 Hours Time Disparity (Night Shift Fatigue)'
    },
    {
      metric: 'English Fluency & Accent',
      nearshore: 'Native English (Official Language), Neutral Tone',
      domestic: 'Native English',
      offshore: 'Secondary Language, Noticeable Cultural Friction'
    },
    {
      metric: 'Travel Proximity from US',
      nearshore: '90-minute flight from Miami (Direct flights daily)',
      domestic: 'Domestic travel (2 - 5 hrs)',
      offshore: '18 - 24 Hours international travel & jet lag'
    },
    {
      metric: 'Cost Savings vs Domestic',
      nearshore: '50% - 70% Reduction in Total Loaded Costs',
      domestic: 'Baseline ($28 - $36/hr fully loaded)',
      offshore: '60% - 75% (Offset by high management overhead)'
    },
    {
      metric: 'Agent Attrition Rate',
      nearshore: 'Low (12% - 18% annual) - High career prestige',
      domestic: 'High (35% - 50% annual)',
      offshore: 'Extremely High (45% - 70% annual turnover)'
    },
    {
      metric: 'Telecom & Fiber Infrastructure',
      nearshore: 'Dual Sub-Sea Fiber Loops (Flow & Digicel)',
      domestic: 'Standard Enterprise Grade',
      offshore: 'Variable reliability & regional weather disruptions'
    },
    {
      metric: 'Compliance & Governance',
      nearshore: 'HIPAA, PCI-DSS Level 1, U.S. Contract Law',
      domestic: 'Standard U.S. Compliance',
      offshore: 'Complex international data privacy enforcement'
    }
  ];

  return (
    <section id="nearshore" className="py-20 lg:py-28 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-bold text-blue-700 uppercase tracking-widest mb-3">
            <span>Geographic Delivery</span>
            <span aria-hidden="true">·</span>
            <span>Nearshore Jamaica &amp; Onshore Florida</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#002b66] tracking-tight">
            The Nearshore Caribbean Advantage
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-4 leading-relaxed">
            Why leading North American enterprises choose Jamaica: native English fluency, zero time zone dissonance, easy 90-minute direct travel, and substantial 50-70% operating cost reductions.
          </p>
        </div>

        {/* Comparison Matrix Table */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden mb-16">
          <div className="p-6 border-b border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-lg font-bold text-slate-900">Head-to-Head Sourcing Comparison</h3>
              <p className="text-xs text-slate-500">Benchmark Jamaica Nearshore against domestic and offshore destinations</p>
            </div>
            <div className="flex items-center gap-2 text-xs font-bold text-blue-700 bg-blue-50 px-3 py-1.5 rounded-lg border border-blue-200 self-start sm:self-auto">
              <span>Contax360 Caribbean Advantage</span>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50/70 text-slate-600 uppercase tracking-wider font-bold">
                  <th className="py-3.5 px-5 w-1/4">Key Dimension</th>
                  <th className="py-3.5 px-5 w-1/3 bg-blue-50/80 text-blue-900 font-extrabold border-x border-blue-200">
                    Nearshore (Jamaica)
                  </th>
                  <th className="py-3.5 px-5 w-1/5 text-slate-700">U.S. Domestic In-House</th>
                  <th className="py-3.5 px-5 w-1/5 text-slate-500">Offshore (Asia/Pacific)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-medium">
                {comparisonData.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                    <td className="py-3.5 px-5 font-bold text-slate-900">
                      {row.metric}
                    </td>
                    <td className="py-3.5 px-5 bg-blue-50/40 text-blue-900 font-bold border-x border-blue-100">
                      <div className="flex items-start gap-1.5">
                        <Check className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                        <span>{row.nearshore}</span>
                      </div>
                    </td>
                    <td className="py-3.5 px-5 text-slate-600">
                      {row.domestic}
                    </td>
                    <td className="py-3.5 px-5 text-slate-500">
                      {row.offshore}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Operating Centers Showcase */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8">
            <div>
              <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight">
                Our Physical Infrastructure &amp; Campuses
              </h3>
              <p className="text-xs text-slate-500 mt-1">Multi-site redundancy across Jamaica and Florida</p>
            </div>
            
            {/* Location selector pills */}
            <div className="flex items-center gap-1.5 mt-4 sm:mt-0 p-1 bg-slate-200/60 rounded-lg">
              {OFFICE_LOCATIONS.map((loc, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveLocationIndex(idx)}
                  className={`px-3 py-1.5 text-xs font-bold rounded-md transition-all cursor-pointer ${
                    activeLocationIndex === idx
                      ? 'bg-white text-blue-700 shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {loc.name.split(' ')[0]}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {OFFICE_LOCATIONS.map((loc, idx) => {
              const isSelected = activeLocationIndex === idx;
              return (
                <div
                  key={idx}
                  onClick={() => setActiveLocationIndex(idx)}
                  className={`p-6 rounded-2xl border transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-white border-blue-500 shadow-lg shadow-blue-500/10 ring-1 ring-blue-500'
                      : 'bg-white/80 border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center gap-2 text-xs font-bold text-blue-700 mb-2">
                    <MapPin className="w-4 h-4" />
                    <span>{loc.timezone}</span>
                  </div>

                  <h4 className="text-base font-bold text-slate-900 mb-2">
                    {loc.name}
                  </h4>

                  <p className="text-xs text-slate-600 mb-4 leading-relaxed">
                    {loc.address}
                  </p>

                  <div className="space-y-2 pt-3 border-t border-slate-100 text-xs text-slate-600">
                    {loc.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-5 pt-3 border-t border-slate-100 text-xs font-semibold text-slate-700">
                    Phone: {loc.phone}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
