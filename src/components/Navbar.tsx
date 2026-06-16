/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

// Import custom generated logo file
// @ts-ignore
import logoAsset from "../assets/images/fluxora_logo_1781594275692.jpg";

interface NavbarProps {
  onContactClick: () => void;
}

export default function Navbar({ onContactClick }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Why Us", href: "#why-choose-us" },
    { name: "Our Process", href: "#process" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Testimonials", href: "#testimonials" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass-nav py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="relative w-10 h-10 flex items-center justify-center bg-black rounded-xl overflow-hidden border border-white/10 [box-shadow:0_0_20px_-3px_rgba(0,223,216,0.35)]">
              <img
                src={logoAsset}
                alt="Fluxora Corporate Logo"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-550"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-black tracking-widest text-xl text-white">
                FLUX<span className="text-[#00dfd8]">ORA</span>
              </span>
              <span className="text-[9px] font-sans tracking-[0.25em] text-white/50 -mt-1 uppercase">
                Digital Excellence
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex gap-6 items-center">
              {menuItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="font-sans text-sm font-medium text-white/75 hover:text-[#00dfd8] hover:translate-y-[-1px] transition-all duration-150 relative group"
                >
                  {item.name}
                  <span className="absolute bottom-[-4px] left-0 w-0 h-[2px] bg-gradient-to-r from-[#00dfd8] to-[#0070f3] transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </div>

            <button
              id="nav-cta-btn"
              onClick={onContactClick}
              className="px-5 py-2 rounded-xl text-sm font-semibold tracking-wide text-black bg-[#00dfd8] hover:bg-white hover:[box-shadow:0_0_25px_rgba(0,223,216,0.5)] transition-all duration-300 active:scale-95 cursor-pointer"
            >
              Get Started
            </button>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-white/80 hover:text-white hover:bg-white/5 transition"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-black/95 border-b border-white/10 px-4 pt-3 pb-6 space-y-3"
          >
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block py-2.5 px-3 rounded-lg text-base font-medium text-white/80 hover:bg-white/5 hover:text-white transition"
              >
                {item.name}
              </a>
            ))}
            <div className="pt-2 px-3">
              <button
                onClick={() => {
                  setIsOpen(false);
                  onContactClick();
                }}
                className="w-full text-center px-4 py-3 rounded-xl text-sm font-bold text-black bg-gradient-to-r from-[#00dfd8] to-[#0070f3] hover:opacity-95 transition cursor-pointer"
              >
                Get Started
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
