import React from 'react';
import { PhoneCall, UserCheck, MessageSquare, FileCheck2, ArrowRight } from 'lucide-react';

export const ProcessSection: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Get in Touch',
      icon: PhoneCall,
      subtitle: 'Free Initial Confidential Enquiry',
      desc: 'Call 03300 100 175 or submit a contact request. Our experienced case coordinator will listen to your circumstances, answer your questions, and explain available funding options.',
    },
    {
      num: '02',
      title: 'MIAM Assessment',
      icon: UserCheck,
      subtitle: 'Individual Private Consultations',
      desc: 'You and your former partner each attend separate, confidential 45-minute meetings with an accredited mediator to discuss your concerns, assess suitability, and confirm £500 voucher eligibility.',
    },
    {
      num: '03',
      title: 'Mediation Sessions',
      icon: MessageSquare,
      subtitle: 'Structured, Impartial Discussions',
      desc: 'Meet together (or via separate shuttle rooms) with your accredited mediator. Over typically 2 to 4 sessions, you explore viable options, gather financial data, and agree on practical proposals.',
    },
    {
      num: '04',
      title: 'Work Towards Agreement',
      icon: FileCheck2,
      subtitle: 'Formal Summaries & Legal Closure',
      desc: 'Your mediator drafts a detailed Memorandum of Understanding and Open Financial Summary. Your solicitor can then submit this to court as a Consent Order for administrative approval—without court hearings.',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-[#FAF7F2]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <p className="text-xs font-semibold text-[#8D3A1E] tracking-wider uppercase mb-2">
            How Family Mediation Works
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1A1F23] tracking-tight">
            A clear process, focused on solutions.
          </h2>
          <p className="text-base text-[#515558] mt-3 leading-relaxed">
            Mediation provides a structured, dignified environment to talk honestly, assess realistic options, and reach your own consensual decisions with the help of an experienced mediator.
          </p>
        </div>

        {/* Infographic 4-Step Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                className="relative bg-white border border-[#E6E1D8] rounded-lg p-6 flex flex-col justify-between hover:shadow-md transition-shadow group"
              >
                {/* Step Header */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-serif text-2xl font-bold text-[#C7522A]">
                      {step.num}
                    </span>
                    <div className="w-10 h-10 rounded-md bg-[#FAF7F2] border border-[#E6E1D8] flex items-center justify-center text-[#1A1F23] group-hover:border-[#C7522A] group-hover:text-[#C7522A] transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="font-serif text-xl font-bold text-[#1A1F23] mb-1">
                    {step.title}
                  </h3>
                  
                  <p className="text-xs font-semibold text-[#8D3A1E] mb-3">
                    {step.subtitle}
                  </p>

                  <p className="text-sm text-[#515558] leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                {/* Subtext info */}
                <div className="mt-6 pt-4 border-t border-[#ECE8E1] text-[11px] text-[#515558] flex items-center justify-between">
                  <span>Step {index + 1} of 4</span>
                  {index < 3 ? (
                    <span className="text-[#C7522A] font-medium">Proceeds to next →</span>
                  ) : (
                    <span className="text-[#0A6637] font-medium">Agreement reached</span>
                  )}
                </div>
              </div>
            );
          })}

        </div>

        {/* Additional guidance bar */}
        <div className="mt-12 p-6 bg-white border border-[#E6E1D8] rounded-lg flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-sm text-[#515558]">
            <strong className="text-[#1A1F23] font-semibold">Not sure if your former partner will attend?</strong> Our case coordinators handle the sensitive outreach professionally and without pressure.
          </div>
          <a
            href="tel:+443300100175"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#C7522A] hover:text-[#8D3A1E] underline underline-offset-2 shrink-0"
          >
            <span>Ask our team on 03300 100 175</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};
