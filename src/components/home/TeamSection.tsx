import React from "react";
import Link from "next/link";
import { companyConfig } from "@/config/company";
import { Users, MessageSquare, ShieldCheck, Briefcase, ArrowRight } from "lucide-react";

export const TeamSection: React.FC = () => {
  const { businessDevelopment, operationsManager } = companyConfig.contacts;

  return (
    <section id="team" className="py-20 bg-slate-50 dark:bg-[#0F172A] text-slate-900 dark:text-white relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 text-xs font-bold text-amber-700 dark:text-[#D4AF37] uppercase tracking-widest px-3 py-1 rounded-full bg-amber-50 dark:bg-[#D4AF37]/10 border border-amber-200 dark:border-[#D4AF37]/30 mb-3">
            <Users className="w-3.5 h-3.5" />
            <span>Key Personnel & Leadership</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-950 dark:text-white tracking-tight uppercase">
            Operational <span className="text-amber-700 dark:text-[#D4AF37]">Management</span>
          </h2>
          <div className="w-16 h-1 bg-amber-600 dark:bg-[#D4AF37] mx-auto mt-3 rounded-full" />
          <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm mt-3 font-light">
            Direct client communication and site supervision led by executive management.
          </p>
        </div>

        {/* Two Key Leaders Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-10">
          {/* Operations Manager: Awais Qamar */}
          <div className="p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-amber-500/40 dark:hover:border-[#D4AF37]/40 transition-all shadow-md dark:shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-14 h-14 rounded-2xl bg-[#0B192C] border-2 border-[#D4AF37] flex items-center justify-center text-[#D4AF37] font-black text-lg shadow-md">
                  AQ
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white">{operationsManager.name}</h3>
                  <div className="text-xs font-semibold text-amber-700 dark:text-[#D4AF37]">{operationsManager.role}</div>
                  <div className="text-[10px] text-slate-500 dark:text-slate-400 font-arabic">{operationsManager.roleArabic}</div>
                </div>
              </div>

              <div className="inline-flex items-center space-x-1.5 px-3 py-0.5 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-700/50 text-[11px] font-semibold mb-4">
                <ShieldCheck className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                <span>Full Authority (Qatar CR 226852)</span>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                {operationsManager.bio}
              </p>
            </div>

            <div className="pt-4 border-t border-slate-100 dark:border-slate-800 space-y-2 text-xs">
              <div className="flex items-center justify-between">
                <span className="text-slate-500 dark:text-slate-400">Direct Line:</span>
                <a
                  href={`tel:${operationsManager.phone}`}
                  className="font-mono font-bold text-slate-900 dark:text-white hover:text-amber-700 dark:hover:text-[#D4AF37] transition-colors"
                >
                  {operationsManager.phoneFormatted}
                </a>
              </div>

              <div>
                <a
                  href={`https://wa.me/${operationsManager.whatsapp}?text=Hello%20Awais,%20I%20am%20contacting%20you%20regarding%20a%20construction%20project.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center space-x-2 py-2.5 rounded-xl bg-emerald-50 dark:bg-emerald-600/20 hover:bg-emerald-100 dark:hover:bg-emerald-600/30 border border-emerald-200 dark:border-emerald-500/40 text-emerald-700 dark:text-emerald-400 text-xs font-bold transition-all"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp Operations</span>
                </a>
              </div>
            </div>
          </div>

          {/* Business Development: Jhunelle Anne Ballocanag Ogoy */}
          <div className="p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-amber-500/40 dark:hover:border-[#D4AF37]/40 transition-all shadow-md dark:shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-14 h-14 rounded-2xl bg-[#1E3E62] border-2 border-blue-400 flex items-center justify-center text-white font-black text-lg shadow-md">
                  JO
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white">{businessDevelopment.name}</h3>
                  <div className="text-xs font-semibold text-blue-600 dark:text-blue-300">{businessDevelopment.role}</div>
                  <div className="text-[10px] text-slate-500 dark:text-slate-400 font-arabic">{businessDevelopment.roleArabic}</div>
                </div>
              </div>

              <div className="inline-flex items-center space-x-1.5 px-3 py-0.5 rounded-full bg-amber-50 dark:bg-amber-900/30 text-amber-800 dark:text-amber-300 border border-amber-200 dark:border-amber-700/50 text-[11px] font-semibold mb-4">
                <Briefcase className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
                <span>Commercial Relations & Tenders</span>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                {businessDevelopment.bio}
              </p>
            </div>

            <div className="pt-4 border-t border-slate-100 dark:border-slate-800 space-y-2 text-xs">
              <div className="flex items-center justify-between">
                <span className="text-slate-500 dark:text-slate-400">Direct Line:</span>
                <a
                  href={`tel:${businessDevelopment.phone}`}
                  className="font-mono font-bold text-slate-900 dark:text-white hover:text-amber-700 dark:hover:text-[#D4AF37] transition-colors"
                >
                  {businessDevelopment.phoneFormatted}
                </a>
              </div>

              <div>
                <a
                  href={`https://wa.me/${businessDevelopment.whatsapp}?text=Hello%20Jhunelle,%20I%20would%20like%20to%20discuss%20a%20commercial%20opportunity.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center space-x-2 py-2.5 rounded-xl bg-emerald-50 dark:bg-emerald-600/20 hover:bg-emerald-100 dark:hover:bg-emerald-600/30 border border-emerald-200 dark:border-emerald-500/40 text-emerald-700 dark:text-emerald-400 text-xs font-bold transition-all"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp Business Development</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Link
            href="/leadership"
            className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-[#D4AF37]/40 hover:bg-slate-50 dark:hover:bg-[#D4AF37]/10 text-xs font-bold text-amber-700 dark:text-[#D4AF37] shadow-xs transition-all"
          >
            <span>View Full Organizational Structure & Governance</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
};
