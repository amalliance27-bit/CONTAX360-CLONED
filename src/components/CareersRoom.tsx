import React, { useState } from 'react';
import { 
  MapPin, 
  Clock, 
  FileUp, 
  Send, 
  Heart, 
  Coffee, 
  GraduationCap, 
  Bus,
  X,
  CheckCircle2,
  Building2,
  Calendar,
  ArrowLeft
} from 'lucide-react';
import { CAREER_OPENINGS } from '../data/contaxData';
import { JobOpening } from '../types';

interface CareersRoomProps {
  onBackToLobby: () => void;
}

export const CareersRoom: React.FC<CareersRoomProps> = ({ onBackToLobby }) => {
  const [selectedJob, setSelectedJob] = useState<JobOpening | null>(null);
  const [applicationModalOpen, setApplicationModalOpen] = useState(false);
  
  // Application Form State
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    location: 'Montego Bay',
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
    }, 800);
  };

  return (
    <div className="pt-32 pb-24 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navigation Breadcrumb back to Main Lobby */}
        <div className="mb-8">
          <button
            onClick={onBackToLobby}
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-600 hover:text-blue-800 transition-colors py-2 px-3.5 rounded-lg bg-blue-50 hover:bg-blue-100 cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to Main Lobby</span>
          </button>
        </div>

        {/* Room Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-bold text-blue-700 uppercase tracking-widest mb-3">
            <span>Contax360 Recruitment Room</span>
            <span>·</span>
            <span>Join the 360 Family</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#002b66] tracking-tight mb-4">
            Careers at Contax360
          </h1>
          <div className="w-16 h-1 bg-[#006cff] rounded-full mb-6" />
          <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
            Contax360 BPO Solutions is one of the largest owner-managed business process outsourcing companies in Jamaica. We pride ourselves on being innovators, partnering with our clients to create exceptional solutions.
          </p>
          <p className="text-sm text-slate-600 mt-2 leading-relaxed">
            Our staff enjoy a dynamic work environment filled with daily motivation and innovation. Come… join our team!
          </p>
        </div>

        {/* Freeport Montego Bay Walk-In Center Banner */}
        <div className="bg-gradient-to-r from-[#002b66] to-[#0047ba] rounded-2xl p-6 sm:p-8 text-white mb-14 shadow-lg flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-1.5">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-cyan-300">
              <Calendar className="w-4 h-4" />
              <span>Walk-In Recruitment Center</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-white">
              Walk-In Interviews: Monday – Friday, 9:00 AM – 3:00 PM
            </h2>
            <p className="text-xs sm:text-sm text-blue-100 max-w-2xl">
              Visit 1 Mangrove Way, Freeport Montego Bay with your Resume, Valid Government Photo ID, TRN, NIS, and 3 CXC passes for on-the-spot interviews.
            </p>
          </div>

          <button
            onClick={() => handleOpenApply()}
            className="px-6 py-3 text-xs font-bold uppercase tracking-wider text-[#002b66] bg-white hover:bg-slate-100 rounded-full transition-all shrink-0 shadow-md cursor-pointer text-center"
          >
            Apply Online with Resume
          </button>
        </div>

        {/* Benefits & Employee Perks */}
        <div className="mb-16">
          <h3 className="text-xl font-bold text-slate-900 mb-6">Why You'll Love Working at Contax360</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {perks.map((p, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80">
                <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 shadow-2xs flex items-center justify-center mb-4">
                  {p.icon}
                </div>
                <h4 className="text-sm font-bold text-slate-900 mb-1">{p.title}</h4>
                <p className="text-xs text-slate-600 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Current Job Openings */}
        <div>
          <div className="flex items-center justify-between mb-6 pb-3 border-b border-slate-200">
            <div>
              <h3 className="text-2xl font-bold text-slate-900">Current Job Openings</h3>
              <p className="text-xs text-slate-500 mt-0.5">Explore active roles across our Jamaica campuses and virtual operations</p>
            </div>
            <span className="text-xs font-semibold text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
              {CAREER_OPENINGS.length} Positions Available
            </span>
          </div>

          <div className="space-y-4">
            {CAREER_OPENINGS.map((job) => (
              <div
                key={job.id}
                className="bg-white rounded-xl border border-slate-200 p-6 hover:border-blue-300 transition-all flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-xs"
              >
                <div className="space-y-2">
                  <div className="flex flex-wrap items-center gap-2 text-xs font-semibold">
                    <span className="text-blue-700 bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-200">
                      {job.department}
                    </span>
                    <span className="text-slate-500 flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" />
                      {job.location}
                    </span>
                    <span className="text-slate-500 flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {job.type}
                    </span>
                  </div>

                  <h4 className="text-base sm:text-lg font-bold text-slate-900">{job.title}</h4>
                  <p className="text-xs text-slate-600 line-clamp-1">
                    Requirements: {job.requirements.slice(0, 2).join(' · ')}
                  </p>
                </div>

                <div className="shrink-0">
                  <button
                    onClick={() => handleOpenApply(job)}
                    className="px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-[#006cff] hover:bg-blue-700 rounded-full transition-colors cursor-pointer"
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
                      className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#006cff] focus:border-transparent text-slate-900"
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
                        className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#006cff] focus:border-transparent text-slate-900"
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
                        className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#006cff] focus:border-transparent text-slate-900"
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
                        className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#006cff] focus:border-transparent text-slate-900 bg-white"
                      >
                        <option value="Montego Bay">Freeport Montego Bay Campus</option>
                        <option value="Kingston">Kingston Commercial Hub</option>
                        <option value="Virtual WFH">Work From Home (Jamaica Virtual)</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        BPO / Call Center Experience
                      </label>
                      <select
                        value={formData.experienceYears}
                        onChange={(e) => setFormData({ ...formData, experienceYears: e.target.value })}
                        className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#006cff] focus:border-transparent text-slate-900 bg-white"
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
                          {resumeFile ? resumeFile.name : 'Click to select or drop resume file'}
                        </span>
                        <span className="text-[10px] text-slate-500 mt-0.5">
                          PDF, DOC, DOCX up to 10MB
                        </span>
                        <input
                          type="file"
                          accept=".pdf,.doc,.docx"
                          className="hidden"
                          id="careers-resume-upload"
                          onChange={(e) => {
                            if (e.target.files && e.target.files[0]) {
                              setResumeFile(e.target.files[0]);
                            }
                          }}
                        />
                        <label
                          htmlFor="careers-resume-upload"
                          className="mt-2.5 px-3.5 py-1 text-xs font-bold text-blue-700 bg-blue-50 rounded-full border border-blue-200 cursor-pointer hover:bg-blue-100"
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
                      className="w-full py-3 px-4 text-xs font-bold uppercase tracking-wider text-white bg-[#006cff] hover:bg-blue-700 rounded-full transition-colors shadow-sm disabled:opacity-50 flex items-center justify-center gap-2 cursor-pointer"
                    >
                      {isSubmitting ? (
                        <span>Submitting Application...</span>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Submit to Recruitment Team</span>
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
                  Thank you, <span className="font-bold text-slate-900">{formData.fullName}</span>. Your resume has been submitted to the Contax360 HR department.
                </p>
                <div className="inline-block p-3 rounded-xl bg-slate-100 border border-slate-200 text-xs text-slate-800 font-mono mb-6">
                  Reference ID: <span className="font-bold text-blue-700">{appRefId}</span>
                </div>
                <div>
                  <button
                    onClick={() => setApplicationModalOpen(false)}
                    className="px-6 py-2 text-xs font-bold uppercase tracking-wider text-white bg-[#006cff] hover:bg-blue-700 rounded-full cursor-pointer"
                  >
                    Done
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
