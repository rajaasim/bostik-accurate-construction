import React from "react";
import Link from "next/link";
import { companyConfig } from "@/config/company";
import { ArrowRight, ShieldCheck } from "lucide-react";

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white dark:bg-[#081220] text-slate-900 dark:text-white relative overflow-hidden transition-colors duration-300">
      {/* Background Architectural Accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50 dark:bg-[#0E1D33]/40 -skew-x-12 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Editorial Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center space-x-3">
              <span className="h-px w-8 bg-amber-600 dark:bg-[#D4AF37]" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-amber-700 dark:text-[#D4AF37]">
                Engineering Heritage & Integrity
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-black text-slate-950 dark:text-white tracking-tight leading-tight">
              Executing Qatar&apos;s Commercial Vision with Absolute Rigor
            </h2>

            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-light">
              {companyConfig.brand.descriptionEn}
            </p>

            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
              We operate with a direct, owner-led management style. Our site engineers and project directors maintain daily command over every concrete pour, structural frame, and MEP system—ensuring complete alignment with Qatar Construction Specifications (QCS 2014) and rigorous safety standards without bureaucratic overhead.
            </p>

            {/* Distinct 3-Column Differentiator Strip */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-200 dark:border-slate-800">
              <div>
                <div className="text-lg font-black text-amber-600 dark:text-[#D4AF37]">Turnkey</div>
                <div className="text-xs font-bold text-slate-900 dark:text-white mt-0.5">End-to-End Scope</div>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 leading-snug">
                  From geotechnical earthworks to final QCDD clearance.
                </p>
              </div>

              <div>
                <div className="text-lg font-black text-emerald-600 dark:text-emerald-400">Zero Harm</div>
                <div className="text-xs font-bold text-slate-900 dark:text-white mt-0.5">Safety Culture</div>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 leading-snug">
                  Daily hazard identification and certified safety marshals.
                </p>
              </div>

              <div>
                <div className="text-lg font-black text-cyan-600 dark:text-cyan-400">Accredited</div>
                <div className="text-xs font-bold text-slate-900 dark:text-white mt-0.5">MOCI Registered</div>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 leading-snug">
                  Qatar Chamber of Commerce verified enterprise.
                </p>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/about"
                className="inline-flex items-center space-x-2 text-xs font-bold text-amber-700 dark:text-[#D4AF37] hover:text-amber-800 dark:hover:text-amber-300 transition-colors uppercase tracking-wider"
              >
                <span>Discover Our History, Vision & Leadership</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right Architectural Visual Montage */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200 dark:border-slate-700/80 bg-slate-100 dark:bg-slate-900 group">
              <div className="h-96 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1000&q=80"
                  alt="Commercial Structural Architecture"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Floating Glass Stats Card */}
              <div className="absolute bottom-4 left-4 right-4 p-5 rounded-xl bg-white/90 dark:bg-[#081220]/90 backdrop-blur-md border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white shadow-xl">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xs uppercase tracking-widest text-amber-700 dark:text-[#D4AF37] font-bold">
                      State of Qatar
                    </div>
                    <div className="text-sm font-bold text-slate-900 dark:text-white mt-0.5">
                      Commercial & Industrial Execution
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-mono font-bold text-emerald-700 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-950/60 px-2.5 py-1 rounded border border-emerald-300 dark:border-emerald-800">
                      100% On-Time
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Secondary Floating Accent Badge */}
            <div className="hidden sm:flex absolute -top-5 -left-5 p-4 rounded-xl bg-white dark:bg-[#0B192C] border border-slate-200 dark:border-[#D4AF37]/40 shadow-xl items-center space-x-3 text-xs">
              <div className="w-9 h-9 rounded-lg bg-amber-50 dark:bg-[#D4AF37]/20 flex items-center justify-center text-amber-700 dark:text-[#D4AF37]">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <div className="font-extrabold text-slate-900 dark:text-white">QCS 2014 Compliant</div>
                <div className="text-[10px] text-slate-500 dark:text-slate-400">Strict Quality Assurance</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
