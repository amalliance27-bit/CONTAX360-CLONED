import React from 'react';

interface CtaBannerProps {
  onOpenQuoteModal: () => void;
}

export const CtaBanner: React.FC<CtaBannerProps> = ({ onOpenQuoteModal }) => {
  return (
    <section className="bg-slate-100 py-16 sm:py-20 border-b border-slate-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#002b66] tracking-tight leading-snug mb-8 max-w-3xl mx-auto">
          Whether you are exploring options or have an immediate need, we can work with you to provide the right information or solution.
        </h2>

        <button
          onClick={onOpenQuoteModal}
          className="px-10 py-3.5 text-xs font-bold uppercase tracking-wider text-white bg-[#006cff] hover:bg-blue-700 rounded-full transition-all duration-200 shadow-md hover:shadow-lg cursor-pointer"
        >
          CONTACT US
        </button>
      </div>
    </section>
  );
};
