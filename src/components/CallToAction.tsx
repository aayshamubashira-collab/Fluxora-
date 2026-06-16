/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Sparkles, ArrowRight, CalendarDays, PhoneCall } from "lucide-react";

interface CallToActionProps {
  onCtaClick: () => void;
}

export default function CallToAction({ onCtaClick }: CallToActionProps) {
  const handleScrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-24 relative bg-black overflow-hidden bg-grid">
      {/* Intense Glowing Centers */}
      <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-radial-gradient rounded-full filter blur-[100px] pointer-events-none opacity-60" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Banner Card block */}
        <div className="relative bg-gradient-to-br from-[#0c0c16] via-[#040409] to-[#040408] rounded-3xl p-8 sm:p-16 border border-white/10 [box-shadow:0_30px_60px_rgba(0,0,0,0.8)] overflow-hidden text-center flex flex-col items-center">
          
          {/* Subtle line background animations */}
          <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#00dfd8] via-[#0070f3] to-[#7928ca]" />
          <div className="absolute -top-16 -right-16 w-32 h-32 bg-[#00dfd8] rounded-full blur-3xl opacity-25" />
          <div className="absolute -bottom-16 -left-16 w-32 h-32 bg-[#7928ca] rounded-full blur-3xl opacity-20" />

          {/* Icon Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-[#00dfd8] text-xs font-bold uppercase tracking-widest mb-6">
            <Sparkles className="w-3.5 h-3.5 text-[#00dfd8] animate-pulse" />
            <span>Scale Your Revenue Today</span>
          </div>

          {/* Headline copy */}
          <h2 className="font-heading font-black text-3xl sm:text-5xl text-white tracking-tight leading-tight max-w-3xl">
            Ready to Grow Your Business?
          </h2>

          <p className="font-sans text-white/70 text-base sm:text-lg mt-4 max-w-2xl leading-relaxed">
            Partner with <span className="text-white font-extrabold text-gradient-cyan-blue">Fluxora</span> and unlock your brand's full digital potential. Let us build high-ROI campaigns that redefine your growth scope.
          </p>

          {/* Instant triggers */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 mt-10 w-full sm:w-auto">
            <button
              onClick={onCtaClick}
              className="px-8 py-4 rounded-xl text-sm font-bold text-black bg-[#00dfd8] hover:bg-white hover:[box-shadow:0_0_25px_rgba(0,223,216,0.5)] transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95"
            >
              <CalendarDays className="w-4 h-4" />
              <span>Schedule Consultation</span>
            </button>

            <button
              onClick={handleScrollToContact}
              className="px-8 py-4 rounded-xl text-sm font-bold text-white bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95"
            >
              <PhoneCall className="w-4 h-4 text-[#00dfd8]" />
              <span>Contact Now</span>
              <ArrowRight className="w-4.5 h-4.5 text-white/40" />
            </button>
          </div>

          {/* Mini trust checklist under buttons */}
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mt-8 text-xs text-white/40 font-mono tracking-wider">
            <span>✓ FREE SEO & CRO SNAPSHOT AUDIT</span>
            <span className="text-white/10">|</span>
            <span>✓ NO LONG-TERM CONTRACT COMPULSION</span>
            <span className="text-white/10">|</span>
            <span>✓ 24-HOUR STRATEGIC CALLBACK</span>
          </div>

        </div>

      </div>
    </section>
  );
}
