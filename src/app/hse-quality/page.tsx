import React from "react";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/layout/PageHeader";
import { companyConfig } from "@/config/company";
import { ShieldCheck, HardHat, Award, CheckCircle2, AlertTriangle, Workflow, FileSpreadsheet, Check } from "lucide-react";

export const metadata = {
  title: `HSE & Quality Assurance | ${companyConfig.brand.nameEn} - Qatar`,
  description: `Our Zero-Harm Health, Safety & Environmental (HSE) policy and QCS 2014 Quality Assurance framework in Doha, Qatar.`,
};

export default function HseQualityPage() {
  return (
    <div className="min-h-screen bg-[#0B192C] text-slate-100 flex flex-col">
      <Navbar />

      <main className="flex-1">
        <PageHeader
          title="Health, Safety & Quality Assurance"
          subtitle="A Zero-Harm safety philosophy combined with rigorous Qatar Construction Specifications (QCS) QA/QC protocols."
          breadcrumb="HSE & Quality"
        />

        {/* Top Highlight Statistics Banner */}
        <section className="py-12 bg-[#050E1A] border-b border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                <div className="text-2xl font-black text-emerald-400">Zero</div>
                <div className="text-xs font-bold text-white mt-1">Lost-Time Incidents</div>
                <div className="text-[11px] text-slate-400 mt-0.5">Strict PTW & PPE Enforcement</div>
              </div>

              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                <div className="text-2xl font-black text-[#D4AF37]">100%</div>
                <div className="text-xs font-bold text-white mt-1">QCS 2014 Compliant</div>
                <div className="text-[11px] text-slate-400 mt-0.5">National Standard Conformance</div>
              </div>

              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                <div className="text-2xl font-black text-emerald-400">Daily</div>
                <div className="text-xs font-bold text-white mt-1">Toolbox Talks (TBT)</div>
                <div className="text-[11px] text-slate-400 mt-0.5">Mandatory Pre-Shift Briefings</div>
              </div>

              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                <div className="text-2xl font-black text-[#D4AF37]">Verified</div>
                <div className="text-xs font-bold text-white mt-1">3rd-Party Lab Audits</div>
                <div className="text-[11px] text-slate-400 mt-0.5">Independent Material Testing</div>
              </div>
            </div>
          </div>
        </section>

        {/* Detailed HSE & QA/QC Breakdown */}
        <section className="py-16 sm:py-20 bg-[#0F172A]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
              {/* Left: HSE Policy */}
              <div className="p-8 sm:p-10 rounded-2xl bg-slate-900 border border-slate-800 shadow-xl flex flex-col justify-between">
                <div>
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-[#0B192C] text-[#D4AF37] border border-[#D4AF37]/40 flex items-center justify-center">
                      <HardHat className="w-6 h-6" />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold text-white">Health, Safety & Environment (HSE)</h2>
                      <p className="text-xs text-emerald-400 font-semibold">Zero-Harm Commitment</p>
                    </div>
                  </div>

                  <p className="text-sm text-slate-300 leading-relaxed mb-6">
                    {companyConfig.safetyPolicy.description}
                  </p>

                  <div className="space-y-3.5 mb-6">
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Mandatory Operational Safety Protocols:
                    </div>
                    {companyConfig.safetyPolicy.commitments.map((item, idx) => (
                      <div key={idx} className="flex items-start space-x-3 text-xs text-slate-200">
                        <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-slate-800 text-xs text-slate-400">
                  <span className="font-semibold text-white">Ministry of Labour Directives:</span> Full compliance with midday outdoor working bans, summer hydration protocols, and worker welfare standards.
                </div>
              </div>

              {/* Right: QA/QC Policy */}
              <div className="p-8 sm:p-10 rounded-2xl bg-slate-900 border border-slate-800 shadow-xl flex flex-col justify-between">
                <div>
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-[#0B192C] text-[#D4AF37] border border-[#D4AF37]/40 flex items-center justify-center">
                      <Award className="w-6 h-6" />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold text-white">Quality Assurance & Quality Control (QA/QC)</h2>
                      <p className="text-xs text-[#D4AF37] font-semibold">Zero Defect Engineering</p>
                    </div>
                  </div>

                  <p className="text-sm text-slate-300 leading-relaxed mb-6">
                    {companyConfig.qualityPolicy.description}
                  </p>

                  <div className="space-y-3.5 mb-6">
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Quality Control Procedures:
                    </div>
                    {companyConfig.qualityPolicy.commitments.map((item, idx) => (
                      <div key={idx} className="flex items-start space-x-3 text-xs text-slate-200">
                        <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-slate-800 text-xs text-slate-400">
                  <span className="font-semibold text-white">Inspection Sign-Offs:</span> Structural concrete, post-tensioning, waterproofing, and MEP pressure testing require consultant approvals.
                </div>
              </div>
            </div>

            {/* 6-Phase Engineering Project Lifecycle */}
            <div className="p-8 sm:p-10 rounded-2xl bg-slate-900 border border-slate-800 shadow-xl">
              <div className="text-center max-w-3xl mx-auto mb-10">
                <div className="inline-flex items-center space-x-2 text-xs font-bold text-[#D4AF37] uppercase tracking-widest px-3 py-1 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 mb-3">
                  <Workflow className="w-3.5 h-3.5" />
                  <span>Stage-Gate Delivery Model</span>
                </div>
                <h3 className="text-2xl font-black text-white uppercase">
                  Structured 6-Phase Project Execution
                </h3>
                <p className="text-xs text-slate-400 mt-2">
                  Every project progresses through formal milestone gates ensuring design integrity, authority clearance, and spotless handover.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {companyConfig.methodology.map((phase) => (
                  <div
                    key={phase.phaseNumber}
                    className="p-6 rounded-xl bg-slate-950/60 border border-slate-800 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="w-8 h-8 rounded-lg bg-[#0B192C] text-[#D4AF37] border border-[#D4AF37]/40 font-mono font-bold text-xs flex items-center justify-center">
                          {phase.phaseNumber}
                        </span>
                        <span className="text-[10px] text-emerald-400 font-semibold bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-800">
                          Sign-off Gate
                        </span>
                      </div>

                      <h4 className="text-sm font-bold text-white mb-2 leading-snug">
                        {phase.phaseName}
                      </h4>

                      <p className="text-xs text-slate-300 leading-relaxed mb-4">
                        {phase.description}
                      </p>
                    </div>

                    <div className="p-3 rounded-lg bg-slate-900 border border-slate-800/80 text-[11px]">
                      <span className="text-slate-400 block mb-0.5">Milestone Deliverable:</span>
                      <span className="text-[#D4AF37] font-semibold">{phase.deliverable}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
