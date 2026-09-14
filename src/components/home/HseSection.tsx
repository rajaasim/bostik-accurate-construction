import React from "react";
import { companyConfig } from "@/config/company";
import { ShieldCheck, HardHat, Award, CheckCircle2, Wrench, Check, Workflow } from "lucide-react";

export const HseSection: React.FC = () => {
  return (
    <section id="hse" className="py-24 bg-[#0B192C] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 text-xs font-bold text-[#D4AF37] uppercase tracking-widest px-3.5 py-1 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Health, Safety, Environment & QA/QC</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase">
            Standards Without <br />
            <span className="text-[#D4AF37]">Compromise</span>
          </h2>
          <div className="w-20 h-1 bg-[#D4AF37] mx-auto mt-4 rounded-full" />
        </div>

        {/* 2 Big Cards: HSE & QA/QC */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* HSE Card */}
          <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800 relative overflow-hidden flex flex-col justify-between">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#0B192C] text-[#D4AF37] border border-[#D4AF37]/40 flex items-center justify-center">
                  <HardHat className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Health & Safety Policy (HSE)</h3>
                  <p className="text-xs text-emerald-400 font-semibold">Zero-Harm Target on All Active Work Zones</p>
                </div>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                {companyConfig.safetyPolicy.description}
              </p>

              <div className="space-y-3">
                {companyConfig.safetyPolicy.commitments.map((c, i) => (
                  <div key={i} className="flex items-start space-x-3 text-xs text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                    <span>{c}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-800 text-[11px] text-slate-400">
              Compliant with Qatar Ministry of Labour and OSHA safety frameworks.
            </div>
          </div>

          {/* QA/QC Card */}
          <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800 relative overflow-hidden flex flex-col justify-between">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#0B192C] text-[#D4AF37] border border-[#D4AF37]/40 flex items-center justify-center">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Quality Assurance & Control (QA/QC)</h3>
                  <p className="text-xs text-[#D4AF37] font-semibold">Qatar Construction Specifications (QCS) Aligned</p>
                </div>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                {companyConfig.qualityPolicy.description}
              </p>

              <div className="space-y-3">
                {companyConfig.qualityPolicy.commitments.map((c, i) => (
                  <div key={i} className="flex items-start space-x-3 text-xs text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                    <span>{c}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-800 text-[11px] text-slate-400">
              Standardized Inspection & Test Plans (ITP) with verified third-party laboratory audits.
            </div>
          </div>
        </div>

        {/* 6-Phase Engineering Flow Summary */}
        <div className="p-8 rounded-2xl bg-gradient-to-br from-[#0F1D33] to-[#0B192C] border border-slate-800">
          <div className="flex items-center space-x-2 text-xs font-bold text-[#D4AF37] uppercase tracking-wider mb-6">
            <Workflow className="w-4 h-4" />
            <span>Structured Project Lifecycle</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 text-center">
            {companyConfig.methodology.map((phase) => (
              <div key={phase.phaseNumber} className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                <div className="w-8 h-8 mx-auto rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/40 text-[#D4AF37] font-mono font-bold text-xs flex items-center justify-center mb-2">
                  {phase.phaseNumber}
                </div>
                <div className="text-xs font-bold text-white line-clamp-2 leading-snug">
                  {phase.phaseName}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
