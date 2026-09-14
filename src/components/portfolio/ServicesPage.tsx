import React from "react";
import { companyConfig } from "@/config/company";
import { A4PageWrapper } from "./A4PageWrapper";
import { Building2, HardHat, Layers, Zap, CheckCircle2 } from "lucide-react";

export const ServicesPage: React.FC = () => {
  return (
    <A4PageWrapper
      pageNumber={4}
      title="Capabilities & Services"
      subtitle="Comprehensive Non-Residential Construction Solutions"
    >
      {/* Title */}
      <div className="mb-5">
        <span className="text-[10px] font-bold text-[#D4AF37] uppercase tracking-widest block">
          Section 03 // Scope of Works
        </span>
        <h2 className="text-2xl font-black text-[#0B192C] tracking-tight mt-1">
          Turnkey Commercial Engineering & Contracting
        </h2>
        <div className="w-16 h-1 bg-[#D4AF37] mt-2 rounded" />
      </div>

      {/* Services Grid (4 main services) */}
      <div className="grid grid-cols-2 gap-4 flex-1">
        {companyConfig.services.map((service, index) => {
          const icons = [Building2, HardHat, Layers, Zap];
          const IconComponent = icons[index % icons.length];

          return (
            <div
              key={service.id}
              className="p-4 rounded-xl border border-slate-200 bg-white flex flex-col justify-between shadow-xs hover:border-[#D4AF37] transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-2.5">
                  <div className="w-9 h-9 rounded-lg bg-[#0B192C] text-[#D4AF37] flex items-center justify-center">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono font-bold text-slate-400">
                    SERVICE // 0{index + 1}
                  </span>
                </div>

                <h3 className="text-sm font-black text-[#0B192C] leading-snug">
                  {service.title}
                </h3>
                <div className="text-[10px] text-[#B8860B] font-semibold mb-2">
                  {service.titleArabic}
                </div>

                <p className="text-[10.5px] text-slate-600 leading-relaxed mb-3 line-clamp-3">
                  {service.shortDescription}
                </p>

                <div className="space-y-1.5 border-t border-slate-100 pt-2.5">
                  {service.capabilities.slice(0, 4).map((cap, i) => (
                    <div key={i} className="flex items-start space-x-1.5 text-[9.5px] text-slate-700">
                      <CheckCircle2 className="w-3 h-3 text-[#D4AF37] shrink-0 mt-0.5" />
                      <span className="leading-tight">{cap}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-3 pt-2 border-t border-slate-100 flex items-center justify-between text-[9px] text-slate-400">
                <span className="font-semibold text-[#0B192C]">QCS Standard Assured</span>
                <span>Licensed Activity</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Specialization Highlight Strip */}
      <div className="mt-4 p-3 rounded-lg bg-slate-50 border border-slate-200 text-xs text-slate-700 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <span className="w-2 h-2 rounded-full bg-[#D4AF37]" />
          <span className="font-semibold text-[#0B192C]">Qatar Construction Specifications (QCS) Compliance:</span>
          <span className="text-slate-600">All structural, civil, and MEP installations are supervised by licensed engineers.</span>
        </div>
        <span className="text-[10px] font-mono text-slate-400">BOSTIK ACCURATE QATAR</span>
      </div>
    </A4PageWrapper>
  );
};
