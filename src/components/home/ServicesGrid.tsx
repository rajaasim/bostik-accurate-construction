import React from "react";
import Link from "next/link";
import { companyConfig } from "@/config/company";
import { Building2, HardHat, Layers, Zap, CheckCircle2, ArrowRight } from "lucide-react";

export const ServicesGrid: React.FC = () => {
  const icons = [Building2, HardHat, Layers, Zap];

  return (
    <section id="services" className="py-20 bg-[#0B192C] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 text-xs font-bold text-[#D4AF37] uppercase tracking-widest px-3 py-1 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 mb-3">
            <Building2 className="w-3.5 h-3.5" />
            <span>Scope of Contracting</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight uppercase">
            Comprehensive <br />
            <span className="text-[#D4AF37]">Construction Services</span>
          </h2>
          <div className="w-16 h-1 bg-[#D4AF37] mx-auto mt-3 rounded-full" />
          <p className="text-slate-400 text-xs sm:text-sm mt-3">
            Specialized execution for non-residential commercial complexes, structural foundations, high-specification corporate fit-outs, and integrated MEP engineering.
          </p>
        </div>

        {/* 4 Large Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {companyConfig.services.map((service, index) => {
            const IconComp = icons[index % icons.length];

            return (
              <div
                key={service.id}
                className="group rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-[#D4AF37]/40 overflow-hidden flex flex-col justify-between transition-all duration-300 shadow-xl"
              >
                {/* Photo Top Banner */}
                <div className="h-48 relative overflow-hidden bg-slate-800">
                  <img
                    src={service.imageUrl}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-85 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
                  
                  <div className="absolute top-4 left-4">
                    <div className="w-10 h-10 rounded-xl bg-[#0B192C]/90 backdrop-blur-md border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37] shadow-lg">
                      <IconComp className="w-5 h-5" />
                    </div>
                  </div>

                  <div className="absolute bottom-3 left-4 right-4">
                    <div className="text-[10px] text-[#D4AF37] font-semibold tracking-wider font-arabic">
                      {service.titleArabic}
                    </div>
                    <h3 className="text-lg font-bold text-white leading-snug">
                      {service.title}
                    </h3>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5">
                      {service.shortDescription}
                    </p>

                    <div className="space-y-2 mb-5">
                      <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                        Capabilities & Delivery Scope:
                      </div>
                      {service.capabilities.slice(0, 3).map((cap, capIdx) => (
                        <div key={capIdx} className="flex items-start space-x-2 text-xs text-slate-200">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37] shrink-0 mt-0.5" />
                          <span>{cap}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                    <span className="text-[11px] text-slate-400">
                      QCS 2014 Standard
                    </span>
                    <Link
                      href={`/services#${service.id}`}
                      className="inline-flex items-center space-x-1.5 text-xs font-bold text-[#D4AF37] group-hover:translate-x-1 transition-transform"
                    >
                      <span>Full Technical Scope</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* View All Services Callout */}
        <div className="text-center pt-2">
          <Link
            href="/services"
            className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl bg-slate-900 border border-[#D4AF37]/40 hover:bg-[#D4AF37]/10 text-xs font-bold text-[#D4AF37] transition-all"
          >
            <span>View All Detailed Disciplines & Equipment Capabilities</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
};
