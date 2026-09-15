"use client";

import React, { useState } from "react";
import { companyConfig } from "@/config/company";
import { MapPin, Mail, MessageSquare, Send, CheckCircle2, ShieldCheck, Loader2, ArrowRight } from "lucide-react";

export const ContactSection: React.FC = () => {
  const { businessDevelopment, operationsManager } = companyConfig.contacts;
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    serviceType: "commercial-construction",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await fetch("https://formsubmit.co/ajax/contact@bostikaccurate.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          _subject: `New Commercial Inquiry: ${formData.name} (${formData.company || "Individual"})`,
          Name: formData.name,
          Company: formData.company || "N/A",
          Phone: formData.phone,
          Email: formData.email,
          Service: formData.serviceType,
          Requirements: formData.message,
        }),
      });
    } catch (err) {
      console.error("Submission dispatch error:", err);
    } finally {
      setIsSubmitting(false);
      setSubmitted(true);
    }
  };

  const mailtoLink = `mailto:${companyConfig.brand.primaryEmail}?subject=${encodeURIComponent(
    `Commercial Inquiry - ${formData.company || formData.name}`
  )}&body=${encodeURIComponent(
    `Name: ${formData.name}\nCompany: ${formData.company || "N/A"}\nPhone: ${formData.phone}\nEmail: ${formData.email}\nScope: ${formData.message}`
  )}`;

  const waLink = `https://wa.me/${businessDevelopment.whatsapp}?text=${encodeURIComponent(
    `Hello ${businessDevelopment.name}, I am contacting you regarding a project inquiry for ${formData.name} (${formData.company || "Commercial"}). Scope: ${formData.message}`
  )}`;

  return (
    <section id="contact" className="py-24 bg-slate-100/70 dark:bg-[#0B192C] text-slate-900 dark:text-white relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 text-xs font-bold text-amber-700 dark:text-[#D4AF37] uppercase tracking-widest px-3.5 py-1 rounded-full bg-amber-50 dark:bg-[#D4AF37]/10 border border-amber-200 dark:border-[#D4AF37]/30 mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>Commercial Inquiries & Tenders</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-950 dark:text-white tracking-tight uppercase">
            Let&apos;s Build <span className="text-amber-700 dark:text-[#D4AF37]">Together</span>
          </h2>
          <div className="w-20 h-1 bg-amber-600 dark:bg-[#D4AF37] mx-auto mt-4 rounded-full" />
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base mt-4 font-light">
            Directly connect with our business development and site operations teams in Doha, Qatar.
          </p>
        </div>

        {/* Main Grid: Form on Left, Contacts on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Form */}
          <div className="lg:col-span-7 bg-white dark:bg-slate-900 p-8 sm:p-10 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-lg dark:shadow-2xl">
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 border border-emerald-300 dark:border-emerald-500/50 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Thank You for Your Inquiry</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto">
                  Your project submission has been dispatched to our commercial team at <strong className="text-amber-700 dark:text-[#D4AF37]">contact@bostikaccurate.com</strong>.
                </p>
                <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
                  <a
                    href={waLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider shadow-md"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Chat on WhatsApp Now</span>
                  </a>
                  <a
                    href={mailtoLink}
                    className="inline-flex items-center space-x-2 px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs uppercase tracking-wider shadow-md border border-slate-700"
                  >
                    <Mail className="w-4 h-4" />
                    <span>Open Email Client</span>
                  </a>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-5 py-3 rounded-xl bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-700 text-xs font-bold"
                  >
                    New Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                  Request a Tender Review or Commercial Quotation
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mb-6">
                  Fill in your project details below or contact our key personnel directly.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Nasser Al-Kuwari"
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white text-sm focus:outline-none focus:border-cyan-500 dark:focus:border-[#D4AF37] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-2">
                      Company / Organization
                    </label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="e.g. Commercial Holdings Qatar"
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white text-sm focus:outline-none focus:border-cyan-500 dark:focus:border-[#D4AF37] transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-2">
                      Phone Number (with country code) *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+974 5555 1234"
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white text-sm focus:outline-none focus:border-cyan-500 dark:focus:border-[#D4AF37] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-2">
                      Corporate Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="nasser@company.com"
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white text-sm focus:outline-none focus:border-cyan-500 dark:focus:border-[#D4AF37] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-2">
                    Service of Interest *
                  </label>
                  <select
                    value={formData.serviceType}
                    onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white text-sm focus:outline-none focus:border-cyan-500 dark:focus:border-[#D4AF37] transition-colors"
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
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-2">
                    Project Scope & Requirements *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Provide details regarding project location, estimated area (sqm), structural specs, or tender submission deadline..."
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white text-sm focus:outline-none focus:border-cyan-500 dark:focus:border-[#D4AF37] transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-[#D4AF37] via-amber-400 to-[#B8860B] text-slate-950 font-black text-xs py-4 rounded-xl shadow-lg transition-transform active:scale-95 uppercase tracking-wider cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Transmitting Inquiry...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Submit Inquiry to Commercial Team</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Contacts & Office */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md dark:shadow-xl space-y-4">
              <div className="flex items-center space-x-3 text-amber-700 dark:text-[#D4AF37] font-bold text-xs uppercase tracking-wider">
                <MapPin className="w-4 h-4" />
                <span>Qatar Headquarters</span>
              </div>

              <div className="text-slate-900 dark:text-white font-bold text-lg leading-snug">
                {companyConfig.brand.nameEn}
              </div>

              <div className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed space-y-1">
                <div>{companyConfig.office.building}, {companyConfig.office.floor}</div>
                <div>{companyConfig.office.street}, {companyConfig.office.zone}</div>
                <div>{companyConfig.office.city}, {companyConfig.office.country}</div>
                <div className="text-amber-700 dark:text-[#D4AF37] font-arabic pt-1">
                  {companyConfig.office.fullAddressArabic}
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100 dark:border-slate-800">
                <a
                  href={companyConfig.office.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-1.5 text-xs text-cyan-600 dark:text-[#D4AF37] hover:underline"
                >
                  <span>Open in Google Maps</span>
                </a>
              </div>
            </div>

            {/* Direct Lines */}
            <div className="p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md dark:shadow-xl space-y-5">
              <div className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider pb-2 border-b border-slate-100 dark:border-slate-800">
                Key Management Contacts
              </div>

              <div>
                <div className="text-xs font-bold text-slate-900 dark:text-white">{businessDevelopment.name}</div>
                <div className="text-[11px] text-amber-700 dark:text-[#D4AF37] mb-1">{businessDevelopment.role}</div>
                <div className="flex items-center space-x-3 text-xs">
                  <a href={`tel:${businessDevelopment.phone}`} className="font-mono text-slate-600 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white">
                    {businessDevelopment.phoneFormatted}
                  </a>
                  <span>•</span>
                  <a
                    href={`https://wa.me/${businessDevelopment.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-600 dark:text-emerald-400 hover:text-emerald-500 font-semibold"
                  >
                    WhatsApp
                  </a>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100 dark:border-slate-800">
                <div className="text-xs font-bold text-slate-900 dark:text-white">{operationsManager.name}</div>
                <div className="text-[11px] text-amber-700 dark:text-[#D4AF37] mb-1">{operationsManager.role}</div>
                <div className="flex items-center space-x-3 text-xs">
                  <a href={`tel:${operationsManager.phone}`} className="font-mono text-slate-600 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white">
                    {operationsManager.phoneFormatted}
                  </a>
                  <span>•</span>
                  <a
                    href={`https://wa.me/${operationsManager.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-600 dark:text-emerald-400 hover:text-emerald-500 font-semibold"
                  >
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 flex items-center space-x-3 text-xs text-slate-700 dark:text-slate-300 shadow-xs">
              <ShieldCheck className="w-5 h-5 text-amber-700 dark:text-[#D4AF37] shrink-0" />
              <span>
                Licensed commercial contractor compliant with the regulations and standards of the State of Qatar.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
