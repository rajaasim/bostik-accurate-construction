import React from "react";
import { companyConfig } from "@/config/company";
import { A4PageWrapper } from "./A4PageWrapper";
import { MapPin, Phone, Mail, Globe, ShieldCheck, FileCheck, CheckCircle2, Clock } from "lucide-react";

export const ContactDirectoryPage: React.FC = () => {
  const { businessDevelopment, operationsManager } = companyConfig.contacts;

  return (
    <A4PageWrapper
      pageNumber={10}
      title="Contact Directory & Inquiries"
      subtitle="Office Location, Commercial Contacts & Tenders"
    >
      {/* Title */}
      <div className="mb-5">
        <span className="text-[10px] font-bold text-[#D4AF37] uppercase tracking-widest block">
          Section 09 // Official Directory
        </span>
        <h2 className="text-2xl font-black text-[#0B192C] tracking-tight mt-1">
          Headquarters Location & Commercial Inquiries
        </h2>
        <div className="w-16 h-1 bg-[#D4AF37] mt-2 rounded" />
      </div>

      <p className="text-xs text-slate-600 mb-5 leading-relaxed">
        We welcome formal invitations to tender (ITT), requests for quotation (RFQ), subcontractor partnerships, and joint-venture opportunities across commercial and industrial infrastructure in Qatar.
      </p>

      {/* Main Grid: Office Location & Contacts */}
      <div className="grid grid-cols-12 gap-5 mb-5 flex-1">
        {/* Left Column: Office & Contacts (7 cols) */}
        <div className="col-span-7 space-y-4">
          {/* Registered Office Card */}
          <div className="p-4 rounded-xl border border-slate-200 bg-white shadow-xs">
            <div className="flex items-center space-x-2 text-[#0B192C] font-bold text-xs mb-2">
              <MapPin className="w-4 h-4 text-[#D4AF37]" />
              <span>Registered Headquarters (Doha, Qatar)</span>
            </div>
            <div className="text-xs text-slate-700 leading-snug space-y-1">
              <div className="font-bold text-slate-900">{companyConfig.office.building}, {companyConfig.office.floor}</div>
              <div>{companyConfig.office.street} • {companyConfig.office.zone}</div>
              <div className="text-slate-600 font-semibold">{companyConfig.office.city}, {companyConfig.office.country}</div>
              <div className="text-[11px] text-[#B8860B] font-arabic mt-1">
                {companyConfig.office.fullAddressArabic}
              </div>
            </div>
          </div>

          {/* Direct Key Contacts */}
          <div className="p-4 rounded-xl border border-slate-200 bg-white shadow-xs space-y-3">
            <div className="text-xs font-bold text-[#0B192C] pb-2 border-b border-slate-100">
              Direct Inquiries & Project Representatives
            </div>

            {/* Business Development */}
            <div className="flex items-start justify-between">
              <div>
                <div className="text-xs font-bold text-slate-900">{businessDevelopment.name}</div>
                <div className="text-[10px] text-[#1E3E62] font-semibold">{businessDevelopment.role}</div>
                <div className="text-[10px] text-slate-500 mt-0.5">Corporate Tenders & Commercial Relations</div>
              </div>
              <div className="text-right">
                <div className="text-xs font-mono font-bold text-[#0B192C]">{businessDevelopment.phoneFormatted}</div>
                <span className="text-[9px] text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded font-medium">
                  Direct Line & WhatsApp
                </span>
              </div>
            </div>

            <div className="h-px bg-slate-100" />

            {/* Operations Manager */}
            <div className="flex items-start justify-between">
              <div>
                <div className="text-xs font-bold text-slate-900">{operationsManager.name}</div>
                <div className="text-[10px] text-[#B8860B] font-semibold">{operationsManager.role}</div>
                <div className="text-[10px] text-slate-500 mt-0.5">Site Operations & Quality Execution</div>
              </div>
              <div className="text-right">
                <div className="text-xs font-mono font-bold text-[#0B192C]">{operationsManager.phoneFormatted}</div>
                <span className="text-[9px] text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded font-medium">
                  Direct Line & WhatsApp
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Pre-Qualification & Verification Box (5 cols) */}
        <div className="col-span-5 p-4 rounded-xl bg-slate-50 border border-slate-200 flex flex-col justify-between">
          <div>
            <div className="text-xs font-bold text-[#0B192C] mb-2 flex items-center space-x-1.5">
              <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
              <span>Prequalification Dossier</span>
            </div>
            
            <p className="text-[10px] text-slate-600 mb-3 leading-relaxed">
              This document serves as our official corporate pre-qualification submission. Supporting attachments available upon request:
            </p>

            <div className="space-y-1.5 text-[9.5px] text-slate-700">
              <div className="flex items-center space-x-1.5">
                <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                <span>Original Qatar Commercial Registration</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                <span>Qatar Chamber of Commerce Certificate</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                <span>Tax Card & Unified Economic Number</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                <span>Key Personnel CVs & Engineering Certs</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                <span>Bank Reference & Financial Statements</span>
              </div>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-slate-200 text-[9px] text-slate-500">
            <span className="font-bold text-[#0B192C] block mb-0.5">Tender Submissions:</span>
            Please direct all tender documents and BOQs to: <br />
            <span className="font-mono font-semibold text-slate-800">{companyConfig.brand.supportEmail}</span>
          </div>
        </div>
      </div>

      {/* Official Corporate Verification & Authorization Banner */}
      <div className="mt-auto rounded-xl border border-slate-200 bg-gradient-to-r from-slate-50 via-white to-slate-50 p-4 shadow-xs">
        <div className="flex items-center justify-between border-b border-slate-200/80 pb-2.5 mb-2.5">
          <div className="flex items-center space-x-2">
            <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#0B192C]">
              Corporate Authentication & Prequalification Dossier
            </span>
          </div>
          <span className="text-[10px] font-mono text-slate-500">
            Doha, State of Qatar
          </span>
        </div>

        <div className="grid grid-cols-3 gap-6 text-xs">
          <div>
            <div className="text-[10px] uppercase font-bold text-slate-400">Executive Management</div>
            <div className="text-xs font-bold text-[#0B192C] mt-0.5">{operationsManager.name}</div>
            <div className="text-[10px] text-slate-600 mt-0.5">Operations Manager & Signatory Authority</div>
          </div>

          <div>
            <div className="text-[10px] uppercase font-bold text-slate-400">Commercial Registration</div>
            <div className="text-xs font-mono font-bold text-slate-900 mt-0.5">CR # {companyConfig.registry.crNumber}</div>
            <div className="text-[10px] text-slate-600 mt-0.5">Tax ID: {companyConfig.registry.taxRegistrationNo} • MOCI Qatar</div>
          </div>

          <div className="text-right">
            <div className="text-[10px] uppercase font-bold text-slate-400">Commercial Inquiries</div>
            <div className="text-xs font-mono font-bold text-slate-900 mt-0.5">{companyConfig.brand.primaryEmail}</div>
            <div className="text-[10px] text-slate-600 mt-0.5">{companyConfig.brand.activeDomain}</div>
          </div>
        </div>
      </div>
    </A4PageWrapper>
  );
};
