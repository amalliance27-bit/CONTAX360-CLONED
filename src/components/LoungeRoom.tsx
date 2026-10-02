import React, { useState, useRef, useEffect } from 'react';
import { 
  Radio, 
  Volume2, 
  VolumeX, 
  Play, 
  Pause, 
  ArrowLeft, 
  Music, 
  Headphones, 
  Wifi, 
  Clock,
  Sparkles,
  SkipForward,
  SkipBack,
  Sliders,
  Sun,
  CloudRain,
  Waves,
  Coffee,
  Mic,
  Disc
} from 'lucide-react';

interface LoungeRoomProps {
  onBackToLobby: () => void;
  onNavigateToDesk: () => void;
}

export const LoungeRoom: React.FC<LoungeRoomProps> = ({ onBackToLobby, onNavigateToDesk }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeStationIndex, setActiveStationIndex] = useState(0);
  const [volume, setVolume] = useState(75);
  const [isMuted, setIsMuted] = useState(false);
  const [trackSeconds, setTrackSeconds] = useState(42);
  const [activeAtmosphere, setActiveAtmosphere] = useState<string | null>('waves');
  
  // Pomodoro timer state
  const [timerMinutes, setTimerMinutes] = useState(25);
  const [timerSeconds, setTimerSeconds] = useState(0);
  const [timerRunning, setTimerRunning] = useState(false);

  // Audio Context & Nodes
  const audioCtxRef = useRef<AudioContext | null>(null);
  const mainGainRef = useRef<GainNode | null>(null);
  const oscIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const animationFrameRef = useRef<number | null>(null);

  const stations = [
    {
      id: 'lofi-reggae',
      title: 'Montego Bay Sunset Lo-Fi',
      frequency: '98.4 FM',
      genre: 'Island Lo-Fi / Chillhop',
      bpm: '82 BPM',
      nowPlaying: 'Doctor’s Cave Sunset Chords',
      artist: 'Contax360 Sound Lab',
      desc: 'Mellow island keys, vinyl crackle & warm basslines designed for calm and deep focus.',
      color: 'from-amber-500 to-orange-600'
    },
    {
      id: 'campus-radio',
      title: 'Contax360 104.7 FM Campus Live',
      frequency: '104.7 FM',
      genre: 'Workplace Beats & Energy',
      bpm: '96 BPM',
      nowPlaying: 'Freeport Morning Drive · Host Marcus',
      artist: 'Freeport Broadcast Studio',
      desc: 'Upbeat Caribbean workplace energy, island reggae hits, and team shoutouts.',
      color: 'from-blue-500 to-indigo-600'
    },
    {
      id: 'deep-focus',
      title: 'Caribbean Ocean Wave & Flow',
      frequency: '88.1 FM',
      genre: 'Ambient Soundscape / Alpha Waves',
      bpm: '60 BPM',
      nowPlaying: 'Gentle Caribbean Tides (432Hz)',
      artist: 'St. James Soundscapes',
      desc: 'Calming ocean frequencies, soft marimba tones, and binaural focus waves.',
      color: 'from-cyan-500 to-teal-600'
    },
    {
      id: 'dub-lounge',
      title: 'Kingston Dub & Steel Pan Sessions',
      frequency: '101.2 FM',
      genre: 'Dub Reggae & Jazz',
      bpm: '78 BPM',
      nowPlaying: 'Blue Mountain Echoes',
      artist: 'Kingston Jam Collective',
      desc: 'Authentic acoustic steel drums, dub delay spaces, and relaxing bass vibrations.',
      color: 'from-emerald-500 to-green-600'
    }
  ];

  const currentStation = stations[activeStationIndex];

  // Procedural Web Audio Synthesizer
  const initAudio = () => {
    if (!audioCtxRef.current) {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      audioCtxRef.current = new AudioCtx();
    }
    if (audioCtxRef.current.state === 'suspended') {
      audioCtxRef.current.resume();
    }
    if (!mainGainRef.current && audioCtxRef.current) {
      const gain = audioCtxRef.current.createGain();
      gain.gain.setValueAtTime(isMuted ? 0 : volume / 100, audioCtxRef.current.currentTime);
      gain.connect(audioCtxRef.current.destination);
      mainGainRef.current = gain;
    }
  };

  const playChime = () => {
    if (!audioCtxRef.current || !mainGainRef.current) return;
    const ctx = audioCtxRef.current;
    
    // Caribbean Pentatonic Scales (C Major / F Major vibes)
    const pentatonicNotes = [
      [261.63, 329.63, 392.00, 523.25], // C4, E4, G4, C5
      [220.00, 293.66, 369.99, 440.00], // A3, D4, F#4, A4
      [196.00, 246.94, 293.66, 392.00], // G3, B3, D4, G4
      [349.23, 440.00, 523.25, 698.46]  // F4, A4, C5, F5
    ][activeStationIndex % 4];

    const note = pentatonicNotes[Math.floor(Math.random() * pentatonicNotes.length)];

    const osc = ctx.createOscillator();
    const noteGain = ctx.createGain();

    osc.type = activeStationIndex === 0 ? 'sine' : activeStationIndex === 1 ? 'triangle' : 'sine';
    osc.frequency.setValueAtTime(note, ctx.currentTime);

    noteGain.gain.setValueAtTime(0.001, ctx.currentTime);
    noteGain.gain.exponentialRampToValueAtTime(0.08 * (volume / 100), ctx.currentTime + 0.1);
    noteGain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 2.5);

    osc.connect(noteGain);
    noteGain.connect(mainGainRef.current);

    osc.start();
    osc.stop(ctx.currentTime + 2.6);
  };

  const startRadio = () => {
    initAudio();
    setIsPlaying(true);
    playChime();

    if (oscIntervalRef.current) clearInterval(oscIntervalRef.current);
    oscIntervalRef.current = setInterval(() => {
      playChime();
    }, 1800);
  };

  const stopRadio = () => {
    setIsPlaying(false);
    if (oscIntervalRef.current) {
      clearInterval(oscIntervalRef.current);
      oscIntervalRef.current = null;
    }
  };

  const togglePlayback = () => {
    if (isPlaying) {
      stopRadio();
    } else {
      startRadio();
    }
  };

  const nextStation = () => {
    const nextIdx = (activeStationIndex + 1) % stations.length;
    setActiveStationIndex(nextIdx);
    setTrackSeconds(0);
    if (isPlaying) {
      setTimeout(playChime, 100);
    }
  };

  const prevStation = () => {
    const prevIdx = (activeStationIndex - 1 + stations.length) % stations.length;
    setActiveStationIndex(prevIdx);
    setTrackSeconds(0);
    if (isPlaying) {
      setTimeout(playChime, 100);
    }
  };

  // Volume Change
  useEffect(() => {
    if (mainGainRef.current && audioCtxRef.current) {
      mainGainRef.current.gain.setValueAtTime(
        isMuted ? 0 : volume / 100,
        audioCtxRef.current.currentTime
      );
    }
  }, [volume, isMuted]);

  // Track timer tick
  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (isPlaying) {
      interval = setInterval(() => {
        setTrackSeconds((prev) => prev + 1);
      }, 1000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isPlaying]);

  // Pomodoro Focus Timer
  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (timerRunning) {
      interval = setInterval(() => {
        if (timerSeconds > 0) {
          setTimerSeconds((prev) => prev - 1);
        } else if (timerMinutes > 0) {
          setTimerMinutes((prev) => prev - 1);
          setTimerSeconds(59);
        } else {
          setTimerRunning(false);
        }
      }, 1000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [timerRunning, timerMinutes, timerSeconds]);

  // Visualizer Animation Canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let frame = 0;
    const render = () => {
      frame++;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const numBars = 36;
      const barWidth = canvas.width / numBars;

      for (let i = 0; i < numBars; i++) {
        let height = 4;
        if (isPlaying) {
          const wave = Math.sin(frame * 0.08 + i * 0.3) * 0.5 + 0.5;
          const randomJitter = Math.sin(frame * 0.2 + i) * 10;
          height = Math.max(6, wave * (canvas.height * 0.7) + randomJitter);
        }

        const x = i * barWidth;
        const y = canvas.height - height;

        const grad = ctx.createLinearGradient(0, y, 0, canvas.height);
        if (activeStationIndex === 0) {
          grad.addColorStop(0, '#f59e0b');
          grad.addColorStop(1, '#ea580c');
        } else if (activeStationIndex === 1) {
          grad.addColorStop(0, '#3b82f6');
          grad.addColorStop(1, '#1d4ed8');
        } else if (activeStationIndex === 2) {
          grad.addColorStop(0, '#06b6d4');
          grad.addColorStop(1, '#0284c7');
        } else {
          grad.addColorStop(0, '#10b981');
          grad.addColorStop(1, '#059669');
        }

        ctx.fillStyle = grad;
        ctx.fillRect(x + 2, y, barWidth - 4, height);
      }

      animationFrameRef.current = requestAnimationFrame(render);
    };

    render();

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      stopRadio();
    };
  }, [isPlaying, activeStationIndex]);

  const formatSeconds = (totalSeconds: number) => {
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  return (
    <div className="bg-[#070e18] text-white min-h-screen font-sans pt-28 sm:pt-32 pb-24 selection:bg-amber-500 selection:text-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navigation Breadcrumb back to Main Lobby */}
        <div className="mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <button
            onClick={onBackToLobby}
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-300 hover:text-white transition-colors py-2.5 px-4 rounded-xl bg-slate-900/90 border border-slate-800 cursor-pointer shadow-sm w-fit"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to Main Lobby</span>
          </button>

          <button
            onClick={onNavigateToDesk}
            className="text-xs font-bold text-cyan-400 hover:text-cyan-300 transition-colors flex items-center gap-2 w-fit bg-slate-900/50 py-2 px-3.5 rounded-xl border border-slate-800"
          >
            <Mic className="w-3.5 h-3.5" />
            <span>Visit Room 03 Service Desk (Pandora Lee)</span>
          </button>
        </div>

        {/* Room Header Banner */}
        <div className="mb-10">
          <div className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-widest text-amber-400 mb-2">
            <Radio className="w-4 h-4 animate-pulse text-amber-400" />
            <span>ROOM 06 · THE LISTENING LOUNGE &amp; RADIO</span>
            <span className="text-slate-700">|</span>
            <span className="text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-800 text-[10px]">
              {isPlaying ? '● LIVE ON AIR' : 'SIGNAL READY'}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Montego Bay Soundscapes &amp; Campus Radio
          </h1>
          <p className="text-sm sm:text-base text-slate-400 max-w-2xl mt-2">
            Immerse in soothing Caribbean acoustic tones, chill-out lo-fi, and live 104.7 FM campus broadcast frequencies while you work.
          </p>
        </div>

        {/* MAIN RADIO PLAYER GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          
          {/* Left: Master Interactive Audio Console (7 Cols) */}
          <div className="lg:col-span-7 bg-[#0b1626] rounded-3xl p-6 sm:p-8 border border-slate-800 shadow-2xl flex flex-col justify-between relative overflow-hidden">
            
            {/* Ambient Background Aura */}
            <div className={`absolute -right-20 -top-20 w-80 h-80 rounded-full bg-gradient-to-br ${currentStation.color} opacity-10 blur-3xl pointer-events-none transition-all duration-700`} />

            <div>
              {/* Header Bar: Station Dial & Live Frequency */}
              <div className="flex items-center justify-between pb-6 border-b border-slate-800/80 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-amber-500/20 text-amber-400 border border-amber-500/30 flex items-center justify-center">
                    <Disc className={`w-5 h-5 ${isPlaying ? 'animate-spin' : ''}`} />
                  </div>
                  <div>
                    <div className="text-xs font-extrabold uppercase tracking-wider text-amber-400">
                      {currentStation.frequency}
                    </div>
                    <div className="text-sm font-bold text-white">
                      {currentStation.title}
                    </div>
                  </div>
                </div>

                <div className="text-right font-mono text-xs text-slate-400">
                  <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 mr-2 animate-ping" />
                  {currentStation.bpm}
                </div>
              </div>

              {/* Now Playing Showcase Card */}
              <div className="bg-[#070e18]/80 rounded-2xl p-5 border border-slate-800/80 mb-6">
                <div className="text-[11px] font-bold uppercase tracking-widest text-slate-500 mb-1">
                  CURRENT STREAM
                </div>
                <div className="text-lg sm:text-xl font-extrabold text-white mb-1">
                  {currentStation.nowPlaying}
                </div>
                <div className="text-xs text-amber-400 font-medium">
                  {currentStation.artist} · <span className="text-slate-400">{currentStation.genre}</span>
                </div>

                {/* Visualizer Canvas */}
                <div className="mt-4 pt-4 border-t border-slate-800/60">
                  <canvas 
                    ref={canvasRef} 
                    width={480} 
                    height={70} 
                    className="w-full h-16 rounded-lg bg-slate-950/60"
                  />
                </div>

                {/* Track Duration Scrubber */}
                <div className="mt-3 flex items-center justify-between text-[11px] font-mono text-slate-500">
                  <span>{formatSeconds(trackSeconds)}</span>
                  <div className="flex-1 mx-3 h-1.5 bg-slate-800 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-amber-500 rounded-full transition-all duration-300"
                      style={{ width: `${Math.min(100, (trackSeconds % 180) / 1.8)}%` }}
                    />
                  </div>
                  <span>3:00</span>
                </div>
              </div>
            </div>

            {/* Master Playback Controls */}
            <div className="pt-6 border-t border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              
              {/* Transport Buttons */}
              <div className="flex items-center gap-3">
                <button
                  onClick={prevStation}
                  className="w-10 h-10 rounded-full bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors flex items-center justify-center cursor-pointer"
                  title="Previous Station"
                >
                  <SkipBack className="w-4 h-4" />
                </button>

                <button
                  onClick={togglePlayback}
                  className="px-6 py-3 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black text-xs uppercase tracking-wider flex items-center gap-2 shadow-lg shadow-amber-500/20 hover:scale-105 transition-all cursor-pointer"
                >
                  {isPlaying ? (
                    <>
                      <Pause className="w-4 h-4 fill-slate-950" />
                      <span>PAUSE STREAM</span>
                    </>
                  ) : (
                    <>
                      <Play className="w-4 h-4 fill-slate-950" />
                      <span>TUNE IN NOW</span>
                    </>
                  )}
                </button>

                <button
                  onClick={nextStation}
                  className="w-10 h-10 rounded-full bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors flex items-center justify-center cursor-pointer"
                  title="Next Station"
                >
                  <SkipForward className="w-4 h-4" />
                </button>
              </div>

              {/* Volume Slider */}
              <div className="flex items-center gap-3 bg-slate-900/80 px-4 py-2 rounded-2xl border border-slate-800 w-full sm:w-auto">
                <button
                  onClick={() => setIsMuted(!isMuted)}
                  className="text-slate-400 hover:text-white cursor-pointer"
                >
                  {isMuted || volume === 0 ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-amber-400" />}
                </button>

                <input
                  type="range"
                  min="0"
                  max="100"
                  value={isMuted ? 0 : volume}
                  onChange={(e) => {
                    setVolume(Number(e.target.value));
                    if (isMuted) setIsMuted(false);
                  }}
                  className="w-24 accent-amber-500 cursor-pointer h-1.5"
                />

                <span className="text-[11px] font-mono text-slate-400 w-7 text-right">
                  {isMuted ? '0%' : `${volume}%`}
                </span>
              </div>

            </div>

          </div>

          {/* Right: Station Presets & Live Studio Schedule (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            
            {/* Station Preset Selector */}
            <div className="bg-[#0b1626] rounded-3xl p-6 border border-slate-800 shadow-xl">
              <h3 className="text-sm font-extrabold uppercase tracking-wider text-slate-300 mb-4 flex items-center justify-between">
                <span>STATION PRESETS</span>
                <span className="text-xs text-amber-400 font-mono">4 CHANNELS</span>
              </h3>

              <div className="space-y-2.5">
                {stations.map((st, idx) => (
                  <button
                    key={st.id}
                    onClick={() => {
                      setActiveStationIndex(idx);
                      if (!isPlaying) startRadio();
                    }}
                    className={`w-full text-left p-3.5 rounded-2xl border transition-all cursor-pointer flex items-center justify-between ${
                      activeStationIndex === idx
                        ? 'bg-amber-500/15 border-amber-500/80 text-white shadow-md'
                        : 'bg-[#070e18]/80 hover:bg-slate-800/50 border-slate-800 text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-2 h-2 rounded-full ${activeStationIndex === idx ? 'bg-amber-400 animate-ping' : 'bg-slate-700'}`} />
                      <div>
                        <div className="text-xs font-bold text-white">
                          {st.title}
                        </div>
                        <div className="text-[11px] text-slate-400">
                          {st.frequency} · {st.bpm}
                        </div>
                      </div>
                    </div>

                    <div className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded bg-slate-900 border border-slate-800 text-slate-300">
                      {activeStationIndex === idx && isPlaying ? 'PLAYING' : 'SELECT'}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Pomodoro Focus & Deep Work Timer */}
            <div className="bg-[#0b1626] rounded-3xl p-6 border border-slate-800 shadow-xl">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-300">
                  <Clock className="w-4 h-4 text-cyan-400" />
                  <span>DEEP WORK FOCUS TIMER</span>
                </div>

                <span className="text-[10px] font-bold uppercase tracking-wider text-cyan-400 bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-800">
                  POMODORO
                </span>
              </div>

              <div className="flex items-center justify-between bg-[#070e18] p-4 rounded-2xl border border-slate-800">
                <div className="text-3xl font-black font-mono text-white">
                  {timerMinutes}:{timerSeconds < 10 ? '0' : ''}{timerSeconds}
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => {
                      setTimerRunning(!timerRunning);
                      if (!isPlaying) startRadio();
                    }}
                    className="px-4 py-2 rounded-xl text-xs font-extrabold uppercase tracking-wider text-slate-950 bg-cyan-400 hover:bg-cyan-300 transition-colors cursor-pointer"
                  >
                    {timerRunning ? 'PAUSE' : 'START 25M'}
                  </button>

                  <button
                    onClick={() => {
                      setTimerRunning(false);
                      setTimerMinutes(25);
                      setTimerSeconds(0);
                    }}
                    className="px-3 py-2 rounded-xl text-xs font-bold text-slate-400 hover:text-white bg-slate-800 transition-colors cursor-pointer"
                  >
                    RESET
                  </button>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* BROADCAST SCHEDULE SECTION */}
        <div className="bg-[#0b1626] rounded-3xl p-8 border border-slate-800 shadow-xl">
          <div className="max-w-2xl mb-6">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-400 mb-1 block">
              104.7 FM DAILY BROADCAST
            </span>
            <h2 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
              Freeport Campus Broadcast Schedule
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {[
              {
                time: '8:00 AM – 10:30 AM',
                show: 'Rise & Shine Montego Bay',
                host: 'Marcus & Team 360',
                desc: 'Energizing reggae beats, morning company updates & Freeport announcements.'
              },
              {
                time: '11:00 AM – 2:00 PM',
                show: 'Caribbean Flow & Lo-Fi',
                host: 'Sound Lab Studio',
                desc: 'Zero-distraction acoustic and chillhop flow designed for high-productivity shifts.'
              },
              {
                time: '2:30 PM – 5:00 PM',
                show: 'Island Vibe & Staff Spotlight',
                host: 'Recruitment & Culture Desk',
                desc: 'Employee milestones, leadership talks & dancehall crossover selections.'
              },
              {
                time: '6:00 PM – 10:00 PM',
                show: 'St. James Night Wind-Down',
                host: 'Ambient Radio',
                desc: 'Binaural sunset waves and soothing lo-fi for night owl operations.'
              }
            ].map((item, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-[#070e18] border border-slate-800/80 flex flex-col justify-between">
                <div>
                  <div className="text-[11px] font-mono text-amber-400 font-bold mb-2">
                    {item.time}
                  </div>
                  <div className="text-sm font-bold text-white mb-1">
                    {item.show}
                  </div>
                  <div className="text-xs text-slate-400 leading-relaxed">
                    {item.desc}
                  </div>
                </div>
                <div className="text-[11px] text-slate-500 font-medium mt-4 pt-3 border-t border-slate-800/60">
                  Host: {item.host}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
