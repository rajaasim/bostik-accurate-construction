"use client";

import React, { useState } from "react";
import Link from "next/link";
import { companyConfig } from "@/config/company";
import { ShieldCheck, Phone, FileText, Menu, X, MessageSquare } from "lucide-react";

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { businessDevelopment } = companyConfig.contacts;

  return (
    <nav className="sticky top-0 z-40 bg-[#0B192C]/95 backdrop-blur-md border-b border-slate-800 text-white">
      {/* Top micro bar for CR & Direct Support */}
      <div className="bg-[#070F1E] border-b border-slate-800/80 text-[11px] py-1.5 px-4 sm:px-8 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-1 text-[#D4AF37]">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span className="font-semibold">Qatar CR # {companyConfig.registry.crNumber}</span>
          </div>
          <span className="hidden md:inline text-slate-500">•</span>
          <span className="hidden md:inline text-slate-400">
            {companyConfig.office.building}, {companyConfig.office.zone}, Doha, Qatar
          </span>
        </div>

        <div className="flex items-center space-x-4">
          <a
            href={`https://wa.me/${businessDevelopment.whatsapp}?text=Hello%20Bostik%20Accurate%20Construction,%20I%20would%20like%20to%20inquire%20about%20a%20commercial%20project.`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-1.5 text-emerald-400 hover:text-emerald-300 font-medium transition-colors"
          >
            <MessageSquare className="w-3 h-3" />
            <span>WhatsApp Quick Inquiries</span>
          </a>
          <span className="text-slate-600">|</span>
          <a
            href={`tel:${businessDevelopment.phone}`}
            className="text-slate-300 hover:text-white font-mono"
          >
            {businessDevelopment.phoneFormatted}
          </a>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center space-x-3.5 group">
          <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#1E3E62] to-[#0B192C] border border-[#D4AF37]/50 flex items-center justify-center text-[#D4AF37] font-black text-lg shadow-lg group-hover:border-[#D4AF37] transition-all">
            BA
          </div>
          <div>
            <div className="text-base font-extrabold tracking-tight text-white uppercase group-hover:text-[#D4AF37] transition-colors leading-tight">
              {companyConfig.brand.nameEn}
            </div>
            <div className="text-[11px] text-[#D4AF37] font-arabic tracking-wider">
              {companyConfig.brand.nameAr}
            </div>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center space-x-8 text-sm font-medium text-slate-300">
          <Link href="#about" className="hover:text-[#D4AF37] transition-colors">
            About Us
          </Link>
          <Link href="#credentials" className="hover:text-[#D4AF37] transition-colors">
            Legal & CR
          </Link>
          <Link href="#services" className="hover:text-[#D4AF37] transition-colors">
            Services
          </Link>
          <Link href="#projects" className="hover:text-[#D4AF37] transition-colors">
            Projects
          </Link>
          <Link href="#hse" className="hover:text-[#D4AF37] transition-colors">
            HSE & Quality
          </Link>
          <Link href="#team" className="hover:text-[#D4AF37] transition-colors">
            Leadership
          </Link>
          <Link href="#contact" className="hover:text-[#D4AF37] transition-colors">
            Contact
          </Link>
        </div>

        {/* Right Action CTAs */}
        <div className="hidden lg:flex items-center space-x-4">
          <Link
            href="/portfolio"
            className="inline-flex items-center space-x-2 px-4 py-2 rounded-xl bg-white/5 border border-[#D4AF37]/50 hover:bg-[#D4AF37]/10 text-xs font-bold text-[#D4AF37] transition-all"
          >
            <FileText className="w-4 h-4" />
            <span>PDF Portfolio (A4)</span>
          </Link>

          <Link
            href="#contact"
            className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-[#D4AF37] hover:bg-[#B8860B] text-slate-950 text-xs font-extrabold tracking-wide uppercase shadow-lg transition-transform active:scale-95"
          >
            <span>Request Quote</span>
          </Link>
        </div>

        {/* Mobile menu trigger */}
        <div className="lg:hidden flex items-center space-x-2">
          <Link
            href="/portfolio"
            className="px-2.5 py-1.5 rounded-lg bg-[#D4AF37]/10 border border-[#D4AF37]/40 text-[11px] text-[#D4AF37] font-bold"
          >
            PDF Profile
          </Link>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-slate-800 text-slate-300 hover:text-white"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#070F1E] border-b border-slate-800 px-6 py-6 space-y-4 text-sm animate-fade-in">
          <Link
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-300 hover:text-[#D4AF37]"
          >
            About Us
          </Link>
          <Link
            href="#credentials"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-300 hover:text-[#D4AF37]"
          >
            Legal Credentials & CR
          </Link>
          <Link
            href="#services"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-300 hover:text-[#D4AF37]"
          >
            Services & Capabilities
          </Link>
          <Link
            href="#projects"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-300 hover:text-[#D4AF37]"
          >
            Featured Projects
          </Link>
          <Link
            href="#hse"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-300 hover:text-[#D4AF37]"
          >
            HSE & Quality Assurance
          </Link>
          <Link
            href="#team"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-300 hover:text-[#D4AF37]"
          >
            Leadership
          </Link>
          <Link
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-300 hover:text-[#D4AF37]"
          >
            Contact & Location
          </Link>

          <div className="pt-4 border-t border-slate-800 space-y-3">
            <Link
              href="/portfolio"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center space-x-2 py-3 rounded-xl bg-white/5 border border-[#D4AF37]/50 text-xs font-bold text-[#D4AF37]"
            >
              <FileText className="w-4 h-4" />
              <span>View & Print 10-Page A4 PDF</span>
            </Link>
            <Link
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center py-3 rounded-xl bg-[#D4AF37] text-slate-950 text-xs font-bold uppercase tracking-wider"
            >
              Request Quote
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};
