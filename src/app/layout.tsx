import type { Metadata } from "next";
import "./globals.css";
import { companyConfig } from "@/config/company";

export const metadata: Metadata = {
  title: `${companyConfig.brand.nameEn} | Construction & Contracting Qatar (CR #${companyConfig.registry.crNumber})`,
  description: `${companyConfig.brand.taglineEn}. Registered Qatari commercial contractor specializing in non-residential building, civil engineering, and fit-outs. Office: ${companyConfig.office.fullAddress}.`,
  keywords: [
    "Bostik Accurate Construction",
    "Bostik Construction Qatar",
    "Qatar Commercial Registration 226852",
    "Non-residential construction Qatar",
    "Commercial building contractor Doha",
    "Commercial fit-out Qatar",
    "Civil engineering Doha",
    "QCS 2014 compliant contractor",
  ],
  authors: [
    { name: companyConfig.contacts.operationsManager.name },
    { name: companyConfig.contacts.businessDevelopment.name },
  ],
  openGraph: {
    title: `${companyConfig.brand.nameEn} - Qatar Commercial Construction`,
    description: companyConfig.brand.descriptionEn,
    type: "website",
    locale: "en_QA",
    siteName: companyConfig.brand.nameEn,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased bg-[#0B192C] text-slate-100 selection:bg-[#D4AF37] selection:text-slate-950">
        {children}
      </body>
    </html>
  );
}
