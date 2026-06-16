/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { Search, ShoppingBag, Video, Palette, Megaphone, Check, ArrowRight } from "lucide-react";
import { SERVICES_DATA } from "../data";
import { Service } from "../types";

interface ServicesProps {
  onServiceSelect: (serviceName: string) => void;
}

export default function Services({ onServiceSelect }: ServicesProps) {
  const [activeServiceId, setActiveServiceId] = useState<string | null>(null);

  // Map icon strings to Lucide components
  const renderIcon = (iconName: string, className: string) => {
    switch (iconName) {
      case "Search":
        return <Search className={className} />;
      case "ShoppingBag":
        return <ShoppingBag className={className} />;
      case "Video":
        return <Video className={className} />;
      case "Palette":
        return <Palette className={className} />;
      case "Megaphone":
        return <Megaphone className={className} />;
      default:
        return <Search className={className} />;
    }
  };

  return (
    <section id="services" className="py-24 relative bg-[#030303] overflow-hidden bg-grid">
      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-[20%] left-[-15%] w-[45vw] h-[45vw] bg-radial-cyan rounded-full filter blur-[140px] pointer-events-none opacity-30" />
      <div className="absolute bottom-[20%] right-[-15%] w-[45vw] h-[45vw] bg-radial-purple rounded-full filter blur-[140px] pointer-events-none opacity-30" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/15 rounded-full text-xs font-semibold uppercase tracking-widest text-[#00dfd8] mb-4">
            <span>Our Core Capabilities</span>
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl text-white tracking-tight">
            High-Impact Digital <span className="text-gradient-purple-blue">Solutions</span>
          </h2>
          <p className="font-sans text-white/50 text-sm sm:text-base mt-4 max-w-2xl mx-auto">
            We offer multi-channel, premium services designed exclusively for modern brands ready to capture audience authority and boost conversions.
          </p>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_DATA.map((service: Service) => {
            const isHovered = activeServiceId === service.id;
            return (
              <div
                key={service.id}
                onMouseEnter={() => setActiveServiceId(service.id)}
                onMouseLeave={() => setActiveServiceId(null)}
                className="glass-card rounded-2xl p-8 text-left relative flex flex-col justify-between overflow-hidden border border-white/8 transition-all duration-300 hover:border-[#00dfd8]/40 hover:[box-shadow:0_15px_40px_-15px_rgba(0,223,216,0.15)] group hover:translate-y-[-4px]"
              >
                {/* Glowing subtle gradient line on hover */}
                <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-[#00dfd8] to-[#0070f3] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="space-y-6">
                  {/* Icon Area */}
                  <div className="w-14 h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center relative overflow-hidden group-hover:border-[#00dfd8]/40 transition-colors">
                    <div className="absolute inset-x-0 bottom-0 top-1/2 bg-gradient-to-b from-transparent to-[#0070f3]/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                    {renderIcon(service.iconName, "w-6 h-6 text-[#00dfd8] group-hover:scale-110 transition-transform")}
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-3">
                    <h3 className="text-xl font-heading font-bold text-white tracking-tight">
                      {service.title}
                    </h3>
                    <p className="text-sm font-sans text-white/60 leading-relaxed min-h-[72px]">
                      {service.description}
                    </p>
                  </div>

                  {/* Feature Bullets list */}
                  <div className="space-y-2 border-t border-white/5 pt-4">
                    {service.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-[#00dfd8] flex-shrink-0" />
                        <span className="text-[12px] text-white/80 font-sans tracking-wide">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card CTA Trigger Link */}
                <div className="pt-8">
                  <button
                    onClick={() => onServiceSelect(service.title)}
                    className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#00dfd8] group-hover:text-white transition-colors cursor-pointer"
                  >
                    <span>Request Service</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
