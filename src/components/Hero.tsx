/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Sparkles, ArrowRight, ShieldCheck, Star } from "lucide-react";

// Import custom generated logo file
// @ts-ignore
import logoAsset from "../assets/images/fluxora_logo_1781594275692.jpg";

interface HeroProps {
  onCtaClick: () => void;
}

export default function Hero({ onCtaClick }: HeroProps) {
  const handleScrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-[96vh] flex items-center justify-center pt-28 pb-16 overflow-hidden bg-grid">
      {/* Animated Glowing Ambient Orbs */}
      <div className="absolute top-[20%] left-[10%] w-[35vw] h-[35vw] bg-radial-cyan rounded-full filter blur-[100px] pointer-events-none animate-pulse-slow mix-blend-screen opacity-60" />
      <div className="absolute bottom-[20%] right-[10%] w-[40vw] h-[40vw] bg-radial-purple rounded-full filter blur-[120px] pointer-events-none animate-pulse-slower mix-blend-screen opacity-50" />

      {/* Hero content & Grid background layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Hero Column */}
          <div className="lg:col-span-7 flex flex-col text-left space-y-6">
            
            {/* Premium Pill Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 self-start px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold tracking-wide text-[#00dfd8] select-none"
            >
              <Sparkles className="w-3.5 h-3.5 animate-spin-slow text-[#00dfd8]" />
              <span>Next-Gen Agency in Digital Growth</span>
            </motion.div>

            {/* Giant Display Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-heading font-black tracking-tight text-4xl sm:text-5xl md:text-6xl text-white leading-[1.1]"
            >
              Transform Your Business with{" "}
              <span className="text-gradient-purple-blue relative inline-block">
                Digital Excellence
                <span className="absolute left-0 bottom-1 w-full h-[4px] bg-gradient-to-r from-[#00dfd8] via-[#0070f3] to-[#7928ca]" />
              </span>
            </motion.h1>

            {/* Subheadline detailing major services */}
            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-sans text-base sm:text-lg text-white/70 max-w-2xl leading-relaxed"
            >
              Helping businesses grow through{" "}
              <span className="text-white font-semibold">SEO</span>,{" "}
              <span className="text-white font-semibold">Digital Marketing</span>,{" "}
              <span className="text-[#00dfd8] font-semibold">Dropshipping</span>,{" "}
              <span className="text-white font-semibold">Video Editing</span>, and{" "}
              <span className="text-white font-semibold text-gradient-cyan-blue">Creative Design Solutions</span>.
            </motion.p>

            {/* CTA action buttons */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4"
            >
              <button
                id="hero-get-started"
                onClick={onCtaClick}
                className="group relative px-8 py-4 rounded-xl font-bold text-black bg-[#00dfd8] hover:bg-white hover:[box-shadow:0_0_30px_rgba(0,223,216,0.6)] transition-all duration-300 active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Get Started</span>
                <ArrowRight className="w-4.5 h-4.5 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                id="hero-contact-us"
                onClick={() => handleScrollToSection("services")}
                className="px-8 py-4 rounded-xl font-bold text-white bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-200 active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
              >
                Explore Services
              </button>
            </motion.div>

            {/* Simple social proof metrics */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="flex items-center gap-6 pt-6 border-t border-white/5 mt-8"
            >
              <div className="flex -space-x-3">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=120&auto=format&fit=crop"
                  alt="Client 1"
                  className="w-9 h-9 rounded-full border-2 border-[#030303] object-cover"
                  referrerPolicy="no-referrer"
                />
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=120&auto=format&fit=crop"
                  alt="Client 2"
                  className="w-9 h-9 rounded-full border-2 border-[#030303] object-cover"
                  referrerPolicy="no-referrer"
                />
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=120&auto=format&fit=crop"
                  alt="Client 3"
                  className="w-9 h-9 rounded-full border-2 border-[#030303] object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="flex flex-col">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#00dfd8] text-[#00dfd8]" />
                  ))}
                  <span className="text-xs font-bold text-white ml-1">5.0 Rating</span>
                </div>
                <span className="text-xs text-white/50">Trusted by over 50+ scaling partners</span>
              </div>
            </motion.div>

          </div>

          {/* Right Hero Column: Premium Interactive Tech Mockup Showcase */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, rotate: 2 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative w-full max-w-[440px] aspect-[4/5] glass-card rounded-2xl [box-shadow:0_20px_50px_rgba(0,112,243,0.15)] border border-white/10 p-5 overflow-hidden flex flex-col justify-between"
            >
              {/* Top Bar simulating a sleek interface browser */}
              <div className="flex items-center justify-between border-b border-white/8 pb-4">
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-red-500/80" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <span className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <span className="text-[10px] font-mono tracking-widest text-[#00dfd8] uppercase">
                  FLUXORA_ENGINE // LIVE
                </span>
                <span className="w-2.5 h-2.5 rounded-full bg-[#00dfd8] animate-ping" />
              </div>

              {/* Prominent Logo Presentation Header inside Sandbox panel */}
              <div className="bg-white/2 rounded-xl border border-white/5 p-4 flex items-center gap-4 text-left my-1">
                <div className="w-14 h-14 rounded-xl overflow-hidden border border-[#00dfd8]/30 flex-shrink-0 bg-black">
                  <img
                    src={logoAsset}
                    alt="Fluxora Hero Branding"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <h3 className="font-heading font-black text-lg text-white tracking-widest leading-none">
                    FLUX<span className="text-[#00dfd8]">ORA</span>
                  </h3>
                  <p className="text-[10px] text-white/50 tracking-wider font-mono mt-1">
                    ESTABLISHED DIGITAL HUB
                  </p>
                </div>
              </div>

              {/* Graphic charts & simulated growth curves */}
              <div className="space-y-4 my-auto">
                <div className="text-left">
                  <span className="text-[11px] font-mono tracking-wider text-white/40 uppercase">
                    Conversion Telemetry
                  </span>
                  <p className="text-3xl font-heading font-extrabold text-[#00dfd8] tracking-tight mt-0.5">
                    +342.14% <span className="text-white text-xs font-normal">ROI Yield</span>
                  </p>
                </div>

                {/* Growth visual box using pure Tailwind elements */}
                <div className="relative h-24 bg-white/5 rounded-lg border border-white/5 px-2 py-3 flex items-end justify-between overflow-hidden">
                  <div className="absolute top-2 left-2 text-[8px] font-mono text-white/30">
                    REALTIME VISIBILITY ACCELERATOR
                  </div>

                  <div className="w-4 h-[12%] bg-[#7928ca]/40 rounded-sm" />
                  <div className="w-4 h-[24%] bg-[#7928ca]/60 rounded-sm" />
                  <div className="w-4 h-[38%] bg-[#0070f3]/50 rounded-sm animate-pulse" />
                  <div className="w-4 h-[55%] bg-[#0070f3]/70 rounded-sm" />
                  <div className="w-4 h-[72%] bg-[#00dfd8]/60 rounded-sm" />
                  <div className="w-4 h-[92%] bg-gradient-to-t from-[#0070f3] to-[#00dfd8] rounded-sm relative [box-shadow:0_0_15px_rgba(0,223,216,0.5)]">
                    <span className="absolute -top-4 left-1/2 -translate-x-1/2 text-[8px] font-bold text-[#00dfd8]">
                      92%
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-white/4 p-3 rounded-xl border border-white/5 text-left">
                    <span className="text-[9px] font-mono text-white/40 block uppercase">
                      Average CPC
                    </span>
                    <span className="text-md font-bold text-white">$0.18</span>
                    <span className="text-[8px] text-[#00dfd8] block mt-0.5">▼ 45% decrease</span>
                  </div>
                  <div className="bg-white/4 p-3 rounded-xl border border-white/5 text-left">
                    <span className="text-[9px] font-mono text-white/40 block uppercase">
                      CTR Metric
                    </span>
                    <span className="text-md font-bold text-[#00dfd8]">8.72%</span>
                    <span className="text-[8px] text-white/40 block mt-0.5">National avg: 1.9%</span>
                  </div>
                </div>
              </div>

              {/* Action pill feedback inside card representing dropshipping & leads integration */}
              <div className="border-t border-white/8 pt-4 flex items-center justify-between text-[11px] text-white/60">
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#00dfd8]" />
                  <span>SLA Compliant Launch</span>
                </div>
                <span className="font-mono text-[9px] text-[#7928ca]">VERIFIED_SECURE</span>
              </div>

              {/* Absolute elements decorates the interface */}
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-tr from-[#7928ca] to-[#00dfd8] rounded-full blur-2xl opacity-20" />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
