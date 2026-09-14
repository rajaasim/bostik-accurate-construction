import React from "react";
import { companyConfig } from "@/config/company";
import { A4PageWrapper } from "./A4PageWrapper";
import { Truck, Wrench, Compass, Cpu, CheckCircle2, Users } from "lucide-react";

export const EquipmentResourcesPage: React.FC = () => {
  return (
    <A4PageWrapper
      pageNumber={7}
      title="Plant, Machinery & Resources"
      subtitle="Fleet Capabilities & Technical Deployment"
    >
      {/* Title */}
      <div className="mb-5">
        <span className="text-[10px] font-bold text-[#D4AF37] uppercase tracking-widest block">
          Section 06 // Operational Capacity
        </span>
        <h2 className="text-2xl font-black text-[#0B192C] tracking-tight mt-1">
          Machinery, Plant & Technical Infrastructure
        </h2>
        <div className="w-16 h-1 bg-[#D4AF37] mt-2 rounded" />
      </div>

      <p className="text-xs text-slate-600 mb-5 leading-relaxed">
        Bostik Accurate Construction operates and mobilizes high-grade construction plant, precision surveying instruments, and heavy earthmoving equipment to execute demanding non-residential project schedules across Qatar.
      </p>

      {/* Equipment Categories Grid */}
      <div className="grid grid-cols-2 gap-4 flex-1">
        {companyConfig.plantAndEquipment.map((group, idx) => {
          const icons = [Truck, Wrench, Compass, Cpu];
          const IconComp = icons[idx % icons.length];

          return (
            <div
              key={idx}
              className="p-4 rounded-xl border border-slate-200 bg-white flex flex-col justify-between shadow-xs"
            >
              <div>
                <div className="flex items-center space-x-2.5 text-[#0B192C] font-bold text-xs mb-3 pb-2 border-b border-slate-100">
                  <div className="w-7 h-7 rounded-md bg-[#0B192C] text-[#D4AF37] flex items-center justify-center">
                    <IconComp className="w-4 h-4" />
                  </div>
                  <span>{group.category}</span>
                </div>

                <div className="space-y-2">
                  {group.items.map((item, itemIdx) => (
                    <div key={itemIdx} className="flex items-start space-x-2 text-[10px] text-slate-700">
                      <CheckCircle2 className="w-3 h-3 text-[#D4AF37] shrink-0 mt-0.5" />
                      <span className="leading-snug font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-4 pt-2 border-t border-slate-100 flex items-center justify-between text-[9px] text-slate-400">
                <span className="text-emerald-700 font-semibold">Regularly Serviced & Certified</span>
                <span>Third-Party Safety Tested</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Manpower & Mobilization Bar */}
      <div className="mt-4 p-4 rounded-xl bg-slate-50 border border-slate-200">
        <div className="flex items-center space-x-2 text-xs font-bold text-[#0B192C] mb-2">
          <Users className="w-4 h-4 text-[#D4AF37]" />
          <span>Skilled Workforce & Rapid Mobilization Capacity</span>
        </div>
        <div className="grid grid-cols-3 gap-3 text-center text-xs">
          <div className="p-2 bg-white rounded-lg border border-slate-200">
            <div className="font-bold text-[#0B192C]">Site Engineers</div>
            <div className="text-[10px] text-slate-500">Civil, Structural & MEP</div>
          </div>
          <div className="p-2 bg-white rounded-lg border border-slate-200">
            <div className="font-bold text-[#0B192C]">HSE Officers</div>
            <div className="text-[10px] text-slate-500">Certified Site Safety Marshals</div>
          </div>
          <div className="p-2 bg-white rounded-lg border border-slate-200">
            <div className="font-bold text-[#0B192C]">Trade Specialists</div>
            <div className="text-[10px] text-slate-500">Masons, Steel Fixers, Electricians</div>
          </div>
        </div>
      </div>
    </A4PageWrapper>
  );
};
