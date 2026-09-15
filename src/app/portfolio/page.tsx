"use client";

import React, { useState } from "react";
import Link from "next/link";
import { companyConfig } from "@/config/company";
import { CoverPage } from "@/components/portfolio/CoverPage";
import { CorporateOverviewPage } from "@/components/portfolio/CorporateOverviewPage";
import { LegalRegistryPage } from "@/components/portfolio/LegalRegistryPage";
import { ServicesPage } from "@/components/portfolio/ServicesPage";
import { MethodologyPage } from "@/components/portfolio/MethodologyPage";
import { HseQualityPage } from "@/components/portfolio/HseQualityPage";
import { EquipmentResourcesPage } from "@/components/portfolio/EquipmentResourcesPage";
import { ProjectsShowcasePage } from "@/components/portfolio/ProjectsShowcasePage";
import { LeadershipPage } from "@/components/portfolio/LeadershipPage";
import { ContactDirectoryPage } from "@/components/portfolio/ContactDirectoryPage";
import { A4ResponsiveContainer } from "@/components/portfolio/A4ResponsiveContainer";
import { Printer, ArrowLeft, Download, Info, CheckCircle2, FileText, Smartphone, Maximize2 } from "lucide-react";

export default function PortfolioPage() {
  const [showPrintModal, setShowPrintModal] = useState(false);
  const [zoomMode, setZoomMode] = useState<"fit" | "actual">("fit");

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-slate-900 py-6 print:py-0 print:bg-white text-slate-100">
      {/* Top Floating Control Bar (Hidden on Print) */}
      <div className="no-print sticky top-4 z-50 max-w-5xl mx-auto px-4 mb-6">
        <div className="bg-[#0B192C]/95 backdrop-blur-md border border-[#D4AF37]/40 shadow-2xl rounded-2xl p-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-3">
            <Link
              href="/"
              className="inline-flex items-center space-x-1.5 text-xs text-slate-300 hover:text-white px-3 py-2 rounded-lg bg-white/5 border border-white/10 transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Website</span>
            </Link>

            <div>
              <h1 className="text-sm font-bold text-white flex items-center space-x-2">
                <span>{companyConfig.brand.nameEn}</span>
                <span className="text-[10px] text-[#D4AF37] px-2 py-0.5 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37]/30">
                  10-Page A4 Profile
                </span>
              </h1>
              <p className="text-[11px] text-slate-400">
                CR # {companyConfig.registry.crNumber} • Prequalification Dossier
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-2 sm:space-x-3 w-full sm:w-auto justify-end">
            <button
              onClick={() => setZoomMode(zoomMode === "fit" ? "actual" : "fit")}
              className="text-xs text-slate-300 hover:text-white flex items-center space-x-1 px-2.5 py-2 rounded-lg bg-white/5 border border-white/10 transition-colors"
              title={zoomMode === "fit" ? "Switch to 100% actual size" : "Fit to mobile screen width"}
            >
              {zoomMode === "fit" ? (
                <>
                  <Maximize2 className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>Actual Size</span>
                </>
              ) : (
                <>
                  <Smartphone className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Fit Screen</span>
                </>
              )}
            </button>

            <button
              onClick={() => setShowPrintModal(!showPrintModal)}
              className="text-xs text-slate-300 hover:text-white flex items-center space-x-1.5 px-3 py-2 rounded-lg bg-white/5 border border-white/10"
            >
              <Info className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Guide</span>
            </button>

            <button
              onClick={handlePrint}
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#D4AF37] to-[#B8860B] hover:brightness-110 text-slate-950 font-bold text-xs px-4 sm:px-5 py-2.5 rounded-xl shadow-lg transition-transform active:scale-95 cursor-pointer whitespace-nowrap"
            >
              <Printer className="w-4 h-4" />
              <span>Print / PDF</span>
            </button>
          </div>
        </div>

        {/* Print Guide Notification Banner */}
        {showPrintModal && (
          <div className="mt-3 bg-slate-800/95 border border-slate-700 rounded-xl p-4 text-xs text-slate-300 shadow-xl animate-fade-in">
            <div className="font-bold text-white mb-2 flex items-center space-x-2">
              <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
              <span>Instructions for Perfect A4 PDF Export:</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-[11px]">
              <div className="p-2.5 rounded bg-slate-900/60 border border-slate-700/60">
                <span className="font-semibold text-white block mb-0.5">1. Destination:</span>
                Select <span className="text-[#D4AF37] font-semibold">&ldquo;Save as PDF&rdquo;</span> in the browser print dialog.
              </div>
              <div className="p-2.5 rounded bg-slate-900/60 border border-slate-700/60">
                <span className="font-semibold text-white block mb-0.5">2. Paper Size & Margins:</span>
                Paper size: <span className="text-[#D4AF37] font-semibold">A4</span> | Margins: <span className="text-[#D4AF37] font-semibold">None</span>.
              </div>
              <div className="p-2.5 rounded bg-slate-900/60 border border-slate-700/60">
                <span className="font-semibold text-white block mb-0.5">3. Background Graphics:</span>
                Check the box <span className="text-[#D4AF37] font-semibold">&ldquo;Background graphics&rdquo;</span> to preserve all luxury colors.
              </div>
            </div>
          </div>
        )}
      </div>

      {/* The 10 Consecutive A4 Pages (Responsive on Mobile, Pixel-Perfect A4 on Print) */}
      <div className="flex flex-col items-center w-full px-2 sm:px-4">
        {/* Page 1: Cover Page */}
        <A4ResponsiveContainer zoomMode={zoomMode}>
          <CoverPage />
        </A4ResponsiveContainer>

        {/* Page 2: Corporate Overview */}
        <A4ResponsiveContainer zoomMode={zoomMode}>
          <CorporateOverviewPage />
        </A4ResponsiveContainer>

        {/* Page 3: Legal & Regulatory Framework */}
        <A4ResponsiveContainer zoomMode={zoomMode}>
          <LegalRegistryPage />
        </A4ResponsiveContainer>

        {/* Page 4: Scope of Works & Services */}
        <A4ResponsiveContainer zoomMode={zoomMode}>
          <ServicesPage />
        </A4ResponsiveContainer>

        {/* Page 5: Project Management & Execution Methodology */}
        <A4ResponsiveContainer zoomMode={zoomMode}>
          <MethodologyPage />
        </A4ResponsiveContainer>

        {/* Page 6: HSE & Quality Assurance Policy */}
        <A4ResponsiveContainer zoomMode={zoomMode}>
          <HseQualityPage />
        </A4ResponsiveContainer>

        {/* Page 7: Plant, Machinery & Equipment */}
        <A4ResponsiveContainer zoomMode={zoomMode}>
          <EquipmentResourcesPage />
        </A4ResponsiveContainer>

        {/* Page 8: Demonstrated Projects Portfolio */}
        <A4ResponsiveContainer zoomMode={zoomMode}>
          <ProjectsShowcasePage />
        </A4ResponsiveContainer>

        {/* Page 9: Leadership & Management Team */}
        <A4ResponsiveContainer zoomMode={zoomMode}>
          <LeadershipPage />
        </A4ResponsiveContainer>

        {/* Page 10: Official Contact Directory & Seal */}
        <A4ResponsiveContainer zoomMode={zoomMode}>
          <ContactDirectoryPage />
        </A4ResponsiveContainer>
      </div>

      {/* Bottom Floating Print Button for convenient scrolling */}
      <div className="no-print text-center py-8">
        <button
          onClick={handlePrint}
          className="inline-flex items-center space-x-2 bg-[#D4AF37] text-slate-950 font-bold text-sm px-6 py-3 rounded-full shadow-2xl hover:bg-amber-400 transition-all cursor-pointer"
        >
          <Printer className="w-5 h-5" />
          <span>Save All 10 Pages as PDF</span>
        </button>
      </div>
    </div>
  );
}
