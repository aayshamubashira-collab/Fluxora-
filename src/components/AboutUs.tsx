/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Award, Briefcase, ThumbsUp, Users, Sparkles } from "lucide-react";

export default function AboutUs() {
  const stats = [
    {
      value: "100+",
      label: "Projects Completed",
      icon: Briefcase,
      color: "text-[#00dfd8]",
      bg: "rgba(0, 223, 216, 0.1)",
    },
    {
      value: "50+",
      label: "Active Clients",
      icon: Users,
      color: "text-[#0070f3]",
      bg: "rgba(0, 112, 243, 0.1)",
    },
    {
      value: "5+",
      label: "Core Services",
      icon: Award,
      color: "text-[#7928ca]",
      bg: "rgba(121, 40, 202, 0.1)",
    },
    {
      value: "100%",
      label: "Client Satisfaction",
      icon: ThumbsUp,
      color: "text-green-400",
      bg: "rgba(74, 222, 128, 0.1)",
    },
  ];

  return (
    <section id="about" className="py-24 relative bg-black overflow-hidden bg-grid">
      {/* Decorative Orbs */}
      <div className="absolute top-[40%] right-[-10%] w-[35vw] h-[35vw] bg-radial-purple rounded-full filter blur-[120px] pointer-events-none opacity-40" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Side: Agency image & stats overlay grid */}
          <div className="lg:col-span-6 relative order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden glass-card p-2 [box-shadow:0_10px_40px_rgba(0,0,0,0.8)] border border-white/10 group">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent z-10 pointer-events-none" />
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop"
                alt="Fluxora Strategic Agency Team"
                className="w-full aspect-[4/3] object-cover rounded-xl grayscale group-hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              
              {/* Dynamic decorative badge on photo */}
              <div className="absolute top-6 left-6 z-20 flex items-center gap-2 bg-black/80 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/10">
                <Sparkles className="w-3.5 h-3.5 text-[#00dfd8] animate-pulse" />
                <span className="text-[11px] font-heading font-semibold text-white uppercase tracking-wider">
                  Innovation Lab
                </span>
              </div>
            </div>

            {/* Micro visual overlay representation of a live telemetry chart */}
            <div className="absolute -bottom-6 -left-6 glass-card p-4 rounded-xl border border-white/10 z-20 shadow-2xl flex items-center gap-4 animate-bounce-slow">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#00dfd8] to-[#0070f3] flex items-center justify-center text-black font-extrabold text-sm shadow-md">
                FX
              </div>
              <div className="text-left">
                <p className="text-xs text-white/40 uppercase font-mono tracking-widest leading-none">
                  Growth Index
                </p>
                <p className="text-md font-bold text-white mt-1">Market Dominator</p>
              </div>
            </div>
          </div>

          {/* Right Side: Text & mission parameters */}
          <div className="lg:col-span-6 text-left flex flex-col space-y-6 order-1 lg:order-2">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/15 rounded-full text-xs font-semibold uppercase tracking-widest text-[#00dfd8] self-start">
              <span>Who We Are</span>
            </div>

            <h2 className="font-heading font-black text-3xl sm:text-4xl text-white leading-tight">
              Driving Business Outcomes In A{" "}
              <span className="text-gradient-cyan-blue">Digital-First Era</span>
            </h2>

            <p className="font-sans text-white/70 text-base leading-relaxed">
              Fluxora is a results-driven digital marketing agency dedicated to helping businesses build a
              powerful online presence and achieve sustainable growth. We combine creativity, technology,
              and strategic marketing solutions to transform brands into market leaders.
            </p>

            <p className="font-sans text-white/50 text-sm leading-relaxed border-l-2 border-[#00dfd8] pl-4">
              Our mission is to empower businesses with innovative digital solutions that increase visibility,
              generate leads, and maximize business success in the digital world. We make sure your resources are
              deployed target-effectively, minimizing ad-waste while maximizing retention.
            </p>

            {/* Overlaid stats grid inside AboutUs component */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              {stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-white/5 border border-white/5 hover:border-white/10 hover:bg-white/8 transition-all duration-300 group flex items-start gap-3.5"
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: stat.bg }}
                  >
                    <stat.icon className={`w-5 h-5 ${stat.color} group-hover:scale-110 transition-transform`} />
                  </div>
                  <div className="text-left">
                    <h4 className="text-xl sm:text-2xl font-heading font-extrabold text-white tracking-tight leading-none">
                      {stat.value}
                    </h4>
                    <p className="text-[11px] font-sans text-white/50 tracking-wide mt-1 leading-tight">
                      {stat.label}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
