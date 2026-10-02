import React from 'react';

export const AboutSection: React.FC = () => {
  const teamPhoto = "https://contax360.com/wp-content/uploads/2021/05/contax-360-team-photo-BPO-alt2.jpg";
  const palmPhoto = "https://contax360.com/wp-content/uploads/2021/02/contax-bpo-nearshore-onshore-jamaica-palm-trees2.jpg";

  return (
    <section id="about" className="py-20 lg:py-28 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title matching contax360.com style */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#002b66] tracking-tight mb-4">
            About Our Company
          </h2>
          <div className="w-16 h-1 bg-[#006cff] mx-auto rounded-full mb-4" />
          <h3 className="text-lg sm:text-xl font-semibold text-slate-800">
            Contax360 was founded in 2007 by Jacqueline Sutherland.
          </h3>
        </div>

        {/* Narrative & Photo Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16">
          
          {/* Left: Authentic copy */}
          <div className="lg:col-span-6 space-y-5 text-sm sm:text-base text-slate-700 leading-relaxed">
            <p>
              After a successful Engineering and I.T. consulting career Jacqueline decided to apply her technical and business background to starting a BPO company. BPO’s are historically a business area where few women and even fewer women of color have been involved as founders and owners.
            </p>
            <p>
              Never one to shy from a challenge, Jackie was determined to build a BPO that was different; agile, responsive, customer-focused, that embraces technology and teamwork. The result has been happy customers, amazing growth and global recognition as a woman and minority-owned BPO.
            </p>
            <p>
              Contax360 offers a full range of BPO and KPO services from our two nearshore locations in Jamaica (Montego Bay HQ and Kingston), as well as onshore services from our U.S. headquarters in Plantation, Florida. As a leader in Work From Home (WFM) technology and practices, we are able to provide virtual services from almost any global location providing maximum flexibility and redundancy.
            </p>
          </div>

          {/* Right: Authentic Team Photo */}
          <div className="lg:col-span-6">
            <div className="rounded-2xl overflow-hidden shadow-xl border border-slate-200 aspect-[4/3] bg-slate-100 group relative">
              <img
                src={teamPhoto}
                alt="Contax360 Team - Jamaica BPO & KPO Staff"
                className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
                onError={(e) => {
                  e.currentTarget.src = palmPhoto;
                }}
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950/80 via-slate-900/30 to-transparent p-4 text-white text-xs font-semibold">
                Contax360 BPO &amp; KPO Team — Freeport Montego Bay, Jamaica
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
