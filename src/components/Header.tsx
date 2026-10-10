import React, { useState, useEffect, useRef } from 'react';
import { Phone, ChevronDown, Menu, X, ArrowRight, ShieldCheck, HeartHandshake } from 'lucide-react';

export const Header: React.FC = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const services = [
    {
      title: 'Family Mediation',
      href: 'https://www.mediationdirect.co.uk/services/family-mediation/',
      desc: 'The core mediation process for separating families.',
    },
    {
      title: 'Child Arrangements',
      href: 'https://www.mediationdirect.co.uk/services/child-arrangements/',
      desc: 'Parenting plans, living schedules and co-parenting clarity.',
    },
    {
      title: 'Financial & Property Mediation',
      href: 'https://www.mediationdirect.co.uk/services/financial-property-mediation/',
      desc: 'Dividing assets, pensions and the family home fairly.',
    },
    {
      title: 'Divorce & Separation Mediation',
      href: 'https://www.mediationdirect.co.uk/services/divorce-separation-mediation/',
      desc: 'Resolving separation matters calmly without court.',
    },
    {
      title: 'MIAM Assessment',
      href: 'https://www.mediationdirect.co.uk/services/miam/',
      desc: 'Statutory assessment meeting required before court applications.',
    },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#FAF7F2]/95 backdrop-blur-md border-b border-[#E6E1D8]">
      {/* Top Announcement Bar */}
      <div className="bg-[#1A1F23] text-[#FAF7F2] text-xs py-2 px-4 text-center tracking-wide">
        <div className="max-w-6xl mx-auto flex items-center justify-center gap-2">
          <span className="font-medium">
            Ministry of Justice £500 Voucher Scheme and Legal Aid available for eligible families.
          </span>
          <a
            href="tel:+443300100175"
            className="text-[#CE6846] hover:text-[#FAF7F2] font-semibold underline underline-offset-2 ml-1 transition-colors"
          >
            Ask when you call
          </a>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-8">
        {/* Brand Logo */}
        <a
          href="https://www.mediationdirect.co.uk/"
          className="flex items-center gap-3 shrink-0 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C7522A] rounded-sm"
          aria-label="Mediation Direct Home"
        >
          <img
            src="https://www.mediationdirect.co.uk/assets/logos/logo-brand.webp"
            alt="Mediation Direct"
            className="h-10 md:h-11 w-auto object-contain transition-transform group-hover:opacity-95"
            onError={(e) => {
              // Graceful textual fallback if external image fails
              const target = e.currentTarget;
              target.style.display = 'none';
              const parent = target.parentElement;
              if (parent && !parent.querySelector('.logo-fallback')) {
                const span = document.createElement('span');
                span.className = 'logo-fallback font-serif text-2xl font-bold tracking-tight text-[#1A1F23]';
                span.innerText = 'Mediation Direct';
                parent.appendChild(span);
              }
            }}
          />
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-[#1A1F23]">
          <a
            href="https://www.mediationdirect.co.uk/"
            className="hover:text-[#C7522A] transition-colors whitespace-nowrap py-1 font-semibold text-[#C7522A]"
          >
            Home
          </a>

          <a
            href="https://www.mediationdirect.co.uk/about/"
            className="hover:text-[#C7522A] transition-colors whitespace-nowrap py-1"
          >
            About Us
          </a>

          {/* Services Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              type="button"
              onClick={() => setDropdownOpen(!dropdownOpen)}
              onMouseEnter={() => setDropdownOpen(true)}
              className="flex items-center gap-1 hover:text-[#C7522A] transition-colors whitespace-nowrap py-1 cursor-pointer focus:outline-none"
              aria-expanded={dropdownOpen}
              aria-haspopup="true"
            >
              <span>Services</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${dropdownOpen ? 'rotate-180 text-[#C7522A]' : 'text-[#515558]'}`}
              />
            </button>

            {dropdownOpen && (
              <div
                onMouseLeave={() => setDropdownOpen(false)}
                className="absolute top-full left-0 mt-2 w-80 bg-white border border-[#E6E1D8] shadow-lg rounded-lg py-2 z-50 animate-in fade-in slide-in-from-top-1 duration-150"
              >
                <div className="px-4 py-2 border-b border-[#ECE8E1]">
                  <p className="text-xs font-semibold text-[#515558] uppercase tracking-wider">
                    Our Mediation Services
                  </p>
                </div>
                {services.map((service) => (
                  <a
                    key={service.href}
                    href={service.href}
                    className="block px-4 py-2.5 hover:bg-[#FAF7F2] transition-colors group"
                  >
                    <div className="text-sm font-semibold text-[#1A1F23] group-hover:text-[#C7522A] flex items-center justify-between">
                      <span>{service.title}</span>
                      <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-[#C7522A]" />
                    </div>
                    <div className="text-xs text-[#515558] mt-0.5">{service.desc}</div>
                  </a>
                ))}
              </div>
            )}
          </div>

          <a
            href="https://www.mediationdirect.co.uk/contact/"
            className="hover:text-[#C7522A] transition-colors whitespace-nowrap py-1"
          >
            Contact Us
          </a>
        </nav>

        {/* Action Call Button & Mobile Menu Toggle */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href="tel:+443300100175"
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-[#C7522A] hover:bg-[#b04520] active:scale-[0.99] rounded-md transition-all shadow-sm whitespace-nowrap"
            aria-label="Call 03300 100 175"
          >
            <Phone className="w-4 h-4" />
            <span>Call 03300 100 175</span>
          </a>

          {/* Mobile hamburger button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#1A1F23] hover:text-[#C7522A] hover:bg-[#ECE8E1] rounded-md transition-colors"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FAF7F2] border-b border-[#E6E1D8] px-4 pt-3 pb-6 space-y-4 max-h-[calc(100vh-80px)] overflow-y-auto">
          <nav className="flex flex-col space-y-2">
            <a
              href="https://www.mediationdirect.co.uk/"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2.5 px-3 rounded-md font-semibold text-[#C7522A] bg-white border border-[#E6E1D8]"
            >
              Home
            </a>
            <a
              href="https://www.mediationdirect.co.uk/about/"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2.5 px-3 rounded-md font-medium text-[#1A1F23] hover:bg-white"
            >
              About Us
            </a>

            <div className="py-2 px-3 border border-[#E6E1D8] bg-white rounded-md">
              <p className="text-xs font-semibold text-[#515558] uppercase tracking-wider mb-2">
                Services
              </p>
              <div className="space-y-1.5 pl-1">
                {services.map((service) => (
                  <a
                    key={service.href}
                    href={service.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-1.5 text-sm font-medium text-[#1A1F23] hover:text-[#C7522A]"
                  >
                    {service.title}
                  </a>
                ))}
              </div>
            </div>

            <a
              href="https://www.mediationdirect.co.uk/contact/"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2.5 px-3 rounded-md font-medium text-[#1A1F23] hover:bg-white"
            >
              Contact Us
            </a>
          </nav>

          <div className="pt-2">
            <a
              href="tel:+443300100175"
              className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-[#C7522A] hover:bg-[#b04520] text-white rounded-md font-semibold text-sm shadow-sm"
            >
              <Phone className="w-4 h-4" />
              <span>Call Now: 03300 100 175</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
