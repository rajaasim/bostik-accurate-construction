"use client";

import React, { useState } from "react";
import Link from "next/link";
import { companyConfig } from "@/config/company";
import { MapPin, Calendar, Building, CheckCircle2, ArrowRight } from "lucide-react";

export const ProjectsGallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", "Non-Residential", "Commercial", "Fit-Out", "Civil"];

  const filteredProjects =
    selectedCategory === "All"
      ? companyConfig.projects
      : companyConfig.projects.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="py-20 bg-slate-100/70 dark:bg-[#0F172A] text-slate-900 dark:text-white relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 text-xs font-bold text-amber-700 dark:text-[#D4AF37] uppercase tracking-widest px-3 py-1 rounded-full bg-amber-50 dark:bg-[#D4AF37]/10 border border-amber-200 dark:border-[#D4AF37]/30 mb-3">
            <Building className="w-3.5 h-3.5" />
            <span>Demonstrated Field Execution</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-950 dark:text-white tracking-tight uppercase">
            Featured <span className="text-amber-700 dark:text-[#D4AF37]">Projects</span>
          </h2>
          <div className="w-16 h-1 bg-amber-600 dark:bg-[#D4AF37] mx-auto mt-3 rounded-full" />
          <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm mt-3">
            A sample showcase of commercial logistics hubs, corporate interiors, and structural envelopes executed across Qatar.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                selectedCategory === cat
                  ? "bg-[#D4AF37] text-slate-950 shadow-md scale-105"
                  : "bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredProjects.slice(0, 3).map((project) => (
            <div
              key={project.id}
              className="group rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-amber-500/40 dark:hover:border-[#D4AF37]/40 overflow-hidden flex flex-col justify-between transition-all duration-300 shadow-md dark:shadow-xl"
            >
              {/* Photo Area */}
              <div className="h-52 relative overflow-hidden bg-slate-800">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-black/30" />

                <div className="absolute top-3 right-3">
                  <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-black/60 text-[#D4AF37] border border-[#D4AF37]/30 backdrop-blur-md">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white mb-2 leading-snug group-hover:text-amber-700 dark:group-hover:text-[#D4AF37] transition-colors">
                    {project.title}
                  </h3>

                  <div className="flex items-center space-x-3 text-xs text-slate-500 dark:text-slate-400 mb-3">
                    <span className="flex items-center space-x-1">
                      <MapPin className="w-3.5 h-3.5 text-amber-600 dark:text-[#D4AF37]" />
                      <span>{project.location}</span>
                    </span>
                    <span>•</span>
                    <span className="flex items-center space-x-1">
                      <Calendar className="w-3.5 h-3.5 text-slate-400 dark:text-slate-500" />
                      <span>{project.completionYear}</span>
                    </span>
                  </div>

                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-3 mb-4">
                    {project.scope}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs">
                  <span className="text-slate-500 dark:text-slate-400 font-medium">Client: {project.client}</span>
                  <span className="text-emerald-600 dark:text-emerald-400 font-semibold flex items-center space-x-1">
                    <CheckCircle2 className="w-3 h-3" />
                    <span>Delivered</span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects Link */}
        <div className="text-center">
          <Link
            href="/projects"
            className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-[#D4AF37]/40 hover:bg-slate-50 dark:hover:bg-[#D4AF37]/10 text-xs font-bold text-amber-700 dark:text-[#D4AF37] shadow-xs transition-all"
          >
            <span>Explore Complete Project Portfolio</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
};
