/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function WhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(true);
  const phoneNumber = "917558026894"; // Formatted for WhatsApp API (no leading + or spaces)
  const defaultMessage = encodeURIComponent("Hello Fluxora Team! I would like to inquire about your premium digital marketing and design solutions.");
  const waUrl = `https://wa.me/${phoneNumber}?text=${defaultMessage}`;

  return (
    <div className="fixed bottom-6 right-6 z-45 flex flex-col items-end gap-2">
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="bg-[#0b0b16] border border-white/10 p-3.5 rounded-2xl shadow-2xl flex flex-col max-w-[260px] text-left relative [box-shadow:0_15px_30px_rgba(0,0,0,0.8)]"
          >
            {/* Close tooltip button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setShowTooltip(false);
              }}
              className="absolute top-2 right-2 p-1 rounded-full text-white/30 hover:text-white/80 hover:bg-white/5 transition"
              title="Close chat tooltip"
            >
              <X className="w-3.5 h-3.5" />
            </button>

            {/* Content info */}
            <div className="flex gap-2.5 items-start pr-4">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-ping mt-1.5 flex-shrink-0" />
              <div className="space-y-0.5">
                <span className="text-[10px] uppercase font-mono tracking-widest text-[#00dfd8] block font-bold">
                  Instant Access
                </span>
                <p className="text-[12px] font-sans font-semibold text-white/90 leading-snug">
                  Chat directly with our core marketing strategists today!
                </p>
              </div>
            </div>

            <a
              href={waUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-3.5 text-center text-[11px] font-bold uppercase tracking-wider text-black bg-[#25d366] hover:bg-white px-3 py-2 rounded-xl transition-all duration-300"
            >
              Message Us Now
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Pulse Floating Button */}
      <a
        href={waUrl}
        target="_blank"
        rel="noreferrer"
        className="group relative w-14 h-14 rounded-full bg-[#25d366] text-white flex items-center justify-center shadow-2xl [box-shadow:0_0_30px_rgba(37,211,102,0.4)] hover:scale-105 active:scale-95 transition-all duration-300 hover:bg-white hover:text-[#25d366]"
        aria-label="Contact Fluxora on WhatsApp"
        onMouseEnter={() => setShowTooltip(true)}
      >
        {/* Animated background rings mimicking radar signals */}
        <span className="absolute inset-0 rounded-full bg-[#25d366]/40 animate-ping pointer-events-none scale-105" />
        <span className="absolute inset-0 rounded-full bg-[#25d366]/20 animate-pulse pointer-events-none scale-125" />

        <MessageCircle className="w-6 h-6 stroke-[2.2] relative z-10 transition-transform duration-300 group-hover:rotate-12" />
      </a>
    </div>
  );
}
