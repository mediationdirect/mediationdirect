import React from 'react';
import { MapPin, Video, Phone, ArrowRight, ShieldCheck } from 'lucide-react';

export const LocationsSection: React.FC = () => {
  const selectedLocations = [
    {
      name: 'Hartlepool',
      region: 'County Durham',
      postcode: 'TS24 / North East',
      features: 'In-person meeting rooms & video appointments',
    },
    {
      name: 'Chesterfield',
      region: 'Derbyshire',
      postcode: 'S40 / East Midlands',
      features: 'Full family mediation & MIAM assessments',
    },
    {
      name: 'Aylesbury',
      region: 'Buckinghamshire',
      postcode: 'HP20 / South East',
      features: 'Child arrangements & financial mediation',
    },
    {
      name: 'Hastings',
      region: 'East Sussex',
      postcode: 'TN34 / South Coast',
      features: 'Local accredited mediation specialists',
    },
    {
      name: 'Grimsby',
      region: 'Lincolnshire',
      postcode: 'DN31 / Yorkshire & Humber',
      features: 'Fast-track MIAM certification & voucher support',
    },
    {
      name: 'London & Nationwide',
      region: 'England & Wales',
      postcode: 'All UK Postcodes',
      features: 'High-definition secure video mediation service',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white border-y border-[#E6E1D8]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <p className="text-xs font-semibold text-[#8D3A1E] tracking-wider uppercase mb-2">
            Coverage Across England &amp; Wales
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1A1F23] tracking-tight">
            Local knowledge. National service.
          </h2>
          <p className="text-base text-[#515558] mt-3 leading-relaxed">
            Whether you prefer attending an in-person mediation meeting near your home or conducting your consultations remotely from the comfort and privacy of your living room, Mediation Direct has you covered.
          </p>
        </div>

        {/* Locations Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {selectedLocations.map((loc) => (
            <div
              key={loc.name}
              className="p-6 bg-[#FAF7F2] border border-[#E6E1D8] rounded-lg hover:border-[#1A1F23] transition-colors flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2 text-[#C7522A]">
                    <MapPin className="w-4 h-4 shrink-0" />
                    <span className="text-xs font-bold uppercase tracking-wider text-[#8D3A1E]">
                      {loc.region}
                    </span>
                  </div>
                  <span className="text-[11px] text-[#515558] font-mono">
                    {loc.postcode}
                  </span>
                </div>

                <h3 className="font-serif text-xl font-bold text-[#1A1F23] group-hover:text-[#C7522A] transition-colors">
                  {loc.name}
                </h3>
                
                <p className="text-xs text-[#515558] mt-2 leading-relaxed">
                  {loc.features}
                </p>
              </div>

              <div className="mt-5 pt-4 border-t border-[#E6E1D8] flex items-center justify-between">
                <a
                  href="tel:+443300100175"
                  className="text-xs font-semibold text-[#1A1F23] hover:text-[#C7522A] flex items-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5 text-[#C7522A]" />
                  <span>03300 100 175</span>
                </a>

                <a
                  href="https://www.mediationdirect.co.uk/contact/"
                  className="text-xs font-semibold text-[#C7522A] hover:text-[#8D3A1E] flex items-center gap-1"
                >
                  <span>Book Consultation</span>
                  <ArrowRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Remote Video Mediation Feature Strip */}
        <div className="mt-10 p-6 bg-[#FAF7F2] border border-[#E6E1D8] rounded-lg flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-start sm:items-center gap-4">
            <div className="w-12 h-12 rounded-md bg-white border border-[#E6E1D8] flex items-center justify-center text-[#C7522A] shrink-0">
              <Video className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-serif text-lg font-bold text-[#1A1F23]">
                Prefer Online Video Mediation?
              </h4>
              <p className="text-sm text-[#515558] mt-0.5">
                Over 85% of clients choose our secure video mediation service. Zero travel, private breakout rooms, and flexible early morning or evening scheduling.
              </p>
            </div>
          </div>

          <a
            href="https://www.mediationdirect.co.uk/contact/"
            className="px-5 py-2.5 text-xs font-semibold text-white bg-[#C7522A] hover:bg-[#b04520] rounded-md whitespace-nowrap transition-colors shrink-0 shadow-xs"
          >
            Enquire for Your Area
          </a>
        </div>

      </div>
    </section>
  );
};
