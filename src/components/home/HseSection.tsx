import React from "react";
import Link from "next/link";
import { companyConfig } from "@/config/company";
import { ShieldCheck, HardHat, Award, CheckCircle2, Workflow, ArrowRight } from "lucide-react";

export const HseSection: React.FC = () => {
  return (
    <section id="hse" className="py-20 bg-[#0B192C] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 text-xs font-bold text-[#D4AF37] uppercase tracking-widest px-3 py-1 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Health, Safety, Environment & QA/QC</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight uppercase">
            Standards Without <br />
            <span className="text-[#D4AF37]">Compromise</span>
          </h2>
          <div className="w-16 h-1 bg-[#D4AF37] mx-auto mt-3 rounded-full" />
        </div>

        {/* 2 Big Cards: HSE & QA/QC */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* HSE Card */}
          <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800 relative overflow-hidden flex flex-col justify-between shadow-xl">
            <div>
              <div className="flex items-center space-x-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-[#0B192C] text-[#D4AF37] border border-[#D4AF37]/40 flex items-center justify-center">
                  <HardHat className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-white">Health & Safety Policy (HSE)</h3>
                  <p className="text-xs text-emerald-400 font-semibold">Zero-Harm Target on All Active Work Zones</p>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5">
                {companyConfig.safetyPolicy.description}
              </p>

              <div className="space-y-2.5">
                {companyConfig.safetyPolicy.commitments.slice(0, 3).map((c, i) => (
                  <div key={i} className="flex items-start space-x-2.5 text-xs text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                    <span>{c}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800 text-[11px] text-slate-400">
              Compliant with Qatar Ministry of Labour & International Safety Standards.
            </div>
          </div>

          {/* QA/QC Card */}
          <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800 relative overflow-hidden flex flex-col justify-between shadow-xl">
            <div>
              <div className="flex items-center space-x-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-[#0B192C] text-[#D4AF37] border border-[#D4AF37]/40 flex items-center justify-center">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-white">Quality Assurance & Control (QA/QC)</h3>
                  <p className="text-xs text-[#D4AF37] font-semibold">Qatar Construction Specifications (QCS) Aligned</p>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5">
                {companyConfig.qualityPolicy.description}
              </p>

              <div className="space-y-2.5">
                {companyConfig.qualityPolicy.commitments.slice(0, 3).map((c, i) => (
                  <div key={i} className="flex items-start space-x-2.5 text-xs text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                    <span>{c}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800 text-[11px] text-slate-400">
              Inspection & Test Plans (ITP) logged at every critical project milestone.
            </div>
          </div>
        </div>

        {/* Link to HSE subpage */}
        <div className="text-center">
          <Link
            href="/hse-quality"
            className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl bg-slate-900 border border-[#D4AF37]/40 hover:bg-[#D4AF37]/10 text-xs font-bold text-[#D4AF37] transition-all"
          >
            <span>Review Full HSE Protocols & 6-Phase Engineering Flow</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
};
