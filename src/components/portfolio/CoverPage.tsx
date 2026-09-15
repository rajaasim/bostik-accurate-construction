import React from "react";
import { companyConfig } from "@/config/company";
import { A4PageWrapper } from "./A4PageWrapper";
import { ShieldCheck, Award, MapPin, Phone, Mail } from "lucide-react";

export const CoverPage: React.FC = () => {
  return (
    <A4PageWrapper pageNumber={1} isCover={true}>
      {/* Background Graphic Accents */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0B192C] via-[#0F1D33] to-[#1E3E62] z-0" />
      <div 
        className="absolute inset-0 opacity-15 bg-cover bg-center mix-blend-overlay z-0" 
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1541971875076-8f970d573be6?auto=format&fit=crop&w=1600&q=80')` }}
      />
      
      {/* Decorative Gold Geometry */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-[#1E3E62]/40 rounded-full blur-2xl pointer-events-none" />
      
      <div className="relative z-10 flex flex-col justify-between h-full p-14">
        {/* Top Header Section */}
        <div className="flex items-center justify-between border-b border-white/15 pb-6">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 rounded-xl bg-white border-2 border-[#D4AF37] flex items-center justify-center p-2 shadow-2xl">
              <img
                src="/bostikaccurate-logo.svg"
                alt="Bostik Accurate Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <h1 className="text-xl font-black tracking-wider text-white uppercase">
                {companyConfig.brand.nameEn}
              </h1>
              <p className="text-sm text-[#D4AF37] font-medium tracking-widest">
                {companyConfig.brand.nameAr}
              </p>
            </div>
          </div>

          <div className="text-right">
            <div className="inline-flex items-center space-x-1.5 bg-[#D4AF37]/20 border border-[#D4AF37]/50 px-3 py-1 rounded-full text-[11px] text-[#D4AF37] font-semibold">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>CR # {companyConfig.registry.crNumber}</span>
            </div>
            <div className="text-[10px] text-slate-300 mt-1">
              State of Qatar • Registered Entity
            </div>
          </div>
        </div>

        {/* Main Cover Body */}
        <div className="my-auto py-10">
          <div className="inline-block px-4 py-1.5 rounded bg-white/10 backdrop-blur-md border border-white/20 text-[#D4AF37] text-xs font-bold uppercase tracking-[0.25em] mb-6">
            Corporate Profile & Capabilities
          </div>
          
          <h2 className="text-4xl font-extrabold text-white leading-tight tracking-tight mb-4">
            PREQUALIFICATION <br />
            <span className="text-[#D4AF37]">COMPANY PROFILE</span>
          </h2>
          
          <div className="w-24 h-1.5 bg-[#D4AF37] rounded-full mb-6" />

          <p className="text-base text-slate-200 font-light max-w-xl leading-relaxed mb-8">
            {companyConfig.brand.taglineEn}
          </p>

          {/* Quick Specification Grid */}
          <div className="grid grid-cols-2 gap-4 max-w-lg bg-black/30 backdrop-blur-sm p-4 rounded-xl border border-white/10">
            <div>
              <div className="text-[10px] uppercase text-slate-400 font-semibold tracking-wider">Classification</div>
              <div className="text-xs font-bold text-white mt-0.5">Non-Residential Construction</div>
              <div className="text-[9px] text-[#D4AF37]">Code 410029 (QCS Compliant)</div>
            </div>
            <div>
              <div className="text-[10px] uppercase text-slate-400 font-semibold tracking-wider">Accreditation</div>
              <div className="text-xs font-bold text-white mt-0.5">Ministry of Commerce & Industry</div>
              <div className="text-[9px] text-slate-300">Qatar Chamber of Commerce Member</div>
            </div>
          </div>
        </div>

        {/* Bottom Contact Strip */}
        <div className="border-t border-white/15 pt-6 grid grid-cols-3 gap-4 text-xs text-slate-300">
          <div className="flex items-start space-x-2.5">
            <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
            <div className="text-[10px] leading-snug">
              <span className="font-semibold text-white block">Head Office</span>
              {companyConfig.office.building}, {companyConfig.office.street}<br />
              {companyConfig.office.zone}, Doha, Qatar
            </div>
          </div>

          <div className="flex items-start space-x-2.5">
            <Phone className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
            <div className="text-[10px] leading-snug">
              <span className="font-semibold text-white block">Commercial Inquiries</span>
              {companyConfig.contacts.businessDevelopment.name}<br />
              <span className="text-white font-mono">{companyConfig.contacts.businessDevelopment.phoneFormatted}</span>
            </div>
          </div>

          <div className="flex items-start space-x-2.5">
            <Mail className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
            <div className="text-[10px] leading-snug">
              <span className="font-semibold text-white block">Email & Domain</span>
              {companyConfig.brand.primaryEmail}<br />
              <span className="text-[#D4AF37] font-medium">{companyConfig.brand.activeDomain}</span>
            </div>
          </div>
        </div>
      </div>
    </A4PageWrapper>
  );
};
