import React from 'react';
import { PoundSterling, Check, HelpCircle, Phone, ArrowRight } from 'lucide-react';

export const FundingSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white border-y border-[#E6E1D8]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <p className="text-xs font-semibold text-[#8D3A1E] tracking-wider uppercase mb-2">
            Mediation Funding
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1A1F23] tracking-tight">
            You may be able to get help with the cost.
          </h2>
          <p className="text-base text-[#515558] mt-3 leading-relaxed">
            The UK Government recognizes that keeping families out of court leads to better outcomes for children. Substantial funding options exist to help cover mediation fees.
          </p>
        </div>

        {/* Funding Options Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* MoJ £500 Voucher Scheme */}
          <div className="bg-[#FAF7F2] border border-[#E6E1D8] rounded-lg p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold text-[#8D3A1E] bg-[#F7E5DF] px-2.5 py-1 rounded-sm uppercase tracking-wide">
                  Ministry of Justice Scheme
                </span>
                <span className="font-serif text-3xl font-bold text-[#C7522A]">
                  £500
                </span>
              </div>

              <h3 className="font-serif text-2xl font-bold text-[#1A1F23] mb-3">
                Family Mediation Voucher Scheme
              </h3>

              <p className="text-sm text-[#515558] leading-relaxed mb-6">
                A non-means-tested government grant designed to help separating couples resolve disputes involving child arrangements. Your financial circumstances are not assessed for this voucher.
              </p>

              <div className="space-y-3 border-t border-[#E6E1D8] pt-5 text-sm text-[#515558]">
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#0A6637] shrink-0 mt-0.5" />
                  <span>Available for cases involving child arrangements or joint parenting with finances.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#0A6637] shrink-0 mt-0.5" />
                  <span>Not means-tested — no income or asset assessment required.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#0A6637] shrink-0 mt-0.5" />
                  <span>We apply directly on your behalf; the £500 is credited straight against your session fees.</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-5 border-t border-[#E6E1D8] flex items-center justify-between">
              <span className="text-xs text-[#515558]">Ask our team when you call</span>
              <a
                href="tel:+443300100175"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#C7522A] hover:text-[#8D3A1E] underline underline-offset-2"
              >
                <span>Check Voucher Eligibility</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Legal Aid */}
          <div className="bg-[#FAF7F2] border border-[#E6E1D8] rounded-lg p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold text-[#1A1F23] bg-[#E6E1D8] px-2.5 py-1 rounded-sm uppercase tracking-wide">
                  Means-Tested Support
                </span>
                <span className="font-serif text-3xl font-bold text-[#1A1F23]">
                  100% Free
                </span>
              </div>

              <h3 className="font-serif text-2xl font-bold text-[#1A1F23] mb-3">
                Legal Aid for Family Mediation
              </h3>

              <p className="text-sm text-[#515558] leading-relaxed mb-6">
                While Legal Aid was largely removed for family court litigation, it remains fully available for family mediation for qualifying individuals on low incomes or receiving certain benefits.
              </p>

              <div className="space-y-3 border-t border-[#E6E1D8] pt-5 text-sm text-[#515558]">
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#0A6637] shrink-0 mt-0.5" />
                  <span>Covers both the MIAM assessment meeting and subsequent joint mediation sessions.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#0A6637] shrink-0 mt-0.5" />
                  <span>If one party qualifies for Legal Aid, the other party receives their MIAM and first session free.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#0A6637] shrink-0 mt-0.5" />
                  <span>Qualifying benefits include Universal Credit, Income Support, and ESA.</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-5 border-t border-[#E6E1D8] flex items-center justify-between">
              <span className="text-xs text-[#515558]">Free assessment available</span>
              <a
                href="https://www.mediationdirect.co.uk/contact/"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1A1F23] hover:text-[#C7522A] underline underline-offset-2"
              >
                <span>Enquire about Legal Aid</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

        {/* Direct Phone Assistance Banner */}
        <div className="mt-10 p-5 bg-[#FAF7F2] border border-[#E6E1D8] rounded-lg flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Phone className="w-5 h-5 text-[#C7522A] shrink-0" />
            <p className="text-sm text-[#1A1F23]">
              Speak to our funding specialists on <strong>03300 100 175</strong> to find out which schemes apply to your situation before booking.
            </p>
          </div>
          <a
            href="tel:+443300100175"
            className="px-4 py-2 text-xs font-semibold text-white bg-[#1A1F23] hover:bg-[#3C4144] rounded-md whitespace-nowrap transition-colors"
          >
            Call 03300 100 175
          </a>
        </div>

      </div>
    </section>
  );
};
