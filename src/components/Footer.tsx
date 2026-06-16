/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Sparkles, Linkedin, Instagram, Facebook, Twitter, ArrowUp, MapPin, Mail, Phone } from "lucide-react";

// Import the generated logo file correctly using Vite asset resolution
// @ts-ignore
import logoAsset from "../assets/images/fluxora_logo_1781594275692.jpg";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#030303] text-white/60 font-sans pt-16 pb-8 border-t border-white/7 relative overflow-hidden bg-grid">
      
      {/* Decorative Blur Backgrounds */}
      <div className="absolute bottom-0 right-0 w-[30vw] h-[30vw] bg-radial-purple rounded-full filter blur-[100px] pointer-events-none opacity-20" />
      <div className="absolute top-0 left-0 w-[30vw] h-[30vw] bg-radial-cyan rounded-full filter blur-[100px] pointer-events-none opacity-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Footer Layout Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/5">
          
          {/* Column 1: Brand & Bio */}
          <div className="lg:col-span-4 space-y-5 text-left">
            <a href="#" className="flex items-center gap-2.5 group">
              <div className="relative w-10 h-10 flex items-center justify-center bg-black rounded-xl overflow-hidden border border-white/10 shadow-lg">
                <img
                  src={logoAsset}
                  alt="Fluxora Logo"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-black tracking-widest text-xl text-white">
                  FLUX<span className="text-[#00dfd8]">ORA</span>
                </span>
                <span className="text-[9px] font-sans tracking-[0.25em] text-[#00dfd8] -mt-1 uppercase">
                  Digital Marketing
                </span>
              </div>
            </a>

            <p className="text-sm text-white/50 leading-relaxed max-w-sm">
              We are a next-generation results-driven marketing and design agency dedicated to helping brands build dominant online presence and scale revenue margins.
            </p>

            {/* Tagline Box with custom gradients */}
            <div className="p-3 bg-white/4 rounded-xl border border-white/5 inline-block text-left relative overflow-hidden">
              <span className="text-xs font-bold text-white tracking-wide uppercase">
                Tagline:{" "}
                <span className="text-gradient-cyan-blue font-extrabold tracking-wider">
                  Transform. Grow. Succeed.
                </span>
              </span>
            </div>

            {/* Social Media Links */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-[#00dfd8] text-white hover:text-black hover:scale-105 border border-white/10 flex items-center justify-center transition"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-[#00dfd8] text-white hover:text-black hover:scale-105 border border-white/10 flex items-center justify-center transition"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-[#00dfd8] text-white hover:text-black hover:scale-105 border border-white/10 flex items-center justify-center transition"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-[#00dfd8] text-white hover:text-black hover:scale-105 border border-white/10 flex items-center justify-center transition"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2 text-left space-y-4">
            <h4 className="text-xs font-mono font-bold tracking-widest text-[#00dfd8] uppercase">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm font-medium">
              <li>
                <a href="#about" className="hover:text-white hover:translate-x-1 block transition-all duration-150">
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white hover:translate-x-1 block transition-all duration-150">
                  Services
                </a>
              </li>
              <li>
                <a href="#why-choose-us" className="hover:text-white hover:translate-x-1 block transition-all duration-150">
                  Why Us
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-white hover:translate-x-1 block transition-all duration-150">
                  Our Process
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-white hover:translate-x-1 block transition-all duration-150">
                  Portfolio Cases
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-white hover:translate-x-1 block transition-all duration-150">
                  Client Reviews
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Services List */}
          <div className="lg:col-span-3 text-left space-y-4">
            <h4 className="text-xs font-mono font-bold tracking-widest text-[#00dfd8] uppercase">
              Core Offerings
            </h4>
            <ul className="space-y-2.5 text-sm font-medium">
              <li>
                <a href="#services" className="hover:text-white hover:translate-x-1 block transition-all duration-150">
                  SEO Optimization Suite
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white hover:translate-x-1 block transition-all duration-150">
                  Dropshipping Setup & CRO
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white hover:translate-x-1 block transition-all duration-150">
                  High-Retention Video Editing
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white hover:translate-x-1 block transition-all duration-150">
                  Corporate Branding & Logo Pack
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white hover:translate-x-1 block transition-all duration-150">
                  Performance Paid Campaigns
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact details summary */}
          <div className="lg:col-span-3 text-left space-y-4">
            <h4 className="text-xs font-mono font-bold tracking-widest text-[#00dfd8] uppercase">
              Contact Desk
            </h4>
            <div className="space-y-3.5 text-sm">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#00dfd8] mt-0.5 flex-shrink-0" />
                <span className="text-white/60 text-xs leading-relaxed">
                  Perinthalmanna, Malappuram Kerala, India
                </span>
              </div>

              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-[#00dfd8] flex-shrink-0" />
                <a href="mailto:aayshamubashira@gmail.com" className="hover:text-white hover:underline text-xs block truncate">
                  aayshamubashira@gmail.com
                </a>
              </div>

              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#00dfd8] flex-shrink-0" />
                <a href="tel:9645377202" className="hover:text-white text-xs block">
                  +91 96453 77202
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Footer Sub bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-medium text-white/30 border-t border-white/2 mt-1">
          
          {/* Copyright description */}
          <p className="text-center sm:text-left text-white/30 font-sans">
            Copyright &copy; {currentYear} <span className="text-white">FLUXORA</span> Digital Marketing Agency. All Rights Reserved.
          </p>

          <div className="flex items-center gap-6">
            <a href="#about" className="hover:text-white transition">Privacy Policy</a>
            <a href="#services" className="hover:text-white transition">Terms of Service</a>
            
            {/* Scroll back to top button */}
            <button
              onClick={scrollToTop}
              className="w-8 h-8 rounded-lg bg-white/5 hover:bg-[#00dfd8] hover:text-black flex items-center justify-center border border-white/5 transition-all text-white/60 hover:scale-105 cursor-pointer"
              title="Scroll back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </footer>
  );
}
