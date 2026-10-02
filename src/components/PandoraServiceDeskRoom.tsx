import React, { useState, useEffect } from 'react';
import { 
  Volume2, 
  Pause, 
  Play, 
  RotateCcw, 
  ArrowLeft, 
  ChevronRight, 
  ChevronDown,
  MessageSquare,
  CheckCircle2,
  X,
  ExternalLink,
  Mic,
  Headphones
} from 'lucide-react';

interface PandoraServiceDeskRoomProps {
  onBackToLobby: () => void;
  onNavigateToRoom?: (roomId: string) => void;
  onOpenQuoteModal: (notes?: string) => void;
}

export const PandoraServiceDeskRoom: React.FC<PandoraServiceDeskRoomProps> = ({
  onBackToLobby,
  onNavigateToRoom,
  onOpenQuoteModal,
}) => {
  // Audio guide state
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [currentAudioText, setCurrentAudioText] = useState('Welcome to the Customer-Service Desk. I am Pandora Lee, your digital concierge.');
  const [activeReason, setActiveReason] = useState<string | null>(null);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [talkModalOpen, setTalkModalOpen] = useState(false);
  const [dialogInput, setDialogInput] = useState('');
  const [chatLog, setChatLog] = useState<{ sender: 'pandora' | 'user'; text: string }[]>([
    {
      sender: 'pandora',
      text: 'Hello, I am Pandora Lee. How can I direct your inquiry today? Feel free to select a topic or ask me directly.'
    }
  ]);

  // Pandora portrait (exact high-res 1254x1254 portrait)
  const pandoraPhoto = "/pandora.webp";
  const pandoraThumb = "/pandora.webp";

  // Web speech synthesis helper
  const speakText = (text: string) => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 0.95;
      utterance.pitch = 1.05;
      utterance.onend = () => setIsPlayingAudio(false);
      utterance.onerror = () => setIsPlayingAudio(false);
      window.speechSynthesis.speak(utterance);
      setIsPlayingAudio(true);
      setCurrentAudioText(text);
    }
  };

  // Auto-play voice introduction when entering Room 03 (as requested: auto played, no defacing buttons)
  useEffect(() => {
    const timer = setTimeout(() => {
      speakText(
        "Welcome to the Customer-Service Desk. A human need, a clear next step. I am Pandora Lee, your digital concierge. Let's get you to the right place."
      );
    }, 400);

    return () => {
      clearTimeout(timer);
      if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  const handleListenToRoom = () => {
    if (isPlayingAudio) {
      if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
      setIsPlayingAudio(false);
    } else {
      speakText(
        "Welcome to Room 03, The Customer-Service Desk. A human need, a clear next step. I am Pandora Lee, your digital concierge. I can guide you to business solutions, client support, or our career desk."
      );
    }
  };

  const handleRoomGreetings = () => {
    speakText("Greetings from Contax360. Our team in Montego Bay and Florida is ready to serve you. How may I direct you today?");
  };

  const handleStartWebTour = () => {
    speakText("Starting the narrated web tour. We will guide you through our main lobby, business capabilities, and operating facilities.");
    onBackToLobby();
  };

  const handleTalkWithPandora = () => {
    setTalkModalOpen(true);
  };

  const handleSendChat = (e: React.FormEvent) => {
    e.preventDefault();
    if (!dialogInput.trim()) return;

    const userMsg = dialogInput.trim();
    setChatLog(prev => [...prev, { sender: 'user', text: userMsg }]);
    setDialogInput('');

    setTimeout(() => {
      let reply = "Thank you for reaching out. A client director at Contax360 will review your request.";
      const lower = userMsg.toLowerCase();
      if (lower.includes('price') || lower.includes('quote') || lower.includes('cost') || lower.includes('rate')) {
        reply = "Our blended nearshore rates in Jamaica start at $13.50/hr, saving 50% to 70% compared to domestic US call centers. Would you like a formal SOW quote?";
      } else if (lower.includes('job') || lower.includes('career') || lower.includes('apply')) {
        reply = "We hold walk-in interviews Monday through Friday from 9 AM to 3 PM at our Freeport Montego Bay campus. You can also submit your CV online in our Careers room.";
      } else if (lower.includes('support') || lower.includes('existing') || lower.includes('client')) {
        reply = "Existing clients can connect directly with our 24/7 Operations Desk at +1 876-618-3600 or email support@contax360.com.";
      }
      setChatLog(prev => [...prev, { sender: 'pandora', text: reply }]);
      speakText(reply);
    }, 600);
  };

  const faqs = [
    {
      q: 'Which communication channels are supported?',
      a: 'We provide full omni-channel customer care across inbound & outbound voice, live web chat, SMS/WhatsApp messaging, email ticketing, and secure social media response.'
    },
    {
      q: 'How do I reach a real person?',
      a: 'You can immediately speak with a client director toll-free at +1 877-447-4627 (USA/Canada) or directly at our Jamaica headquarters at +1 876-618-3600.'
    },
    {
      q: 'Can Pandora create a support ticket?',
      a: 'Yes. Pandora connects directly with our client intake desk to route formal inquiries, SOW specs, and customer support tickets.'
    },
    {
      q: 'Where can I get a quote?',
      a: 'You can request an instant quote via the "Let\'s connect" button above, or speak directly with our client solutions team at info@contax360.com or +1 877-447-4627.'
    }
  ];

  return (
    <div className="bg-[#fbfbfd] text-slate-900 min-h-screen font-sans">
      
      {/* 1. Dark Top Bar (Matching PDF) */}
      <div className="bg-[#0b1320] text-slate-300 text-[11px] font-medium py-2 px-4 sm:px-8 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3 tracking-wide">
            <span className="font-bold text-white uppercase text-[10px] tracking-wider">A NEW WAY TO CONNECT</span>
            <span className="text-slate-500">·</span>
            <span className="text-slate-300">Contax360 × Pandora Lee</span>
          </div>
          <div className="text-[10px] text-slate-400 font-mono tracking-wider">
            Private client concept · AMA
          </div>
        </div>
      </div>

      {/* 2. Main Navigation Bar (Matching PDF) */}
      <nav className="bg-white border-b border-slate-200 py-3.5 px-4 sm:px-8 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          {/* Logo */}
          <button 
            onClick={onBackToLobby}
            className="flex items-center gap-2 cursor-pointer focus:outline-none"
          >
            <img
              src="https://contax360.com/wp-content/uploads/2021/08/Logo-CONTAX-360-3-uai-258x95.png"
              alt="Contax360"
              className="h-8 sm:h-9 w-auto object-contain"
            />
          </button>

          {/* Links */}
          <div className="hidden md:flex items-center space-x-6 text-xs font-semibold text-slate-600">
            <button onClick={onBackToLobby} className="hover:text-blue-600 transition-colors">Lobby</button>
            <button onClick={onBackToLobby} className="hover:text-blue-600 transition-colors">Company</button>
            <button onClick={onBackToLobby} className="hover:text-blue-600 transition-colors">Solutions</button>
            <button onClick={() => onNavigateToRoom && onNavigateToRoom('careers')} className="hover:text-blue-600 transition-colors">Careers</button>
            <span className="text-blue-700 font-bold border-b-2 border-blue-600 pb-0.5">Service desk</span>
            <button onClick={() => {}} className="hover:text-blue-600 transition-colors">FAQ</button>
            <button onClick={() => {}} className="hover:text-blue-600 transition-colors">Lounge</button>
          </div>

          {/* CTA: Let's connect */}
          <button
            onClick={() => onOpenQuoteModal("Inquiry via Room 03 / Customer-Service Desk with Pandora Lee")}
            className="px-5 py-2 text-xs font-bold text-white bg-[#0b1320] hover:bg-blue-600 rounded-full transition-colors flex items-center gap-1.5 cursor-pointer shadow-xs"
          >
            <span>Let's connect</span>
            <span className="text-xs font-bold">↗</span>
          </button>
        </div>
      </nav>

      {/* 4. Room Content Stage */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-10 sm:py-14">
        
        {/* Breadcrumb */}
        <div className="mb-6">
          <button
            onClick={onBackToLobby}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-slate-900 transition-colors cursor-pointer"
          >
            <span>← Return to lobby</span>
          </button>
        </div>

        {/* Room Header (Matching PDF typography) */}
        <div className="mb-12">
          <div className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">
            03 / THE CUSTOMER-SERVICE DESK
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#002b66] tracking-tight leading-[1.08] mb-4">
            A human need.<br />
            A clear next step.
          </h1>
          <p className="text-sm sm:text-base text-slate-600 max-w-xl leading-relaxed">
            Find the right direction for your inquiry.<br />
            Pandora can guide you; the company team handles your request.
          </p>
        </div>

        {/* 5. Two Cards Row (Matching PDF) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-20">
          
          {/* Left Card: Pandora Digital Concierge (5 cols) */}
          <div className="lg:col-span-5 bg-gradient-to-b from-[#0b172a] to-[#040914] rounded-3xl overflow-hidden shadow-xl text-white flex flex-col justify-between border border-slate-800 relative group">
            
            {/* Portrait Image */}
            <div className="relative aspect-[4/3] sm:aspect-square w-full overflow-hidden bg-slate-900">
              <img
                src={pandoraPhoto}
                alt="Pandora Lee - Digital Concierge"
                className="w-full h-full object-cover object-top filter brightness-95 contrast-105 group-hover:scale-102 transition-transform duration-500"
                onError={(e) => {
                  e.currentTarget.src = "https://contax360.com/wp-content/uploads/2021/06/main-hero-background-image-scaled.jpg";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#040914] via-[#040914]/40 to-transparent" />
            </div>

            {/* Content Overlay */}
            <div className="p-7 sm:p-8 space-y-4 relative z-10 -mt-12">
              <div className="text-[10px] font-extrabold uppercase tracking-widest text-cyan-400">
                YOUR DIGITAL CONCIERGE
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-snug">
                “Let's get you<br />to the right place.”
              </h2>

              <button
                onClick={handleTalkWithPandora}
                className="w-full py-3 px-5 text-xs font-bold uppercase tracking-wider text-slate-950 bg-white hover:bg-slate-100 rounded-xl transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
              >
                <Mic className="w-4 h-4 text-[#006cff]" />
                <span>Talk with Pandora</span>
              </button>

              <div className="text-[11px] text-slate-400 text-center font-mono">
                Fictional avatar · guided-response demo
              </div>
            </div>

          </div>

          {/* Right Card: What brings you here? (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/90 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-100">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  What brings you here?
                </h2>

                <button
                  onClick={handleTalkWithPandora}
                  className="px-4 py-2 text-xs font-bold text-white bg-[#0b1320] hover:bg-blue-600 rounded-full transition-colors flex items-center gap-2 cursor-pointer shadow-xs"
                >
                  <img src={pandoraThumb} alt="" className="w-4 h-4 rounded-full object-cover" />
                  <span>Ask Pandora Lee</span>
                  <Mic className="w-3.5 h-3.5 text-cyan-400" />
                </button>
              </div>

              {/* 3 Inquiry Choices (Matching PDF) */}
              <div className="space-y-4 mb-8">
                {[
                  {
                    id: 'business',
                    title: 'I need business services',
                    sub: 'Explore nearshore & onshore customer interaction, finance & accounting, or back-office solutions.',
                    action: () => {
                      setActiveReason('business');
                      speakText('Wonderful. Contax360 delivers high-value nearshore services from Jamaica and Florida. I can open our solution builder or submit your SOW.');
                    }
                  },
                  {
                    id: 'existing',
                    title: "I'm an existing client",
                    sub: 'Access direct account management, SLA dashboards, or connect with our 24/7 Operations Desk.',
                    action: () => {
                      setActiveReason('existing');
                      speakText('Welcome back. For immediate operational support, you can reach our 24/7 dispatch desk directly at +1 876-618-3600.');
                    }
                  },
                  {
                    id: 'careers',
                    title: 'I have an application question',
                    sub: 'Check walk-in interview hours at Freeport Montego Bay or review online job status.',
                    action: () => {
                      setActiveReason('careers');
                      speakText('Walk-in interviews are held Monday to Friday, 9 AM to 3 PM at 1 Mangrove Way, Freeport Montego Bay.');
                    }
                  }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={item.action}
                    className={`w-full text-left p-5 rounded-2xl border transition-all cursor-pointer flex items-center justify-between group ${
                      activeReason === item.id
                        ? 'bg-blue-50/80 border-blue-400 shadow-xs'
                        : 'bg-slate-50 hover:bg-blue-50/40 border-slate-200'
                    }`}
                  >
                    <div>
                      <div className="text-base font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
                        {item.title}
                      </div>
                      <div className="text-xs text-slate-500 mt-1">
                        {item.sub}
                      </div>
                    </div>
                    <div className="p-2 rounded-xl bg-blue-50 group-hover:bg-blue-600 text-blue-600 group-hover:text-white transition-all ml-4 shrink-0">
                      <Mic className="w-4 h-4" />
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Instruction Callout Box (Matching PDF) */}
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
              <h3 className="text-sm font-bold text-slate-900 mb-1">
                {activeReason === 'business' && 'Guided Next Step: Request BPO Proposal'}
                {activeReason === 'existing' && 'Guided Next Step: Dedicated Account Desk'}
                {activeReason === 'careers' && 'Guided Next Step: Recruitment Desk & Walk-In Hub'}
                {!activeReason && 'Start with your reason for visiting.'}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-3">
                {activeReason === 'business' && 'Our client directors can formulate a customized staffing hierarchy and guarantee 50% to 70% cost savings.'}
                {activeReason === 'existing' && 'Call +1 876-618-3600 or email support@contax360.com for rapid ticket resolution.'}
                {activeReason === 'careers' && 'Bring your TRN, NIS, valid government ID, and CXC qualifications to 1 Mangrove Way, Freeport Montego Bay.'}
                {!activeReason && 'Choose an option above for contact guidance.'}
              </p>

              {activeReason && (
                <div className="flex gap-2">
                  {activeReason === 'business' && (
                    <button
                      onClick={() => onOpenQuoteModal("Business services inquiry via Room 03 with Pandora")}
                      className="px-4 py-2 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-lg cursor-pointer"
                    >
                      Connect with Client Director
                    </button>
                  )}
                  {activeReason === 'careers' && onNavigateToRoom && (
                    <button
                      onClick={() => onNavigateToRoom('careers')}
                      className="px-4 py-2 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-lg cursor-pointer"
                    >
                      Enter Careers Room
                    </button>
                  )}
                </div>
              )}
            </div>

          </div>

        </div>

        {/* 6. A few useful answers (FAQ Accordion matching PDF) */}
        <div className="max-w-4xl mb-24">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-8">
            A few useful answers.
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="border-b border-slate-200 pb-4"
              >
                <button
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  className="w-full text-left flex items-center justify-between py-2 text-sm sm:text-base font-bold text-slate-800 hover:text-blue-600 transition-colors cursor-pointer"
                >
                  <span className="flex items-center gap-2">
                    <span className="text-slate-400 text-xs font-mono">▸</span>
                    <span>{faq.q}</span>
                  </span>
                  <span className="text-xs text-slate-400">
                    {activeFaq === idx ? '▲' : '▼'}
                  </span>
                </button>

                {activeFaq === idx && (
                  <div className="pl-5 pt-2 text-xs sm:text-sm text-slate-600 leading-relaxed animate-in fade-in duration-150">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* 7. Footer (Exact replica of PDF footer) */}
      <footer className="bg-slate-100 border-t border-slate-200 text-slate-600 text-xs py-14 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
            
            {/* Col 1: Brand & Tagline */}
            <div className="md:col-span-5 space-y-2">
              <div className="font-extrabold text-lg text-slate-900 tracking-tight">contax360</div>
              <p className="text-xs text-slate-500">Human connection. Business in motion.</p>
            </div>

            {/* Col 2: Find your room */}
            <div className="md:col-span-4 space-y-2">
              <div className="font-bold text-slate-900 uppercase tracking-wider text-[11px]">Find your room</div>
              <ul className="space-y-1.5 text-xs text-slate-600">
                <li><button onClick={onBackToLobby} className="hover:text-blue-600">Company &amp; people</button></li>
                <li><button onClick={onBackToLobby} className="hover:text-blue-600">Business solutions</button></li>
                <li><button onClick={() => onNavigateToRoom && onNavigateToRoom('careers')} className="hover:text-blue-600">Careers</button></li>
                <li><button onClick={() => {}} className="hover:text-blue-600">Story theatre</button></li>
                <li><button onClick={() => {}} className="hover:text-blue-600">FAQ room</button></li>
                <li><button onClick={() => {}} className="hover:text-blue-600">Listening lounge</button></li>
              </ul>
            </div>

            {/* Col 3: Start a conversation */}
            <div className="md:col-span-3 space-y-2">
              <div className="font-bold text-slate-900 uppercase tracking-wider text-[11px]">Start a conversation</div>
              <div className="space-y-1 text-xs">
                <a href="mailto:info@contax360.com" className="text-blue-600 hover:underline block font-medium">info@contax360.com</a>
                <a href="tel:18774474627" className="text-slate-800 font-bold block">+1 877-447-4627</a>
                <a href="https://contax360.com" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-blue-600 block mt-2">Official company website ↗</a>
              </div>
            </div>

          </div>

          {/* Bottom Copyright line matching PDF */}
          <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-500">
            <div>
              Private client concept by AMA · Pandora Lee is a fictional virtual guide.
            </div>
            <div className="flex items-center gap-4">
              <span>Owner Voice Studio ↗</span>
              <span>Company sources reviewed 27 September 2026</span>
            </div>
          </div>

        </div>
      </footer>

      {/* Interactive Chat Dialog with Pandora */}
      {talkModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 shadow-2xl relative border border-slate-200">
            <button
              onClick={() => setTalkModalOpen(false)}
              className="absolute top-5 right-5 p-1.5 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-4 pb-3 border-b border-slate-100">
              <div className="w-10 h-10 rounded-full overflow-hidden border border-blue-200">
                <img src={pandoraThumb} alt="Pandora Lee" className="w-full h-full object-cover" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-slate-900">Pandora Lee</h3>
                <span className="text-[11px] text-emerald-600 font-medium flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  Digital Concierge · Active
                </span>
              </div>
            </div>

            <div className="h-64 overflow-y-auto space-y-3 p-3 bg-slate-50 rounded-2xl border border-slate-200 mb-4 text-xs">
              {chatLog.map((msg, i) => (
                <div
                  key={i}
                  className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[85%] p-3 rounded-2xl ${
                      msg.sender === 'user'
                        ? 'bg-blue-600 text-white rounded-br-none'
                        : 'bg-white text-slate-800 border border-slate-200 rounded-bl-none shadow-2xs'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>

            <form onSubmit={handleSendChat} className="flex gap-2">
              <input
                type="text"
                value={dialogInput}
                onChange={(e) => setDialogInput(e.target.value)}
                placeholder="Ask Pandora (pricing, careers, support)..."
                className="flex-1 text-xs px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600 text-slate-900"
              />
              <button
                type="submit"
                className="px-4 py-2.5 text-xs font-bold text-white bg-[#0b1320] hover:bg-blue-600 rounded-xl transition-colors cursor-pointer"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};
