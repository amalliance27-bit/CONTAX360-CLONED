import React, { useState } from 'react';
import { CAREER_OPENINGS } from '../data/contaxData';
import { 
  Briefcase, 
  MapPin, 
  Clock, 
  Check, 
  FileUp, 
  Send, 
  Heart, 
  Coffee, 
  ShieldCheck, 
  GraduationCap, 
  Bus,
  X,
  CheckCircle2
} from 'lucide-react';
import { JobOpening } from '../types';

export const CareersSection: React.FC = () => {
  const [selectedJob, setSelectedJob] = useState<JobOpening | null>(null);
  const [applicationModalOpen, setApplicationModalOpen] = useState(false);
  
  // Application Form State
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    location: 'Montego Bay',
    cxcPassed: 'yes',
    experienceYears: '1-2',
    notes: ''
  });
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [appRefId, setAppRefId] = useState('');

  const perks = [
    { icon: <Heart className="w-5 h-5 text-rose-600" />, title: 'Health & Life Insurance', desc: 'Comprehensive major medical, dental, optical, and life coverage for you and your dependents.' },
    { icon: <Coffee className="w-5 h-5 text-amber-600" />, title: 'Daily Lunch Allowance', desc: 'Subsidized on-campus cafeteria meals and daily hot lunch credits for on-site staff.' },
    { icon: <GraduationCap className="w-5 h-5 text-blue-600" />, title: 'Paid Training & Academies', desc: '100% fully compensated classroom training and leadership advancement pathways.' },
    { icon: <Bus className="w-5 h-5 text-emerald-600" />, title: 'Dedicated Shuttle Transit', desc: 'Safe, reliable door-to-hub company transportation for evening and late-night shifts.' },
  ];

  const handleOpenApply = (job?: JobOpening) => {
    if (job) setSelectedJob(job);
    else setSelectedJob(CAREER_OPENINGS[0]);
    setSubmitSuccess(false);
    setApplicationModalOpen(true);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setAppRefId(`CTX-APP-${Math.floor(100000 + Math.random() * 900000)}`);
      setSubmitSuccess(true);
    }, 900);
  };

  return (
    <section id="careers" className="py-20 lg:py-28 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-bold text-blue-700 uppercase tracking-widest mb-3">
            <span>Join the 360 Family</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight">
            Careers at Contax360
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-4 leading-relaxed">
            Build your career with an established, supportive BPO leader. We invest in our people with competitive compensation, subsidized meals, health benefits, and clear leadership pathways.
          </p>
        </div>

        {/* Perks Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {perks.map((p, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80">
              <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 shadow-2xs flex items-center justify-center mb-4">
                {p.icon}
              </div>
              <h3 className="text-sm font-bold text-slate-900 mb-1">{p.title}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>

        {/* Walk-in Notice Banner */}
        <div className="bg-gradient-to-r from-blue-700 to-indigo-800 rounded-2xl p-6 sm:p-8 text-white mb-14 shadow-lg flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-1">
            <span className="text-xs font-bold uppercase tracking-wider text-cyan-300">
              Freeport Montego Bay Walk-In Center
            </span>
            <h3 className="text-xl sm:text-2xl font-extrabold text-white">
              Walk-In Interviews: Monday – Friday, 9:00 AM – 3:00 PM
            </h3>
            <p className="text-xs sm:text-sm text-blue-100 max-w-2xl">
              Visit 1 Mangrove Way, Freeport Montego Bay with your Resume, Valid Government Photo ID, TRN, NIS, and 3 CXC passes for on-the-spot interviews.
            </p>
          </div>

          <button
            onClick={() => handleOpenApply()}
            className="px-6 py-3 text-xs font-bold text-blue-900 bg-white hover:bg-slate-100 rounded-xl transition-colors shrink-0 shadow-md cursor-pointer text-center"
          >
            Apply Online with Resume
          </button>
        </div>

        {/* Current Job Openings */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-slate-900">Current Open Opportunities</h3>
            <span className="text-xs font-medium text-slate-500">4 Active Postings in Jamaica &amp; Virtual</span>
          </div>

          <div className="space-y-4">
            {CAREER_OPENINGS.map((job) => (
              <div
                key={job.id}
                className="bg-white rounded-xl border border-slate-200/90 p-5 sm:p-6 hover:border-blue-300 transition-all flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-xs"
              >
                <div className="space-y-1.5">
                  <div className="flex flex-wrap items-center gap-2 text-xs font-semibold">
                    <span className="text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                      {job.department}
                    </span>
                    <span className="text-slate-500 flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {job.location}
                    </span>
                    <span className="text-slate-500 flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {job.type}
                    </span>
                  </div>

                  <h4 className="text-base font-bold text-slate-900">{job.title}</h4>
                  <p className="text-xs text-slate-600 line-clamp-1">
                    Requirements: {job.requirements.slice(0, 2).join(' · ')}
                  </p>
                </div>

                <div className="flex items-center gap-3 shrink-0">
                  <button
                    onClick={() => handleOpenApply(job)}
                    className="px-4 py-2 text-xs font-bold text-white bg-blue-700 hover:bg-blue-800 rounded-lg transition-colors cursor-pointer"
                  >
                    Apply Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Application Modal */}
      {applicationModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs overflow-y-auto">
          <div className="bg-white rounded-2xl max-w-xl w-full p-6 sm:p-8 shadow-2xl relative border border-slate-200 my-8">
            <button
              onClick={() => setApplicationModalOpen(false)}
              className="absolute top-5 right-5 p-1.5 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            {!submitSuccess ? (
              <>
                <div className="mb-6">
                  <span className="text-xs font-bold text-blue-700 uppercase tracking-wider block mb-1">
                    Job Application Portal
                  </span>
                  <h3 className="text-xl font-bold text-slate-900">
                    Apply: {selectedJob ? selectedJob.title : 'Customer Experience Specialist'}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    Submit your credentials to the Contax360 Talent Acquisition team.
                  </p>
                </div>

                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Full Legal Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Shanice Morgan"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-slate-900"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="shanice@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-slate-900"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Telephone Number (WhatsApp) *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. +1 876-555-0199"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-slate-900"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Preferred Location *
                      </label>
                      <select
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-slate-900 bg-white"
                      >
                        <option value="Montego Bay">Freeport Montego Bay</option>
                        <option value="Kingston">Kingston Commercial Hub</option>
                        <option value="Virtual WFH">Work From Home (Jamaica Virtual)</option>
                        <option value="Florida">Plantation, Florida (US HQ)</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Call Center / BPO Experience
                      </label>
                      <select
                        value={formData.experienceYears}
                        onChange={(e) => setFormData({ ...formData, experienceYears: e.target.value })}
                        className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-slate-900 bg-white"
                      >
                        <option value="none">No experience (First time applicant)</option>
                        <option value="under-1">Less than 1 year</option>
                        <option value="1-2">1 to 2 years</option>
                        <option value="3+">3+ years (Senior / Leadership)</option>
                      </select>
                    </div>
                  </div>

                  {/* Resume Upload File Drop */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Upload Resume / CV (PDF or Word) *
                    </label>
                    <div className="border-2 border-dashed border-slate-300 rounded-xl p-4 text-center hover:border-blue-500 transition-colors">
                      <div className="flex flex-col items-center">
                        <FileUp className="w-6 h-6 text-blue-600 mb-1.5" />
                        <span className="text-xs font-semibold text-slate-800">
                          {resumeFile ? resumeFile.name : 'Click to select or drop resume'}
                        </span>
                        <span className="text-[10px] text-slate-500 mt-0.5">
                          PDF, DOC, DOCX up to 10MB
                        </span>
                        <input
                          type="file"
                          accept=".pdf,.doc,.docx"
                          className="hidden"
                          id="resume-upload"
                          onChange={(e) => {
                            if (e.target.files && e.target.files[0]) {
                              setResumeFile(e.target.files[0]);
                            }
                          }}
                        />
                        <label
                          htmlFor="resume-upload"
                          className="mt-2.5 px-3 py-1 text-xs font-bold text-blue-700 bg-blue-50 rounded-md border border-blue-200 cursor-pointer hover:bg-blue-100"
                        >
                          {resumeFile ? 'Change File' : 'Browse Computer'}
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3 px-4 text-xs font-bold text-white bg-blue-700 hover:bg-blue-800 rounded-xl transition-colors shadow-sm disabled:opacity-50 flex items-center justify-center gap-2 cursor-pointer"
                    >
                      {isSubmitting ? (
                        <span>Transmitting Application...</span>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Submit Application to HR</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </>
            ) : (
              <div className="text-center py-6">
                <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  Application Successfully Received!
                </h3>
                <p className="text-xs text-slate-600 max-w-sm mx-auto mb-4 leading-relaxed">
                  Thank you, <span className="font-bold text-slate-900">{formData.fullName}</span>. Your resume has been delivered to our recruitment team at Contax360.
                </p>
                <div className="inline-block p-3 rounded-xl bg-slate-100 border border-slate-200 text-xs text-slate-800 font-mono mb-6">
                  Reference: <span className="font-bold text-blue-700">{appRefId}</span>
                </div>
                <div>
                  <button
                    onClick={() => setApplicationModalOpen(false)}
                    className="px-6 py-2.5 text-xs font-bold text-white bg-blue-700 hover:bg-blue-800 rounded-lg cursor-pointer"
                  >
                    Done
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
