import React from "react";
import { companyConfig } from "@/config/company";
import { A4PageWrapper } from "./A4PageWrapper";
import { ShieldCheck, HardHat, CheckCircle2, AlertTriangle, FileSpreadsheet, Award } from "lucide-react";

export const HseQualityPage: React.FC = () => {
  return (
    <A4PageWrapper
      pageNumber={6}
      title="HSE & Quality Assurance"
      subtitle="Zero Harm Philosophy & QCS Quality Controls"
    >
      {/* Title */}
      <div className="mb-5">
        <span className="text-[10px] font-bold text-[#D4AF37] uppercase tracking-widest block">
          Section 05 // HSE & Standards
        </span>
        <h2 className="text-2xl font-black text-[#0B192C] tracking-tight mt-1">
          Health, Safety, Environment & QA/QC Framework
        </h2>
        <div className="w-16 h-1 bg-[#D4AF37] mt-2 rounded" />
      </div>

      {/* Top Banner: Zero-Harm Culture */}
      <div className="p-4 rounded-xl bg-gradient-to-r from-[#0B192C] via-[#1E3E62] to-[#0B192C] text-white flex items-center justify-between mb-5 border border-[#D4AF37]/30">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-lg bg-[#D4AF37]/20 border border-[#D4AF37] flex items-center justify-center text-[#D4AF37]">
            <HardHat className="w-5 h-5" />
          </div>
          <div>
            <div className="text-xs font-black uppercase tracking-wider text-[#D4AF37]">
              Zero Incidents • Zero Harm Culture
            </div>
            <div className="text-[11px] text-slate-200">
              Unyielding compliance with Qatar Ministry of Labour & International Safety Standards.
            </div>
          </div>
        </div>
        <div className="text-right">
          <span className="text-xs font-mono font-bold text-white bg-emerald-600/80 px-2.5 py-1 rounded">
            100% SAFETY TARGET
          </span>
        </div>
      </div>

      {/* Two Pillars: HSE on Left, QA/QC on Right */}
      <div className="grid grid-cols-2 gap-4 flex-1">
        {/* Left Column: HSE */}
        <div className="p-4 rounded-xl border border-slate-200 bg-white flex flex-col justify-between shadow-xs">
          <div>
            <div className="flex items-center space-x-2 text-[#0B192C] font-bold text-xs mb-2">
              <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
              <span>HSE Core Protocols</span>
            </div>
            <p className="text-[10.5px] text-slate-600 leading-relaxed mb-3">
              {companyConfig.safetyPolicy.description}
            </p>

            <div className="space-y-2 border-t border-slate-100 pt-3">
              {companyConfig.safetyPolicy.commitments.map((item, idx) => (
                <div key={idx} className="flex items-start space-x-2 text-[10px] text-slate-700">
                  <CheckCircle2 className="w-3 h-3 text-[#D4AF37] shrink-0 mt-0.5" />
                  <span className="leading-snug">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-4 p-2.5 rounded bg-slate-50 border border-slate-200 text-[9px] text-slate-500">
            <span className="font-bold text-[#0B192C] block">HSE Induction:</span>
            Mandatory safety induction and site PPE verification before site access is granted to any personnel.
          </div>
        </div>

        {/* Right Column: QA/QC */}
        <div className="p-4 rounded-xl border border-slate-200 bg-white flex flex-col justify-between shadow-xs">
          <div>
            <div className="flex items-center space-x-2 text-[#0B192C] font-bold text-xs mb-2">
              <Award className="w-4 h-4 text-[#D4AF37]" />
              <span>Quality Assurance & Quality Control</span>
            </div>
            <p className="text-[10.5px] text-slate-600 leading-relaxed mb-3">
              {companyConfig.qualityPolicy.description}
            </p>

            <div className="space-y-2 border-t border-slate-100 pt-3">
              {companyConfig.qualityPolicy.commitments.map((item, idx) => (
                <div key={idx} className="flex items-start space-x-2 text-[10px] text-slate-700">
                  <CheckCircle2 className="w-3 h-3 text-[#0B192C] shrink-0 mt-0.5" />
                  <span className="leading-snug">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-4 p-2.5 rounded bg-slate-50 border border-slate-200 text-[9px] text-slate-500">
            <span className="font-bold text-[#0B192C] block">Third-Party Testing:</span>
            Independent laboratory verification for soil compaction, cube crushing, and steel tensile strength.
          </div>
        </div>
      </div>

      {/* Standards Bar */}
      <div className="mt-4 grid grid-cols-4 gap-2 text-center text-[10px]">
        <div className="p-2 rounded bg-slate-100 border border-slate-200 font-semibold text-slate-800">
          QCS 2014 Compliant
        </div>
        <div className="p-2 rounded bg-slate-100 border border-slate-200 font-semibold text-slate-800">
          QCDD Fire Code Certified
        </div>
        <div className="p-2 rounded bg-slate-100 border border-slate-200 font-semibold text-slate-800">
          Kahramaa Power & Water
        </div>
        <div className="p-2 rounded bg-slate-100 border border-slate-200 font-semibold text-slate-800">
          OSHA / ISO Integrated
        </div>
      </div>
    </A4PageWrapper>
  );
};
