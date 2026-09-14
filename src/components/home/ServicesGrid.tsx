"use client";

import React, { useState } from "react";
import Link from "next/link";
import { companyConfig } from "@/config/company";
import { Building2, HardHat, Layers, Zap, CheckCircle2, ArrowRight, ChevronRight } from "lucide-react";

export const ServicesGrid: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);
  const icons = [Building2, HardHat, Layers, Zap];

  const currentService = companyConfig.services[activeTab] || companyConfig.services[0];
  const CurrentIcon = icons[activeTab % icons.length];

  return (
    <section id="services" className="py-24 bg-[#050C16] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 border-b border-slate-800/80 pb-8">
          <div>
            <div className="flex items-center space-x-3 mb-2">
              <span className="h-px w-8 bg-[#D4AF37]" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#D4AF37]">
                Specialized Disciplines
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight uppercase">
              Engineering Capabilities
            </h2>
          </div>

          <div className="max-w-md">
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Full-scope engineering and contracting under Qatar Activity Code 410029, adhering to Qatar Construction Specifications (QCS 2014) and Civil Defence (QCDD) requirements.
            </p>
          </div>
        </div>

        {/* Interactive Split Showcase: Tabbed Selector on Left, Dynamic Preview on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-14">
          {/* Left Column: Discipline Selectors (5 cols) */}
          <div className="lg:col-span-5 space-y-3">
            {companyConfig.services.map((service, index) => {
              const IconComponent = icons[index % icons.length];
              const isSelected = activeTab === index;

              return (
                <button
                  key={service.id}
                  onClick={() => setActiveTab(index)}
                  className={`w-full text-left p-5 rounded-2xl transition-all duration-300 border flex items-start justify-between group cursor-pointer ${
                    isSelected
                      ? "bg-[#0B192C] border-[#D4AF37] shadow-xl ring-1 ring-[#D4AF37]/30"
                      : "bg-slate-900/50 border-slate-800 hover:bg-slate-900 hover:border-slate-700"
                  }`}
                >
                  <div className="flex items-start space-x-4">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                        isSelected
                          ? "bg-[#D4AF37] text-slate-950 font-bold"
                          : "bg-slate-800 text-slate-400 group-hover:text-white"
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
                          isSelected ? "text-white" : "text-slate-300 group-hover:text-white"
                        }`}
                      >
                        {service.title}
                      </h3>
                      <p className="text-xs text-slate-400 mt-1 line-clamp-2 leading-relaxed">
                        {service.shortDescription}
                      </p>
                    </div>
                  </div>

                  <ChevronRight
                    className={`w-5 h-5 shrink-0 transition-transform ${
                      isSelected ? "text-[#D4AF37] translate-x-1" : "text-slate-600 group-hover:text-slate-400"
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Right Column: Dynamic Architectural Display (7 cols) */}
          <div className="lg:col-span-7 bg-[#0B192C] rounded-2xl border border-slate-800 overflow-hidden shadow-2xl">
            {/* Image Header with Gradient */}
            <div className="h-64 sm:h-72 relative overflow-hidden bg-slate-950">
              <img
                src={currentService.imageUrl}
                alt={currentService.title}
                className="w-full h-full object-cover transition-all duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B192C] via-[#0B192C]/30 to-transparent" />

              <div className="absolute top-4 left-4">
                <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-[#D4AF37] text-xs font-bold">
                  <CurrentIcon className="w-3.5 h-3.5" />
                  <span>Discipline 0{activeTab + 1}</span>
                </div>
              </div>

              <div className="absolute bottom-4 left-6 right-6">
                <div className="text-xs text-[#D4AF37] font-arabic font-semibold">
                  {currentService.titleArabic}
                </div>
                <h4 className="text-xl sm:text-2xl font-black text-white leading-tight">
                  {currentService.title}
                </h4>
              </div>
            </div>

            {/* Content Details */}
            <div className="p-6 sm:p-8 space-y-6">
              <p className="text-sm text-slate-300 leading-relaxed">
                {currentService.fullDescription}
              </p>

              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                  Scope of Delivery & Technical Capabilities:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {currentService.capabilities.map((cap, i) => (
                    <div key={i} className="flex items-start space-x-2.5 text-xs text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                      <span>{cap}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
                <span className="text-xs text-slate-400">
                  Standards: QCS 2014 & QCDD Fire Life Safety
                </span>

                <Link
                  href={`/services#${currentService.id}`}
                  className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-[#D4AF37] hover:bg-[#B8860B] text-slate-950 text-xs font-black uppercase tracking-wider shadow-md transition-all cursor-pointer"
                >
                  <span>Explore Full Specifications</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Fast Action Strip */}
        <div className="text-center pt-4">
          <Link
            href="/services"
            className="inline-flex items-center space-x-2 text-xs font-bold text-slate-400 hover:text-[#D4AF37] transition-colors"
          >
            <span>View All Engineering Disciplines & Heavy Plant Resources →</span>
          </Link>
        </div>
      </div>
    </section>
  );
};
