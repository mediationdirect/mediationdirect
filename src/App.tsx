import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { ProcessSection } from './components/ProcessSection';
import { FundingSection } from './components/FundingSection';
import { CostCalculatorPreview } from './components/CostCalculatorPreview';
import { LocationsSection } from './components/LocationsSection';
import { GuidesSection } from './components/GuidesSection';
import { FaqSection } from './components/FaqSection';
import { CallToActionSection } from './components/CallToActionSection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2] text-[#1A1F23]">
      {/* Skip to Content Accessibility Link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-50 bg-white text-[#1A1F23] px-4 py-2 border border-[#1A1F23] rounded-md font-medium shadow-md"
      >
        Skip to main content
      </a>

      {/* Main Brand Header */}
      <Header />

      {/* Main Content Area */}
      <main id="main-content" className="flex-grow">
        {/* Hero Section */}
        <Hero />

        {/* 2–3 Prominent Services Section */}
        <ServicesSection />

        {/* The 4-Step Process Infographic */}
        <ProcessSection />

        {/* Funding & Voucher Scheme Section */}
        <FundingSection />

        {/* Interactive Cost Calculator Preview */}
        <CostCalculatorPreview />

        {/* Selected Locations & Video Mediation */}
        <LocationsSection />

        {/* Plain-English Mediation Guides */}
        <GuidesSection />

        {/* Frequently Asked Questions */}
        <FaqSection />

        {/* Closing Action Banner */}
        <CallToActionSection />
      </main>

      {/* 4-Column Footer & Sticky Mobile Bar */}
      <Footer />
    </div>
  );
}
