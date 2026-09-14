import React from "react";
import { companyConfig } from "@/config/company";
import { ShieldCheck, Target, Compass, Award, CheckCircle2, Landmark, FileText } from "lucide-react";

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-[#0F172A] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 text-xs font-bold text-[#D4AF37] uppercase tracking-widest px-3.5 py-1 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 mb-3">
            <Landmark className="w-3.5 h-3.5" />
            <span>Corporate Identity & Regulatory Status</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase">
            Engineering Built On <br />
            <span className="text-[#D4AF37]">Trust & Precision</span>
          </h2>
          <div className="w-20 h-1 bg-[#D4AF37] mx-auto mt-4 rounded-full" />
        </div>

        {/* Two-Column About Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          {/* Left Description Column */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-2xl font-extrabold text-white leading-snug">
              A Dedicated Qatari Contractor for Commercial & Non-Residential Structures
            </h3>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {companyConfig.brand.descriptionEn}
            </p>

            <p className="text-slate-400 text-sm leading-relaxed">
              Operating strictly under Qatar Ministry of Commerce and Industry Activity Code <span className="font-mono text-[#D4AF37] font-bold">{companyConfig.registry.primaryActivityCode}</span> (&quot;{companyConfig.registry.primaryActivityEn}&quot;), we are equipped to tackle complex site conditions, stringent QA/QC protocols, and fast-track project handovers.
            </p>

            {/* Core Values Bullet Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-4">
              <div className="flex items-start space-x-3 p-3 rounded-xl bg-slate-800/60 border border-slate-700/60">
                <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <div className="text-xs">
                  <span className="font-bold text-white block">QCS Compliant:</span>
                  <span className="text-slate-400">Strict adherence to Qatar National Construction Specs.</span>
                </div>
              </div>

              <div className="flex items-start space-x-3 p-3 rounded-xl bg-slate-800/60 border border-slate-700/60">
                <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <div className="text-xs">
                  <span className="font-bold text-white block">Zero Harm HSE:</span>
                  <span className="text-slate-400">Comprehensive safety plans, daily toolbox talks & PPE.</span>
                </div>
              </div>

              <div className="flex items-start space-x-3 p-3 rounded-xl bg-slate-800/60 border border-slate-700/60">
                <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <div className="text-xs">
                  <span className="font-bold text-white block">Authority Approved:</span>
                  <span className="text-slate-400">QCDD, Kahramaa, and Municipal clearance handling.</span>
                </div>
              </div>

              <div className="flex items-start space-x-3 p-3 rounded-xl bg-slate-800/60 border border-slate-700/60">
                <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <div className="text-xs">
                  <span className="font-bold text-white block">Turnkey Accountability:</span>
                  <span className="text-slate-400">Single point of contract from subgrade to finishes.</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Commercial Registration Certificate Card */}
          <div id="credentials" className="lg:col-span-5">
            <div className="p-8 rounded-2xl bg-[#0B192C] border-2 border-[#D4AF37]/50 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4AF37]/10 rounded-full blur-2xl pointer-events-none" />

              <div className="flex items-center justify-between border-b border-slate-800 pb-5 mb-6">
                <div>
                  <span className="text-[10px] font-bold text-[#D4AF37] uppercase tracking-widest block">
                    Official Verification
                  </span>
                  <div className="text-lg font-black text-white">
                    Commercial Registration
                  </div>
                </div>
                <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/15 border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37]">
                  <ShieldCheck className="w-5 h-5" />
                </div>
              </div>

              <div className="space-y-4 text-xs">
                <div className="flex items-center justify-between p-3 rounded-lg bg-slate-900 border border-slate-800">
                  <span className="text-slate-400">C.R Number:</span>
                  <span className="font-mono text-base font-extrabold text-[#D4AF37]">
                    {companyConfig.registry.crNumber}
                  </span>
                </div>

                <div className="flex items-center justify-between p-3 rounded-lg bg-slate-900 border border-slate-800">
                  <span className="text-slate-400">C.R Status:</span>
                  <span className="inline-flex items-center space-x-1 text-emerald-400 font-bold">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Active (نشط)</span>
                  </span>
                </div>

                <div className="flex items-center justify-between p-3 rounded-lg bg-slate-900 border border-slate-800">
                  <span className="text-slate-400">Tax Reg No:</span>
                  <span className="font-mono text-slate-200">
                    {companyConfig.registry.taxRegistrationNo}
                  </span>
                </div>

                <div className="flex items-center justify-between p-3 rounded-lg bg-slate-900 border border-slate-800">
                  <span className="text-slate-400">Unified Economic:</span>
                  <span className="font-mono text-slate-200">
                    {companyConfig.registry.unifiedEconomicNo}
                  </span>
                </div>

                <div className="p-3 rounded-lg bg-slate-900 border border-slate-800">
                  <span className="text-slate-400 block mb-1 text-[11px]">Authorized Activity:</span>
                  <span className="text-slate-200 font-medium leading-snug block">
                    {companyConfig.registry.primaryActivityEn}
                  </span>
                  <span className="text-[11px] text-[#D4AF37] font-arabic mt-1 block">
                    {companyConfig.registry.primaryActivityAr}
                  </span>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
                <span>{companyConfig.registry.chamberMembership}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Vision & Mission Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 rounded-2xl bg-slate-800/40 border border-slate-700/60 relative overflow-hidden">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-[#0B192C] text-[#D4AF37] border border-[#D4AF37]/30 flex items-center justify-center">
                <Compass className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-bold text-white">Our Strategic Vision</h4>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed">
              To be the most reliable and performance-driven commercial builder in Qatar, delivering structurally superior, aesthetically refined assets that support Qatar&apos;s commercial economy and National Vision 2030.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-slate-800/40 border border-slate-700/60 relative overflow-hidden">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-[#0B192C] text-[#D4AF37] border border-[#D4AF37]/30 flex items-center justify-center">
                <Target className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-bold text-white">Our Operating Mission</h4>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed">
              To execute projects with zero defect tolerance, transparent client reporting, strict schedule adherence, and world-class safety practices that protect lives and deliver maximum value to property investors.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
