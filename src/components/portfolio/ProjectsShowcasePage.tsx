import React from "react";
import { companyConfig } from "@/config/company";
import { A4PageWrapper } from "./A4PageWrapper";
import { MapPin, Calendar, CheckCircle2, Building } from "lucide-react";

export const ProjectsShowcasePage: React.FC = () => {
  return (
    <A4PageWrapper
      pageNumber={8}
      title="Projects & Capabilities Portfolio"
      subtitle="Excellence in Execution Across the State of Qatar"
    >
      {/* Title */}
      <div className="mb-4">
        <span className="text-[10px] font-bold text-[#D4AF37] uppercase tracking-widest block">
          Section 07 // Project Showcase
        </span>
        <h2 className="text-2xl font-black text-[#0B192C] tracking-tight mt-1">
          Demonstrated Track Record & Field Experience
        </h2>
        <div className="w-16 h-1 bg-[#D4AF37] mt-2 rounded" />
      </div>

      <p className="text-xs text-slate-600 mb-4 leading-relaxed">
        A representative portfolio illustrating our technical dexterity across non-residential developments, commercial retail spaces, industrial warehousing, and prime corporate interiors.
      </p>

      {/* Projects Grid (4 showcase projects) */}
      <div className="grid grid-cols-2 gap-4 flex-1">
        {companyConfig.projects.slice(0, 4).map((project) => (
          <div
            key={project.id}
            className="rounded-xl border border-slate-200 bg-white overflow-hidden flex flex-col justify-between shadow-xs"
          >
            {/* Project Image */}
            <div className="h-32 relative overflow-hidden bg-slate-100">
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-2.5 right-2.5">
                <span className="text-[9px] font-bold px-2 py-0.5 rounded-full bg-[#0B192C]/80 text-[#D4AF37] backdrop-blur-xs border border-[#D4AF37]/30">
                  {project.category}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-3.5 flex-1 flex flex-col justify-between">
              <div>
                <h4 className="text-xs font-bold text-[#0B192C] leading-snug mb-1">
                  {project.title}
                </h4>

                <div className="flex items-center space-x-3 text-[9.5px] text-slate-500 mb-2">
                  <span className="flex items-center space-x-1">
                    <MapPin className="w-3 h-3 text-[#D4AF37]" />
                    <span>{project.location}</span>
                  </span>
                  <span>•</span>
                  <span className="flex items-center space-x-1">
                    <Calendar className="w-3 h-3 text-slate-400" />
                    <span>{project.completionYear}</span>
                  </span>
                </div>

                <p className="text-[10px] text-slate-600 leading-relaxed line-clamp-3">
                  {project.scope}
                </p>
              </div>

              <div className="mt-3 pt-2 border-t border-slate-100 flex items-center justify-between text-[9px]">
                <span className="text-slate-400 font-medium">Client: {project.client}</span>
                <span className="text-emerald-700 font-bold flex items-center space-x-1">
                  <CheckCircle2 className="w-2.5 h-2.5" />
                  <span>Delivered / Active</span>
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer Banner */}
      <div className="mt-4 p-2.5 rounded-lg bg-slate-100 border border-slate-200 text-center text-[10px] text-slate-600 font-medium">
        Additional project dossiers, engineering submittals, and client references are available upon formal tender request.
      </div>
    </A4PageWrapper>
  );
};
