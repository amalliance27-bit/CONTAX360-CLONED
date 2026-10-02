import React from 'react';

export const VideoSection: React.FC = () => {
  const videoUrl1 = "https://contax360.com/wp-content/uploads/2021/03/Contax-Staff-And-Environment-1-1.m4v";
  const videoUrl2 = "https://contax360.com/wp-content/uploads/2021/03/Staffvideo-Final-Avi-Convert-1.m4v";

  return (
    <section className="relative bg-slate-950 overflow-hidden text-white py-16 sm:py-24 border-b border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title above video */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-[#006cff] mb-2 block">
            Inside Contax360
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
            Our Staff &amp; Operating Environment
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-2">
            Take a look at our Freeport Montego Bay facilities, energetic teams, and carrier-grade contact center floor.
          </p>
        </div>

        {/* Pure Clickless Seamless Ambient Video Container */}
        <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-800 aspect-video max-w-5xl mx-auto bg-black pointer-events-none select-none">
          <video
            src={videoUrl1}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover pointer-events-none"
          >
            <source src={videoUrl1} type="video/mp4" />
            <source src={videoUrl2} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Clean Subtle Aesthetic Ambient Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-slate-950/20 pointer-events-none" />
        </div>

      </div>
    </section>
  );
};
