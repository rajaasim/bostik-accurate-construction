"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { companyConfig } from "@/config/company";
import { ShieldCheck, FileText, Menu, X, MessageSquare, PhoneCall, ChevronRight } from "lucide-react";

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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
    <header className="sticky top-0 z-50 w-full bg-[#081322]/95 backdrop-blur-md border-b border-slate-800 text-white shadow-xl">
      {/* Top Thin Information Bar */}
      <div className="bg-[#050D18] border-b border-slate-800/80 text-[11px] py-2 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          {/* Left: CR & Location */}
          <div className="flex items-center space-x-3 text-slate-300 truncate">
            <div className="inline-flex items-center space-x-1.5 text-[#D4AF37] font-semibold shrink-0">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Qatar CR #{companyConfig.registry.crNumber}</span>
            </div>
            <span className="text-slate-600 hidden sm:inline">•</span>
            <span className="text-slate-400 hidden sm:inline truncate">
              {companyConfig.office.building}, {companyConfig.office.zone}, Doha
            </span>
          </div>

          {/* Right: Fast Contact */}
          <div className="flex items-center space-x-4 shrink-0 text-xs">
            <a
              href={`https://wa.me/${businessDevelopment.whatsapp}?text=Hello%20Bostik%20Accurate%20Construction,%20I%20have%20a%20project%20inquiry.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1 text-emerald-400 hover:text-emerald-300 font-medium transition-colors"
            >
              <MessageSquare className="w-3 h-3" />
              <span className="hidden xs:inline">WhatsApp</span>
            </a>
            <span className="text-slate-700">|</span>
            <a
              href={`tel:${businessDevelopment.phone}`}
              className="text-slate-300 hover:text-[#D4AF37] font-mono text-[11px] transition-colors"
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
          <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#1E3E62] to-[#0B192C] border border-[#D4AF37]/50 flex items-center justify-center text-[#D4AF37] font-black text-lg shadow-md group-hover:border-[#D4AF37] transition-all">
            BA
          </div>
          <div className="flex flex-col">
            <span className="text-sm sm:text-base font-extrabold tracking-tight text-white uppercase group-hover:text-[#D4AF37] transition-colors leading-none">
              {companyConfig.brand.nameEn}
            </span>
            <span className="text-[10px] text-[#D4AF37] font-arabic mt-1 leading-none tracking-wide">
              {companyConfig.brand.nameAr}
            </span>
          </div>
        </Link>

        {/* Desktop Links (Visible on xl screens to avoid any congestion or wrapping) */}
        <nav className="hidden xl:flex items-center space-x-1 2xl:space-x-2">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-2 rounded-lg text-xs font-semibold tracking-wide transition-all whitespace-nowrap ${
                  isActive
                    ? "text-[#D4AF37] bg-white/5 border border-[#D4AF37]/30 shadow-xs"
                    : "text-slate-300 hover:text-white hover:bg-white/5"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Right CTA Actions */}
        <div className="hidden sm:flex items-center space-x-3 shrink-0">
          <Link
            href="/portfolio"
            className="inline-flex items-center space-x-1.5 px-3.5 py-2 rounded-xl bg-slate-900 border border-[#D4AF37]/40 text-[#D4AF37] hover:bg-[#D4AF37]/10 text-xs font-bold transition-all whitespace-nowrap"
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
          <Link
            href="/portfolio"
            className="sm:hidden px-2.5 py-1.5 rounded-lg bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[10px] text-[#D4AF37] font-bold"
          >
            PDF Profile
          </Link>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            className="p-2.5 rounded-xl bg-slate-900 border border-slate-700 text-slate-200 hover:text-white hover:border-[#D4AF37] transition-colors"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#060E1A] border-b border-slate-800 px-6 py-6 space-y-3 animate-fade-in shadow-2xl">
          <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500 pb-2 border-b border-slate-800">
            Navigation Menu
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
                    isActive
                      ? "text-[#D4AF37] bg-white/5 font-bold"
                      : "text-slate-300 hover:text-white hover:bg-slate-800/50"
                  }`}
                >
                  <span>{link.name}</span>
                  <ChevronRight className="w-4 h-4 text-slate-600" />
                </Link>
              );
            })}
          </div>

          <div className="pt-4 border-t border-slate-800 space-y-3">
            <Link
              href="/portfolio"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center space-x-2 py-3 rounded-xl bg-slate-900 border border-[#D4AF37]/50 text-xs font-bold text-[#D4AF37]"
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
