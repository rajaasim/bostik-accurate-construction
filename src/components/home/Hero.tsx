import React from "react";
import Link from "next/link";
import { companyConfig } from "@/config/company";
import { ShieldCheck, ArrowRight, FileText, Sparkles, Building2, CheckCircle2 } from "lucide-react";

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#070F1C] text-white">
      {/* 2026 Ambient Cyan & Emerald Volumetric Glows */}
      <div className="absolute -top-40 left-1/4 w-[600px] h-[600px] bg-gradient-to-br from-cyan-500/15 via-teal-500/10 to-transparent rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 -right-32 w-[500px] h-[500px] bg-gradient-to-br from-emerald-500/12 via-cyan-500/10 to-transparent rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute -bottom-20 left-10 w-96 h-96 bg-[#D4AF37]/8 rounded-full blur-[120px] pointer-events-none" />

      {/* Subtle Grid Overlay */}
      <div className="absolute inset-0 z-0 opacity-10 bg-[linear-gradient(to_right,#1E3E62_1px,transparent_1px),linear-gradient(to_bottom,#1E3E62_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Authoritative Editorial Presentation (7 cols) */}
          <div className="lg:col-span-7 space-y-7 text-center lg:text-left">
            {/* Ambient Frosted Badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5">
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] backdrop-blur-xl border border-cyan-500/30 text-cyan-300 text-xs font-bold tracking-wide shadow-[0_0_25px_rgba(6,182,212,0.15)]">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span>Active Commercial Contractor • Doha, Qatar</span>
              </div>

              <div className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-full bg-white/[0.03] backdrop-blur-xl border border-white/10 text-slate-300 text-xs font-mono">
                <ShieldCheck className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>CR #{companyConfig.registry.crNumber}</span>
              </div>
            </div>

            {/* Headline with 2026 Gradient Shimmer */}
            <div>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1] uppercase">
                Precision Built. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-[#D4AF37]">
                  Commercial Excellence
                </span>{" "}
                in Qatar.
              </h1>

              <div className="text-sm text-[#D4AF37] font-arabic mt-3 font-semibold tracking-wide">
                {companyConfig.brand.nameAr} • {companyConfig.brand.taglineAr}
              </div>
            </div>

            <p className="text-sm sm:text-base text-slate-300 font-light max-w-2xl leading-relaxed mx-auto lg:mx-0">
              {companyConfig.brand.taglineEn}. Delivering turnkey non-residential structures, heavy foundation engineering, and high-specification corporate fit-outs across the State of Qatar.
            </p>

            {/* Elevated Action Cluster */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <Link
                href="/contact"
                className="relative group inline-flex items-center space-x-2.5 px-7 py-4 rounded-xl bg-gradient-to-r from-[#D4AF37] via-amber-400 to-[#B8860B] text-slate-950 font-black text-xs uppercase tracking-wider shadow-[0_4px_25px_rgba(212,175,55,0.4)] hover:shadow-[0_6px_35px_rgba(212,175,55,0.6)] transition-all hover:scale-[1.02] active:scale-95 cursor-pointer"
              >
                <span>Request Commercial Quotation</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/portfolio"
                className="inline-flex items-center space-x-2 px-6 py-4 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] backdrop-blur-xl border border-white/15 hover:border-cyan-400/50 text-white font-bold text-xs shadow-lg transition-all"
              >
                <FileText className="w-4 h-4 text-cyan-400" />
                <span>10-Page A4 PDF Portfolio</span>
              </Link>

              <Link
                href="/about"
                className="inline-flex items-center space-x-1.5 text-xs font-semibold text-slate-400 hover:text-cyan-400 px-3 py-2 transition-colors"
              >
                <span>Explore Company Profile →</span>
              </Link>
            </div>
          </div>

          {/* Right Column: 2026 Elevated Glassmorphic Architectural Visual (5 cols) */}
          <div className="lg:col-span-5 relative">
            {/* Ambient rim glow behind the frame */}
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-cyan-500/20 via-teal-500/10 to-emerald-500/20 blur-xl opacity-75" />

            <div className="relative rounded-3xl overflow-hidden border border-white/15 bg-gradient-to-b from-slate-900/90 to-[#0A1628]/90 backdrop-blur-2xl shadow-2xl">
              {/* Architectural Imagery with Refined Overlay */}
              <div className="h-96 w-full overflow-hidden relative">
                <img
                  src="https://images.unsplash.com/photo-1541971875076-8f970d573be6?auto=format&fit=crop&w=1200&q=85"
                  alt="Modern Architectural Facade Qatar"
                  className="w-full h-full object-cover filter brightness-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628] via-transparent to-black/30" />

                {/* Floating Top Pill with Cyan Tint */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                  <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-xl border border-white/20 text-xs text-white">
                    <Building2 className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Commercial Non-Residential</span>
                  </div>
                  <span className="text-[10px] font-mono font-bold text-emerald-400 bg-emerald-950/70 border border-emerald-700/60 px-2.5 py-1 rounded-full">
                    QCS 2014 Standard
                  </span>
                </div>
              </div>

              {/* Lower Floating Specular Card */}
              <div className="p-6 space-y-3 bg-[#0A1628]/80 backdrop-blur-xl border-t border-white/10">
                <div className="flex items-center justify-between text-xs text-slate-300">
                  <span className="font-semibold text-white">Commercial Turnkey Execution</span>
                  <span className="text-cyan-400 font-mono">Doha, Qatar</span>
                </div>
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                    <div className="text-[10px] text-slate-400">Activity Code</div>
                    <div className="text-sm font-bold text-white mt-0.5 font-mono">410029</div>
                  </div>
                  <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                    <div className="text-[10px] text-slate-400">Safety Milestone</div>
                    <div className="text-sm font-bold text-emerald-400 mt-0.5">Zero Harm</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Elevated Metric Panels with Cyan / Emerald / Gold Specular Edges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 pt-8 border-t border-white/10">
          {companyConfig.stats.map((stat, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-white/[0.03] hover:bg-white/[0.06] backdrop-blur-xl border border-white/[0.08] hover:border-cyan-400/40 transition-all duration-300 shadow-lg text-left group"
            >
              <div className="text-xl sm:text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-teal-300 to-[#D4AF37] tracking-tight group-hover:scale-105 transition-transform">
                {stat.value}
              </div>
              <div className="text-xs font-bold text-white mt-1">
                {stat.label}
              </div>
              <div className="text-[11px] text-slate-400 mt-0.5 font-light">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
