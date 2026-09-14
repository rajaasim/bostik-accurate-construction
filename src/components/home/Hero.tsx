import React from "react";
import Link from "next/link";
import { companyConfig } from "@/config/company";
import { ShieldCheck, ArrowRight, FileText, PhoneCall, Building2 } from "lucide-react";

export const Hero: React.FC = () => {
  const { businessDevelopment } = companyConfig.contacts;

  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-[#0B192C]">
      {/* Background Photography with Refined Atmospheric Overlay */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center opacity-25 mix-blend-luminosity scale-100"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1541971875076-8f970d573be6?auto=format&fit=crop&w=2000&q=85')`,
        }}
      />
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-[#0B192C] via-[#0B192C]/85 to-transparent" />
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#0B192C] via-transparent to-[#0B192C]/75" />

      {/* Subtle Ambient Gold Glow */}
      <div className="absolute top-1/4 right-10 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center lg:text-left flex flex-col justify-center">
        {/* Top Badges */}
        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 mb-6">
          <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/40 text-[#D4AF37] text-xs font-bold tracking-wide shadow-xs">
            <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
            <span>Qatar Ministry Certified • CR #{companyConfig.registry.crNumber}</span>
          </div>

          <div className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-slate-300 text-xs font-medium">
            <span>Doha, State of Qatar</span>
          </div>
        </div>

        {/* Headline with balanced font scaling */}
        <div className="max-w-4xl">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.12] uppercase">
            Precision Built. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-amber-300 to-[#D4AF37]">
              Commercial Excellence
            </span>{" "}
            in Qatar.
          </h1>

          <div className="text-sm text-[#D4AF37] font-arabic mt-3 mb-4 tracking-wide">
            {companyConfig.brand.nameAr} • {companyConfig.brand.taglineAr}
          </div>

          <p className="text-sm sm:text-base text-slate-300 font-light max-w-2xl leading-relaxed mb-8">
            {companyConfig.brand.taglineEn}. Delivering full-scope non-residential buildings, civil engineering foundations, and high-specification architectural commercial fit-outs across Doha.
          </p>
        </div>

        {/* Call to Actions */}
        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 mb-14">
          <Link
            href="/contact"
            className="inline-flex items-center space-x-2.5 bg-[#D4AF37] hover:bg-[#B8860B] text-slate-950 font-black text-xs px-7 py-3.5 rounded-xl shadow-xl transition-all hover:scale-[1.02] active:scale-95 uppercase tracking-wider cursor-pointer"
          >
            <span>Request Tender / Quote</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <Link
            href="/portfolio"
            className="inline-flex items-center space-x-2 bg-slate-900/90 hover:bg-slate-800 text-white font-bold text-xs px-6 py-3.5 rounded-xl border border-[#D4AF37]/40 shadow-md transition-all hover:border-[#D4AF37]"
          >
            <FileText className="w-4 h-4 text-[#D4AF37]" />
            <span>10-Page A4 PDF Portfolio</span>
          </Link>

          <Link
            href="/about"
            className="inline-flex items-center space-x-2 text-slate-300 hover:text-white text-xs font-semibold px-4 py-3 rounded-xl hover:bg-white/5 transition-colors"
          >
            <span>Explore Company Profile →</span>
          </Link>
        </div>

        {/* 4 Performance Metric Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 border-t border-slate-800/80 pt-8">
          {companyConfig.stats.map((stat, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl bg-slate-900/60 backdrop-blur-sm border border-slate-800 text-left"
            >
              <div className="text-lg sm:text-xl font-black text-[#D4AF37] tracking-tight">
                {stat.value}
              </div>
              <div className="text-xs font-bold text-white mt-1">
                {stat.label}
              </div>
              <div className="text-[11px] text-slate-400 mt-0.5">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
