import React from 'react';
import { BookOpen, Clock, ArrowRight, ShieldCheck, FileText, CheckCircle2 } from 'lucide-react';

export const GuidesSection: React.FC = () => {
  const guides = [
    {
      title: 'How Long Does Family Mediation Take?',
      summary: 'A detailed breakdown of typical timelines: why most families complete mediation in 2 to 4 sessions across 4 to 8 weeks, compared to 12 to 18 months for contested court proceedings.',
      readTime: '4 min read',
      topic: 'Process & Timelines',
      href: 'https://www.mediationdirect.co.uk/services/family-mediation/',
      ctaText: 'View Mediation Timeline',
    },
    {
      title: 'What Does Family Mediation Cost?',
      summary: 'An honest guide to session charges, legal aid qualification criteria, and how the Ministry of Justice £500 voucher can be automatically credited towards your child arrangement sessions.',
      readTime: '5 min read',
      topic: 'Fees & Funding',
      href: 'https://www.mediationdirect.co.uk/services/miam/',
      ctaText: 'Explore MIAM & Costs',
    },
    {
      title: 'Creating a Workable Parenting Plan',
      summary: 'Practical advice on designing sustainable rotas, handover protocols, school holiday arrangements, and emergency contact agreements that put children first.',
      readTime: '6 min read',
      topic: 'Children & Parenting',
      href: 'https://www.mediationdirect.co.uk/services/child-arrangements/',
      ctaText: 'Explore Parenting Plans',
    },
    {
      title: 'Clean Break Consent Orders Explained',
      summary: 'How mediated agreements are formalized into a legally binding court order. Learn how a Consent Order protects you against future financial claims without any court hearings.',
      readTime: '5 min read',
      topic: 'Divorce & Finances',
      href: 'https://www.mediationdirect.co.uk/services/financial-property-mediation/',
      ctaText: 'Read Clean Break Guide',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-[#FAF7F2]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold text-[#8D3A1E] tracking-wider uppercase mb-2">
              Expert Guidance
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1A1F23] tracking-tight">
              Clear information when you need it.
            </h2>
            <p className="text-base text-[#515558] mt-3 leading-relaxed">
              Family law and separation terminology can feel overwhelming. We explain everything in straightforward, plain UK English so you feel informed and prepared.
            </p>
          </div>

          <a
            href="https://www.mediationdirect.co.uk/about/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#1A1F23] hover:text-[#C7522A] shrink-0"
          >
            <span>Learn about our approach</span>
            <ArrowRight className="w-4 h-4 text-[#C7522A]" />
          </a>
        </div>

        {/* Guides Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {guides.map((guide) => (
            <div
              key={guide.title}
              className="bg-white border border-[#E6E1D8] rounded-lg p-6 sm:p-7 flex flex-col justify-between hover:shadow-md transition-shadow group"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-[#515558] mb-3">
                  <span className="font-semibold text-[#8D3A1E] uppercase tracking-wide">
                    {guide.topic}
                  </span>
                  <div className="flex items-center gap-1.5 text-[11px]">
                    <Clock className="w-3.5 h-3.5 text-[#515558]" />
                    <span>{guide.readTime}</span>
                  </div>
                </div>

                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#1A1F23] group-hover:text-[#C7522A] transition-colors">
                  {guide.title}
                </h3>

                <p className="text-sm text-[#515558] mt-3 leading-relaxed">
                  {guide.summary}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#ECE8E1] flex items-center justify-between">
                <a
                  href={guide.href}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#C7522A] hover:text-[#8D3A1E] group-hover:underline"
                >
                  <span>{guide.ctaText}</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </a>

                <a
                  href="tel:+443300100175"
                  className="text-xs text-[#515558] hover:text-[#1A1F23] hidden sm:inline-block"
                >
                  Questions? Call 03300 100 175
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
