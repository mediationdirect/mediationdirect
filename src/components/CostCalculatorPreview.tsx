import React, { useState } from 'react';
import { Calculator, Check, ArrowRight, Shield, Scale, HelpCircle } from 'lucide-react';

export const CostCalculatorPreview: React.FC = () => {
  const [issueType, setIssueType] = useState<'child' | 'finance' | 'all'>('child');
  const [hasVoucher, setHasVoucher] = useState<boolean>(true);
  const [sessions, setSessions] = useState<number>(3);

  // Fee calculation basis (standard UK family mediation figures)
  // MIAM fee approx £120 per person, joint session approx £180 per person per 90m session
  const miamCostPerPerson = 120;
  const sessionCostPerPerson = 180;
  
  const grossMediationPerPerson = miamCostPerPerson + (sessions * sessionCostPerPerson);
  const voucherDeductionPerPerson = hasVoucher && (issueType === 'child' || issueType === 'all') ? 250 : 0;
  const netMediationPerPerson = Math.max(0, grossMediationPerPerson - voucherDeductionPerPerson);
  
  // Typical contested UK court cost per person (solicitors + counsel fees)
  const courtCostPerPerson = issueType === 'child' ? 12000 : issueType === 'finance' ? 18000 : 25000;
  const savingsPerPerson = courtCostPerPerson - netMediationPerPerson;

  return (
    <section className="py-16 md:py-24 bg-[#FAF7F2]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <p className="text-xs font-semibold text-[#8D3A1E] tracking-wider uppercase mb-2">
            Transparent Pricing Preview
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1A1F23] tracking-tight">
            The money question, answered before you call.
          </h2>
          <p className="text-base text-[#515558] mt-3 leading-relaxed">
            Mediation costs a fraction of contested court proceedings. Use this preview calculator to estimate your realistic fees and explore potential savings. No details are stored or transmitted.
          </p>
        </div>

        {/* Interactive Calculator Card */}
        <div className="bg-white border border-[#E6E1D8] rounded-xl shadow-xs overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Left Controls Column */}
            <div className="lg:col-span-7 p-6 sm:p-8 space-y-6">
              
              {/* Dispute Type Selector */}
              <div>
                <label className="block text-xs font-bold text-[#515558] uppercase tracking-wider mb-2.5">
                  1. Select What You Need to Resolve
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  <button
                    type="button"
                    onClick={() => setIssueType('child')}
                    className={`py-2.5 px-3 rounded-md text-xs font-semibold border transition-all text-center cursor-pointer ${
                      issueType === 'child'
                        ? 'bg-[#1A1F23] text-white border-[#1A1F23] shadow-xs'
                        : 'bg-white text-[#1A1F23] border-[#E6E1D8] hover:border-[#515558]'
                    }`}
                  >
                    Children &amp; Parenting
                  </button>
                  <button
                    type="button"
                    onClick={() => setIssueType('finance')}
                    className={`py-2.5 px-3 rounded-md text-xs font-semibold border transition-all text-center cursor-pointer ${
                      issueType === 'finance'
                        ? 'bg-[#1A1F23] text-white border-[#1A1F23] shadow-xs'
                        : 'bg-white text-[#1A1F23] border-[#E6E1D8] hover:border-[#515558]'
                    }`}
                  >
                    Finances &amp; Property
                  </button>
                  <button
                    type="button"
                    onClick={() => setIssueType('all')}
                    className={`py-2.5 px-3 rounded-md text-xs font-semibold border transition-all text-center cursor-pointer ${
                      issueType === 'all'
                        ? 'bg-[#1A1F23] text-white border-[#1A1F23] shadow-xs'
                        : 'bg-white text-[#1A1F23] border-[#E6E1D8] hover:border-[#515558]'
                    }`}
                  >
                    All Issues (Both)
                  </button>
                </div>
              </div>

              {/* Number of Joint Sessions */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs font-bold text-[#515558] uppercase tracking-wider">
                    2. Estimated Mediation Sessions
                  </label>
                  <span className="text-xs font-semibold text-[#C7522A]">
                    {sessions} {sessions === 1 ? 'Session' : 'Sessions'} (Avg: 2–3)
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <input
                    type="range"
                    min={1}
                    max={6}
                    value={sessions}
                    onChange={(e) => setSessions(parseInt(e.target.value, 10))}
                    className="w-full accent-[#C7522A] h-2 bg-[#E6E1D8] rounded-lg cursor-pointer"
                  />
                  <span className="font-serif text-lg font-bold text-[#1A1F23] tabular-nums shrink-0 w-8 text-right">
                    {sessions}
                  </span>
                </div>
                <p className="text-[11px] text-[#515558] mt-1.5">
                  Most families reach agreement in 2 or 3 focused 90-minute sessions.
                </p>
              </div>

              {/* MoJ Voucher Scheme Option */}
              <div className="p-4 bg-[#FAF7F2] border border-[#E6E1D8] rounded-lg">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="text-xs font-bold text-[#1A1F23] block">
                      Include MoJ £500 Voucher Contribution?
                    </span>
                    <p className="text-xs text-[#515558] mt-0.5">
                      Available for all eligible mediations with child arrangement elements.
                    </p>
                  </div>
                  <div className="flex items-center gap-1.5 bg-white p-1 rounded-md border border-[#E6E1D8]">
                    <button
                      type="button"
                      onClick={() => setHasVoucher(true)}
                      className={`px-2.5 py-1 text-xs font-medium rounded transition-colors ${
                        hasVoucher ? 'bg-[#C7522A] text-white' : 'text-[#515558] hover:text-[#1A1F23]'
                      }`}
                    >
                      Yes
                    </button>
                    <button
                      type="button"
                      onClick={() => setHasVoucher(false)}
                      className={`px-2.5 py-1 text-xs font-medium rounded transition-colors ${
                        !hasVoucher ? 'bg-[#1A1F23] text-white' : 'text-[#515558] hover:text-[#1A1F23]'
                      }`}
                    >
                      No
                    </button>
                  </div>
                </div>
              </div>

              {/* Reassurance text */}
              <div className="text-xs text-[#515558] space-y-1">
                <p>• Pay-as-you-go per session; no large upfront solicitor retainer funds required.</p>
                <p>• Both parties share the costs equally unless agreed otherwise.</p>
              </div>

            </div>

            {/* Right Summary Column */}
            <div className="lg:col-span-5 bg-[#1A1F23] text-[#FAF7F2] p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <p className="text-xs font-semibold text-[#AAA8A5] uppercase tracking-wider mb-1">
                  Estimated Cost Breakdown (Per Person)
                </p>
                <h3 className="font-serif text-2xl font-bold text-white mb-6">
                  Mediation vs. Court
                </h3>

                {/* Numbers breakdown */}
                <div className="space-y-3 pb-6 border-b border-[#4C5053] text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-[#AAA8A5]">Initial MIAM Assessment</span>
                    <span className="tabular-nums font-medium">£{miamCostPerPerson}</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-[#AAA8A5]">
                      {sessions} × Joint Sessions (£{sessionCostPerPerson}/ea)
                    </span>
                    <span className="tabular-nums font-medium">
                      £{sessions * sessionCostPerPerson}
                    </span>
                  </div>

                  {voucherDeductionPerPerson > 0 && (
                    <div className="flex items-center justify-between text-[#80E0A7]">
                      <span>MoJ Voucher Credit (Per Person Share)</span>
                      <span className="tabular-nums font-medium">-£{voucherDeductionPerPerson}</span>
                    </div>
                  )}

                  <div className="pt-2 flex items-center justify-between font-bold text-base text-white border-t border-[#4C5053]">
                    <span>Total Estimated Mediation Fee</span>
                    <span className="tabular-nums text-xl text-[#CE6846]">
                      £{netMediationPerPerson}
                    </span>
                  </div>
                </div>

                {/* Court Comparison Box */}
                <div className="mt-5 p-3.5 bg-white/5 border border-white/10 rounded-md">
                  <div className="flex items-center justify-between text-xs text-[#AAA8A5] mb-1">
                    <span>Average Contested Court Cost</span>
                    <span className="line-through tabular-nums">£{courtCostPerPerson.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm font-semibold text-white">
                    <span>Estimated Potential Saving</span>
                    <span className="text-[#80E0A7] tabular-nums font-bold">
                      ~£{savingsPerPerson.toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>

              {/* Call to action */}
              <div className="mt-8 pt-4">
                <a
                  href="tel:+443300100175"
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-[#C7522A] hover:bg-[#b04520] active:scale-[0.99] text-white rounded-md font-semibold text-sm transition-all"
                  aria-label="Call 03300 100 175 for a free estimate"
                >
                  <span>Discuss Your Quote: 03300 100 175</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <p className="text-[11px] text-[#AAA8A5] text-center mt-2">
                  Free assessment of legal aid and voucher scheme eligibility.
                </p>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
