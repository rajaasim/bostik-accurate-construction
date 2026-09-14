"use client";

import React, { useState } from "react";
import Link from "next/link";
import { companyConfig } from "@/config/company";
import { Building2, HardHat, Layers, Zap, CheckCircle2, ArrowRight, ChevronRight, Sparkles, Shield } from "lucide-react";

export const ServicesGrid: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);
  const icons = [Building2, HardHat, Layers, Zap];

  const currentService = companyConfig.services[activeTab] || companyConfig.services[0];
  const CurrentIcon = icons[activeTab % icons.length];

  return (
    <section id="services" className="py-24 relative overflow-hidden bg-[#070F1C] text-white">
      {/* 2026 Ambient Cyan & Emerald Light Diffusions */}
      <div className="absolute top-1/3 -left-32 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-72 h-72 bg-[#D4AF37]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header with Refined Typography & Ambient Line */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 border-b border-white/10 pb-8">
          <div>
            <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-gradient-to-r from-cyan-500/10 via-teal-500/10 to-emerald-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-bold tracking-widest uppercase mb-3 shadow-[0_0_20px_rgba(6,182,212,0.15)]">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>Specialized Contracting Disciplines</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight uppercase">
              Engineering & Execution
            </h2>
          </div>

          <div className="max-w-md">
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-light">
              Turnkey delivery under Qatar Activity Code <span className="font-mono text-cyan-400 font-semibold">410029</span>. Fully conforming with Qatar Construction Specifications (QCS 2014) and Civil Defence (QCDD) life safety codes.
            </p>
          </div>
        </div>

        {/* Height-Matched 2026 Glassmorphic Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Interactive Glass Selector Cards (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-3 h-full">
            {companyConfig.services.map((service, index) => {
              const IconComponent = icons[index % icons.length];
              const isSelected = activeTab === index;

              return (
                <button
                  key={service.id}
                  onClick={() => setActiveTab(index)}
                  className={`w-full text-left p-5 rounded-2xl transition-all duration-300 border flex items-center justify-between group relative overflow-hidden cursor-pointer ${
                    isSelected
                      ? "bg-gradient-to-r from-slate-900/90 to-[#0B1E36]/90 border-cyan-400/50 shadow-[0_10px_35px_-10px_rgba(6,182,212,0.3)] ring-1 ring-cyan-400/30 backdrop-blur-xl"
                      : "bg-slate-900/40 border-white/[0.07] hover:bg-slate-900/70 hover:border-white/20 backdrop-blur-md"
                  }`}
                >
                  {/* Left Glowing Indicator Bar on Active */}
                  {isSelected && (
                    <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-cyan-400 via-teal-400 to-emerald-400 shadow-[0_0_15px_rgba(6,182,212,0.8)]" />
                  )}

                  <div className="flex items-center space-x-4 pl-1">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 shadow-lg ${
                        isSelected
                          ? "bg-gradient-to-br from-cyan-500 to-teal-600 text-slate-950 font-bold shadow-[0_0_20px_rgba(6,182,212,0.4)]"
                          : "bg-white/[0.05] border border-white/10 text-slate-400 group-hover:text-cyan-300 group-hover:border-cyan-500/30"
                      }`}
                    >
                      <IconComponent className="w-5 h-5" />
                    </div>

                    <div>
                      <div className="text-[10px] font-semibold text-[#D4AF37] font-arabic mb-0.5">
                        {service.titleArabic}
                      </div>
                      <h3
                        className={`text-sm font-bold transition-colors leading-snug ${
                          isSelected ? "text-white font-extrabold" : "text-slate-300 group-hover:text-white"
                        }`}
                      >
                        {service.title}
                      </h3>
                      <p className="text-[11px] text-slate-400 mt-1 line-clamp-1">
                        {service.shortDescription}
                      </p>
                    </div>
                  </div>

                  <div className="pl-2">
                    <ChevronRight
                      className={`w-5 h-5 shrink-0 transition-transform duration-300 ${
                        isSelected
                          ? "text-cyan-400 translate-x-1"
                          : "text-slate-600 group-hover:text-slate-400"
                      }`}
                    />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Matched-Height Architectural Panoramic Display (7 cols) */}
          <div className="lg:col-span-7 flex flex-col h-full rounded-2xl border border-white/[0.12] bg-gradient-to-b from-slate-900/80 via-[#0B1A2E]/80 to-[#071322]/90 backdrop-blur-2xl overflow-hidden shadow-[0_25px_60px_-15px_rgba(0,0,0,0.7)]">
            {/* Architectural Imagery Window with Glass Highlights */}
            <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-slate-950 shrink-0">
              <img
                src={currentService.imageUrl}
                alt={currentService.title}
                className="w-full h-full object-cover transition-all duration-700 hover:scale-105 filter brightness-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1A2E] via-transparent to-black/30" />

              {/* Status Pill with Pulsing Emerald Live Indicator */}
              <div className="absolute top-4 left-4 flex items-center space-x-2">
                <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-xl border border-white/20 text-xs font-semibold text-white shadow-lg">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                  </span>
                  <span>Discipline 0{activeTab + 1} of 04</span>
                </div>
              </div>

              {/* Title Overlay with Arabic Accent */}
              <div className="absolute bottom-4 left-6 right-6">
                <div className="text-xs text-[#D4AF37] font-arabic font-semibold drop-shadow-sm">
                  {currentService.titleArabic}
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-white leading-tight drop-shadow-md">
                  {currentService.title}
                </h3>
              </div>
            </div>

            {/* Elevated Content Body filling remaining height evenly */}
            <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                {currentService.fullDescription}
              </p>

              {/* Frosted Glass Capability Matrix */}
              <div className="space-y-3">
                <div className="text-[11px] font-bold uppercase tracking-widest text-cyan-400 flex items-center space-x-1.5">
                  <Shield className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Verified Field Scope & Technical Deliverables</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {currentService.capabilities.map((cap, i) => (
                    <div
                      key={i}
                      className="p-2.5 rounded-xl bg-white/[0.04] border border-white/[0.06] hover:border-cyan-500/30 transition-colors flex items-start space-x-2.5 text-xs text-slate-200"
                    >
                      <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                      <span className="leading-snug">{cap}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Action Footer with Specular Rim */}
              <div className="pt-5 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 mt-auto">
                <div className="flex items-center space-x-2 text-xs text-slate-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  <span>QCS 2014 & QCDD Fire Standards</span>
                </div>

                <div className="flex items-center space-x-3">
                  <Link
                    href={`/services#${currentService.id}`}
                    className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 via-teal-500 to-emerald-500 text-slate-950 text-xs font-black uppercase tracking-wider shadow-[0_0_25px_rgba(6,182,212,0.35)] hover:shadow-[0_0_35px_rgba(6,182,212,0.5)] transition-all hover:scale-[1.02] active:scale-95 cursor-pointer"
                  >
                    <span>Full Specifications</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Explorer Prompt */}
        <div className="text-center pt-8">
          <Link
            href="/services"
            className="inline-flex items-center space-x-2 text-xs font-bold text-slate-400 hover:text-cyan-400 transition-colors group"
          >
            <span>Explore Complete Engineering Portfolio & Heavy Plant Fleet</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};
