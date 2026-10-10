import React from 'react';
import { Phone, ArrowRight, ShieldCheck, HeartHandshake } from 'lucide-react';

export const CallToActionSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-[#1A1F23] text-[#FAF7F2] relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        
        {/* Eyebrow */}
        <p className="text-xs font-semibold text-[#CE6846] uppercase tracking-widest">
          Take The Next Step
        </p>

        {/* Main Title */}
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
          Ready to take the first step?
        </h2>

        {/* Supporting Copy */}
        <p className="text-base sm:text-lg text-[#AAA8A5] max-w-2xl mx-auto leading-relaxed">
          You do not have to have everything worked out before you call. Our experienced team will listen without judgement, explain your options in plain terms, and help you find a calm way forward.
        </p>

        {/* Action Buttons */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="tel:+443300100175"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 text-base font-semibold text-white bg-[#C7522A] hover:bg-[#b04520] active:scale-[0.99] rounded-md transition-all shadow-md focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#C7522A]"
            aria-label="Call 03300 100 175"
          >
            <Phone className="w-5 h-5" />
            <span>Call 03300 100 175</span>
          </a>

          <a
            href="https://www.mediationdirect.co.uk/contact/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-white bg-transparent hover:bg-white/10 border border-[#4C5053] rounded-md transition-colors"
          >
            <span>Send an Enquiry</span>
            <ArrowRight className="w-4 h-4 text-[#CE6846]" />
          </a>
        </div>

        {/* Reassurance text */}
        <div className="pt-8 border-t border-[#4C5053] flex flex-wrap items-center justify-center gap-6 text-xs text-[#AAA8A5]">
          <span>Confidential</span>
          <span aria-hidden="true">·</span>
          <span>Impartial</span>
          <span aria-hidden="true">·</span>
          <span>Accredited Mediators</span>
          <span aria-hidden="true">·</span>
          <span>No Obligation</span>
        </div>

      </div>
    </section>
  );
};
