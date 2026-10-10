import React from 'react';
import { Phone, ArrowRight, Calendar, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1A1F23] text-[#FAF7F2] pt-16 pb-24 md:pb-16 border-t border-[#4C5053]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#4C5053]">
          
          {/* Column 1: Brand Info & Call Button (Col span 4) */}
          <div className="lg:col-span-4 space-y-5">
            <a
              href="https://www.mediationdirect.co.uk/"
              className="inline-block focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C7522A]"
              aria-label="Mediation Direct Home"
            >
              <img
                src="https://www.mediationdirect.co.uk/assets/logos/logo-brand.webp"
                alt="Mediation Direct"
                className="h-10 w-auto object-contain brightness-0 invert opacity-95"
                onError={(e) => {
                  const target = e.currentTarget;
                  target.style.display = 'none';
                  const parent = target.parentElement;
                  if (parent && !parent.querySelector('.footer-logo-fallback')) {
                    const span = document.createElement('span');
                    span.className = 'footer-logo-fallback font-serif text-2xl font-bold tracking-tight text-white';
                    span.innerText = 'Mediation Direct';
                    parent.appendChild(span);
                  }
                }}
              />
            </a>

            <p className="text-xs text-[#AAA8A5] leading-relaxed max-w-sm">
              Mediation Direct provides accredited, professional family dispute resolution across England and Wales. Helping separating couples reach fair, long-term arrangements for children, finances, and property.
            </p>

            <div className="pt-2">
              <a
                href="tel:+443300100175"
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#C7522A] hover:bg-[#b04520] text-white text-xs font-semibold rounded-md transition-colors"
                aria-label="Call 03300 100 175"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Direct Telephone: 03300 100 175</span>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links (Col span 2) */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="font-serif text-lg font-bold text-white tracking-wide">
              Quick Links
            </h3>
            <ul className="space-y-2 text-xs text-[#AAA8A5]">
              <li>
                <a
                  href="https://www.mediationdirect.co.uk/"
                  className="hover:text-white transition-colors py-1 inline-block"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="https://www.mediationdirect.co.uk/about/"
                  className="hover:text-white transition-colors py-1 inline-block"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="https://www.mediationdirect.co.uk/contact/"
                  className="hover:text-white transition-colors py-1 inline-block"
                >
                  Contact &amp; Consultations
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Mediation Services (Col span 3) */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="font-serif text-lg font-bold text-white tracking-wide">
              Services
            </h3>
            <ul className="space-y-2 text-xs text-[#AAA8A5]">
              <li>
                <a
                  href="https://www.mediationdirect.co.uk/services/family-mediation/"
                  className="hover:text-white transition-colors py-1 inline-block"
                >
                  Accredited Family Mediation
                </a>
              </li>
              <li>
                <a
                  href="https://www.mediationdirect.co.uk/services/child-arrangements/"
                  className="hover:text-white transition-colors py-1 inline-block"
                >
                  Child Arrangements &amp; Parenting
                </a>
              </li>
              <li>
                <a
                  href="https://www.mediationdirect.co.uk/services/financial-property-mediation/"
                  className="hover:text-white transition-colors py-1 inline-block"
                >
                  Financial &amp; Property Mediation
                </a>
              </li>
              <li>
                <a
                  href="https://www.mediationdirect.co.uk/services/divorce-separation-mediation/"
                  className="hover:text-white transition-colors py-1 inline-block"
                >
                  Divorce &amp; Separation
                </a>
              </li>
              <li>
                <a
                  href="https://www.mediationdirect.co.uk/services/miam/"
                  className="hover:text-white transition-colors py-1 inline-block"
                >
                  Statutory MIAM Assessment
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Coverage Areas (Col span 3) */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="font-serif text-lg font-bold text-white tracking-wide">
              Areas We Cover
            </h3>
            <p className="text-xs text-[#AAA8A5] leading-relaxed">
              We provide local meeting facilities and online video mediation throughout:
            </p>
            <div className="grid grid-cols-2 gap-y-1.5 gap-x-2 text-xs text-[#AAA8A5] pt-1">
              <span>• Hartlepool</span>
              <span>• Chesterfield</span>
              <span>• Aylesbury</span>
              <span>• Hastings</span>
              <span>• Grimsby</span>
              <span>• London</span>
              <span>• Manchester</span>
              <span>• Birmingham</span>
            </div>
            <p className="text-[11px] text-[#AAA8A5] pt-2">
              All postcodes across England &amp; Wales supported via remote video call.
            </p>
          </div>

        </div>

        {/* Footer Bottom Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#AAA8A5]">
          <p>© 2026 Mediation Direct Ltd. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a
              href="https://www.mediationdirect.co.uk/about/"
              className="hover:text-white transition-colors"
            >
              About Our Service
            </a>
            <a
              href="https://www.mediationdirect.co.uk/contact/"
              className="hover:text-white transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </div>

      </div>

      {/* Mobile Fixed Sticky Action Bar (Max 15% height) */}
      <div
        className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#1A1F23]/95 backdrop-blur-md border-t border-[#4C5053] px-4 py-2.5 flex items-center gap-3 shadow-lg"
        aria-label="Quick Mobile Actions"
      >
        <a
          href="tel:+443300100175"
          className="flex-1 flex items-center justify-center gap-2 py-2.5 px-3 bg-[#C7522A] active:bg-[#b04520] text-white rounded-md text-xs font-semibold shadow-xs"
          aria-label="Call 03300 100 175"
        >
          <Phone className="w-3.5 h-3.5 shrink-0" />
          <span>Call 03300 100 175</span>
        </a>

        <a
          href="https://www.mediationdirect.co.uk/contact/"
          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 bg-white/10 active:bg-white/20 text-white rounded-md text-xs font-semibold border border-white/20"
        >
          <Calendar className="w-3.5 h-3.5 shrink-0 text-[#CE6846]" />
          <span>Book Online</span>
        </a>
      </div>
    </footer>
  );
};
