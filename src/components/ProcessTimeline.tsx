/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { CheckCircle2, ChevronRight, Activity, Cpu, Sparkles, TrendingUp } from "lucide-react";
import { PROCESS_STEPS } from "../data";
import { ProcessStep } from "../types";

export default function ProcessTimeline() {
  const [activeStep, setActiveStep] = useState<number>(1);

  const getStepIcon = (step: number, className: string) => {
    switch (step) {
      case 1:
        return <Activity className={className} />;
      case 2:
        return <Cpu className={className} />;
      case 3:
        return <Sparkles className={className} />;
      case 4:
        return <TrendingUp className={className} />;
      default:
        return <CheckCircle2 className={className} />;
    }
  };

  return (
    <section id="process" className="py-24 relative bg-[#030303] overflow-hidden bg-grid">
      {/* Decorative Blur Orbs */}
      <div className="absolute top-[30%] left-[-15%] w-[45vw] h-[45vw] bg-radial-cyan rounded-full filter blur-[150px] pointer-events-none opacity-20" />
      <div className="absolute bottom-[20%] right-[-15%] w-[45vw] h-[45vw] bg-radial-purple rounded-full filter blur-[150px] pointer-events-none opacity-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/15 rounded-full text-xs font-semibold uppercase tracking-widest text-[#00dfd8] mb-4">
            <span>Execution Blueprint</span>
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl text-white tracking-tight">
            How We Get You <span className="text-gradient-purple-blue">Results</span>
          </h2>
          <p className="font-sans text-white/50 text-sm sm:text-base mt-4 max-w-2xl mx-auto">
            A meticulous four-stage digital operation framework built to guide assets from initial data analytics to scalable market dominance.
          </p>
        </div>

        {/* Process Roadmap layout split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mt-8">
          
          {/* Left Side: Interactive Step Selectors & Line */}
          <div className="lg:col-span-5 space-y-4">
            <p className="text-[10px] font-mono tracking-widest text-[#00dfd8] uppercase mb-6 block text-left">
              Select steps to explore details //
            </p>
            
            <div className="space-y-3 relative">
              {/* Core vertical connector line */}
              <div className="absolute left-[26px] top-6 bottom-6 w-[2px] bg-gradient-to-b from-[#00dfd8] via-[#0070f3] to-[#7928ca] opacity-20" />

              {PROCESS_STEPS.map((stepItem: ProcessStep) => {
                const isActive = activeStep === stepItem.step;
                return (
                  <button
                    key={stepItem.step}
                    onClick={() => setActiveStep(stepItem.step)}
                    className={`w-full text-left p-5 rounded-xl border transition-all duration-300 flex items-center gap-4 relative cursor-pointer ${
                      isActive
                        ? "bg-white/5 border-[#00dfd8] [box-shadow:0_5px_20px_rgba(0,223,216,0.1)]"
                        : "bg-transparent border-white/5 hover:bg-white/2 hover:border-white/15"
                    }`}
                  >
                    {/* Glowing point for active status */}
                    {isActive && (
                      <span className="absolute left-[24px] w-2 h-2 rounded-full bg-[#00dfd8] animate-ping z-10" />
                    )}

                    {/* Step badge number or icon */}
                    <div
                      className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 relative z-20 font-bold transition-all duration-300 ${
                        isActive
                          ? "bg-[#00dfd8] text-black shadow-lg"
                          : "bg-white/5 text-white/40 border border-white/10"
                      }`}
                    >
                      {getStepIcon(stepItem.step, "w-5 h-5")}
                    </div>

                    <div className="flex-grow">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-white/30">
                          STAGE 0{stepItem.step}
                        </span>
                        {isActive && <ChevronRight className="w-4 h-4 text-[#00dfd8]" />}
                      </div>
                      <h4
                        className={`text-md sm:text-lg font-heading font-bold transition-colors mt-0.5 ${
                          isActive ? "text-[#00dfd8]" : "text-white/80"
                        }`}
                      >
                        {stepItem.title}
                      </h4>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Side: Step active showcase display */}
          <div className="lg:col-span-7">
            {PROCESS_STEPS.map((stepItem: ProcessStep) => {
              if (stepItem.step !== activeStep) return null;
              return (
                <div
                  key={stepItem.step}
                  className="glass-card p-8 rounded-2xl border border-white/10 text-left relative overflow-hidden animate-fade-in"
                >
                  {/* Backdrop subtle gradient */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#0070f3]/10 to-[#7928ca]/10 rounded-full blur-2xl opacity-60 pointer-events-none" />

                  {/* Header info */}
                  <div className="flex items-center justify-between border-b border-white/5 pb-6">
                    <div>
                      <span className="text-xs font-mono font-bold tracking-widest text-[#00dfd8] uppercase">
                        Current Focus Profile
                      </span>
                      <h3 className="font-heading font-black text-2xl sm:text-3xl text-white mt-1">
                        {stepItem.title}
                      </h3>
                    </div>
                    <span className="text-5xl font-heading font-black text-white/10 select-none">
                      0{stepItem.step}
                    </span>
                  </div>

                  {/* Description text */}
                  <p className="font-sans text-white/70 text-base leading-relaxed my-6 font-medium">
                    {stepItem.description}
                  </p>

                  {/* Micro milestones checkpoints */}
                  <div className="space-y-4">
                    <h5 className="text-xs font-mono font-bold tracking-widest text-[#00dfd8]/80 uppercase">
                      Deliverables Checklist //
                    </h5>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {stepItem.details.map((detail, dIdx) => (
                        <div
                          key={dIdx}
                          className="p-3 bg-white/4 rounded-lg border border-white/5 flex items-center gap-3"
                        >
                          <div className="w-5 h-5 rounded-full bg-[#00dfd8]/15 flex items-center justify-center text-[#00dfd8] flex-shrink-0">
                            <CheckCircle2 className="w-3.5 h-3.5" />
                          </div>
                          <span className="text-xs sm:text-sm text-white/80 font-sans tracking-wide">
                            {detail}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Estimated process timeline marker */}
                  <div className="border-t border-white/5 pt-6 mt-8 flex flex-col sm:flex-row items-stretch sm:items-center justify-between text-xs text-white/40 font-semibold gap-3">
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                      <span>Status: Systemized Delivery Framework</span>
                    </div>
                    <span>Duration: Variable Based on Scope</span>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
