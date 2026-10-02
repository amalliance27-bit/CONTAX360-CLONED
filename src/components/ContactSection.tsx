import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';

interface ContactSectionProps {
  prefilledNotes?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ prefilledNotes }) => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: prefilledNotes || ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  React.useEffect(() => {
    if (prefilledNotes) {
      setFormState(prev => ({ ...prev, message: prefilledNotes }));
    }
  }, [prefilledNotes]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 750);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#002b66] tracking-tight mb-4">
            Contact Contax360
          </h2>
          <div className="w-16 h-1 bg-[#006cff] mx-auto rounded-full mb-4" />
          <p className="text-sm sm:text-base text-slate-600">
            Reach out to our executive leadership and client solutions team to start a conversation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left: Office Locations (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2.5 rounded-xl bg-blue-100 text-blue-700">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-slate-900">Contax 360 HQ (Jamaica)</h4>
                  <span className="text-xs text-slate-500">Nearshore Delivery Flagship</span>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed pl-12">
                1 Mangrove Way, Freeport<br />
                Montego Bay, St. James, Jamaica, W.I.<br />
                Direct: <a href="tel:18766183600" className="text-blue-600 hover:underline font-semibold">+1 876-618-3600</a>
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2.5 rounded-xl bg-indigo-100 text-indigo-700">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-slate-900">U.S. Corporate Headquarters</h4>
                  <span className="text-xs text-slate-500">Executive Account Management</span>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed pl-12">
                Plantation Corporate Center<br />
                Plantation, Florida 33324, USA<br />
                Toll-Free: <a href="tel:18774474627" className="text-blue-600 hover:underline font-semibold">+1 877-447-4627</a>
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2.5 rounded-xl bg-cyan-100 text-cyan-700">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-slate-900">Direct Inquiries</h4>
                  <span className="text-xs text-slate-500">Business &amp; Career Portals</span>
                </div>
              </div>
              <div className="text-xs text-slate-600 space-y-1 pl-12">
                <div>Client Inquiries: <a href="mailto:info@contax360.com" className="text-blue-600 hover:underline font-semibold">info@contax360.com</a></div>
                <div>Careers / Job Applicants: <a href="mailto:jobs@contax360.com" className="text-blue-600 hover:underline font-semibold">jobs@contax360.com</a></div>
              </div>
            </div>

          </div>

          {/* Right: Contact Form (7 cols) */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-2xl border border-slate-200 shadow-sm">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. John Smith"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="w-full text-xs px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#006cff] focus:border-transparent text-slate-900 bg-white"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="john@example.com"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full text-xs px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#006cff] focus:border-transparent text-slate-900 bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Subject
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. BPO Inquiry / RFP"
                      value={formState.subject}
                      onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                      className="w-full text-xs px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#006cff] focus:border-transparent text-slate-900 bg-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Your Message
                  </label>
                  <textarea
                    rows={5}
                    required
                    placeholder="How can Contax360 help your business?"
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full text-xs px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#006cff] focus:border-transparent text-slate-900 bg-white"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-8 py-3.5 text-xs font-bold uppercase tracking-wider text-white bg-[#006cff] hover:bg-blue-700 rounded-full transition-all shadow-md cursor-pointer disabled:opacity-50 flex items-center gap-2"
                  >
                    {isSubmitting ? (
                      <span>Sending...</span>
                    ) : (
                      <>
                        <span>Submit</span>
                        <Send className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            ) : (
              <div className="py-12 text-center">
                <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  Thank You for Contacting Us
                </h3>
                <p className="text-xs text-slate-600 max-w-sm mx-auto mb-6">
                  Your message has been delivered to Contax360. A member of our executive team will follow up shortly.
                </p>
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormState({ name: '', email: '', subject: '', message: '' });
                  }}
                  className="px-6 py-2 text-xs font-bold uppercase tracking-wider text-white bg-[#006cff] rounded-full"
                >
                  Send Another Message
                </button>
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
