import React, { useState } from 'react';
import { CASE_STUDIES } from '../data/contaxData';
import { Quote, TrendingDown, Clock, ShieldCheck, CheckCircle } from 'lucide-react';

export const CaseStudiesSection: React.FC = () => {
  const [activeCaseIndex, setActiveCaseIndex] = useState(0);

  const activeCase = CASE_STUDIES[activeCaseIndex];

  return (
    <section id="case-studies" className="py-20 lg:py-28 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-bold text-blue-700 uppercase tracking-widest mb-3">
            <span>Verified Business Outcomes</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight">
            Client Case Studies &amp; Proven Impact
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-4 leading-relaxed">
            Real operational transformations. Discover how leading North American brands scale headcount, reduce customer wait times, and cut operating costs by more than half.
          </p>
        </div>

        {/* Case Study Tabs */}
        <div className="flex flex-wrap gap-2 mb-8 p-1.5 bg-slate-100/80 rounded-xl border border-slate-200 max-w-2xl">
          {CASE_STUDIES.map((cs, idx) => (
            <button
              key={idx}
              onClick={() => setActiveCaseIndex(idx)}
              className={`px-4 py-2 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                activeCaseIndex === idx
                  ? 'bg-white text-blue-700 shadow-sm border border-slate-200/80'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {cs.industry.split(' ')[0]} Case Study
            </button>
          ))}
        </div>

        {/* Featured Case Study Card */}
        <div className="bg-slate-50 rounded-2xl border border-slate-200 p-8 sm:p-12 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left: Narrative & Solution */}
            <div className="lg:col-span-7">
              <div className="text-xs font-bold text-blue-700 uppercase tracking-wider mb-2">
                {activeCase.industry}
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-4">
                {activeCase.clientType}
              </h3>

              <div className="space-y-4 text-sm text-slate-700 mb-6 leading-relaxed">
                <div>
                  <span className="font-bold text-slate-900 block mb-1">Operational Challenge:</span>
                  <p>{activeCase.challenge}</p>
                </div>
                <div>
                  <span className="font-bold text-slate-900 block mb-1">Contax360 Solution:</span>
                  <p>{activeCase.solution}</p>
                </div>
              </div>

              {/* Client Quote */}
              <div className="p-4 rounded-xl bg-white border border-slate-200/80 relative">
                <p className="text-xs sm:text-sm text-slate-800 italic leading-relaxed font-serif">
                  "{activeCase.quote}"
                </p>
                <div className="mt-2 text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                  — {activeCase.author}
                </div>
              </div>
            </div>

            {/* Right: Quantified Hard Results */}
            <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-xl border border-slate-200 shadow-sm space-y-6">
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider pb-3 border-b border-slate-100">
                Validated Performance Deliverables
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                {activeCase.results.map((res, i) => (
                  <div key={i} className="p-3.5 bg-slate-50 rounded-xl border border-slate-100">
                    <div className="text-2xl sm:text-3xl font-black text-blue-700 font-mono">
                      {res.value}
                    </div>
                    <div className="text-[11px] font-semibold text-slate-600 mt-1">
                      {res.label}
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-4 rounded-lg bg-emerald-50/70 border border-emerald-200 text-xs text-emerald-800">
                <div className="font-bold mb-0.5">SLA Guaranteed Delivery</div>
                <p className="text-[11px] text-emerald-700">
                  Fully calibrated team deployment with dedicated quality monitoring and weekly client governance reviews.
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
