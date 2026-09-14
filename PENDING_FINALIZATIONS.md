# Bostik Accurate Construction - Pending Finalizations Tracker

This document tracks all client-specific assets, variables, and placeholders that need final assets or confirmation from the client before full production launch.

---

## 📋 Status & Action Items

| Item | Current Status / Placeholder | Required Client Action / Finalization | Location in Codebase |
| :--- | :--- | :--- | :--- |
| **1. Domain Name** | Set to `bostikaccurate.com` (candidate 1). Candidate 2: `bostikaccurateconstruction.com` | Confirm which domain was purchased on Hostinger. Update 1 line in config. | `src/config/company.ts` (`PRIMARY_DOMAIN`) |
| **2. Official Logo Asset** | Stylized SVG vector emblem (`BA` / `BAC` with gold border) | Provide official vector SVG or high-res transparent PNG logo file. | `public/logo.svg` or `src/components/layout/Navbar.tsx` |
| **3. Hostinger Email Inboxes** | Configured placeholder emails: `info@`, `projects@`, `jhunelle@`, `awais@` | Create inboxes in Hostinger Email Panel and verify SPF/DKIM/DMARC per guide. | `HOSTINGER_EMAIL_SETUP.md` & `src/config/company.ts` |
| **4. Actual Project Site Photos** | Premium Unsplash commercial construction photography (verified 200 OK) | Provide 6–10 high-resolution photos of actual completed or active project sites in Qatar. | `src/config/company.ts` (`projects` array) |
| **5. Company Seal / Stamp** | Text placeholder `[ COMPANY STAMP ]` on Page 10 of PDF portfolio | Provide scanned circular company stamp with transparent background (PNG). | `src/components/portfolio/ContactDirectoryPage.tsx` |
| **6. Office Google Maps Pin** | Links to Doha Zone 53 general coordinates | Provide exact Google Maps share link / Plus Code for Building 23, Street 784. | `src/config/company.ts` (`office.googleMapsUrl`) |
| **7. Corporate Bank Details** | Optional for pre-qualification submissions | Provide IBAN / Bank Name if client wants payment/guarantee data in tender PDFs. | Optional addition to `src/config/company.ts` |
| **8. Additional Key Personnel** | Awais Qamar (Operations Manager) & Jhunelle Anne Ballocanag (Business Development) | Provide any additional QA/QC managers, Chief Engineers, or board members if desired. | `src/config/company.ts` (`contacts`) |

---

## 🔄 How to Finalize Any Item

Thanks to the strict zero-hardcoding architecture, updating any item above requires modifying only **one file**:
👉 [`src/config/company.ts`](file:///c:/Users/amsco/Desktop/Bostik/src/config/company.ts)

Any change made to `company.ts` automatically updates:
- Homepage (`/`)
- All subpages (`/about`, `/services`, `/projects`, `/hse-quality`, `/leadership`, `/contact`)
- The 10-page A4 PDF portfolio (`/portfolio`)
- SEO metadata and OpenGraph tags
