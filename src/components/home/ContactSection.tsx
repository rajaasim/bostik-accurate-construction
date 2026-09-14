"use client";

import React, { useState } from "react";
import { companyConfig } from "@/config/company";
import { MapPin, Phone, Mail, MessageSquare, Send, CheckCircle2, ShieldCheck } from "lucide-react";

export const ContactSection: React.FC = () => {
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
    <section id="contact" className="py-24 bg-[#0B192C] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 text-xs font-bold text-[#D4AF37] uppercase tracking-widest px-3.5 py-1 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>Commercial Inquiries & Tenders</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase">
            Let&apos;s Build <span className="text-[#D4AF37]">Together</span>
          </h2>
          <div className="w-20 h-1 bg-[#D4AF37] mx-auto mt-4 rounded-full" />
          <p className="text-slate-400 text-sm sm:text-base mt-4">
            Directly connect with our business development and site operations teams in Doha, Qatar.
          </p>
        </div>

        {/* Main Grid: Form on Left (7 cols), Contact Details on Right (5 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Form */}
          <div className="lg:col-span-7 bg-slate-900 p-8 sm:p-10 rounded-2xl border border-slate-800 shadow-2xl">
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/50 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white">Thank You for Your Inquiry</h3>
                <p className="text-sm text-slate-300 max-w-md mx-auto">
                  Your project submission has been routed to our Business Development Manager, {businessDevelopment.name}. Our commercial team will contact you promptly.
                </p>
                <div className="pt-4">
                  <a
                    href={`https://wa.me/${businessDevelopment.whatsapp}?text=Hello%20${businessDevelopment.name},%20I%20just%20submitted%20a%20project%20inquiry%20from%20the%20website.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Chat on WhatsApp Now</span>
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="text-xl font-bold text-white mb-2">
                  Request a Tender Review or Commercial Quotation
                </h3>
                <p className="text-xs text-slate-400 mb-6">
                  Fill in your project details below or contact our key personnel directly.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Nasser Al-Kuwari"
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
                      placeholder="e.g. Commercial Holdings Qatar"
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-700 text-white text-sm focus:outline-none focus:border-[#D4AF37] transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-2">
                      Phone Number (with country code) *
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
                      Corporate Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="nasser@company.com"
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-700 text-white text-sm focus:outline-none focus:border-[#D4AF37] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-2">
                    Service of Interest *
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
                    Project Scope & Requirements *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Provide details regarding project location, estimated area (sqm), structural specs, or tender submission deadline..."
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-700 text-white text-sm focus:outline-none focus:border-[#D4AF37] transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center space-x-2 bg-[#D4AF37] hover:bg-[#B8860B] text-slate-950 font-black text-xs py-4 rounded-xl shadow-lg transition-transform active:scale-95 uppercase tracking-wider cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Inquiry to Commercial Team</span>
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Office & Direct Phone Contacts */}
          <div className="lg:col-span-5 space-y-6">
            {/* Headquarters Card */}
            <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800 shadow-xl space-y-4">
              <div className="flex items-center space-x-3 text-[#D4AF37] font-bold text-xs uppercase tracking-wider">
                <MapPin className="w-4 h-4" />
                <span>Qatar Headquarters</span>
              </div>

              <div className="text-white font-bold text-lg leading-snug">
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

            {/* Direct Lines */}
            <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800 shadow-xl space-y-5">
              <div className="text-xs font-bold text-white uppercase tracking-wider pb-2 border-b border-slate-800">
                Key Management Contacts
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

            {/* CR Trust Banner */}
            <div className="p-4 rounded-xl bg-slate-800/60 border border-slate-700/60 flex items-center space-x-3 text-xs text-slate-300">
              <ShieldCheck className="w-5 h-5 text-[#D4AF37] shrink-0" />
              <span>
                Commercial Registration # <strong className="text-white font-mono">{companyConfig.registry.crNumber}</strong> verified by the Ministry of Commerce & Industry, Qatar.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
