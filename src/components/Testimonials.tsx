/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import { TESTIMONIALS_DATA } from "../data";
import { Testimonial } from "../types";

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? TESTIMONIALS_DATA.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setActiveIndex((prev) => (prev === TESTIMONIALS_DATA.length - 1 ? 0 : prev + 1));
  };

  // Auto-play slider periodically
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const activeTest = TESTIMONIALS_DATA[activeIndex];

  return (
    <section id="testimonials" className="py-24 relative bg-[#030303] overflow-hidden bg-grid">
      {/* Ambient backgrounds */}
      <div className="absolute top-[40%] left-[-10%] w-[35vw] h-[35vw] bg-radial-purple rounded-full filter blur-[100px] pointer-events-none opacity-20" />
      <div className="absolute bottom-[20%] right-[-10%] w-[35vw] h-[35vw] bg-radial-cyan rounded-full filter blur-[100px] pointer-events-none opacity-20" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/15 rounded-full text-xs font-semibold uppercase tracking-widest text-[#00dfd8] mb-4">
            <span>Client Endorsements</span>
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-4xl text-white tracking-tight">
            Loved by Market <span className="text-gradient-purple-blue">Leaders</span>
          </h2>
        </div>

        {/* Testimonial Active Slider Card */}
        <div className="relative min-h-[380px] flex flex-col justify-between p-8 sm:p-12 rounded-3xl glass-card border border-white/8 shadow-2xl overflow-hidden text-left">
          
          {/* Quote large decoration icon */}
          <div className="absolute top-6 right-8 text-white/5 pointer-events-none">
            <Quote className="w-24 h-24 stroke-[1.5]" />
          </div>

          <div className="space-y-6 sm:space-y-8 relative z-10">
            {/* Stars rating */}
            <div className="flex items-center gap-1">
              {[...Array(activeTest.rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-[#00dfd8] fill-[#00dfd8]" />
              ))}
            </div>

            {/* Testimonial Quote */}
            <p className="text-base sm:text-xl md:text-2xl text-white/90 font-sans tracking-wide leading-relaxed font-light italic">
              "{activeTest.quote}"
            </p>
          </div>

          {/* Client Bio & Nav Controls */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between border-t border-white/5 pt-6 mt-8 gap-6 relative z-10">
            
            {/* User Profile */}
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full overflow-hidden border border-[#00dfd8]/30">
                <img
                  src={activeTest.avatarUrl}
                  alt={activeTest.name}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="text-left">
                <h4 className="text-sm sm:text-md font-heading font-bold text-white tracking-tight">
                  {activeTest.name}
                </h4>
                <p className="text-xs text-white/50 font-sans mt-0.5">
                  {activeTest.role}, <span className="text-[#00dfd8]">{activeTest.company}</span>
                </p>
              </div>
            </div>

            {/* Controls */}
            <div className="flex items-center gap-3">
              <button
                onClick={prevSlide}
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 text-white/80 hover:text-white flex items-center justify-center transition cursor-pointer"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {/* Bullets tracker */}
              <div className="flex gap-1.5 px-2">
                {TESTIMONIALS_DATA.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveIndex(idx)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      activeIndex === idx ? "w-6 bg-[#00dfd8]" : "bg-white/10 hover:bg-white/20"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextSlide}
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 text-white/80 hover:text-white flex items-center justify-center transition cursor-pointer"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
