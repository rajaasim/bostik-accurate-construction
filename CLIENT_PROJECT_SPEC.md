# Project Specification: Bostik Accurate Construction ( بوستيك اكيوريت للانشاءات )

## 1. Executive Summary & Client Background
- **Commercial Entity Name (English):** Bostik Accurate Construction
- **Commercial Entity Name (Arabic):** بوستيك اكيوريت للانشاءات
- **Legal Form:** Limited Liability Company Owned by One Person (شركة ذات مسؤولية محدودة مالكها شخص واحد)
- **Country of Registration:** State of Qatar (Ministry of Commerce and Industry - Registration and Commercial Licenses Department)
- **Affiliation:** Member of the Qatar Chamber of Commerce and Industry
- **Commercial Registration (C.R) Number:** 226852
- **Establishment Date:** 18/09/2025
- **C.R Expiry Date:** 18/09/2026
- **Unified Economic No. / Tax Registration:** 17-2951-775007988702
- **Authorized Capital:** QAR 20,000 (Active)
- **Official Commercial Activity:** 
  - Code `410029`: Construction of all types of other not previously mentioned non-residential buildings (الانشاءات العامة للمباني الغير السكنية لم ترد فيما سبق)

---

## 2. Company Location & Registered Office
- **Country:** Qatar
- **City:** Doha
- **Zone:** 53
- **Street:** Street 784
- **Building:** Building No. 23
- **Floor:** Floor 1
- **Full Postal / Operating Address:** Building No. 23, Street 784, Zone 53, Floor 1, Doha, State of Qatar

---

## 3. Key Personnel & Contacts
1. **Jhunelle Anne Ballocanag Ogoy**
   - **Title / Designation:** Business Development Manager
   - **Phone / WhatsApp:** `+974 7083 4949`
   - **Primary Responsibilities:** Client relations, tenders, proposals, commercial communications

2. **Awais Qamar (Awais Qamar Ishaq)**
   - **Title / Designation:** Operations Manager / Managing Director
   - **Official CR Authority:** Manager with Full and Absolute Authority (100% Partner/Owner, QID: `29458606868`)
   - **Phone / WhatsApp:** `+974 77701945`
   - **Primary Responsibilities:** Site execution, project operations, procurement, engineering oversight

---

## 4. Digital Infrastructure & Hosting Strategy
1. **Domain Candidates:**
   - Candidate A: `bostikaccurate.com` (Short, brandable)
   - Candidate B: `bostikaccurateconstruction.com` (Descriptive, explicit industry match)
   - *Status:* Purchase via Hostinger. Config module will abstract domain to allow instant swapping.
2. **Business Email Infrastructure (Hostinger):**
   - Inboxes:
     - `info@[domain]`
     - `projects@[domain]`
     - `jhunelle@[domain]`
     - `awais@[domain]`
   - Required DNS Configurations:
     - MX Records: Hostinger Webmail MX 1 & 2
     - SPF: `v=spf1 include:_netblocks.hostinger.com ... ~all`
     - DKIM: Hostinger CNAME / TXT selector
     - DMARC: `v=DMARC1; p=quarantine; rua=mailto:postmaster@[domain]`
3. **Web Hosting Infrastructure:**
   - Platform: **Vercel** (Automatic CI/CD via GitHub repository, edge caching, zero maintenance SSL)

---

## 5. Architecture & Codebase Requirements
- **Strict Zero-Hardcoding Rule:**
  - All company names, legal entity numbers, addresses, contact details, email addresses, social/messaging links, and visual branding (primary/secondary color tokens, fonts) must be strictly isolated into a single source-of-truth TypeScript configuration file (`src/config/company.ts`).
  - Strict type definitions (`src/types/company.ts`) ensuring type-safety throughout the entire app and portfolio.
- **Component & Styling Hygiene:**
  - Standardized UI component directory (`src/components/ui/`, `src/components/layout/`, `src/components/portfolio/`).
  - Tailored Tailwind CSS system tokens (Slate/Navy + Warm Gold/Amber construction palette).
  - No duplicated styles or inline ad-hoc values scattered across files.

---

## 6. Deliverables Scope & Plan

### Deliverable 1: 8–10 Page A4 Print-Ready HTML Portfolio / Company Profile
Designed specifically with standard A4 page dimensions (`210mm x 297mm`), `@media print` rules, exact page breaks (`break-after: page`), precise bleed, headers, footers with page numbers, and high-fidelity layouts for instant manual Ctrl+P -> Save to PDF.
- **Page 1:** Executive Cover Page (Company Name, Logo, Minimalist Architectural Background, Qatar Tagline)
- **Page 2:** Corporate Overview & Mission, Vision, Values
- **Page 3:** Official Legal & Registration Credentials (C.R 226852, Ministry of Commerce & Industry, Qatar Chamber of Commerce, Unified Economic No.)
- **Page 4:** Core Services & Construction Capabilities (General Commercial, Civil Works, Non-Residential Building, MEP, Structural Contracting)
- **Page 5:** Project Lifecycle & Engineering Methodology (Planning, Execution, Quality Assurance, Handover)
- **Page 6:** Health, Safety, Quality & Environmental (HSE) Policies
- **Page 7:** Machinery, Equipment & Technical Resources
- **Page 8:** Featured Projects Showcase / Construction Capabilities Portfolio
- **Page 9:** Leadership & Operational Management Team (Awais Qamar & Jhunelle Anne Ballocanag Ogoy)
- **Page 10:** Contact Information, Office Location Map & Inquiry Sheet

### Deliverable 2: Modern Responsive Construction Website
- Built with **Next.js 15 (App Router)**, **TypeScript**, and **Tailwind CSS**.
- Fully responsive across desktop, tablet, and mobile.
- Features:
  - Hero with CTA (Request a Quote, View Portfolio, WhatsApp Quick Chat)
  - About Us & Legal Badges (CR 226852 Qatar Verified)
  - Services Grid with detail modals / cards
  - Portfolio Gallery with category filters (Commercial, Fit-out, Civil, Structural)
  - Interactive Contact & Quotation Form
  - Dedicated `/portfolio` route rendering the A4-styled print view with a 1-click "Download PDF" (prints cleanly to A4 PDF)
  - Full SEO and OpenGraph metadata ready for Vercel deployment

### Deliverable 3: Hostinger Email & DNS Playbook
- Step-by-step setup documentation for connecting Hostinger domain DNS with Vercel and setting up Hostinger Titan/Webmail with SPF, DKIM, and DMARC.
