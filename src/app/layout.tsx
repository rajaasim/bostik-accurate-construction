import type { Metadata } from "next";
import "./globals.css";
import { companyConfig } from "@/config/company";
import { ThemeProvider } from "@/context/ThemeContext";

export const metadata: Metadata = {
  title: `${companyConfig.brand.nameEn} | Commercial Construction & Engineering Qatar`,
  description: `${companyConfig.brand.taglineEn}. Premier Qatari contractor specializing in non-residential building, civil engineering, and fit-outs. Registered under CR #${companyConfig.registry.crNumber}.`,
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
    <html lang="en" className="dark scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const storedTheme = localStorage.getItem('bac_theme');
                if (storedTheme === 'light') {
                  document.documentElement.classList.remove('dark');
                  document.documentElement.classList.add('light');
                } else {
                  document.documentElement.classList.remove('light');
                  document.documentElement.classList.add('dark');
                }
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body className="antialiased selection:bg-[#D4AF37] selection:text-slate-950" suppressHydrationWarning>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
