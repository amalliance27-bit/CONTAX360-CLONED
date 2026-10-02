import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, ArrowLeft, Mic, Building, Clock } from 'lucide-react';

interface ContactRoomProps {
  onBackToLobby: () => void;
  onNavigateToDesk: () => void;
  prefilledNotes?: string;
}

export const ContactRoom: React.FC<ContactRoomProps> = ({ 
  onBackToLobby, 
  onNavigateToDesk, 
  prefilledNotes 
}) => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: prefilledNotes || ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 700);
  };

  return (
    <div className="bg-slate-50 min-h-screen text-slate-900 font-sans pt-28 sm:pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navigation Breadcrumbs */}
        <div className="mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <button
            onClick={onBackToLobby}
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-700 hover:text-slate-900 transition-colors py-2.5 px-4 rounded-xl bg-white border border-slate-200 cursor-pointer shadow-xs w-fit"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to Main Lobby</span>
          </button>

          <button
            onClick={onNavigateToDesk}
            className="text-xs font-bold text-blue-600 hover:text-blue-700 transition-colors flex items-center gap-2 w-fit bg-white py-2 px-3.5 rounded-xl border border-slate-200 shadow-xs"
          >
            <Mic className="w-3.5 h-3.5" />
            <span>Visit Room 03 Service Desk (Pandora Lee)</span>
          </button>
        </div>

        {/* Room Header Banner */}
        <div className="mb-12">
          <div className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-widest text-[#006cff] mb-2">
            <Building className="w-4 h-4 text-[#006cff]" />
            <span>ROOM 04 · CONTACT &amp; CLIENT SOLUTIONS</span>
            <span className="text-slate-300">|</span>
            <span className="text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded border border-emerald-200 text-[10px] font-bold">
              OPEN DIRECT DISPATCH
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#002b66] tracking-tight leading-tight">
            Contact Contax360
          </h1>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mt-2">
            Reach out to our executive leadership, nearshore delivery leadership, and client solutions team to start a conversation.
          </p>
        </div>

        {/* Contact Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Office Locations & Global Numbers (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Jamaica Campus */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2.5 rounded-xl bg-blue-50 text-[#006cff] border border-blue-100">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-slate-900">Contax 360 HQ (Jamaica)</h4>
                  <span className="text-xs text-slate-500 font-medium">Nearshore Delivery Flagship</span>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed pl-11">
                1 Mangrove Way, Freeport<br />
                Montego Bay, St. James, Jamaica, W.I.<br />
                Direct: <a href="tel:18766183600" className="text-blue-600 hover:underline font-bold">+1 876-618-3600</a>
              </p>
            </div>

            {/* US Corporate Headquarters */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2.5 rounded-xl bg-indigo-50 text-indigo-600 border border-indigo-100">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-slate-900">U.S. Corporate Headquarters</h4>
                  <span className="text-xs text-slate-500 font-medium">Executive Account Management</span>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed pl-11">
                Plantation Corporate Center<br />
                Plantation, Florida 33324, USA<br />
                Toll-Free: <a href="tel:18774474627" className="text-blue-600 hover:underline font-bold">+1 877-447-4627</a>
              </p>
            </div>

            {/* Direct Channels */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2.5 rounded-xl bg-cyan-50 text-cyan-600 border border-cyan-100">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-slate-900">Direct Inquiries</h4>
                  <span className="text-xs text-slate-500 font-medium">Business &amp; Career Portals</span>
                </div>
              </div>
              <div className="text-xs text-slate-600 space-y-1.5 pl-11">
                <div>Client Inquiries: <a href="mailto:info@contax360.com" className="text-blue-600 hover:underline font-semibold">info@contax360.com</a></div>
                <div>Careers / Job Applicants: <a href="mailto:jobs@contax360.com" className="text-blue-600 hover:underline font-semibold">jobs@contax360.com</a></div>
              </div>
            </div>

            {/* Operating Hours */}
            <div className="bg-blue-50/80 p-5 rounded-2xl border border-blue-200 text-xs text-slate-700 flex items-start gap-3">
              <Clock className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-slate-900 block mb-0.5">24/7/365 Global Operations</span>
                <span>Our Montego Bay delivery hub operates continuous round-the-clock coverage for international clients.</span>
              </div>
            </div>

          </div>

          {/* Right: Interactive Contact & Solutions Form (7 cols) */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-xl">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Sarah Jenkins"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="w-full text-xs px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#006cff] focus:border-transparent text-slate-900 bg-white"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Business Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="sarah@company.com"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full text-xs px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#006cff] focus:border-transparent text-slate-900 bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      value={formState.phone}
                      onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                      className="w-full text-xs px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#006cff] focus:border-transparent text-slate-900 bg-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Inquiry Subject *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Nearshore Customer Care / RFP Consultation"
                    value={formState.subject}
                    onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                    className="w-full text-xs px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#006cff] focus:border-transparent text-slate-900 bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Your Message / Project Details *
                  </label>
                  <textarea
                    rows={5}
                    required
                    placeholder="Please tell us about your service requirements, team size, or questions..."
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full text-xs p-4 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#006cff] focus:border-transparent text-slate-900 bg-white"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-6 rounded-xl font-extrabold text-xs uppercase tracking-wider text-white bg-[#006cff] hover:bg-[#0055cc] shadow-lg shadow-blue-500/25 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  <Send className="w-4 h-4" />
                  <span>{isSubmitting ? 'DISPATCHING INQUIRY...' : 'DISPATCH MESSAGE'}</span>
                </button>
              </form>
            ) : (
              <div className="py-12 text-center">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-extrabold text-slate-900 mb-2">
                  Inquiry Dispatched Successfully
                </h3>
                <p className="text-xs text-slate-600 max-w-md mx-auto mb-6">
                  Thank you for reaching out to Contax360 BPO Solutions. A client solutions director will review your inquiry and contact you within 24 hours.
                </p>
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormState({ name: '', email: '', phone: '', subject: '', message: '' });
                  }}
                  className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer"
                >
                  SEND ANOTHER MESSAGE
                </button>
              </div>
            )}
          </div>

        </div>

      </div>
    </div>
  );
};
