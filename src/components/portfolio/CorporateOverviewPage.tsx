import React from "react";
import { companyConfig } from "@/config/company";
import { A4PageWrapper } from "./A4PageWrapper";
import { Target, Compass, CheckCircle2, Award, Zap, Users, Shield } from "lucide-react";

export const CorporateOverviewPage: React.FC = () => {
  return (
    <A4PageWrapper
      pageNumber={2}
      title="Corporate Profile"
      subtitle="Vision, Mission & Operating Philosophy"
    >
      {/* Title Section */}
      <div className="mb-6">
        <span className="text-[10px] font-bold text-[#D4AF37] uppercase tracking-widest block">
          Section 01 // Introduction
        </span>
        <h2 className="text-2xl font-black text-[#0B192C] tracking-tight mt-1">
          Pioneering Construction Excellence in Qatar
        </h2>
        <div className="w-16 h-1 bg-[#D4AF37] mt-2 rounded" />
      </div>

      {/* Main Intro + Image Grid */}
      <div className="grid grid-cols-12 gap-6 mb-6">
        <div className="col-span-7 space-y-3 text-xs text-slate-600 leading-relaxed">
          <p className="font-semibold text-slate-800 text-[13px] leading-snug">
            {companyConfig.brand.nameEn} ({companyConfig.brand.nameAr}) is an established Qatari enterprise founded to meet the rigorous demands of Qatar's commercial and non-residential development sector.
          </p>
          <p>
            Officially authorized under Qatar Commercial Registration No. <span className="font-bold text-[#0B192C]">{companyConfig.registry.crNumber}</span>, our enterprise specializes in executing complex non-residential structural systems, industrial warehousing, institutional spaces, and high-specification architectural fit-outs.
          </p>
          <p>
            Operating with complete regulatory adherence to the Qatar Construction Specifications (QCS) and Civil Defence (QCDD) directives, our multidisciplinary team provides turnkey technical contracting from groundwork through final commissioning.
          </p>
        </div>

        <div className="col-span-5 relative rounded-xl overflow-hidden shadow-md border border-slate-200">
          <img
            src="https://images.unsplash.com/photo-1541888946425-d0fbb18615f8?auto=format&fit=crop&w=800&q=80"
            alt="Construction Engineering"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end p-4">
            <span className="text-[10px] text-white font-medium">
              Turnkey Commercial & Non-Residential Contracting
            </span>
          </div>
        </div>
      </div>

      {/* Vision & Mission Cards */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
          <div className="flex items-center space-x-2.5 text-[#0B192C] font-bold text-sm mb-2">
            <Compass className="w-4 h-4 text-[#D4AF37]" />
            <span>Our Corporate Vision</span>
          </div>
          <p className="text-[11px] text-slate-600 leading-relaxed">
            To become Qatar's benchmark contractor for commercial and non-residential developments, recognized for absolute engineering integrity, uncompromised safety standards, and flawless schedule adherence supporting the Qatar National Vision 2030.
          </p>
        </div>

        <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
          <div className="flex items-center space-x-2.5 text-[#0B192C] font-bold text-sm mb-2">
            <Target className="w-4 h-4 text-[#D4AF37]" />
            <span>Our Mission</span>
          </div>
          <p className="text-[11px] text-slate-600 leading-relaxed">
            To engineer, construct, and deliver high-performance physical assets through rigorous quality control, modern technological execution, and collaborative partnerships that safeguard our clients&apos; capital investments.
          </p>
        </div>
      </div>

      {/* Core Values */}
      <div className="mb-6">
        <h3 className="text-xs font-bold uppercase tracking-wider text-slate-800 mb-3 flex items-center space-x-2">
          <Award className="w-4 h-4 text-[#D4AF37]" />
          <span>Core Operational Pillars</span>
        </h3>
        <div className="grid grid-cols-4 gap-3">
          <div className="p-3 rounded-lg border border-slate-200 bg-white">
            <div className="w-6 h-6 rounded bg-[#0B192C]/5 text-[#0B192C] flex items-center justify-center mb-2 font-bold text-xs">
              01
            </div>
            <div className="text-[11px] font-bold text-slate-900">Precision Quality</div>
            <div className="text-[10px] text-slate-500 mt-1">Zero-tolerance for material and craftsmanship defects.</div>
          </div>

          <div className="p-3 rounded-lg border border-slate-200 bg-white">
            <div className="w-6 h-6 rounded bg-[#0B192C]/5 text-[#0B192C] flex items-center justify-center mb-2 font-bold text-xs">
              02
            </div>
            <div className="text-[11px] font-bold text-slate-900">Zero Harm Safety</div>
            <div className="text-[10px] text-slate-500 mt-1">Stringent HSE policies protecting lives and assets.</div>
          </div>

          <div className="p-3 rounded-lg border border-slate-200 bg-white">
            <div className="w-6 h-6 rounded bg-[#0B192C]/5 text-[#0B192C] flex items-center justify-center mb-2 font-bold text-xs">
              03
            </div>
            <div className="text-[11px] font-bold text-slate-900">Schedule Integrity</div>
            <div className="text-[10px] text-slate-500 mt-1">Strict critical path management for on-time handovers.</div>
          </div>

          <div className="p-3 rounded-lg border border-slate-200 bg-white">
            <div className="w-6 h-6 rounded bg-[#0B192C]/5 text-[#0B192C] flex items-center justify-center mb-2 font-bold text-xs">
              04
            </div>
            <div className="text-[11px] font-bold text-slate-900">Client Transparency</div>
            <div className="text-[10px] text-slate-500 mt-1">Detailed reporting, open communication and accountability.</div>
          </div>
        </div>
      </div>

      {/* Corporate Highlights Bar */}
      <div className="mt-auto p-4 rounded-xl bg-[#0B192C] text-white flex items-center justify-around border border-[#D4AF37]/30">
        <div className="text-center">
          <div className="text-lg font-black text-[#D4AF37]">CR #226852</div>
          <div className="text-[9px] uppercase tracking-wider text-slate-300">Active Qatar Registration</div>
        </div>
        <div className="h-8 w-px bg-white/20" />
        <div className="text-center">
          <div className="text-lg font-black text-[#D4AF37]">QCS Compliant</div>
          <div className="text-[9px] uppercase tracking-wider text-slate-300">National Standard Conformance</div>
        </div>
        <div className="h-8 w-px bg-white/20" />
        <div className="text-center">
          <div className="text-lg font-black text-[#D4AF37]">Turnkey</div>
          <div className="text-[9px] uppercase tracking-wider text-slate-300">Design, Civil, Structural & MEP</div>
        </div>
      </div>
    </A4PageWrapper>
  );
};
