"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { companyConfig } from "@/config/company";
import { useTheme } from "@/context/ThemeContext";
import { ShieldCheck, FileText, Menu, X, MessageSquare, Sun, Moon, ChevronRight, Sparkles } from "lucide-react";

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme, isLight } = useTheme();
  const pathname = usePathname();
  const { businessDevelopment } = companyConfig.contacts;

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/projects" },
    { name: "HSE & Quality", href: "/hse-quality" },
    { name: "Leadership", href: "/leadership" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isLight
          ? "bg-white/85 backdrop-blur-xl border-b border-slate-200/80 text-slate-900 shadow-sm"
          : "bg-[#07111F]/80 backdrop-blur-xl border-b border-white/[0.08] text-white shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)]"
      }`}
    >
      {/* Top Thin Notification & Direct Access Bar */}
      <div
        className={`text-[11px] py-1.5 px-4 sm:px-8 border-b transition-colors duration-300 ${
          isLight
            ? "bg-slate-50/90 border-slate-200/80 text-slate-600"
            : "bg-[#040A14]/90 border-white/[0.05] text-slate-400"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          {/* Left: Qatar CR & Operational Hub */}
          <div className="flex items-center space-x-3 truncate">
            <div className="inline-flex items-center space-x-1.5 font-semibold shrink-0 text-[#D4AF37]">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Qatar CR #{companyConfig.registry.crNumber}</span>
            </div>
            <span className={`${isLight ? "text-slate-300" : "text-slate-700"} hidden sm:inline`}>•</span>
            <span className="hidden sm:inline truncate text-[11px]">
              {companyConfig.office.building}, {companyConfig.office.zone}, Doha
            </span>
          </div>

          {/* Right: Direct Contacts */}
          <div className="flex items-center space-x-4 shrink-0 text-xs">
            <a
              href={`https://wa.me/${businessDevelopment.whatsapp}?text=Hello%20Bostik%20Accurate%20Construction,%20I%20have%20a%20project%20inquiry.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1 font-medium text-emerald-500 hover:text-emerald-400 transition-colors"
            >
              <MessageSquare className="w-3 h-3" />
              <span className="hidden xs:inline">WhatsApp Fast Desk</span>
            </a>
            <span className={isLight ? "text-slate-300" : "text-slate-700"}>|</span>
            <a
              href={`tel:${businessDevelopment.phone}`}
              className={`font-mono text-[11px] transition-colors ${
                isLight ? "text-slate-700 hover:text-slate-950" : "text-slate-300 hover:text-[#D4AF37]"
              }`}
            >
              {businessDevelopment.phoneFormatted}
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Row */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
        {/* Brand Identity Lockup */}
        <Link href="/" className="flex items-center space-x-3.5 group shrink-0">
          <div className="relative">
            {/* Ambient Cyan/Gold Radial Glow */}
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-cyan-500/30 via-[#D4AF37]/30 to-emerald-500/30 blur-md opacity-75 group-hover:opacity-100 transition-opacity" />
            
            <div
              className={`relative w-11 h-11 rounded-xl flex items-center justify-center font-black text-lg shadow-lg transition-transform group-hover:scale-[1.02] ${
                isLight
                  ? "bg-[#0B192C] text-[#D4AF37] border border-[#D4AF37]/40"
                  : "bg-gradient-to-br from-[#12233C] to-[#081220] border border-white/20 text-[#D4AF37]"
              }`}
            >
              BA
            </div>
          </div>

          <div className="flex flex-col">
            <span
              className={`text-sm sm:text-base font-extrabold tracking-tight uppercase transition-colors leading-tight ${
                isLight
                  ? "text-slate-950 group-hover:text-amber-800"
                  : "text-white group-hover:text-[#D4AF37]"
              }`}
            >
              {companyConfig.brand.nameEn}
            </span>
            <span className="text-[10px] text-[#D4AF37] font-arabic mt-0.5 leading-none tracking-wide">
              {companyConfig.brand.nameAr}
            </span>
          </div>
        </Link>

        {/* Desktop Links with active glass pill */}
        <nav className="hidden xl:flex items-center space-x-1 2xl:space-x-1.5">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-3.5 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all duration-200 whitespace-nowrap ${
                  isActive
                    ? isLight
                      ? "text-amber-950 bg-amber-500/15 font-bold shadow-xs border border-amber-500/30"
                      : "text-white bg-white/10 font-bold shadow-[0_0_20px_rgba(6,182,212,0.15)] border border-white/15"
                    : isLight
                      ? "text-slate-600 hover:text-slate-950 hover:bg-slate-100"
                      : "text-slate-300 hover:text-white hover:bg-white/5"
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-4 h-0.5 rounded-full bg-gradient-to-r from-cyan-400 to-[#D4AF37]" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right CTA Cluster & Theme Toggle */}
        <div className="hidden sm:flex items-center space-x-3 shrink-0">
          {/* Light / Dark Mode Toggle Button */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle Global Dark/Light Theme"
            title={isLight ? "Switch to Dark Mode" : "Switch to Light Mode"}
            className={`p-2.5 rounded-xl border transition-all cursor-pointer shadow-xs ${
              isLight
                ? "bg-slate-100 border-slate-300 text-slate-700 hover:bg-slate-200"
                : "bg-white/5 border-white/10 text-amber-400 hover:bg-white/10 hover:border-cyan-400/40 shadow-[0_0_15px_rgba(6,182,212,0.1)]"
            }`}
          >
            {isLight ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
          </button>

          <Link
            href="/portfolio"
            className={`inline-flex items-center space-x-1.5 px-3.5 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap border shadow-xs ${
              isLight
                ? "bg-white border-slate-300 text-slate-800 hover:bg-slate-50"
                : "bg-white/5 border-white/15 text-[#D4AF37] hover:bg-white/10 hover:border-[#D4AF37]/50"
            }`}
          >
            <FileText className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>A4 Portfolio</span>
          </Link>

          <Link
            href="/contact"
            className="relative inline-flex items-center space-x-1.5 px-4.5 py-2.5 rounded-xl bg-gradient-to-r from-[#D4AF37] via-amber-400 to-[#B8860B] text-slate-950 text-xs font-black tracking-wide uppercase shadow-[0_4px_20px_rgba(212,175,55,0.35)] hover:shadow-[0_6px_25px_rgba(212,175,55,0.45)] transition-transform active:scale-95 whitespace-nowrap cursor-pointer"
          >
            <span>Get a Quote</span>
          </Link>
        </div>

        {/* Mobile Controls */}
        <div className="xl:hidden flex items-center space-x-2">
          <button
            onClick={toggleTheme}
            aria-label="Toggle Global Theme"
            className={`p-2 rounded-xl border ${
              isLight ? "bg-slate-100 border-slate-300 text-slate-800" : "bg-white/5 border-white/10 text-amber-400"
            }`}
          >
            {isLight ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
          </button>

          <Link
            href="/portfolio"
            className="sm:hidden px-2.5 py-1.5 rounded-lg bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[10px] text-[#D4AF37] font-bold"
          >
            A4 PDF
          </Link>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            className={`p-2.5 rounded-xl border transition-colors ${
              isLight
                ? "bg-slate-100 border-slate-300 text-slate-800 hover:bg-slate-200"
                : "bg-white/5 border-white/10 text-slate-200 hover:text-white"
            }`}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          className={`xl:hidden border-b px-6 py-6 space-y-3 animate-fade-in shadow-2xl backdrop-blur-2xl ${
            isLight
              ? "bg-white/95 border-slate-200 text-slate-900"
              : "bg-[#060E1A]/95 border-white/10 text-white"
          }`}
        >
          <div className="flex items-center justify-between pb-2 border-b border-slate-200 dark:border-white/10">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
              Navigation Menu
            </span>
            <span className="text-[10px] text-cyan-400 font-mono flex items-center space-x-1">
              <Sparkles className="w-3 h-3" />
              <span>{isLight ? "Light Mode Active" : "Dark Mode Active"}</span>
            </span>
          </div>

          <div className="space-y-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between py-2.5 px-3 rounded-xl text-sm font-medium transition-colors ${
                    isActive
                      ? isLight
                        ? "text-amber-950 bg-amber-100/70 font-bold"
                        : "text-[#D4AF37] bg-white/10 font-bold"
                      : isLight
                        ? "text-slate-700 hover:text-slate-950 hover:bg-slate-100"
                        : "text-slate-300 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <span>{link.name}</span>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </Link>
              );
            })}
          </div>

          <div className="pt-4 border-t border-slate-200 dark:border-white/10 space-y-3">
            <Link
              href="/portfolio"
              onClick={() => setMobileMenuOpen(false)}
              className={`w-full flex items-center justify-center space-x-2 py-3 rounded-xl border text-xs font-bold ${
                isLight
                  ? "bg-slate-100 border-slate-300 text-slate-800"
                  : "bg-white/5 border-white/15 text-[#D4AF37]"
              }`}
            >
              <FileText className="w-4 h-4 text-[#D4AF37]" />
              <span>Print 10-Page A4 PDF Portfolio</span>
            </Link>

            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center py-3 rounded-xl bg-gradient-to-r from-[#D4AF37] to-amber-500 text-slate-950 text-xs font-bold uppercase tracking-wider shadow-lg"
            >
              Request Commercial Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
