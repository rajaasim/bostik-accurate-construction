import React from "react";
import Link from "next/link";
import { companyConfig } from "@/config/company";
import { Building2, HardHat, Layers, Zap, CheckCircle2, ArrowRight } from "lucide-react";

export const ServicesGrid: React.FC = () => {
  const icons = [Building2, HardHat, Layers, Zap];

  return (
    <section id="services" className="py-24 bg-[#0B192C] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 text-xs font-bold text-[#D4AF37] uppercase tracking-widest px-3.5 py-1 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 mb-3">
            <Building2 className="w-3.5 h-3.5" />
            <span>Scope of Contracting</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase">
            Comprehensive <br />
            <span className="text-[#D4AF37]">Construction Services</span>
          </h2>
          <div className="w-20 h-1 bg-[#D4AF37] mx-auto mt-4 rounded-full" />
          <p className="text-slate-400 text-sm sm:text-base mt-4">
            Specialized execution for non-residential commercial complexes, structural foundations, high-specification corporate fit-outs, and integrated MEP engineering.
          </p>
        </div>

        {/* 4 Large Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {companyConfig.services.map((service, index) => {
            const IconComp = icons[index % icons.length];

            return (
              <div
                key={service.id}
                className="group rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-[#D4AF37]/50 overflow-hidden flex flex-col justify-between transition-all duration-300 shadow-xl hover:shadow-[#D4AF37]/5"
              >
                {/* Photo Top Banner */}
                <div className="h-52 relative overflow-hidden bg-slate-800">
                  <img
                    src={service.imageUrl}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                  
                  <div className="absolute top-4 left-4">
                    <div className="w-11 h-11 rounded-xl bg-[#0B192C]/90 backdrop-blur-md border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37] shadow-lg">
                      <IconComp className="w-5 h-5" />
                    </div>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="text-[11px] text-[#D4AF37] font-semibold tracking-wider font-arabic">
                      {service.titleArabic}
                    </div>
                    <h3 className="text-xl font-bold text-white leading-snug">
                      {service.title}
                    </h3>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <p className="text-sm text-slate-300 leading-relaxed mb-6">
                      {service.fullDescription}
                    </p>

                    <div className="space-y-2.5 mb-6">
                      <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                        Capabilities & Delivery Scope:
                      </div>
                      {service.capabilities.map((cap, capIdx) => (
                        <div key={capIdx} className="flex items-start space-x-2.5 text-xs text-slate-200">
                          <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                          <span>{cap}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                    <span className="text-[11px] text-slate-500">
                      QCS 2014 & QCDD Standards
                    </span>
                    <Link
                      href="#contact"
                      className="inline-flex items-center space-x-1.5 text-xs font-bold text-[#D4AF37] group-hover:translate-x-1 transition-transform"
                    >
                      <span>Inquire About Service</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Card */}
        <div className="p-8 rounded-2xl bg-gradient-to-r from-slate-900 via-[#1E3E62]/40 to-slate-900 border border-slate-800 text-center flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-left">
            <h4 className="text-lg font-bold text-white">Require a customized Bill of Quantities (BOQ) review?</h4>
            <p className="text-xs text-slate-400 mt-1">Our engineering team prepares comprehensive constructability reviews and commercial estimates.</p>
          </div>
          <Link
            href="#contact"
            className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl bg-[#D4AF37] text-slate-950 font-bold text-xs uppercase tracking-wider shadow-lg shrink-0"
          >
            <span>Submit Tender Documents</span>
          </Link>
        </div>
      </div>
    </section>
  );
};
