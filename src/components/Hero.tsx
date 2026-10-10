import React from 'react';
import { Phone, ArrowRight, ShieldCheck, CheckCircle2, Clock, Scale } from 'lucide-react';
import heroImg from '../assets/images/hero_family_mediation_1791631848266.jpg';

export const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 md:pt-14 md:pb-24 bg-[#FAF7F2]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: SEO Headline, Copy & CTAs */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Trust Kicker / Eyebrow */}
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wide uppercase text-[#8D3A1E] bg-[#F7E5DF] px-3 py-1.5 rounded-sm">
              <ShieldCheck className="w-4 h-4 text-[#C7522A]" />
              <span>Accredited UK Family Dispute Resolution</span>
            </div>

            {/* Main SEO-Focused Headline */}
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-[#1A1F23] tracking-tight leading-[1.12]">
              Family Mediation across the United Kingdom
            </h1>

            {/* Concise Value Copy */}
            <p className="text-base sm:text-lg text-[#515558] leading-relaxed max-w-xl">
              Separation is difficult enough without an adversarial court battle. We provide a calm,
              confidential setting, experienced accredited family mediators, and the time to reach
              fair, workable arrangements about your children, your home, and your finances.
            </p>

            {/* CTAs: Prominent Call Now & Contact */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href="tel:+443300100175"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-base font-semibold text-white bg-[#C7522A] hover:bg-[#b04520] active:scale-[0.99] rounded-md transition-all shadow-sm focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#C7522A]"
                aria-label="Call 03300 100 175"
              >
                <Phone className="w-5 h-5" />
                <span>Call Now: 03300 100 175</span>
              </a>

              <a
                href="https://www.mediationdirect.co.uk/contact/"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-semibold text-[#1A1F23] bg-white hover:bg-[#F3EFE8] border border-[#E6E1D8] rounded-md transition-colors shadow-xs"
              >
                <span>Book a Consultation</span>
                <ArrowRight className="w-4 h-4 text-[#515558]" />
              </a>
            </div>

            {/* Key Fact Reassurances */}
            <div className="pt-4 border-t border-[#E6E1D8] grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs text-[#515558]">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#0A6637] shrink-0" />
                <span className="font-medium">Confidential &amp; Impartial</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#0A6637] shrink-0" />
                <span className="font-medium">£500 MoJ Voucher Eligible</span>
              </div>
              <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                <CheckCircle2 className="w-4 h-4 text-[#0A6637] shrink-0" />
                <span className="font-medium">Online &amp; In-Person Meetings</span>
              </div>
            </div>

          </div>

          {/* Right Column: High Quality Documentary Editorial Mediation Photography */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-lg overflow-hidden border border-[#E6E1D8] shadow-md bg-white">
              <img
                src={heroImg}
                alt="Accredited UK family mediation meeting in a calm, professional consultation room"
                className="w-full h-[320px] sm:h-[400px] lg:h-[440px] object-cover"
                loading="eager"
              />
              
              {/* Subtle caption overlay with legitimate context */}
              <div className="p-4 bg-white/95 border-t border-[#E6E1D8] backdrop-blur-xs">
                <p className="text-xs font-semibold text-[#1A1F23]">
                  A dignified, structured space to resolve arrangements together
                </p>
                <p className="text-[11px] text-[#515558] mt-0.5">
                  Faster and significantly less costly than contested court hearings.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Highlight Fact Row */}
        <div className="mt-12 pt-8 border-t border-[#E6E1D8] grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white p-4 rounded-md border border-[#E6E1D8]">
            <span className="block text-[11px] font-bold text-[#515558] tracking-wider uppercase">
              Voucher Scheme
            </span>
            <span className="font-serif text-2xl font-bold text-[#1A1F23] mt-1 block">
              Up to £500
            </span>
            <p className="text-xs text-[#515558] mt-1">
              MoJ funding contribution for eligible child mediation.
            </p>
          </div>

          <div className="bg-white p-4 rounded-md border border-[#E6E1D8]">
            <span className="block text-[11px] font-bold text-[#515558] tracking-wider uppercase">
              Average Resolution
            </span>
            <span className="font-serif text-2xl font-bold text-[#1A1F23] mt-1 block">
              2–4 Sessions
            </span>
            <p className="text-xs text-[#515558] mt-1">
              Most family matters conclude within 4 to 8 weeks.
            </p>
          </div>

          <div className="bg-white p-4 rounded-md border border-[#E6E1D8]">
            <span className="block text-[11px] font-bold text-[#515558] tracking-wider uppercase">
              Court Alternatives
            </span>
            <span className="font-serif text-2xl font-bold text-[#1A1F23] mt-1 block">
              No Court Appearances
            </span>
            <p className="text-xs text-[#515558] mt-1">
              Draft Consent Orders approved by judge administratively.
            </p>
          </div>

          <div className="bg-white p-4 rounded-md border border-[#E6E1D8]">
            <span className="block text-[11px] font-bold text-[#515558] tracking-wider uppercase">
              Direct Telephone
            </span>
            <span className="font-serif text-2xl font-bold text-[#C7522A] mt-1 block">
              03300 100 175
            </span>
            <p className="text-xs text-[#515558] mt-1">
              Speak confidentially with our assessment team today.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
