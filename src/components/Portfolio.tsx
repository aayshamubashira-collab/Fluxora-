/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { ExternalLink, Eye, Award, Sparkles, X, CheckSquare } from "lucide-react";
import { PROJECTS_DATA } from "../data";
import { Project } from "../types";

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState<string>("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filters = [
    "All",
    "Website Design",
    "SEO Campaign",
    "Social Media Marketing",
    "Video Production",
    "Branding Project",
  ];

  const filteredProjects =
    activeFilter === "All"
      ? PROJECTS_DATA
      : PROJECTS_DATA.filter((p) => p.category === activeFilter);

  return (
    <section id="portfolio" className="py-24 relative bg-black overflow-hidden bg-grid">
      {/* Decorative Blur Ambient Orbs */}
      <div className="absolute top-[20%] right-[-15%] w-[45vw] h-[45vw] bg-radial-purple rounded-full filter blur-[150px] pointer-events-none opacity-20" />
      <div className="absolute bottom-[30%] left-[-15%] w-[45vw] h-[45vw] bg-radial-cyan rounded-full filter blur-[150px] pointer-events-none opacity-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/15 rounded-full text-xs font-semibold uppercase tracking-widest text-[#00dfd8] mb-4">
            <span>Portfolio Cases</span>
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl text-white tracking-tight">
            Proof in <span className="text-gradient-cyan-blue">Execution</span>
          </h2>
          <p className="font-sans text-white/50 text-sm sm:text-base mt-3 max-w-2xl mx-auto">
            Review live campaigns and strategic frameworks built by Fluxora that delivered major organic surges, conversion uplifts, and high brand authority for clients.
          </p>
        </div>

        {/* Categories Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold tracking-wide transition-all duration-300 relative overflow-hidden cursor-pointer ${
                activeFilter === filter
                  ? "text-black bg-[#00dfd8] [box-shadow:0_5px_15px_rgba(0,223,216,0.2)]"
                  : "text-white/60 bg-white/5 border border-white/5 hover:bg-white/10 hover:text-white"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          {filteredProjects.map((project: Project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="glass-card rounded-2xl overflow-hidden border border-white/8 transition-all duration-300 hover:border-[#00dfd8]/30 group hover:translate-y-[-4px] cursor-pointer flex flex-col justify-between"
            >
              {/* Image Area with hover info */}
              <div className="relative aspect-[4/3] overflow-hidden bg-black/40">
                <div className="absolute inset-x-0 bottom-0 top-1/2 bg-gradient-to-t from-black/80 to-transparent z-10" />
                
                {/* Image */}
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />

                {/* Hover overlay icons */}
                <div className="absolute inset-0 z-20 bg-black/60 backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                  <div className="p-3 rounded-full bg-white text-black hover:scale-110 transition-transform">
                    <Eye className="w-5 h-5" />
                  </div>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4 z-20 px-3 py-1 bg-black/80 backdrop-blur-md rounded-full border border-white/10 text-[10px] font-heading font-bold text-[#00dfd8] uppercase tracking-wider">
                  {project.category}
                </div>
              </div>

              {/* Text Description Box */}
              <div className="p-6 space-y-4">
                <div className="space-y-1.5Fixed">
                  <span className="text-[10px] font-mono tracking-widest text-[#00dfd8] uppercase">
                    {project.metrics || "Active Project Case"}
                  </span>
                  <h3 className="text-xl font-heading font-black text-white tracking-tight leading-tight">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-sans text-white/60 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-white/5">
                  {project.tags.slice(0, 3).map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-2 py-0.5 rounded bg-white/5 border border-white/5 text-[9px] font-mono tracking-wider text-white/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty state callback */}
        {filteredProjects.length === 0 && (
          <div className="p-12 text-center text-white/40 font-heading">
            No projects found matching the criteria.
          </div>
        )}

        {/* Immersive Image Gallery / Case Detail Modal */}
        {selectedProject && (
          <div className="fixed inset-0 z-100 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md transition-opacity">
            <div className="relative w-full max-w-4xl glass-card rounded-2xl border border-white/10 overflow-hidden shadow-2xl animate-scale-up text-left max-h-[90vh] overflow-y-auto">
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-30 p-2.5 rounded-full bg-black/70 hover:bg-[#030303] text-white/80 hover:text-white border border-white/15 transition cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-12">
                {/* Photo Side */}
                <div className="md:col-span-7 relative h-64 md:h-auto bg-black flex items-center justify-center">
                  <img
                    src={selectedProject.imageUrl}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  {selectedProject.metrics && (
                    <div className="absolute bottom-4 left-4 right-4 bg-black/80 backdrop-blur-md p-4 rounded-xl border border-white/10">
                      <span className="text-[10px] uppercase font-mono tracking-widest text-white/50 block">
                        Verified Metric Uplift //
                      </span>
                      <p className="text-lg font-heading font-black text-[#00dfd8] mt-0.5">
                        {selectedProject.metrics}
                      </p>
                    </div>
                  )}
                </div>

                {/* Copy Side */}
                <div className="md:col-span-5 p-8 flex flex-col justify-between bg-[#08080c] relative">
                  <div className="space-y-6">
                    <div>
                      <span className="text-xs font-mono font-bold uppercase text-[#00dfd8] tracking-widest">
                        {selectedProject.category}
                      </span>
                      <h3 className="text-2xl font-heading font-black text-white mt-1 leading-tight">
                        {selectedProject.title}
                      </h3>
                    </div>

                    <div className="space-y-2">
                      <span className="text-[10px] font-mono tracking-widest text-white/40 uppercase block">
                        Overview
                      </span>
                      <p className="text-sm text-white/70 leading-relaxed">
                        This business profile represents a full-scale conversion deployment managed by Fluxora. We systematically optimized lead channels, removed code friction, and crafted premium asset copies to establish durable audience growth.
                      </p>
                    </div>

                    <div className="space-y-3">
                      <span className="text-[10px] font-mono tracking-widest text-white/40 uppercase block">
                        Integrated Tech & Services
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.tags.map((tag, tIdx) => (
                          <span
                            key={tIdx}
                            className="px-2.5 py-1 rounded bg-white/5 border border-white/5 text-[10px] font-mono text-[#00dfd8]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-white/5 pt-6 mt-8">
                    <button
                      onClick={() => {
                        setSelectedProject(null);
                        const el = document.getElementById("contact");
                        if (el) el.scrollIntoView({ behavior: "smooth" });
                      }}
                      className="w-full text-center py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider text-black bg-[#00dfd8] hover:bg-white hover:[box-shadow:0_0_20px_rgba(0,223,216,0.3)] transition-all cursor-pointer"
                    >
                      Inquire About Similar Growth
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
