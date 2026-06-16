/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import ProcessTimeline from "./components/ProcessTimeline";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonials";
import CallToAction from "./components/CallToAction";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

export default function App() {
  const [selectedServicePreset, setSelectedServicePreset] = useState<string>("");

  // Handle contact CTA triggers
  const handleContactNavigation = () => {
    const el = document.getElementById("contact");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Handle service request triggers with auto scroll & form prepopulation
  const handleServiceInquiry = (serviceTitle: string) => {
    setSelectedServicePreset(serviceTitle);
    setTimeout(() => {
      const el = document.getElementById("contact");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <div className="min-h-screen bg-[#030303] text-white overflow-x-hidden relative selection:bg-[#00dfd8] selection:text-black">
      {/* Premium Visual Blur Filters globally in layout top/bottom */}
      <div className="absolute top-0 right-[-10%] w-[50vw] h-[50vw] bg-radial-purple rounded-full filter blur-[100px] pointer-events-none opacity-30 z-0" />
      <div className="absolute top-[30%] left-[-10%] w-[40vw] h-[40vw] bg-radial-cyan rounded-full filter blur-[120px] pointer-events-none opacity-20 z-0" />

      {/* Embedded Main Sections */}
      <div className="relative z-10 flex flex-col">
        {/* Navigation Bar */}
        <Navbar onContactClick={handleContactNavigation} />

        {/* Hero Banner Section */}
        <Hero onCtaClick={handleContactNavigation} />

        {/* About Agency Presentation */}
        <AboutUs />

        {/* Core Services Offerings */}
        <Services onServiceSelect={handleServiceInquiry} />

        {/* Why Choose Fluxora Features Grid */}
        <WhyChooseUs />

        {/* Strategic Four Step Execution Process Section */}
        <ProcessTimeline />

        {/* Interactive Case Portfolio Section */}
        <Portfolio />

        {/* Client Testimonials Slider */}
        <Testimonials />

        {/* Strategic High Conversion Call to Action Panel */}
        <CallToAction onCtaClick={handleContactNavigation} />

        {/* Inquiry Forms with Preset Parameters and Google Map */}
        <Contact selectedServicePreset={selectedServicePreset} />

        {/* Professional Footer & Copyright Credits */}
        <Footer />

        {/* WhatsApp Floating Interactive Button */}
        <WhatsAppButton />
      </div>
    </div>
  );
}
