"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { companyConfig } from "@/config/company";
import { ShieldCheck, FileText, Menu, X, MessageSquare, Sun, Moon, ChevronRight } from "lucide-react";

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [headerTheme, setHeaderTheme] = useState<"dark" | "light">("dark");
  const pathname = usePathname();
  const { businessDevelopment } = companyConfig.contacts;

  // Initialize theme from localStorage if available
  useEffect(() => {
    const savedTheme = localStorage.getItem("bac_header_theme") as "dark" | "light" | null;
    if (savedTheme) {
      setHeaderTheme(savedTheme);
    }
  }, []);

  const toggleHeaderTheme = () => {
    const nextTheme = headerTheme === "dark" ? "light" : "dark";
    setHeaderTheme(nextTheme);
    localStorage.setItem("bac_header_theme", nextTheme);
  };

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/projects" },
    { name: "HSE & Quality", href: "/hse-quality" },
    { name: "Leadership", href: "/leadership" },
    { name: "Contact", href: "/contact" },
  ];

  const isLight = headerTheme === "light";

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-colors duration-300 ${
        isLight
          ? "bg-white/95 backdrop-blur-md border-b border-slate-200 text-slate-900 shadow-md"
          : "bg-[#081322]/95 backdrop-blur-md border-b border-slate-800 text-white shadow-xl"
      }`}
    >
      {/* Top Thin Information Bar */}
      <div
        className={`text-[11px] py-2 px-4 sm:px-8 border-b transition-colors duration-300 ${
          isLight
            ? "bg-slate-100 border-slate-200 text-slate-700"
            : "bg-[#050D18] border-slate-800/80 text-slate-300"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          {/* Left: CR & Location */}
          <div className="flex items-center space-x-3 truncate">
            <div className={`inline-flex items-center space-x-1.5 font-semibold shrink-0 ${isLight ? "text-amber-800" : "text-[#D4AF37]"}`}>
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Qatar CR #{companyConfig.registry.crNumber}</span>
            </div>
            <span className={`${isLight ? "text-slate-400" : "text-slate-600"} hidden sm:inline`}>•</span>
            <span className={`${isLight ? "text-slate-600" : "text-slate-400"} hidden sm:inline truncate`}>
              {companyConfig.office.building}, {companyConfig.office.zone}, Doha
            </span>
          </div>

          {/* Right: Fast Contact */}
          <div className="flex items-center space-x-4 shrink-0 text-xs">
            <a
              href={`https://wa.me/${businessDevelopment.whatsapp}?text=Hello%20Bostik%20Accurate%20Construction,%20I%20have%20a%20project%20inquiry.`}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center space-x-1 font-medium transition-colors ${
                isLight ? "text-emerald-700 hover:text-emerald-800" : "text-emerald-400 hover:text-emerald-300"
              }`}
            >
              <MessageSquare className="w-3 h-3" />
              <span className="hidden xs:inline">WhatsApp</span>
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
        {/* Brand Identity */}
        <Link href="/" className="flex items-center space-x-3 group shrink-0">
          <div
            className={`w-11 h-11 rounded-xl flex items-center justify-center font-black text-lg shadow-md transition-all ${
              isLight
                ? "bg-[#0B192C] text-[#D4AF37] border-2 border-[#D4AF37]"
                : "bg-gradient-to-br from-[#1E3E62] to-[#0B192C] border border-[#D4AF37]/50 text-[#D4AF37] group-hover:border-[#D4AF37]"
            }`}
          >
            BA
          </div>
          <div className="flex flex-col">
            <span
              className={`text-sm sm:text-base font-extrabold tracking-tight uppercase transition-colors leading-none ${
                isLight
                  ? "text-slate-950 group-hover:text-amber-800"
                  : "text-white group-hover:text-[#D4AF37]"
              }`}
            >
              {companyConfig.brand.nameEn}
            </span>
            <span
              className={`text-[10px] font-arabic mt-1 leading-none tracking-wide ${
                isLight ? "text-amber-800 font-bold" : "text-[#D4AF37]"
              }`}
            >
              {companyConfig.brand.nameAr}
            </span>
          </div>
        </Link>

        {/* Desktop Links */}
        <nav className="hidden xl:flex items-center space-x-1 2xl:space-x-2">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-2 rounded-lg text-xs font-semibold tracking-wide transition-all whitespace-nowrap ${
                  isLight
                    ? isActive
                      ? "text-amber-900 bg-amber-100/70 font-bold border border-amber-300"
                      : "text-slate-700 hover:text-slate-950 hover:bg-slate-100"
                    : isActive
                      ? "text-[#D4AF37] bg-white/5 border border-[#D4AF37]/30 shadow-xs"
                      : "text-slate-300 hover:text-white hover:bg-white/5"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Right CTA Actions + Theme Switcher */}
        <div className="hidden sm:flex items-center space-x-3 shrink-0">
          {/* Light / Dark Mode Toggle Button */}
          <button
            onClick={toggleHeaderTheme}
            aria-label="Toggle Header Theme"
            title={isLight ? "Switch to Dark Header" : "Switch to Light Header"}
            className={`p-2 rounded-xl border transition-all cursor-pointer ${
              isLight
                ? "bg-slate-100 border-slate-300 text-slate-800 hover:bg-slate-200"
                : "bg-slate-900 border-slate-700 text-amber-400 hover:bg-slate-800"
            }`}
          >
            {isLight ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
          </button>

          <Link
            href="/portfolio"
            className={`inline-flex items-center space-x-1.5 px-3.5 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap border ${
              isLight
                ? "bg-slate-100 border-slate-300 text-slate-800 hover:bg-slate-200"
                : "bg-slate-900 border-[#D4AF37]/40 text-[#D4AF37] hover:bg-[#D4AF37]/10"
            }`}
          >
            <FileText className="w-3.5 h-3.5" />
            <span>A4 Portfolio</span>
          </Link>

          <Link
            href="/contact"
            className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-xl bg-[#D4AF37] hover:bg-[#B8860B] text-slate-950 text-xs font-black tracking-wide uppercase shadow-md transition-transform active:scale-95 whitespace-nowrap"
          >
            <span>Get a Quote</span>
          </Link>
        </div>

        {/* Mobile / Tablet Menu Button */}
        <div className="xl:hidden flex items-center space-x-2">
          <button
            onClick={toggleHeaderTheme}
            aria-label="Toggle Header Theme"
            className={`p-2 rounded-xl border ${
              isLight ? "bg-slate-100 border-slate-300 text-slate-800" : "bg-slate-900 border-slate-700 text-amber-400"
            }`}
          >
            {isLight ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
          </button>

          <Link
            href="/portfolio"
            className="sm:hidden px-2.5 py-1.5 rounded-lg bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[10px] text-[#D4AF37] font-bold"
          >
            PDF Profile
          </Link>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            className={`p-2.5 rounded-xl border transition-colors ${
              isLight
                ? "bg-slate-100 border-slate-300 text-slate-800 hover:bg-slate-200"
                : "bg-slate-900 border-slate-700 text-slate-200 hover:text-white"
            }`}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          className={`xl:hidden border-b px-6 py-6 space-y-3 animate-fade-in shadow-2xl ${
            isLight
              ? "bg-white border-slate-200 text-slate-900"
              : "bg-[#060E1A] border-slate-800 text-white"
          }`}
        >
          <div className="flex items-center justify-between pb-2 border-b border-slate-200 dark:border-slate-800">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
              Navigation Menu
            </span>
            <span className="text-[10px] text-slate-400 font-mono">
              Header: {isLight ? "Light Mode" : "Dark Mode"}
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
                  className={`flex items-center justify-between py-2.5 px-3 rounded-lg text-sm font-medium transition-colors ${
                    isLight
                      ? isActive
                        ? "text-amber-900 bg-amber-50 font-bold"
                        : "text-slate-700 hover:text-slate-950 hover:bg-slate-100"
                      : isActive
                        ? "text-[#D4AF37] bg-white/5 font-bold"
                        : "text-slate-300 hover:text-white hover:bg-slate-800/50"
                  }`}
                >
                  <span>{link.name}</span>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </Link>
              );
            })}
          </div>

          <div className="pt-4 border-t border-slate-200 dark:border-slate-800 space-y-3">
            <Link
              href="/portfolio"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center space-x-2 py-3 rounded-xl bg-slate-100 dark:bg-slate-900 border border-[#D4AF37]/50 text-xs font-bold text-[#D4AF37]"
            >
              <FileText className="w-4 h-4" />
              <span>Print 10-Page A4 PDF Portfolio</span>
            </Link>

            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center py-3 rounded-xl bg-[#D4AF37] text-slate-950 text-xs font-bold uppercase tracking-wider shadow-lg"
            >
              Request Commercial Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
