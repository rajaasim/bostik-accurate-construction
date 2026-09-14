import React from "react";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/layout/PageHeader";
import { companyConfig } from "@/config/company";
import { Users, Phone, Mail, MessageSquare, ShieldCheck, Briefcase, CheckCircle2, ArrowRight } from "lucide-react";

export const metadata = {
  title: `Leadership & Management | ${companyConfig.brand.nameEn} - Qatar`,
  description: `Meet the executive leadership and operational management driving Bostik Accurate Construction in Doha, Qatar.`,
};

export default function LeadershipPage() {
  const { businessDevelopment, operationsManager } = companyConfig.contacts;

  return (
    <div className="min-h-screen bg-[#0B192C] text-slate-100 flex flex-col">
      <Navbar />

      <main className="flex-1">
        <PageHeader
          title="Executive Leadership & Management"
          subtitle="Experienced construction professionals combining technical engineering rigor with dedicated client partnership across Qatar."
          breadcrumb="Leadership"
        />

        <section className="py-16 sm:py-20 bg-[#0F172A]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Two Key Leaders Showcase */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
              {/* Awais Qamar */}
              <div className="p-8 sm:p-10 rounded-2xl bg-slate-900 border border-slate-800 hover:border-[#D4AF37]/40 transition-all shadow-xl flex flex-col justify-between">
                <div>
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-[#0B192C] border-2 border-[#D4AF37] flex items-center justify-center text-[#D4AF37] font-black text-xl shadow-lg">
                      AQ
                    </div>
                    <div>
                      <h2 className="text-xl font-bold text-white">{operationsManager.name}</h2>
                      <div className="text-xs font-semibold text-[#D4AF37]">{operationsManager.role}</div>
                      <div className="text-[11px] text-slate-400 font-arabic">{operationsManager.roleArabic}</div>
                    </div>
                  </div>

                  <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-blue-900/30 text-blue-300 border border-blue-700/50 text-xs font-semibold mb-6">
                    <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
                    <span>Manager with Full & Absolute Authority (Qatar CR 226852)</span>
                  </div>

                  <p className="text-sm text-slate-300 leading-relaxed mb-6">
                    {operationsManager.bio}
                  </p>

                  <div className="space-y-2 text-xs text-slate-300 border-t border-slate-800 pt-4 mb-6">
                    <div className="font-bold text-white mb-2">Executive Responsibilities:</div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0" />
                      <span>On-site engineering, structural safety & QA/QC enforcement</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0" />
                      <span>Heavy plant mobilization, procurement & supply chain logistics</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0" />
                      <span>Subcontractor management & statutory municipal approvals</span>
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-slate-800 space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-400">Direct Phone:</span>
                    <a
                      href={`tel:${operationsManager.phone}`}
                      className="font-mono font-bold text-white hover:text-[#D4AF37] transition-colors"
                    >
                      {operationsManager.phoneFormatted}
                    </a>
                  </div>

                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-400">Email:</span>
                    <a
                      href={`mailto:${operationsManager.email}`}
                      className="font-mono text-slate-300 hover:text-white transition-colors"
                    >
                      {operationsManager.email}
                    </a>
                  </div>

                  <div className="pt-2">
                    <a
                      href={`https://wa.me/${operationsManager.whatsapp}?text=Hello%20Awais,%20I%20am%20contacting%20you%20regarding%20a%20construction%20project.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center space-x-2 py-3 rounded-xl bg-emerald-600/20 hover:bg-emerald-600/30 border border-emerald-500/40 text-emerald-400 text-xs font-bold transition-all"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>WhatsApp Direct Operations</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Jhunelle Anne Ballocanag Ogoy */}
              <div className="p-8 sm:p-10 rounded-2xl bg-slate-900 border border-slate-800 hover:border-[#D4AF37]/40 transition-all shadow-xl flex flex-col justify-between">
                <div>
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-[#1E3E62] border-2 border-blue-400 flex items-center justify-center text-white font-black text-xl shadow-lg">
                      JO
                    </div>
                    <div>
                      <h2 className="text-xl font-bold text-white">{businessDevelopment.name}</h2>
                      <div className="text-xs font-semibold text-blue-300">{businessDevelopment.role}</div>
                      <div className="text-[11px] text-slate-400 font-arabic">{businessDevelopment.roleArabic}</div>
                    </div>
                  </div>

                  <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-amber-900/30 text-amber-300 border border-amber-700/50 text-xs font-semibold mb-6">
                    <Briefcase className="w-3.5 h-3.5 text-amber-400" />
                    <span>Commercial Relations & Tenders Department</span>
                  </div>

                  <p className="text-sm text-slate-300 leading-relaxed mb-6">
                    {businessDevelopment.bio}
                  </p>

                  <div className="space-y-2 text-xs text-slate-300 border-t border-slate-800 pt-4 mb-6">
                    <div className="font-bold text-white mb-2">Commercial Responsibilities:</div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0" />
                      <span>Corporate client pre-qualification & tender bid management</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0" />
                      <span>Contract negotiation, commercial agreements & BOQ pricing</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0" />
                      <span>Stakeholder relations & ongoing client satisfaction</span>
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-slate-800 space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-400">Direct Phone:</span>
                    <a
                      href={`tel:${businessDevelopment.phone}`}
                      className="font-mono font-bold text-white hover:text-[#D4AF37] transition-colors"
                    >
                      {businessDevelopment.phoneFormatted}
                    </a>
                  </div>

                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-400">Email:</span>
                    <a
                      href={`mailto:${businessDevelopment.email}`}
                      className="font-mono text-slate-300 hover:text-white transition-colors"
                    >
                      {businessDevelopment.email}
                    </a>
                  </div>

                  <div className="pt-2">
                    <a
                      href={`https://wa.me/${businessDevelopment.whatsapp}?text=Hello%20Jhunelle,%20I%20would%20like%20to%20discuss%20a%20commercial%20opportunity.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center space-x-2 py-3 rounded-xl bg-emerald-600/20 hover:bg-emerald-600/30 border border-emerald-500/40 text-emerald-400 text-xs font-bold transition-all"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>WhatsApp Business Development</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Corporate Governance Structure */}
            <div className="p-8 sm:p-10 rounded-2xl bg-slate-900 border border-slate-800 text-center">
              <div className="text-xs font-bold uppercase tracking-widest text-[#D4AF37] mb-2">
                Organizational Hierarchy
              </div>
              <h3 className="text-xl font-bold text-white mb-6">
                Project Operational Reporting Structure
              </h3>

              <div className="flex flex-wrap items-center justify-center gap-3 text-xs">
                <span className="px-4 py-2.5 rounded-xl bg-[#0B192C] border border-[#D4AF37]/40 text-[#D4AF37] font-bold">
                  Managing Director
                </span>
                <span className="text-slate-600">→</span>
                <span className="px-4 py-2.5 rounded-xl bg-slate-800 text-white font-semibold">
                  Operations & BD Managers
                </span>
                <span className="text-slate-600">→</span>
                <span className="px-4 py-2.5 rounded-xl bg-slate-800 text-white font-semibold">
                  Project Engineers
                </span>
                <span className="text-slate-600">→</span>
                <span className="px-4 py-2.5 rounded-xl bg-slate-800 text-white font-semibold">
                  QA/QC & HSE Officers
                </span>
                <span className="text-slate-600">→</span>
                <span className="px-4 py-2.5 rounded-xl bg-slate-800 text-white font-semibold">
                  Site Trades & Craftsmen
                </span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
