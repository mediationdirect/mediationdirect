import React, { useState } from 'react';
import { ChevronDown, Phone, ArrowRight, ShieldCheck } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'Is family mediation compulsory before applying to court?',
      a: 'Under Family Procedure Rules 2010 Part 3, attending a statutory Mediation Information and Assessment Meeting (MIAM) is mandatory before submitting a court application for child arrangements (Form C100) or financial remedy (Form A), unless a formal exemption such as documented domestic abuse applies.',
    },
    {
      q: 'Can we settle our divorce finances entirely without attending court?',
      a: 'Yes. Once an agreement is reached in mediation, your solicitor drafts a Consent Order based on our Memorandum of Understanding and submits it to court for administrative review by a judge, requiring zero court hearings.',
    },
    {
      q: 'Is a mediated Parenting Plan legally binding?',
      a: 'A Parenting Plan is a voluntary agreement built on mutual cooperation. If parents require formal legal enforceability, a family solicitor can convert the agreed plan into a draft Child Arrangements Consent Order for court approval.',
    },
    {
      q: 'How do we determine what happens to the family home?',
      a: 'We assess independent property valuations, verified mortgage borrowing capacity, and housing needs for both parties, exploring buyout options, property sales, or deferred charges under Mesher orders.',
    },
    {
      q: 'Can my MIAM consultation be conducted online via video call?',
      a: 'Yes. We offer secure online video MIAMs, enabling you to complete your assessment from the comfort and privacy of your home across England and Wales.',
    },
  ];

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-16 md:py-24 bg-white border-y border-[#E6E1D8]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Heading & Reassurance */}
          <div className="lg:col-span-5 space-y-5">
            <p className="text-xs font-semibold text-[#8D3A1E] tracking-wider uppercase">
              Frequently Asked Questions
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1A1F23] tracking-tight">
              Quick answers to common questions.
            </h2>
            <p className="text-base text-[#515558] leading-relaxed">
              Family mediation is the UK legal system’s primary route for resolving disputes without courtroom intervention. Here are the facts separating parents need to know.
            </p>

            <div className="pt-4 border-t border-[#E6E1D8] space-y-3">
              <div className="flex items-center gap-2.5 text-xs text-[#515558]">
                <ShieldCheck className="w-4 h-4 text-[#0A6637] shrink-0" />
                <span>Statutory MIAM signed forms for court applications (C100 &amp; Form A)</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-[#515558]">
                <ShieldCheck className="w-4 h-4 text-[#0A6637] shrink-0" />
                <span>Family Mediation Council accredited professionals</span>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="https://www.mediationdirect.co.uk/about/"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#C7522A] hover:text-[#8D3A1E] underline underline-offset-2"
              >
                <span>Read more about our mediation standards</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Right Column: Accordion */}
          <div className="lg:col-span-7 space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={faq.q}
                  className="border border-[#E6E1D8] rounded-lg overflow-hidden bg-[#FAF7F2] transition-colors"
                >
                  <button
                    type="button"
                    onClick={() => toggle(index)}
                    className="w-full py-4 px-5 text-left flex items-center justify-between gap-4 font-semibold text-sm sm:text-base text-[#1A1F23] hover:text-[#C7522A] cursor-pointer focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`w-4 h-4 shrink-0 transition-transform duration-200 text-[#515558] ${
                        isOpen ? 'rotate-180 text-[#C7522A]' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-sm text-[#515558] leading-relaxed border-t border-[#ECE8E1]">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
