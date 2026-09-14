import React from "react";
import Link from "next/link";
import { companyConfig } from "@/config/company";
import { ShieldCheck, Target, Compass, Award, CheckCircle2, Landmark, ArrowRight } from "lucide-react";

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-[#0F172A] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 text-xs font-bold text-[#D4AF37] uppercase tracking-widest px-3 py-1 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 mb-3">
            <Landmark className="w-3.5 h-3.5" />
            <span>Corporate Identity & Regulatory Status</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight uppercase">
            Engineering Built On <br />
            <span className="text-[#D4AF37]">Trust & Precision</span>
          </h2>
          <div className="w-16 h-1 bg-[#D4AF37] mx-auto mt-3 rounded-full" />
        </div>

        {/* Two-Column About Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16">
          {/* Left Description Column */}
          <div className="lg:col-span-7 space-y-5">
            <h3 className="text-xl sm:text-2xl font-extrabold text-white leading-snug">
              A Dedicated Qatari Contractor for Commercial & Non-Residential Structures
            </h3>

            <p className="text-slate-300 text-sm leading-relaxed">
              {companyConfig.brand.descriptionEn}
            </p>

            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
              Operating strictly under Qatar Ministry of Commerce and Industry Activity Code <span className="font-mono text-[#D4AF37] font-bold">{companyConfig.registry.primaryActivityCode}</span> (&quot;{companyConfig.registry.primaryActivityEn}&quot;), we are equipped to tackle complex site conditions, stringent QA/QC protocols, and fast-track project handovers.
            </p>

            {/* Core Values Bullet Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-start space-x-2.5 p-3 rounded-xl bg-slate-800/60 border border-slate-700/60">
                <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <div className="text-xs">
                  <span className="font-bold text-white block">QCS Compliant:</span>
                  <span className="text-slate-400">Strict adherence to Qatar Construction Specs.</span>
                </div>
              </div>

              <div className="flex items-start space-x-2.5 p-3 rounded-xl bg-slate-800/60 border border-slate-700/60">
                <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <div className="text-xs">
                  <span className="font-bold text-white block">Zero Harm HSE:</span>
                  <span className="text-slate-400">Comprehensive safety plans, daily TBT & PPE.</span>
                </div>
              </div>

              <div className="flex items-start space-x-2.5 p-3 rounded-xl bg-slate-800/60 border border-slate-700/60">
                <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <div className="text-xs">
                  <span className="font-bold text-white block">Authority Approved:</span>
                  <span className="text-slate-400">QCDD, Kahramaa, and Municipal clearance handling.</span>
                </div>
              </div>

              <div className="flex items-start space-x-2.5 p-3 rounded-xl bg-slate-800/60 border border-slate-700/60">
                <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <div className="text-xs">
                  <span className="font-bold text-white block">Turnkey Delivery:</span>
                  <span className="text-slate-400">Single contract responsibility from subgrade to finishes.</span>
                </div>
              </div>
            </div>

            <div className="pt-3">
              <Link
                href="/about"
                className="inline-flex items-center space-x-2 text-xs font-bold text-[#D4AF37] hover:text-amber-300 transition-colors"
              >
                <span>Read Full Company Profile & MD Statement</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Right Column: Commercial Registration Certificate Card */}
          <div className="lg:col-span-5">
            <div className="p-7 rounded-2xl bg-[#0B192C] border-2 border-[#D4AF37]/40 shadow-2xl relative overflow-hidden">
              <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-5">
                <div>
                  <span className="text-[10px] font-bold text-[#D4AF37] uppercase tracking-widest block">
                    Official Verification
                  </span>
                  <div className="text-base font-black text-white">
                    Commercial Registration
                  </div>
                </div>
                <div className="w-9 h-9 rounded-xl bg-[#D4AF37]/15 border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37]">
                  <ShieldCheck className="w-4 h-4" />
                </div>
              </div>

              <div className="space-y-3 text-xs">
                <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-900 border border-slate-800">
                  <span className="text-slate-400">C.R Number:</span>
                  <span className="font-mono text-base font-extrabold text-[#D4AF37]">
                    {companyConfig.registry.crNumber}
                  </span>
                </div>

                <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-900 border border-slate-800">
                  <span className="text-slate-400">C.R Status:</span>
                  <span className="inline-flex items-center space-x-1 text-emerald-400 font-bold">
                    <CheckCircle2 className="w-3 h-3" />
                    <span>Active (نشط)</span>
                  </span>
                </div>

                <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-900 border border-slate-800">
                  <span className="text-slate-400">Activity Code:</span>
                  <span className="font-mono font-bold text-white">
                    {companyConfig.registry.primaryActivityCode}
                  </span>
                </div>

                <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800">
                  <span className="text-slate-400 block mb-0.5 text-[10px]">Authorized Activity:</span>
                  <span className="text-slate-200 font-medium leading-snug block text-xs">
                    {companyConfig.registry.primaryActivityEn}
                  </span>
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
                <span>{companyConfig.registry.chamberMembership}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
