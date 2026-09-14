import React from "react";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/layout/PageHeader";
import { companyConfig } from "@/config/company";
import { ShieldCheck, Target, Compass, Award, CheckCircle2, Landmark, FileText, ArrowRight, Building, Users } from "lucide-react";

export const metadata = {
  title: `About Us | ${companyConfig.brand.nameEn} - Qatar Commercial Contractor`,
  description: `Learn about Bostik Accurate Construction (CR #226852), our corporate leadership, vision, and non-residential engineering capabilities in Doha, Qatar.`,
};

export default function AboutPage() {
  const { operationsManager } = companyConfig.contacts;

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#0B192C] text-slate-900 dark:text-slate-100 flex flex-col transition-colors duration-300">
      <Navbar />

      <main className="flex-1">
        <PageHeader
          title="About Our Enterprise"
          subtitle="Precision engineering, commercial integrity, and unyielding execution standards across the State of Qatar."
          breadcrumb="About Us"
        />

        {/* Section 1: Executive Overview & MD Message */}
        <section className="py-16 sm:py-20 bg-[#0F172A]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center space-x-2 text-xs font-bold text-[#D4AF37] uppercase tracking-widest px-3 py-1 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30">
                  <Landmark className="w-3.5 h-3.5" />
                  <span>Corporate Profile</span>
                </div>

                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight leading-snug">
                  Built to Power Qatar&apos;s Commercial Growth
                </h2>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  {companyConfig.brand.descriptionEn}
                </p>

                <p className="text-slate-400 text-sm leading-relaxed">
                  Licensed under Qatar Commercial Registration <span className="font-mono text-[#D4AF37] font-bold">#{companyConfig.registry.crNumber}</span>, Bostik Accurate Construction operates with a hands-on management approach. We combine advanced project management information systems with rigorous on-site oversight to eliminate delays, enforce strict Qatar Construction Specifications (QCS 2014), and uphold our Zero-Harm safety culture.
                </p>

                {/* Key Metrics */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
                  {companyConfig.stats.map((stat, idx) => (
                    <div key={idx} className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                      <div className="text-lg sm:text-xl font-black text-[#D4AF37]">{stat.value}</div>
                      <div className="text-xs font-bold text-white mt-0.5">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* MD Quote Box */}
              <div className="lg:col-span-5">
                <div className="p-8 rounded-2xl bg-[#0B192C] border-2 border-[#D4AF37]/40 shadow-2xl relative overflow-hidden">
                  <div className="text-[11px] font-bold text-[#D4AF37] uppercase tracking-widest mb-3">
                    Managing Director&apos;s Message
                  </div>

                  <blockquote className="text-sm text-slate-200 leading-relaxed italic mb-6">
                    &ldquo;In Qatar&apos;s fast-evolving commercial landscape, quality is not an ambition—it is an absolute prerequisite. At Bostik Accurate Construction, our commitment is straightforward: every foundation we pour, every superstructure we frame, and every turnkey fit-out we deliver must stand the test of time and reflect the highest engineering precision.&rdquo;
                  </blockquote>

                  <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                    <div>
                      <div className="text-sm font-bold text-white">{operationsManager.name}</div>
                      <div className="text-xs text-[#D4AF37]">{operationsManager.role}</div>
                    </div>
                    <div className="text-right text-[10px] text-slate-500">
                      Authority: Full & Absolute<br />CR #226852
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Official Commercial Registration Details */}
        <section className="py-16 sm:py-20 bg-[#0B192C] border-y border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <div className="inline-flex items-center space-x-2 text-xs font-bold text-[#D4AF37] uppercase tracking-widest px-3 py-1 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 mb-3">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Regulatory Authority & Legal Framework</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight uppercase">
                Official Commercial Credentials
              </h2>
              <div className="w-16 h-1 bg-[#D4AF37] mx-auto mt-3 rounded-full" />
              <p className="text-slate-400 text-sm mt-3">
                Certified by the Ministry of Commerce and Industry (MOCI), State of Qatar.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                  Commercial Registration (CR)
                </span>
                <div className="text-2xl font-mono font-black text-[#D4AF37]">
                  {companyConfig.registry.crNumber}
                </div>
                <div className="text-xs text-emerald-400 font-semibold mt-2 flex items-center space-x-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Status: Active (نشط)</span>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                  Licensed Activity Code
                </span>
                <div className="text-2xl font-mono font-black text-[#D4AF37]">
                  {companyConfig.registry.primaryActivityCode}
                </div>
                <div className="text-xs text-slate-300 mt-2">
                  Non-Residential Construction
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                  Chamber of Commerce
                </span>
                <div className="text-sm font-bold text-white mt-1">
                  Member of Qatar Chamber
                </div>
                <div className="text-xs text-slate-400 mt-2 font-arabic">
                  عضو في غرفة تجارة وصناعة قطر
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                  Unified Economic Number
                </span>
                <div className="text-sm font-mono font-bold text-white mt-1">
                  {companyConfig.registry.unifiedEconomicNo}
                </div>
                <div className="text-xs text-slate-400 mt-2">
                  State of Qatar Single Economic Identifier
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                  Tax Registration Number
                </span>
                <div className="text-sm font-mono font-bold text-white mt-1">
                  {companyConfig.registry.taxRegistrationNo}
                </div>
                <div className="text-xs text-slate-400 mt-2">
                  General Tax Authority Compliant
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                  Legal Form
                </span>
                <div className="text-sm font-bold text-white mt-1">
                  LLC Owned by One Person
                </div>
                <div className="text-xs text-slate-400 mt-2 font-arabic">
                  {companyConfig.registry.legalFormAr}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Vision, Mission & 2030 Alignment */}
        <section className="py-16 sm:py-20 bg-[#0F172A]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#0B192C] text-[#D4AF37] border border-[#D4AF37]/40 flex items-center justify-center">
                    <Compass className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Our Strategic Vision</h3>
                </div>
                <p className="text-sm text-slate-300 leading-relaxed">
                  To be the benchmark commercial contractor in Qatar, trusted by private enterprises, institutional developers, and government bodies for our integrity, speed of mobilization, and structural excellence aligned with the Qatar National Vision 2030.
                </p>
              </div>

              <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#0B192C] text-[#D4AF37] border border-[#D4AF37]/40 flex items-center justify-center">
                    <Target className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Our Operating Mission</h3>
                </div>
                <p className="text-sm text-slate-300 leading-relaxed">
                  To construct and finish commercial buildings of the highest caliber by enforcing strict safety standards, deploying modern machinery, and maintaining transparent, collaborative partnerships with our clients from contract award to final handover.
                </p>
              </div>
            </div>

            {/* Bottom Action Bar */}
            <div className="p-8 rounded-2xl bg-gradient-to-r from-[#0B192C] to-[#1E3E62] border border-[#D4AF37]/30 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div>
                <h4 className="text-lg font-bold text-white">Download Our Full Prequalification Dossier</h4>
                <p className="text-xs text-slate-300 mt-1">
                  Review our complete 10-page A4 company profile formatted for client submittals and tender reviews.
                </p>
              </div>
              <div className="flex items-center space-x-3 shrink-0">
                <Link
                  href="/portfolio"
                  className="inline-flex items-center space-x-2 px-5 py-3 rounded-xl bg-[#D4AF37] hover:bg-[#B8860B] text-slate-950 text-xs font-bold uppercase tracking-wider shadow-lg"
                >
                  <FileText className="w-4 h-4" />
                  <span>View 10-Page Profile</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
