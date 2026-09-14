"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/layout/PageHeader";
import { companyConfig } from "@/config/company";
import { Building, MapPin, Calendar, CheckCircle2, ArrowRight, FileText, Layers } from "lucide-react";

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", "Non-Residential", "Commercial", "Fit-Out", "Civil"];

  const filteredProjects =
    selectedCategory === "All"
      ? companyConfig.projects
      : companyConfig.projects.filter((p) => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-[#0B192C] text-slate-100 flex flex-col">
      <Navbar />

      <main className="flex-1">
        <PageHeader
          title="Projects & Field Experience"
          subtitle="Demonstrated delivery across commercial retail centers, logistics distribution hubs, and bespoke office fit-outs in Doha."
          breadcrumb="Projects"
        />

        <section className="py-16 sm:py-20 bg-[#0F172A]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    selectedCategory === cat
                      ? "bg-[#D4AF37] text-slate-950 shadow-lg scale-105"
                      : "bg-slate-900 border border-slate-800 text-slate-300 hover:bg-slate-800 hover:text-white"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {filteredProjects.map((project) => (
                <div
                  key={project.id}
                  className="group rounded-2xl bg-slate-900 border border-slate-800 hover:border-[#D4AF37]/50 overflow-hidden flex flex-col justify-between transition-all duration-300 shadow-xl"
                >
                  {/* Image Container */}
                  <div className="h-60 relative overflow-hidden bg-slate-800">
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-black/30" />

                    <div className="absolute top-3.5 right-3.5">
                      <span className="text-[10px] font-bold px-3 py-1 rounded-full bg-[#0B192C]/90 text-[#D4AF37] border border-[#D4AF37]/40 backdrop-blur-md">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-base font-bold text-white mb-2 leading-snug group-hover:text-[#D4AF37] transition-colors">
                        {project.title}
                      </h3>

                      <div className="flex items-center space-x-3 text-xs text-slate-400 mb-4">
                        <span className="flex items-center space-x-1">
                          <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
                          <span>{project.location}</span>
                        </span>
                        <span>•</span>
                        <span className="flex items-center space-x-1">
                          <Calendar className="w-3.5 h-3.5 text-slate-500" />
                          <span>{project.completionYear}</span>
                        </span>
                      </div>

                      <p className="text-xs text-slate-300 leading-relaxed line-clamp-4 mb-4">
                        {project.scope}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs">
                      <span className="text-slate-400 font-medium">Client: {project.client}</span>
                      <span className="text-emerald-400 font-semibold flex items-center space-x-1">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>Completed</span>
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Prequalification CTA */}
            <div className="p-8 sm:p-10 rounded-2xl bg-gradient-to-r from-[#0B192C] via-[#1E3E62]/50 to-[#0B192C] border border-[#D4AF37]/30 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
              <div className="space-y-2 text-center md:text-left">
                <div className="inline-flex items-center space-x-2 text-xs font-bold text-[#D4AF37] uppercase tracking-wider">
                  <FileText className="w-4 h-4" />
                  <span>Comprehensive Project Dossiers Available</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-white">
                  Need detailed technical project sheets for tender submission?
                </h3>
                <p className="text-xs text-slate-300 max-w-xl">
                  Contact our Business Development department to receive detailed engineering drawings, completion certificates, and client letters of commendation.
                </p>
              </div>

              <div className="flex items-center space-x-4 shrink-0">
                <Link
                  href="/contact"
                  className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl bg-[#D4AF37] hover:bg-[#B8860B] text-slate-950 text-xs font-bold uppercase tracking-wider shadow-lg transition-transform active:scale-95"
                >
                  <span>Request Project Details</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
