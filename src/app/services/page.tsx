import React from "react";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/layout/PageHeader";
import { companyConfig } from "@/config/company";
import { Building2, HardHat, Layers, Zap, CheckCircle2, ArrowRight, ShieldCheck, Wrench, FileText } from "lucide-react";

export const metadata = {
  title: `Contracting Services | ${companyConfig.brand.nameEn} - Qatar`,
  description: `Full-scope commercial contracting services in Qatar: Non-residential building, civil engineering, interior fit-outs, and MEP solutions.`,
};

export default function ServicesPage() {
  const icons = [Building2, HardHat, Layers, Zap];

  return (
    <div className="min-h-screen bg-[#0B192C] text-slate-100 flex flex-col">
      <Navbar />

      <main className="flex-1">
        <PageHeader
          title="Contracting & Engineering Capabilities"
          subtitle="Specialized commercial contracting under Qatar Activity Code 410029, adhering to Qatar Construction Specifications (QCS 2014)."
          breadcrumb="Services"
        />

        {/* Services Detail List */}
        <section className="py-16 sm:py-20 bg-[#0F172A]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
            {companyConfig.services.map((service, index) => {
              const IconComp = icons[index % icons.length];
              const isEven = index % 2 === 1;

              return (
                <div
                  key={service.id}
                  id={service.id}
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-10 items-center p-8 sm:p-10 rounded-2xl bg-slate-900 border border-slate-800 hover:border-[#D4AF37]/40 transition-all shadow-xl ${
                    isEven ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Photo Column */}
                  <div className={`lg:col-span-5 relative rounded-xl overflow-hidden h-72 sm:h-80 shadow-lg ${isEven ? "lg:order-2" : ""}`}>
                    <img
                      src={service.imageUrl}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-black/20" />
                    <div className="absolute top-4 left-4">
                      <div className="w-12 h-12 rounded-xl bg-[#0B192C]/90 backdrop-blur-md border border-[#D4AF37]/50 flex items-center justify-center text-[#D4AF37] shadow-lg">
                        <IconComp className="w-6 h-6" />
                      </div>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <span className="text-xs font-mono font-bold text-[#D4AF37] bg-[#0B192C]/80 px-2.5 py-1 rounded">
                        DISCIPLINE // 0{index + 1}
                      </span>
                    </div>
                  </div>

                  {/* Content Column */}
                  <div className={`lg:col-span-7 space-y-5 ${isEven ? "lg:order-1" : ""}`}>
                    <div>
                      <div className="text-xs font-semibold text-[#D4AF37] font-arabic mb-1">
                        {service.titleArabic}
                      </div>
                      <h2 className="text-2xl sm:text-3xl font-black text-white leading-snug">
                        {service.title}
                      </h2>
                    </div>

                    <p className="text-slate-300 text-sm leading-relaxed">
                      {service.fullDescription}
                    </p>

                    <div className="space-y-2.5 pt-2">
                      <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                        Detailed Scope of Works & Deliverables:
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {service.capabilities.map((cap, capIdx) => (
                          <div key={capIdx} className="flex items-start space-x-2 text-xs text-slate-200">
                            <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                            <span>{cap}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
                      <div className="flex items-center space-x-2 text-xs text-slate-400">
                        <ShieldCheck className="w-4 h-4 text-emerald-400" />
                        <span>QCS 2014 & QCDD Approved Procedures</span>
                      </div>

                      <Link
                        href={`/contact?service=${service.id}`}
                        className="inline-flex items-center space-x-2 px-4 py-2 rounded-xl bg-[#D4AF37] text-slate-950 text-xs font-bold uppercase tracking-wider hover:bg-[#B8860B] transition-colors"
                      >
                        <span>Inquire About This Service</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Plant & Machinery Infrastructure Section */}
        <section className="py-16 bg-[#0B192C] border-t border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <div className="inline-flex items-center space-x-2 text-xs font-bold text-[#D4AF37] uppercase tracking-widest px-3 py-1 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 mb-3">
                <Wrench className="w-3.5 h-3.5" />
                <span>Heavy Plant & Machinery</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight uppercase">
                Technical Plant & Equipment Resources
              </h2>
              <div className="w-16 h-1 bg-[#D4AF37] mx-auto mt-3 rounded-full" />
              <p className="text-slate-400 text-sm mt-3">
                Equipped with certified construction plant and testing instruments to execute fast-track milestones.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {companyConfig.plantAndEquipment.map((group, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col justify-between">
                  <div>
                    <h3 className="text-sm font-bold text-white mb-3 pb-2 border-b border-slate-800 text-[#D4AF37]">
                      {group.category}
                    </h3>
                    <ul className="space-y-2 text-xs text-slate-300">
                      {group.items.map((item, i) => (
                        <li key={i} className="flex items-start space-x-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-4 pt-2 border-t border-slate-800/80 text-[10px] text-slate-500">
                    Third-Party Inspection Certified
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom CTA */}
            <div className="mt-12 p-8 rounded-2xl bg-gradient-to-r from-slate-900 via-[#1E3E62]/40 to-slate-900 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div>
                <h4 className="text-lg font-bold text-white">Have a BOQ or Project Specification Ready?</h4>
                <p className="text-xs text-slate-400 mt-1">
                  Send your drawings and tender schedules for rapid constructability analysis and itemized quotation.
                </p>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl bg-[#D4AF37] text-slate-950 font-bold text-xs uppercase tracking-wider shadow-lg shrink-0"
              >
                <span>Request Project Quotation</span>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
