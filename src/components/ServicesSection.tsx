import React from 'react';
import { ArrowRight, Users, Home, FileText, CheckCircle2 } from 'lucide-react';
import childImg from '../assets/images/child_arrangements_consultation_1791631859762.jpg';
import financeImg from '../assets/images/financial_mediation_planning_1791631870596.jpg';

export const ServicesSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white border-y border-[#E6E1D8]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <p className="text-xs font-semibold text-[#8D3A1E] tracking-wider uppercase mb-2">
            Mediation Services
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1A1F23] tracking-tight">
            Helping you resolve what matters most.
          </h2>
          <p className="text-base text-[#515558] mt-3 leading-relaxed">
            We focus on practical, future-facing solutions that protect family relationships and safeguard your financial security. Our accredited family mediators guide you through structured sessions without contentious court proceedings.
          </p>
        </div>

        {/* 2–3 Prominently Featured Services */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Prominent Service 1: Family Mediation */}
          <div className="flex flex-col bg-[#FAF7F2] border border-[#E6E1D8] rounded-lg p-6 sm:p-7 hover:border-[#1A1F23] transition-colors group">
            <div className="w-12 h-12 rounded-md bg-[#F7E5DF] flex items-center justify-center text-[#C7522A] mb-5">
              <Users className="w-6 h-6" />
            </div>
            
            <h3 className="font-serif text-2xl font-bold text-[#1A1F23] group-hover:text-[#C7522A] transition-colors">
              Family Mediation
            </h3>
            
            <p className="text-sm text-[#515558] mt-2.5 leading-relaxed flex-grow">
              The core dispute resolution process for separating and divorcing couples. Work with an impartial, accredited mediator to identify priorities, explore practical options, and build long-term arrangements for all aspects of separation.
            </p>

            <ul className="my-5 space-y-2 text-xs text-[#515558] border-t border-b border-[#E6E1D8] py-4">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#0A6637] shrink-0" />
                <span>Confidential, without-prejudice discussions</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#0A6637] shrink-0" />
                <span>Paced entirely around your family's needs</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#0A6637] shrink-0" />
                <span>Produces a formal Memorandum of Understanding</span>
              </li>
            </ul>

            <a
              href="https://www.mediationdirect.co.uk/services/family-mediation/"
              className="inline-flex items-center justify-between font-semibold text-sm text-[#C7522A] hover:text-[#8D3A1E] group-hover:underline transition-colors mt-auto pt-2"
            >
              <span>Explore Family Mediation</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          {/* Prominent Service 2: Child Arrangements with Photo */}
          <div className="flex flex-col bg-[#FAF7F2] border border-[#E6E1D8] rounded-lg overflow-hidden hover:border-[#1A1F23] transition-colors group">
            <div className="h-44 w-full overflow-hidden bg-slate-100 relative">
              <img
                src={childImg}
                alt="Parents discussing child arrangements and workable parenting plan"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-102"
                loading="lazy"
              />
              <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-xs text-[11px] font-semibold text-[#1A1F23] px-2.5 py-1 rounded-sm border border-[#E6E1D8]">
                Children &amp; Parenting
              </div>
            </div>

            <div className="p-6 sm:p-7 flex flex-col flex-grow">
              <h3 className="font-serif text-2xl font-bold text-[#1A1F23] group-hover:text-[#C7522A] transition-colors">
                Child Arrangements
              </h3>
              
              <p className="text-sm text-[#515558] mt-2.5 leading-relaxed flex-grow">
                Keep your children at the heart of every decision. Establish clear living schedules, school holiday rotas, maintenance contributions, and sustainable co-parenting communication without putting children through court scrutiny.
              </p>

              <ul className="my-5 space-y-2 text-xs text-[#515558] border-t border-b border-[#E6E1D8] py-4">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#0A6637] shrink-0" />
                  <span>Workable, tailored Parenting Plans</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#0A6637] shrink-0" />
                  <span>Eligible for the £500 MoJ Voucher Scheme</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#0A6637] shrink-0" />
                  <span>Reduces conflict and parental stress</span>
                </li>
              </ul>

              <a
                href="https://www.mediationdirect.co.uk/services/child-arrangements/"
                className="inline-flex items-center justify-between font-semibold text-sm text-[#C7522A] hover:text-[#8D3A1E] group-hover:underline transition-colors mt-auto pt-2"
              >
                <span>Explore Child Arrangements</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>

          {/* Prominent Service 3: Financial & Property Mediation with Photo */}
          <div className="flex flex-col bg-[#FAF7F2] border border-[#E6E1D8] rounded-lg overflow-hidden hover:border-[#1A1F23] transition-colors group">
            <div className="h-44 w-full overflow-hidden bg-slate-100 relative">
              <img
                src={financeImg}
                alt="Document review and financial property mediation consultation"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-102"
                loading="lazy"
              />
              <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-xs text-[11px] font-semibold text-[#1A1F23] px-2.5 py-1 rounded-sm border border-[#E6E1D8]">
                Finances &amp; Property
              </div>
            </div>

            <div className="p-6 sm:p-7 flex flex-col flex-grow">
              <h3 className="font-serif text-2xl font-bold text-[#1A1F23] group-hover:text-[#C7522A] transition-colors">
                Financial &amp; Property Mediation
              </h3>
              
              <p className="text-sm text-[#515558] mt-2.5 leading-relaxed flex-grow">
                Untangle joint finances thoroughly and transparently. We guide both parties through open financial disclosure, property valuations, mortgage borrowing feasibility, pension sharing considerations, and clean break settlements.
              </p>

              <ul className="my-5 space-y-2 text-xs text-[#515558] border-t border-b border-[#E6E1D8] py-4">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#0A6637] shrink-0" />
                  <span>Division of the family home &amp; equity</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#0A6637] shrink-0" />
                  <span>Pensions, investments &amp; debts addressed</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#0A6637] shrink-0" />
                  <span>Open Financial Statement for Consent Orders</span>
                </li>
              </ul>

              <a
                href="https://www.mediationdirect.co.uk/services/financial-property-mediation/"
                className="inline-flex items-center justify-between font-semibold text-sm text-[#C7522A] hover:text-[#8D3A1E] group-hover:underline transition-colors mt-auto pt-2"
              >
                <span>Explore Financial Mediation</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>

        </div>

        {/* Remaining Services Directory Banner */}
        <div className="mt-10 p-6 bg-[#FAF7F2] rounded-lg border border-[#E6E1D8] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <h4 className="font-serif text-lg font-bold text-[#1A1F23]">
              Need MIAM or Divorce Mediation?
            </h4>
            <p className="text-sm text-[#515558]">
              We also provide statutory pre-court MIAM assessments and divorce separation mediation.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href="https://www.mediationdirect.co.uk/services/miam/"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-[#1A1F23] bg-white border border-[#E6E1D8] rounded-md hover:border-[#1A1F23] transition-colors shadow-xs"
            >
              <span>MIAM Assessment</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#C7522A]" />
            </a>
            <a
              href="https://www.mediationdirect.co.uk/services/divorce-separation-mediation/"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-[#1A1F23] bg-white border border-[#E6E1D8] rounded-md hover:border-[#1A1F23] transition-colors shadow-xs"
            >
              <span>Divorce &amp; Separation</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#C7522A]" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
