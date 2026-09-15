import React from "react";
import { companyConfig } from "@/config/company";

interface A4PageWrapperProps {
  pageNumber: number;
  totalPages?: number;
  title?: string;
  subtitle?: string;
  isCover?: boolean;
  children: React.ReactNode;
}

export const A4PageWrapper: React.FC<A4PageWrapperProps> = ({
  pageNumber,
  totalPages = 10,
  title,
  subtitle,
  isCover = false,
  children,
}) => {
  if (isCover) {
    return (
      <div className="a4-page relative flex flex-col justify-between overflow-hidden bg-[#0B192C] text-white">
        {children}
      </div>
    );
  }

  return (
    <div className="a4-page relative flex flex-col justify-between bg-white text-slate-900 border border-slate-200 print:border-none">
      {/* Top Accent Strip */}
      <div className="h-2 w-full bg-gradient-to-r from-[#0B192C] via-[#1E3E62] to-[#D4AF37]" />

      {/* Header */}
      <header className="px-10 pt-6 pb-4 border-b border-slate-200 flex items-center justify-between shrink-0">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded bg-white flex items-center justify-center p-1 border border-slate-200 shadow-xs">
            <img
              src="/bostikaccurate-logo.svg"
              alt="Bostik Accurate Logo"
              className="w-full h-full object-contain"
            />
          </div>
          <div>
            <div className="text-xs font-extrabold uppercase tracking-widest text-[#0B192C]">
              {companyConfig.brand.nameEn}
            </div>
            <div className="text-[10px] text-slate-500 tracking-wider">
              {companyConfig.brand.nameAr} • CR #{companyConfig.registry.crNumber}
            </div>
          </div>
        </div>

        {title && (
          <div className="text-right">
            <div className="text-xs font-bold uppercase tracking-wider text-[#1E3E62]">
              {title}
            </div>
            {subtitle && (
              <div className="text-[10px] text-slate-400 font-medium">
                {subtitle}
              </div>
            )}
          </div>
        )}
      </header>

      {/* Main Page Content Body */}
      <main className="flex-1 px-10 py-6 flex flex-col overflow-hidden">
        {children}
      </main>

      {/* Standardized Footer */}
      <footer className="px-10 py-3 border-t border-slate-200 flex items-center justify-between text-[9px] text-slate-400 shrink-0 bg-slate-50">
        <div className="flex items-center space-x-4">
          <span>{companyConfig.office.fullAddress}</span>
          <span>•</span>
          <span>CR: {companyConfig.registry.crNumber}</span>
          <span>•</span>
          <span>Email: {companyConfig.brand.primaryEmail}</span>
        </div>
        <div className="flex items-center space-x-2 font-semibold text-slate-600">
          <span>BOSTIK ACCURATE CONSTRUCTION</span>
          <span>|</span>
          <span className="text-[#0B192C]">
            Page {pageNumber} of {totalPages}
          </span>
        </div>
      </footer>
    </div>
  );
};
