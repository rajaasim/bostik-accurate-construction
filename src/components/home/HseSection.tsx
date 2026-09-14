import React from "react";
import Link from "next/link";
import { companyConfig } from "@/config/company";
import { ShieldCheck, HardHat, Award, CheckCircle2, ArrowRight, Activity, Flame, FileCheck } from "lucide-react";

export const HseSection: React.FC = () => {
  return (
    <section id="hse" className="py-24 bg-[#091422] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 border-b border-slate-800 pb-8">
          <div>
            <div className="flex items-center space-x-3 mb-2">
              <span className="h-px w-8 bg-[#D4AF37]" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#D4AF37]">
                Safety & Compliance Benchmark
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight uppercase">
              Zero-Harm Standards
            </h2>
          </div>

          <div className="max-w-md">
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Every job site follows strict Qatar Ministry of Labour protocols, OSHA safety guidelines, and independent third-party laboratory quality verifications.
            </p>
          </div>
        </div>

        {/* High-Impact 4-Metric Safety Dashboard Ribbon */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="p-6 rounded-2xl bg-[#050C17] border border-slate-800 flex items-center space-x-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-950/60 border border-emerald-700/50 flex items-center justify-center text-emerald-400 shrink-0">
              <Activity className="w-6 h-6" />
            </div>
            <div>
              <div className="text-2xl font-black text-emerald-400">Zero</div>
              <div className="text-xs font-bold text-white mt-0.5">Lost Time Incidents</div>
              <div className="text-[10px] text-slate-500">Uncompromised site safety</div>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-[#050C17] border border-slate-800 flex items-center space-x-4">
            <div className="w-12 h-12 rounded-xl bg-amber-950/60 border border-amber-700/50 flex items-center justify-center text-[#D4AF37] shrink-0">
              <HardHat className="w-6 h-6" />
            </div>
            <div>
              <div className="text-2xl font-black text-[#D4AF37]">100%</div>
              <div className="text-xs font-bold text-white mt-0.5">PPE Compliance</div>
              <div className="text-[10px] text-slate-500">Mandatory on all perimeters</div>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-[#050C17] border border-slate-800 flex items-center space-x-4">
            <div className="w-12 h-12 rounded-xl bg-blue-950/60 border border-blue-700/50 flex items-center justify-center text-blue-400 shrink-0">
              <FileCheck className="w-6 h-6" />
            </div>
            <div>
              <div className="text-2xl font-black text-blue-400">Daily</div>
              <div className="text-xs font-bold text-white mt-0.5">Toolbox Briefings</div>
              <div className="text-[10px] text-slate-500">Pre-shift hazard analysis</div>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-[#050C17] border border-slate-800 flex items-center space-x-4">
            <div className="w-12 h-12 rounded-xl bg-purple-950/60 border border-purple-700/50 flex items-center justify-center text-purple-400 shrink-0">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <div className="text-2xl font-black text-purple-400">QCS 2014</div>
              <div className="text-xs font-bold text-white mt-0.5">QA/QC Conformance</div>
              <div className="text-[10px] text-slate-500">Certified laboratory testing</div>
            </div>
          </div>
        </div>

        {/* 3 Distinct Architectural Safety Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="p-7 rounded-2xl bg-[#0B1828] border border-slate-800 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-slate-900 flex items-center justify-center text-[#D4AF37] mb-4">
                <HardHat className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white mb-2">Permit to Work (PTW)</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Hot work, confined space operations, and elevated scaffolding require verified permits authorized by our certified HSE supervisors before work commences.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-800 text-[11px] text-[#D4AF37] font-semibold">
              Hazard Mitigation Protocol
            </div>
          </div>

          <div className="p-7 rounded-2xl bg-[#0B1828] border border-slate-800 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-slate-900 flex items-center justify-center text-[#D4AF37] mb-4">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white mb-2">Independent Lab Testing</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Soil compaction, concrete cube crushing (7 & 28-day testing), and steel tensile inspections are conducted exclusively by approved third-party Qatar laboratories.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-800 text-[11px] text-[#D4AF37] font-semibold">
              Material Approval Records (MAR)
            </div>
          </div>

          <div className="p-7 rounded-2xl bg-[#0B1828] border border-slate-800 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-slate-900 flex items-center justify-center text-[#D4AF37] mb-4">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white mb-2">Qatar Worker Welfare</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Strict compliance with Qatar Ministry of Labour directives, including summer outdoor working hour restrictions, shaded hydration rest areas, and first-aid medical facilities on-site.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-800 text-[11px] text-[#D4AF37] font-semibold">
              Ministry of Labour Verified
            </div>
          </div>
        </div>

        {/* Link to HSE subpage */}
        <div className="text-center">
          <Link
            href="/hse-quality"
            className="inline-flex items-center space-x-2 text-xs font-bold text-[#D4AF37] hover:text-amber-300 transition-colors uppercase tracking-wider"
          >
            <span>Explore Complete HSE Policies & 6-Phase Engineering Flow</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};
