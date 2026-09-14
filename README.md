# Bostik Accurate Construction (بوستيك اكيوريت للانشاءات)

Digital web presence, 10-page A4 print-ready PDF portfolio, and email infrastructure for **Bostik Accurate Construction**, registered in the State of Qatar under **Commercial Registration (CR) #226852**.

---

## 🏗️ Deliverables Summary

1. **Corporate Next.js Website (`/`)**:
   - Modern, high-performance responsive website optimized for Vercel edge deployment.
   - Verified Qatar CR & Ministry credentials, interactive services breakdown, filterable project portfolio, HSE standards, leadership team showcase, and quotation request form with direct WhatsApp integration.

2. **10-Page A4 Print-to-PDF Portfolio (`/portfolio`)**:
   - Built directly using semantic HTML with CSS `@media print` rules and strict A4 dimensions (`210mm x 297mm`).
   - Formatted for instant manual export to PDF via the browser print dialog (`Ctrl + P` -> Save as PDF).
   - Structured 10 pages:
     - **Page 1:** Executive Cover Page
     - **Page 2:** Corporate Overview, Vision & Mission
     - **Page 3:** Qatar Legal & CR #226852 Registry Credentials
     - **Page 4:** Scope of Commercial Construction Services
     - **Page 5:** Project Management & 6-Phase Engineering Lifecycle
     - **Page 6:** Health, Safety & Environmental (HSE) & QA/QC Policy
     - **Page 7:** Plant, Machinery & Technical Resources
     - **Page 8:** Featured Commercial Projects Showcase
     - **Page 9:** Executive Leadership & Management Team
     - **Page 10:** Official Contact Directory, Headquarters & Company Seal

3. **Hostinger Email & DNS Integration Guide (`HOSTINGER_EMAIL_SETUP.md`)**:
   - DNS mapping tables for connecting Hostinger domain with Vercel and setting up Hostinger Business Webmail (MX, SPF, DKIM, DMARC) with zero downtime.

4. **Single Source of Truth Configuration (`src/config/company.ts`)**:
   - **Zero Hardcoding**: All client details, CR numbers, addresses, contacts, branding colors, and domain choices are defined in this type-safe file.
   - Switch domain between `bostikaccurate.com` and `bostikaccurateconstruction.com` with a single variable change.

---

## 🚀 Quick Start

### 1. Install Dependencies
```bash
pnpm install
```

### 2. Run Development Server
```bash
pnpm dev
```
Open [http://localhost:3000](http://localhost:3000) for the corporate website.
Open [http://localhost:3000/portfolio](http://localhost:3000/portfolio) for the 10-page A4 PDF portfolio.

### 3. Build for Production (Vercel)
```bash
pnpm build
```

---

## 🖨️ How to Print the 10-Page Portfolio to PDF

1. Navigate to `http://localhost:3000/portfolio` (or your live Vercel domain `/portfolio`).
2. Click the gold **"Print / Save to PDF"** button.
3. In the browser print dialog:
   - **Destination:** Save as PDF
   - **Paper Size:** A4
   - **Margins:** None
   - **Options:** Check **"Background graphics"**
4. Save the generated PDF file.

---

## 📞 Key Contacts & Office

- **Registered Address:** Building No. 23, Street 784, Zone 53, Floor 1, Doha, State of Qatar
- **Commercial Registration (CR):** 226852 (Ministry of Commerce & Industry, Qatar)
- **Key Personnel:**
  - **Jhunelle Anne Ballocanag Ogoy** - Business Development Manager: `+974 7083 4949`
  - **Awais Qamar Ishaq** - Operations Manager / Managing Director: `+974 7770 1945`
