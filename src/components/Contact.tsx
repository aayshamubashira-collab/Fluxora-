/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { MapPin, Mail, Phone, Clock, Send, CheckCircle, HelpCircle } from "lucide-react";

interface ContactProps {
  selectedServicePreset?: string;
}

export default function Contact({ selectedServicePreset = "" }: ContactProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: selectedServicePreset || "SEO",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Update selection if the preset changes externally
  React.useEffect(() => {
    if (selectedServicePreset) {
      setFormData((prev) => ({ ...prev, service: selectedServicePreset }));
    }
  }, [selectedServicePreset]);

  // Handle Input Changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Prepopulate form helper for preview demo purposes
  const handlePrepopulate = () => {
    setFormData({
      name: "Fluxora Client",
      email: "aayshamubashira@gmail.com",
      phone: "9645377202",
      service: selectedServicePreset || "Digital Marketing",
      message: "Hello Fluxora team, I would like to schedule a strategic review of our current SEO footprints and digital performance. Looking forward to connecting!",
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API pipeline transmission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      // Reset form (except email/phone for easy tracking)
      setFormData({
        name: "",
        email: "aayshamubashira@gmail.com",
        phone: "9645377202",
        service: "SEO",
        message: "",
      });
      // Clear message success banner after 5 sec
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 relative bg-black overflow-hidden bg-grid">
      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-[40%] right-[-15%] w-[45vw] h-[45vw] bg-radial-purple rounded-full filter blur-[150px] pointer-events-none opacity-20" />
      <div className="absolute bottom-[10%] left-[-15%] w-[45vw] h-[45vw] bg-radial-cyan rounded-full filter blur-[150px] pointer-events-none opacity-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/15 rounded-full text-xs font-semibold uppercase tracking-widest text-[#00dfd8] mb-4">
            <span>Get In Touch</span>
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl text-white tracking-tight">
            Let's Launch Your <span className="text-gradient-purple-blue">Project</span>
          </h2>
          <p className="font-sans text-white/50 text-sm sm:text-base mt-4 max-w-2xl mx-auto font-light">
            We are here to help scale you to new digital heights. Complete the interactive form below to kickstart your free SEO and CRO snapshot audits.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Column: Location & Contact Cards */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            
            <div className="space-y-6">
              <div className="glass-card p-6 rounded-2xl border border-white/8 text-left space-y-4">
                <h3 className="text-xl font-heading font-black text-white tracking-tight border-b border-white/5 pb-3">
                  Company Headquarters
                </h3>
                <div className="space-y-1">
                  <p className="text-sm font-bold text-[#00dfd8]">Fluxora Digital Marketing Agency</p>
                  <p className="text-xs text-white/50">Leader in high-yield search and creative commerce</p>
                </div>

                <div className="space-y-4 pt-2">
                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-lg bg-[#00dfd8]/10 flex items-center justify-center text-[#00dfd8] flex-shrink-0 mt-0.5">
                      <MapPin className="w-4.5 h-4.5" />
                    </div>
                    <div className="text-left font-sans">
                      <p className="text-xs text-white/40 uppercase tracking-widest font-mono font-semibold">Location</p>
                      <p className="text-xs sm:text-sm text-white/80 font-medium mt-0.5 leading-relaxed">
                        Perinthalmanna, Malappuram<br />Kerala, India
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-lg bg-[#00dfd8]/10 flex items-center justify-center text-[#00dfd8] flex-shrink-0 mt-0.5">
                      <Mail className="w-4.5 h-4.5" />
                    </div>
                    <div className="text-left font-sans">
                      <p className="text-xs text-white/40 uppercase tracking-widest font-mono font-semibold">Inquiries</p>
                      <a href="mailto:aayshamubashira@gmail.com" className="text-xs sm:text-sm text-[#00dfd8] hover:underline font-bold mt-0.5 block">
                        aayshamubashira@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-lg bg-[#00dfd8]/10 flex items-center justify-center text-[#00dfd8] flex-shrink-0 mt-0.5">
                      <Phone className="w-4.5 h-4.5" />
                    </div>
                    <div className="text-left font-sans">
                      <p className="text-xs text-white/40 uppercase tracking-widest font-mono font-semibold">Phone Helpline</p>
                      <a href="tel:9645377202" className="text-xs sm:text-sm text-white/90 font-bold hover:text-[#00dfd8] transition mt-0.5 block">
                        +91 96453 77202
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5 border-t border-white/5 pt-4">
                    <div className="w-9 h-9 rounded-lg bg-[#7928ca]/10 flex items-center justify-center text-[#7928ca] flex-shrink-0 mt-0.5">
                      <Clock className="w-4.5 h-4.5" />
                    </div>
                    <div className="text-left font-sans">
                      <p className="text-xs text-white/40 uppercase tracking-widest font-mono font-semibold">Active Hours</p>
                      <p className="text-xs text-white/80 mt-0.5">
                        Monday - Saturday: 9:00 AM - 6:00 PM IST
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Direct Demo Prepopulation Shortcut Card */}
              <div className="p-5 bg-gradient-to-br from-[#11111e]/60 to-[#040409] rounded-2xl border border-white/5 text-left flex items-center justify-between gap-4">
                <div className="space-y-1 flex-grow">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-[#00dfd8]">
                    <HelpCircle className="w-3.5 h-3.5 text-[#00dfd8]" />
                    <span>Demo Form Helper</span>
                  </div>
                  <p className="text-[11px] text-white/50 leading-snug">
                    Want to test the submission pipeline quickly? Click the helper to pre-fill the form coordinates.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={handlePrepopulate}
                  className="px-3.5 py-2 rounded-lg text-[10px] font-bold uppercase tracking-wider text-black bg-[#00dfd8] hover:bg-white transition flex-shrink-0 cursor-pointer"
                >
                  Pre-Fill Form
                </button>
              </div>
            </div>

            {/* Google Map Integration Element */}
            <div className="relative rounded-2xl overflow-hidden glass-card border border-white/8 aspect-video w-full shadow-lg [box-shadow:0_10px_30px_rgba(0,0,0,0.5)]">
              {/* Dark Google Map Embed centered on Perinthalmanna, Kerala */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.491223930419!2d76.21639!3d10.978889!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7cd362fc5711f%3A0x6339cc90ff9d231e!2sPerinthalmanna%2C%20Kerala%20679322%2C%20India!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) brightness(95%) contrast(90%)" }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Fluxora Digital Location Map"
              />
              {/* Location pin indicator */}
              <div className="absolute bottom-3 left-3 bg-black/85 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10 text-[10px] text-white/80 font-mono tracking-widest">
                PERINTHALMANNA // KERALA
              </div>
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-card p-8 rounded-3xl border border-white/8 text-left shadow-2xl relative">
              <div className="absolute top-0 left-10 w-32 h-[3px] bg-gradient-to-r from-[#00dfd8] to-[#0070f3]" />
              
              <h3 className="text-xl sm:text-2xl font-heading font-black text-white tracking-tight mb-6">
                Direct Inquiry Portal
              </h3>

              {/* Submit Success Banner */}
              {submitSuccess && (
                <div className="mb-6 p-4 rounded-xl bg-green-500/10 border border-green-500/30 flex items-start gap-3.5 animate-scale-up">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <div className="text-left font-sans">
                    <h5 className="text-sm font-bold text-green-400">Inquiry Sent Successfully!</h5>
                    <p className="text-xs text-white/60 mt-1">
                      Our strategists have received your details. We will reach back to <span className="font-bold text-white">aayshamubashira@gmail.com</span> within 24 hours.
                    </p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                
                {/* Name */}
                <div className="space-y-1.5 text-left">
                  <label htmlFor="name" className="text-[11px] font-mono font-bold tracking-widest text-white/50 uppercase">
                    Your Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. fluxora client"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl font-sans text-sm text-white placeholder-white/30 focus:border-[#00dfd8] focus:bg-white/8 outline-none transition"
                    required
                  />
                </div>

                {/* Grid for Email & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Email */}
                  <div className="space-y-1.5 text-left">
                    <label htmlFor="email" className="text-[11px] font-mono font-bold tracking-widest text-white/50 uppercase">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. aayshamubashira@gmail.com"
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl font-sans text-sm text-white placeholder-white/30 focus:border-[#00dfd8] focus:bg-white/8 outline-none transition"
                      required
                    />
                  </div>

                  {/* Phone */}
                  <div className="space-y-1.5 text-left">
                    <label htmlFor="phone" className="text-[11px] font-mono font-bold tracking-widest text-white/50 uppercase">
                      Contact Helpline Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="e.g. 9645377202"
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl font-sans text-sm text-white placeholder-white/30 focus:border-[#00dfd8] focus:bg-white/8 outline-none transition"
                      required
                    />
                  </div>
                </div>

                {/* Service required selection */}
                <div className="space-y-1.5 text-left">
                  <label htmlFor="service" className="text-[11px] font-mono font-bold tracking-widest text-white/50 uppercase">
                    Service Required
                  </label>
                  <div className="relative">
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3.5 bg-black border border-white/10 rounded-xl font-sans text-sm text-white outline-none focus:border-[#00dfd8] transition cursor-pointer appearance-none"
                    >
                      <option value="SEO">SEO (Search Engine Optimization)</option>
                      <option value="Dropshipping Solutions">Dropshipping Solutions</option>
                      <option value="Video Editing">Video Editing</option>
                      <option value="Graphic Design">Graphic Design & Creative Layouts</option>
                      <option value="Digital Marketing">Digital Marketing & Paid Campaigns</option>
                    </select>
                    <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-white/40">
                      ▼
                    </div>
                  </div>
                </div>

                {/* Message Box */}
                <div className="space-y-1.5 text-left">
                  <label htmlFor="message" className="text-[11px] font-mono font-bold tracking-widest text-white/50 uppercase">
                    Project Goals / Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your brand challenges and traffic targets..."
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl font-sans text-sm text-white placeholder-white/30 focus:border-[#00dfd8] focus:bg-white/8 outline-none transition resize-none"
                    required
                  />
                </div>

                {/* Form Warning disclaimer */}
                <div className="p-3 bg-white/2 rounded-lg border border-white/5 text-[11px] font-sans text-white/40 leading-snug">
                  By submitting your parameters, you agree to allow Fluxora to conduct deep technical backlink and performance audits directly connected with your enterprise domain.
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-xl text-sm font-bold uppercase tracking-wide text-black bg-[#00dfd8] hover:bg-white hover:[box-shadow:0_0_25px_rgba(0,223,216,0.6)] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 cursor-pointer mt-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 rounded-full border-2 border-black border-t-transparent animate-spin" />
                      <span>transmitting payload...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4.5 h-4.5" />
                      <span>Request Core Consultation</span>
                    </>
                  )}
                </button>

              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
