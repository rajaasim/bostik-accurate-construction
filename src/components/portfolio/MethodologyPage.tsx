import React from "react";
import { companyConfig } from "@/config/company";
import { A4PageWrapper } from "./A4PageWrapper";
import { Workflow, CheckCircle, ArrowRight, Clock, ShieldCheck, FileCheck } from "lucide-react";

export const MethodologyPage: React.FC = () => {
  return (
    <A4PageWrapper
      pageNumber={5}
      title="Project Execution Methodology"
      subtitle="Engineering Workflow & Milestone Governance"
    >
      {/* Title */}
      <div className="mb-5">
        <span className="text-[10px] font-bold text-[#D4AF37] uppercase tracking-widest block">
          Section 04 // Operational Process
        </span>
        <h2 className="text-2xl font-black text-[#0B192C] tracking-tight mt-1">
          Structured 6-Phase Engineering Lifecycle
        </h2>
        <div className="w-16 h-1 bg-[#D4AF37] mt-2 rounded" />
      </div>

      <p className="text-xs text-slate-600 mb-5 leading-relaxed">
        Bostik Accurate Construction utilizes a disciplined stage-gate project delivery system tailored to Qatar&apos;s construction lifecycle. Every milestone requires rigorous quality and safety sign-offs before transitioning to subsequent phases.
      </p>

      {/* 6 Phases Flow */}
      <div className="grid grid-cols-2 gap-3.5 flex-1">
        {companyConfig.methodology.map((phase) => (
          <div
            key={phase.phaseNumber}
            className="p-3.5 rounded-xl border border-slate-200 bg-slate-50 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="w-6 h-6 rounded bg-[#0B192C] text-[#D4AF37] font-mono font-bold text-xs flex items-center justify-center">
                  {phase.phaseNumber}
                </span>
                <span className="text-[9px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 flex items-center space-x-1">
                  <CheckCircle className="w-2.5 h-2.5" />
                  <span>Quality Sign-off</span>
                </span>
              </div>

              <h4 className="text-xs font-bold text-[#0B192C] mb-1.5 leading-snug">
                {phase.phaseName}
              </h4>

              <p className="text-[10px] text-slate-600 leading-relaxed mb-2.5">
                {phase.description}
              </p>
            </div>

            <div className="p-2 rounded bg-white border border-slate-200 text-[9px] text-slate-700">
              <span className="font-bold text-[#0B192C] block mb-0.5">Key Deliverable:</span>
              <span className="text-slate-600 font-medium">{phase.deliverable}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Quality Governance Footer */}
      <div className="mt-4 p-3 rounded-lg bg-[#0B192C] text-white flex items-center justify-between text-xs">
        <div className="flex items-center space-x-3">
          <ShieldCheck className="w-5 h-5 text-[#D4AF37] shrink-0" />
          <span className="text-[10px] text-slate-200 leading-snug">
            Integrated Project Management Information System (PMIS) ensures weekly progress tracking, BOQ budget controls, and zero schedule slippage.
          </span>
        </div>
        <div className="text-[9px] font-mono font-bold text-[#D4AF37] border border-[#D4AF37]/40 px-2 py-1 rounded shrink-0 ml-3">
          ISO & QCS ALIGNED
        </div>
      </div>
    </A4PageWrapper>
  );
};
