import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/home/Hero";
import { AboutSection } from "@/components/home/AboutSection";
import { ServicesGrid } from "@/components/home/ServicesGrid";
import { ProjectsGallery } from "@/components/home/ProjectsGallery";
import { HseSection } from "@/components/home/HseSection";
import { TeamSection } from "@/components/home/TeamSection";
import { ContactSection } from "@/components/home/ContactSection";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0B192C] text-slate-100 flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <AboutSection />
        <ServicesGrid />
        <ProjectsGallery />
        <HseSection />
        <TeamSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
