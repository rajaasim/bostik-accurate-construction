"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/layout/PageHeader";
import { companyConfig } from "@/config/company";
import { MapPin, Phone, Mail, MessageSquare, Send, CheckCircle2, ShieldCheck, Clock, FileText } from "lucide-react";
import Link from "next/link";

export default function ContactPage() {
  const { businessDevelopment, operationsManager } = companyConfig.contacts;
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    serviceType: "commercial-construction",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#0B192C] text-slate-100 flex flex-col">
      <Navbar />

      <main className="flex-1">
        <PageHeader
          title="Contact & Tender Submissions"
          subtitle="Connect with our commercial estimating team, schedule an office meeting, or submit project drawings."
          breadcrumb="Contact"
        />

        <section className="py-16 sm:py-20 bg-[#0F172A]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              {/* Left Column: Form */}
              <div className="lg:col-span-7 bg-slate-900 p-8 sm:p-10 rounded-2xl border border-slate-800 shadow-2xl">
                {submitted ? (
                  <div className="py-12 text-center space-y-4">
                    <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/50 flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h2 className="text-2xl font-bold text-white">Thank You for Your Submission</h2>
                    <p className="text-sm text-slate-300 max-w-md mx-auto">
                      Your commercial inquiry has been assigned to our Business Development team. We will review your requirements and respond promptly.
                    </p>
                    <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
                      <a
                        href={`https://wa.me/${businessDevelopment.whatsapp}?text=Hello%20${businessDevelopment.name},%20I%20just%20submitted%20a%20project%20inquiry.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider"
                      >
                        <MessageSquare className="w-4 h-4" />
                        <span>Message on WhatsApp</span>
                      </a>
                      <button
                        onClick={() => setSubmitted(false)}
                        className="px-6 py-3 rounded-xl bg-slate-800 text-slate-300 hover:text-white text-xs font-bold"
                      >
                        Submit Another Inquiry
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <h2 className="text-xl font-bold text-white mb-1">
                        Commercial Quotation & Tender Form
                      </h2>
                      <p className="text-xs text-slate-400">
                        Please provide project specifications, location, and timelines.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-semibold text-slate-300 mb-2">
                          Your Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Tariq Al-Mahmoud"
                          className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-700 text-white text-sm focus:outline-none focus:border-[#D4AF37] transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-300 mb-2">
                          Company / Organization
                        </label>
                        <input
                          type="text"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          placeholder="e.g. Qatar Commercial Real Estate"
                          className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-700 text-white text-sm focus:outline-none focus:border-[#D4AF37] transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-semibold text-slate-300 mb-2">
                          Phone Number (with Country Code) *
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+974 5555 1234"
                          className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-700 text-white text-sm focus:outline-none focus:border-[#D4AF37] transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-300 mb-2">
                          Corporate Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="tariq@company.qa"
                          className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-700 text-white text-sm focus:outline-none focus:border-[#D4AF37] transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-2">
                        Service Required *
                      </label>
                      <select
                        value={formData.serviceType}
                        onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-700 text-white text-sm focus:outline-none focus:border-[#D4AF37] transition-colors"
                      >
                        {companyConfig.services.map((s) => (
                          <option key={s.id} value={s.id}>
                            {s.title}
                          </option>
                        ))}
                        <option value="general-inquiry">General Contracting & Prequalification</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-2">
                        Project Scope, Location & Schedule *
                      </label>
                      <textarea
                        rows={4}
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Detail site location, estimated built-up area (sqm), tender submission deadline, or civil/fit-out scope..."
                        className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-700 text-white text-sm focus:outline-none focus:border-[#D4AF37] transition-colors"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full flex items-center justify-center space-x-2 bg-[#D4AF37] hover:bg-[#B8860B] text-slate-950 font-black text-xs py-4 rounded-xl shadow-lg transition-transform active:scale-95 uppercase tracking-wider cursor-pointer"
                    >
                      <Send className="w-4 h-4" />
                      <span>Transmit Tender Inquiry</span>
                    </button>
                  </form>
                )}
              </div>

              {/* Right Column: Office Location & Contacts */}
              <div className="lg:col-span-5 space-y-6">
                {/* Headquarters Box */}
                <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800 shadow-xl space-y-4">
                  <div className="flex items-center space-x-2 text-[#D4AF37] font-bold text-xs uppercase tracking-wider">
                    <MapPin className="w-4 h-4" />
                    <span>Registered Headquarters</span>
                  </div>

                  <div className="text-white font-bold text-base leading-snug">
                    {companyConfig.brand.nameEn}
                  </div>

                  <div className="text-xs text-slate-300 leading-relaxed space-y-1">
                    <div>{companyConfig.office.building}, {companyConfig.office.floor}</div>
                    <div>{companyConfig.office.street}, {companyConfig.office.zone}</div>
                    <div>{companyConfig.office.city}, {companyConfig.office.country}</div>
                    <div className="text-[#D4AF37] font-arabic pt-1">
                      {companyConfig.office.fullAddressArabic}
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-800">
                    <a
                      href={companyConfig.office.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-1.5 text-xs text-[#D4AF37] hover:underline"
                    >
                      <span>Open in Google Maps</span>
                    </a>
                  </div>
                </div>

                {/* Key Personnel Lines */}
                <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800 shadow-xl space-y-5">
                  <div className="text-xs font-bold text-white uppercase tracking-wider pb-2 border-b border-slate-800">
                    Direct Key Contacts
                  </div>

                  {/* Jhunelle */}
                  <div>
                    <div className="text-xs font-bold text-white">{businessDevelopment.name}</div>
                    <div className="text-[11px] text-[#D4AF37] mb-1">{businessDevelopment.role}</div>
                    <div className="flex items-center space-x-3 text-xs">
                      <a href={`tel:${businessDevelopment.phone}`} className="font-mono text-slate-300 hover:text-white">
                        {businessDevelopment.phoneFormatted}
                      </a>
                      <span>•</span>
                      <a
                        href={`https://wa.me/${businessDevelopment.whatsapp}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-emerald-400 hover:text-emerald-300 font-semibold"
                      >
                        WhatsApp
                      </a>
                    </div>
                  </div>

                  {/* Awais */}
                  <div className="pt-3 border-t border-slate-800">
                    <div className="text-xs font-bold text-white">{operationsManager.name}</div>
                    <div className="text-[11px] text-[#D4AF37] mb-1">{operationsManager.role}</div>
                    <div className="flex items-center space-x-3 text-xs">
                      <a href={`tel:${operationsManager.phone}`} className="font-mono text-slate-300 hover:text-white">
                        {operationsManager.phoneFormatted}
                      </a>
                      <span>•</span>
                      <a
                        href={`https://wa.me/${operationsManager.whatsapp}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-emerald-400 hover:text-emerald-300 font-semibold"
                      >
                        WhatsApp
                      </a>
                    </div>
                  </div>
                </div>

                {/* CR Badge */}
                <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-between">
                  <div className="flex items-center space-x-3 text-xs">
                    <ShieldCheck className="w-5 h-5 text-[#D4AF37]" />
                    <div>
                      <div className="font-bold text-white">Qatar CR # {companyConfig.registry.crNumber}</div>
                      <div className="text-[11px] text-slate-400">Ministry of Commerce & Industry Certified</div>
                    </div>
                  </div>

                  <Link
                    href="/portfolio"
                    className="text-xs text-[#D4AF37] hover:underline font-semibold"
                  >
                    A4 Dossier →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
