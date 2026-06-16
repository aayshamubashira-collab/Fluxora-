/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Users, BarChart3, Cpu, Sparkles, TrendingUp, Clock, Target, CheckCircle } from "lucide-react";
import { FEATURES_DATA } from "../data";
import { FeatureReason } from "../types";

export default function WhyChooseUs() {
  // Map icon names to Lucide icons
  const renderFeatureIcon = (iconName: string, className: string) => {
    switch (iconName) {
      case "Users":
        return <Users className={className} />;
      case "BarChart3":
        return <BarChart3 className={className} />;
      case "Cpu":
        return <Cpu className={className} />;
      case "Sparkles":
        return <Sparkles className={className} />;
      case "TrendingUp":
        return <TrendingUp className={className} />;
      case "Clock":
        return <Clock className={className} />;
      case "Target":
        return <Target className={className} />;
      default:
        return <CheckCircle className={className} />;
    }
  };

  return (
    <section id="why-choose-us" className="py-24 relative bg-black overflow-hidden bg-grid">
      {/* Decorative Orbs */}
      <div className="absolute top-[40%] right-[-10%] w-[35vw] h-[35vw] bg-radial-purple rounded-full filter blur-[120px] pointer-events-none opacity-25" />
      <div className="absolute bottom-[10%] left-[-10%] w-[35vw] h-[35vw] bg-radial-cyan rounded-full filter blur-[120px] pointer-events-none opacity-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/15 rounded-full text-xs font-semibold uppercase tracking-widest text-[#00dfd8] mb-4">
            <span>The Fluxora Edge</span>
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl text-white tracking-tight">
            Why Partner with <span className="text-gradient-cyan-blue">Fluxora</span>?
          </h2>
          <p className="font-sans text-white/50 text-sm sm:text-base mt-4 max-w-2xl mx-auto">
            We move beyond standard agency patterns to deliver absolute brand growth through cutting-edge setups, premium content loops, and metric-first accountability.
          </p>
        </div>

        {/* Features Bento / Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          
          {/* Main Visual Callout Banner (Grid span 3 columns on sm, 1 or 2 on lg) */}
          <div className="md:col-span-2 bg-gradient-to-br from-[#11111d] to-[#040409] p-8 rounded-2xl border border-white/10 flex flex-col justify-between relative overflow-hidden [box-shadow:0_10px_35px_rgba(0,0,0,0.5)] lg:row-span-1 min-h-[220px]">
            {/* Ambient gradients within banner */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#00dfd8] rounded-full blur-[60px] opacity-20 pointer-events-none" />
            
            <div className="space-y-4 text-left">
              <div className="w-10 h-10 rounded-full bg-[#00dfd8]/10 flex items-center justify-center border border-[#00dfd8]/30">
                <Sparkles className="w-5 h-5 text-[#00dfd8]" />
              </div>
              <h3 className="text-xl sm:text-2xl font-heading font-black text-white leading-tight">
                An Ecosystem Designed to Scale Modern Ventures
              </h3>
              <p className="text-sm text-white/60 leading-relaxed font-sans max-w-lg">
                We combine technical precision (SEO & Store Systems) with creative power (Professional Editing & Branding) to run comprehensive marketing projects that increase margin size.
              </p>
            </div>

            <div className="flex items-center gap-4 border-t border-white/5 pt-4 mt-6 text-xs text-white/40 font-mono tracking-widest">
              <span>UNIFIED PIPELINE ENGINE // ACTIVE</span>
            </div>
          </div>

          {/* Map feature items dynamically */}
          {FEATURES_DATA.map((feature: FeatureReason) => (
            <div
              key={feature.id}
              className="glass-card rounded-2xl p-6 text-left border border-white/8 hover:border-[#00dfd8]/30 hover:[box-shadow:0_15px_30px_-15px_rgba(0,223,216,0.15)] transition-all duration-300 group hover:translate-y-[-3px] flex flex-col justify-between"
            >
              <div className="space-y-5">
                {/* Icon Wrapper */}
                <div className="w-11 h-11 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[#00dfd8] group-hover:bg-[#00dfd8]/10 group-hover:border-[#00dfd8]/30 transition-all">
                  {renderFeatureIcon(feature.iconName, "w-5 h-5 group-hover:scale-110 transition-transform")}
                </div>

                <div className="space-y-2">
                  <h4 className="text-md font-heading font-bold text-white tracking-tight group-hover:text-[#00dfd8] transition-colors">
                    {feature.title}
                  </h4>
                  <p className="text-xs sm:text-sm font-sans text-white/60 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>

              {/* Little visual accent anchor */}
              <div className="pt-5 border-t border-white/5 mt-5 flex items-center justify-between text-[11px] font-mono text-white/30">
                <span>VERIFIED ACCENT</span>
                <span className="text-[#00dfd8] opacity-0 group-hover:opacity-100 transition-opacity">✓</span>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
