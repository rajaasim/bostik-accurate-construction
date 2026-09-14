import React from "react";
import { companyConfig } from "@/config/company";
import { A4PageWrapper } from "./A4PageWrapper";
import { ShieldCheck, FileText, CheckCircle, Landmark, Award, Building, UserCheck } from "lucide-react";

export const LegalRegistryPage: React.FC = () => {
  return (
    <A4PageWrapper
      pageNumber={3}
      title="Legal & Regulatory Framework"
      subtitle="Ministry of Commerce & Industry Credentials"
    >
      {/* Title */}
      <div className="mb-5">
        <span className="text-[10px] font-bold text-[#D4AF37] uppercase tracking-widest block">
          Section 02 // Official Credentials
        </span>
        <h2 className="text-2xl font-black text-[#0B192C] tracking-tight mt-1">
          Authorized Commercial Registration & Compliance
        </h2>
        <div className="w-16 h-1 bg-[#D4AF37] mt-2 rounded" />
      </div>

      {/* Official Government Recognition Banner */}
      <div className="p-4 rounded-xl bg-gradient-to-r from-[#0B192C] to-[#1E3E62] text-white flex items-center justify-between mb-5 shadow-sm border border-[#D4AF37]/30">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center text-[#D4AF37] border border-[#D4AF37]/50">
            <Landmark className="w-6 h-6" />
          </div>
          <div>
            <div className="text-[10px] uppercase text-[#D4AF37] font-bold tracking-widest">
              State of Qatar • Commercial Licensing
            </div>
            <div className="text-sm font-bold">Ministry of Commerce & Industry</div>
            <div className="text-[10px] text-slate-300">
              Registration and Commercial Licenses Department
            </div>
          </div>
        </div>
        <div className="text-right">
          <div className="text-xs font-mono font-bold text-[#D4AF37]">
            CR #{companyConfig.registry.crNumber}
          </div>
          <div className="text-[9px] text-emerald-400 font-semibold flex items-center justify-end space-x-1 mt-0.5">
            <CheckCircle className="w-3 h-3" />
            <span>Active & Certified</span>
          </div>
        </div>
      </div>

      {/* Structured Legal Attributes Table */}
      <div className="border border-slate-200 rounded-xl overflow-hidden mb-5 bg-white shadow-sm">
        <div className="bg-slate-100 px-4 py-2.5 border-b border-slate-200 flex items-center justify-between">
          <span className="text-xs font-bold text-slate-800 uppercase tracking-wider flex items-center space-x-2">
            <FileText className="w-3.5 h-3.5 text-[#0B192C]" />
            <span>Commercial Registry Particulars (ملخص بيانات السجل التجاري)</span>
          </span>
          <span className="text-[10px] text-slate-500 font-medium">Document Ref: CR-226852-QA</span>
        </div>

        <div className="divide-y divide-slate-100 text-xs">
          <div className="grid grid-cols-12 px-4 py-2.5 bg-slate-50/50">
            <div className="col-span-4 font-semibold text-slate-600">Commercial Name (English)</div>
            <div className="col-span-8 font-bold text-[#0B192C]">{companyConfig.brand.nameEn}</div>
          </div>

          <div className="grid grid-cols-12 px-4 py-2.5">
            <div className="col-span-4 font-semibold text-slate-600">Commercial Name (Arabic)</div>
            <div className="col-span-8 font-bold text-[#0B192C] font-arabic">{companyConfig.brand.nameAr}</div>
          </div>

          <div className="grid grid-cols-12 px-4 py-2.5 bg-slate-50/50">
            <div className="col-span-4 font-semibold text-slate-600">Commercial Registration (C.R) No.</div>
            <div className="col-span-8 font-mono font-bold text-slate-900 flex items-center space-x-2">
              <span className="text-sm text-blue-950 font-black">{companyConfig.registry.crNumber}</span>
              <span className="text-[10px] bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded font-bold">
                {companyConfig.registry.status}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-12 px-4 py-2.5">
            <div className="col-span-4 font-semibold text-slate-600">Unified Economic Number</div>
            <div className="col-span-8 font-mono text-slate-800">{companyConfig.registry.unifiedEconomicNo}</div>
          </div>

          <div className="grid grid-cols-12 px-4 py-2.5 bg-slate-50/50">
            <div className="col-span-4 font-semibold text-slate-600">Tax Registration Number</div>
            <div className="col-span-8 font-mono text-slate-800">{companyConfig.registry.taxRegistrationNo}</div>
          </div>

          <div className="grid grid-cols-12 px-4 py-2.5">
            <div className="col-span-4 font-semibold text-slate-600">Legal Constitution</div>
            <div className="col-span-8 text-slate-800">
              {companyConfig.registry.legalFormEn} ({companyConfig.registry.legalFormAr})
            </div>
          </div>

          <div className="grid grid-cols-12 px-4 py-2.5 bg-slate-50/50">
            <div className="col-span-4 font-semibold text-slate-600">Validity Period</div>
            <div className="col-span-8 text-slate-800">
              Established: <span className="font-semibold">{companyConfig.registry.establishmentDate}</span> | Renewal Expiry: <span className="font-semibold">{companyConfig.registry.expiryDate}</span>
            </div>
          </div>

          <div className="grid grid-cols-12 px-4 py-2.5">
            <div className="col-span-4 font-semibold text-slate-600">Authorized Manager</div>
            <div className="col-span-8 text-slate-800 font-medium flex items-center space-x-2">
              <UserCheck className="w-3.5 h-3.5 text-blue-900" />
              <span>Awais Qamar Ishaq (Manager - Full and Absolute Authority)</span>
            </div>
          </div>

          <div className="grid grid-cols-12 px-4 py-2.5 bg-slate-50/50">
            <div className="col-span-4 font-semibold text-slate-600">Chamber Affiliation</div>
            <div className="col-span-8 text-slate-800 font-medium">
              {companyConfig.registry.chamberMembership}
            </div>
          </div>
        </div>
      </div>

      {/* Official Approved Activity Box */}
      <div className="p-4 rounded-xl border-2 border-[#D4AF37]/40 bg-[#D4AF37]/5 mb-5">
        <div className="flex items-center space-x-2 mb-2 text-[#0B192C] font-bold text-xs">
          <Award className="w-4 h-4 text-[#D4AF37]" />
          <span>Licensed Commercial Activity (الأنشطة التجارية المرخصة)</span>
        </div>
        <div className="flex items-start space-x-3 text-xs">
          <span className="bg-[#0B192C] text-[#D4AF37] px-2.5 py-1 rounded font-mono font-bold text-xs shrink-0">
            Code: {companyConfig.registry.primaryActivityCode}
          </span>
          <div>
            <div className="font-bold text-slate-900">
              {companyConfig.registry.primaryActivityEn}
            </div>
            <div className="text-[11px] text-slate-600 mt-0.5">
              {companyConfig.registry.primaryActivityAr}
            </div>
          </div>
        </div>
      </div>

      {/* Verification Notice */}
      <div className="mt-auto p-3 rounded-lg bg-slate-100 text-[10px] text-slate-500 border border-slate-200 leading-relaxed flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <ShieldCheck className="w-4 h-4 text-[#0B192C] shrink-0" />
          <span>
            Verified by the Ministry of Commerce & Industry (State of Qatar). Data authenticable via official QR verification portal: www.moci.gov.qa
          </span>
        </div>
        <span className="font-mono text-slate-400 shrink-0 ml-2">MOCI CERTIFIED</span>
      </div>
    </A4PageWrapper>
  );
};
