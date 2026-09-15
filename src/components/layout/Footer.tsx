import React from "react";
import Link from "next/link";
import { companyConfig } from "@/config/company";
import { ShieldCheck, MapPin, Phone, Mail, Award, ArrowUpRight } from "lucide-react";

export const Footer: React.FC = () => {
  const { businessDevelopment, operationsManager } = companyConfig.contacts;

  return (
    <footer className="bg-[#050C16] border-t border-slate-800 text-slate-300">
      {/* Upper Footer CTA Strip */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-b border-slate-800/80">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 bg-gradient-to-r from-[#0B192C] to-[#1E3E62] p-8 rounded-2xl border border-[#D4AF37]/30 shadow-2xl">
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center space-x-2 text-[11px] font-bold text-[#D4AF37] uppercase tracking-widest">
              <Award className="w-4 h-4" />
              <span>Official Qatar Commercial Contractor</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              Ready to Discuss Your Commercial Project?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
              From preliminary constructability studies to complete turnkey execution under Qatar Construction Specifications (QCS).
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center space-x-2 bg-white/10 hover:bg-white/20 text-white font-bold text-xs px-5 py-3 rounded-xl border border-white/20 transition-all"
            >
              <span>Request Quotation</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
            <a
              href={`https://wa.me/${businessDevelopment.whatsapp}?text=Hello%20Bostik%20Accurate%20Construction,%20we%20have%20an%20inquiry.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-[#D4AF37] hover:bg-[#B8860B] text-slate-950 font-extrabold text-xs px-6 py-3 rounded-xl shadow-lg transition-transform active:scale-95 uppercase tracking-wide"
            >
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Col 1: Identity & Legal Registration */}
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-[#1E3E62] border border-[#D4AF37]/50 flex items-center justify-center p-1 shadow-md">
              <img
                src="/bostikaccurate-logo.svg"
                alt="Bostik Accurate Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <div className="font-extrabold text-white text-sm uppercase tracking-wide">
                {companyConfig.brand.nameEn}
              </div>
              <div className="text-xs text-[#D4AF37] font-arabic">
                {companyConfig.brand.nameAr}
              </div>
            </div>
          </div>

          <p className="text-xs text-slate-400 leading-relaxed">
            {companyConfig.brand.descriptionEn}
          </p>

          <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 space-y-1 text-xs">
            <div className="flex items-center justify-between">
              <span className="text-slate-400">Commercial Reg:</span>
              <span className="font-mono font-bold text-[#D4AF37]">CR #{companyConfig.registry.crNumber}</span>
            </div>
            <div className="flex items-center justify-between text-[11px]">
              <span className="text-slate-500">Tax Reg:</span>
              <span className="font-mono text-slate-300">{companyConfig.registry.taxRegistrationNo}</span>
            </div>
            <div className="flex items-center justify-between text-[11px]">
              <span className="text-slate-500">Unified Economic:</span>
              <span className="font-mono text-slate-300">{companyConfig.registry.unifiedEconomicNo}</span>
            </div>
          </div>
        </div>

        {/* Col 2: Navigation Links */}
        <div className="space-y-4">
          <h4 className="text-xs font-bold text-white uppercase tracking-widest border-b border-slate-800 pb-2">
            Company Portal
          </h4>
          <ul className="space-y-2.5 text-xs text-slate-400">
            <li>
              <Link href="/about" className="hover:text-[#D4AF37] transition-colors">About Our Enterprise</Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-[#D4AF37] transition-colors">Scope of Contracting Services</Link>
            </li>
            <li>
              <Link href="/projects" className="hover:text-[#D4AF37] transition-colors">Demonstrated Field Projects</Link>
            </li>
            <li>
              <Link href="/hse-quality" className="hover:text-[#D4AF37] transition-colors">HSE Standards & QA/QC Policy</Link>
            </li>
            <li>
              <Link href="/leadership" className="hover:text-[#D4AF37] transition-colors">Leadership & Management</Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-[#D4AF37] transition-colors">Contact & Tender Submissions</Link>
            </li>
          </ul>
        </div>

        {/* Col 3: Key Personnel & Contacts */}
        <div className="space-y-4">
          <h4 className="text-xs font-bold text-white uppercase tracking-widest border-b border-slate-800 pb-2">
            Direct Contacts
          </h4>
              <div className="space-y-3 text-xs">
                <div>
                  <div className="font-bold text-white">{businessDevelopment.name}</div>
                  <div className="text-[11px] text-[#D4AF37]">{businessDevelopment.role}</div>
                  <a
                    href={`tel:${businessDevelopment.phone}`}
                    className="font-mono text-slate-300 hover:text-white block mt-0.5"
                  >
                    {businessDevelopment.phoneFormatted}
                  </a>
                </div>

                <div className="pt-2 border-t border-slate-800/80">
                  <div className="font-bold text-white">{operationsManager.name}</div>
                  <div className="text-[11px] text-[#D4AF37]">{operationsManager.role}</div>
                  <a
                    href={`tel:${operationsManager.phone}`}
                    className="font-mono text-slate-300 hover:text-white block mt-0.5"
                  >
                    {operationsManager.phoneFormatted}
                  </a>
                </div>
              </div>
        </div>

        {/* Col 4: Office Location & Legal */}
        <div className="space-y-4">
          <h4 className="text-xs font-bold text-white uppercase tracking-widest border-b border-slate-800 pb-2">
            Head Office
          </h4>
          <div className="space-y-2.5 text-xs text-slate-400">
            <div className="flex items-start space-x-2.5">
              <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
              <span>
                {companyConfig.office.building}, {companyConfig.office.floor}<br />
                {companyConfig.office.street}, {companyConfig.office.zone}<br />
                {companyConfig.office.city}, {companyConfig.office.country}
              </span>
            </div>

            <div className="text-[11px] text-slate-500 font-arabic">
              {companyConfig.office.fullAddressArabic}
            </div>

            <div className="flex items-center space-x-2 pt-2">
              <Mail className="w-4 h-4 text-[#D4AF37] shrink-0" />
              <a
                href={`mailto:${companyConfig.brand.primaryEmail}`}
                className="hover:text-white transition-colors"
              >
                {companyConfig.brand.primaryEmail}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Legal Copyright Bar */}
      <div className="bg-[#03070E] border-t border-slate-800/80 py-6 text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-2">
            <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
            <span>
              © {new Date().getFullYear()} {companyConfig.brand.nameEn}. All Rights Reserved. Member of Qatar Chamber of Commerce & Industry.
            </span>
          </div>

          <div className="flex items-center space-x-6 text-[11px]">
            <span className="text-slate-400 font-mono">Official Domain: {companyConfig.brand.activeDomain}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
