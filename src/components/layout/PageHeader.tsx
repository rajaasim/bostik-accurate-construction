import React from "react";
import Link from "next/link";
import { ShieldCheck, ChevronRight } from "lucide-react";

interface PageHeaderProps {
  title: string;
  subtitle: string;
  badge?: string;
  breadcrumb: string;
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  subtitle,
  badge = "Commercial Contracting • Doha, Qatar",
  breadcrumb,
}) => {
  return (
    <div className="relative bg-slate-100/80 dark:bg-[#07111F] border-b border-slate-200 dark:border-slate-800 py-16 sm:py-20 overflow-hidden transition-colors duration-300">
      {/* Background Graphic Accents */}
      <div className="absolute inset-0 opacity-5 dark:opacity-15 bg-[radial-gradient(#1E3E62_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-500/5 dark:bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Bar */}
        <nav className="flex items-center space-x-2 text-xs text-slate-500 dark:text-slate-400 mb-4">
          <Link href="/" className="hover:text-amber-700 dark:hover:text-[#D4AF37] transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400 dark:text-slate-600" />
          <span className="text-amber-700 dark:text-[#D4AF37] font-semibold">{breadcrumb}</span>
        </nav>

        {/* Badge */}
        <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-amber-50 dark:bg-[#D4AF37]/10 border border-amber-200 dark:border-[#D4AF37]/30 text-amber-800 dark:text-[#D4AF37] text-xs font-bold tracking-wide mb-4">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>{badge}</span>
        </div>

        {/* Title & Subtitle */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 dark:text-white tracking-tight uppercase leading-tight">
          {title}
        </h1>
        
        <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-2xl font-light leading-relaxed">
          {subtitle}
        </p>
      </div>
    </div>
  );
};
