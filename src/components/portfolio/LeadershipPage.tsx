import React from "react";
import { companyConfig } from "@/config/company";
import { A4PageWrapper } from "./A4PageWrapper";
import { Users, Phone, Mail, Award, CheckCircle2, ShieldCheck, Briefcase } from "lucide-react";

export const LeadershipPage: React.FC = () => {
  const { businessDevelopment, operationsManager } = companyConfig.contacts;

  return (
    <A4PageWrapper
      pageNumber={9}
      title="Leadership & Key Personnel"
      subtitle="Executive Management & Project Governance"
    >
      {/* Title */}
      <div className="mb-5">
        <span className="text-[10px] font-bold text-[#D4AF37] uppercase tracking-widest block">
          Section 08 // Management Team
        </span>
        <h2 className="text-2xl font-black text-[#0B192C] tracking-tight mt-1">
          Executive Leadership & Technical Governance
        </h2>
        <div className="w-16 h-1 bg-[#D4AF37] mt-2 rounded" />
      </div>

      <p className="text-xs text-slate-600 mb-5 leading-relaxed">
        Bostik Accurate Construction is steered by experienced construction professionals combining commercial acumen with hands-on site operations, ensuring every contract is executed strictly within budget, schedule, and quality benchmarks.
      </p>

      {/* Two Key Leaders Grid */}
      <div className="grid grid-cols-2 gap-5 mb-5">
        {/* Awais Qamar */}
        <div className="p-5 rounded-xl border border-slate-200 bg-white shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex items-center space-x-3 mb-3">
              <div className="w-12 h-12 rounded-xl bg-[#0B192C] text-[#D4AF37] flex items-center justify-center font-bold text-base border border-[#D4AF37]/40 shadow-xs">
                AQ
              </div>
              <div>
                <h3 className="text-sm font-black text-[#0B192C] leading-snug">
                  {operationsManager.name}
                </h3>
                <div className="text-[11px] font-semibold text-[#B8860B]">
                  {operationsManager.role}
                </div>
                <div className="text-[9.5px] text-slate-500 font-arabic">
                  {operationsManager.roleArabic}
                </div>
              </div>
            </div>

            <div className="inline-flex items-center space-x-1.5 px-2.5 py-0.5 rounded bg-blue-50 text-blue-900 border border-blue-200 text-[9.5px] font-bold mb-3">
              <ShieldCheck className="w-3 h-3 text-blue-700" />
              <span>Full & Absolute Authority (Qatar CR 226852)</span>
            </div>

            <p className="text-[10.5px] text-slate-600 leading-relaxed mb-4">
              {operationsManager.bio}
            </p>

            <div className="space-y-1.5 text-[10px] text-slate-700 border-t border-slate-100 pt-3">
              <div className="font-semibold text-slate-900 mb-1">Key Oversight:</div>
              <div className="flex items-center space-x-1.5">
                <CheckCircle2 className="w-3 h-3 text-[#D4AF37]" />
                <span>On-site engineering, structural safety & QA/QC</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <CheckCircle2 className="w-3 h-3 text-[#D4AF37]" />
                <span>Heavy machinery, procurement & supply chain</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <CheckCircle2 className="w-3 h-3 text-[#D4AF37]" />
                <span>Labor safety & Qatar Municipality liaison</span>
              </div>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-slate-100 space-y-1 text-[10px]">
            <div className="flex items-center space-x-2 text-slate-700">
              <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span className="font-mono font-bold text-slate-900">{operationsManager.phoneFormatted}</span>
            </div>
            <div className="flex items-center space-x-2 text-slate-500">
              <Mail className="w-3.5 h-3.5 text-slate-400" />
              <span className="font-mono">{operationsManager.email}</span>
            </div>
          </div>
        </div>

        {/* Jhunelle Anne Ballocanag Ogoy */}
        <div className="p-5 rounded-xl border border-slate-200 bg-white shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex items-center space-x-3 mb-3">
              <div className="w-12 h-12 rounded-xl bg-[#1E3E62] text-white flex items-center justify-center font-bold text-base border border-blue-400 shadow-xs">
                JO
              </div>
              <div>
                <h3 className="text-sm font-black text-[#0B192C] leading-snug">
                  {businessDevelopment.name}
                </h3>
                <div className="text-[11px] font-semibold text-[#1E3E62]">
                  {businessDevelopment.role}
                </div>
                <div className="text-[9.5px] text-slate-500 font-arabic">
                  {businessDevelopment.roleArabic}
                </div>
              </div>
            </div>

            <div className="inline-flex items-center space-x-1.5 px-2.5 py-0.5 rounded bg-amber-50 text-amber-900 border border-amber-200 text-[9.5px] font-bold mb-3">
              <Briefcase className="w-3 h-3 text-amber-700" />
              <span>Commercial & Tenders Department</span>
            </div>

            <p className="text-[10.5px] text-slate-600 leading-relaxed mb-4">
              {businessDevelopment.bio}
            </p>

            <div className="space-y-1.5 text-[10px] text-slate-700 border-t border-slate-100 pt-3">
              <div className="font-semibold text-slate-900 mb-1">Key Oversight:</div>
              <div className="flex items-center space-x-1.5">
                <CheckCircle2 className="w-3 h-3 text-[#D4AF37]" />
                <span>Client pre-qualification & RFP bid submissions</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <CheckCircle2 className="w-3 h-3 text-[#D4AF37]" />
                <span>Commercial contract negotiation & stakeholder relations</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <CheckCircle2 className="w-3 h-3 text-[#D4AF37]" />
                <span>Corporate client service & post-handover care</span>
              </div>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-slate-100 space-y-1 text-[10px]">
            <div className="flex items-center space-x-2 text-slate-700">
              <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span className="font-mono font-bold text-slate-900">{businessDevelopment.phoneFormatted}</span>
            </div>
            <div className="flex items-center space-x-2 text-slate-500">
              <Mail className="w-3.5 h-3.5 text-slate-400" />
              <span className="font-mono">{businessDevelopment.email}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Organization Chart / Operational Flow */}
      <div className="mt-auto p-4 rounded-xl bg-slate-50 border border-slate-200 text-center">
        <div className="text-[11px] font-bold text-[#0B192C] uppercase tracking-wider mb-2">
          Project Operational Reporting Hierarchy
        </div>
        <div className="flex items-center justify-center space-x-4 text-[10px] text-slate-600">
          <span className="p-2 bg-white rounded border border-slate-200 font-semibold text-[#0B192C]">Managing Director</span>
          <span>→</span>
          <span className="p-2 bg-white rounded border border-slate-200 font-semibold text-slate-800">Operations & BD Managers</span>
          <span>→</span>
          <span className="p-2 bg-white rounded border border-slate-200 font-semibold text-slate-800">Site Project Engineers</span>
          <span>→</span>
          <span className="p-2 bg-white rounded border border-slate-200 font-semibold text-slate-800">QA/QC & HSE Supervisors</span>
        </div>
      </div>
    </A4PageWrapper>
  );
};
