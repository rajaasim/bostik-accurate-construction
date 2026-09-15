# Bostik Accurate Construction - Pending Finalizations Tracker

This document tracks all client-specific assets, variables, and placeholders that need final assets or confirmation from the client before full production launch.

---

## 📋 Status & Action Items

| Item | Current Status | Required Client Action / Finalization | Location in Codebase |
| :--- | :--- | :--- | :--- |
| **1. Domain Purchase & DNS** | Confirmed as `bostikaccurate.com` | Point Hostinger DNS A/CNAME records to Vercel (`cname.vercel-dns.com`) and configure MX records for email. | Follow step-by-step guide in [`HOSTINGER_EMAIL_SETUP.md`](file:///C:/Users/amsco/Desktop/Bostik/HOSTINGER_EMAIL_SETUP.md) |
| **2. Hostinger Email Inboxes** | Primary email: `contact@bostikaccurate.com`<br>Direct contacts: `awais@bostikaccurate.com`, `jhunelle@bostikaccurate.com` | In Hostinger hPanel -> Emails -> Create accounts for `contact@`, `awais@`, and `jhunelle@`. | [`HOSTINGER_EMAIL_SETUP.md`](file:///C:/Users/amsco/Desktop/Bostik/HOSTINGER_EMAIL_SETUP.md) |
| **3. Official Logo Asset** | Modern geometric vector monogram (`BA` in emerald-cyan and Qatar gold ring) | Optional: If the client has a registered vector brandmark (.SVG / high-res transparent .PNG), place it in `public/logo.png` or update `Navbar.tsx`. | `src/components/layout/Navbar.tsx` & `src/config/company.ts` |
| **4. Actual Project Site Photos** | Curated high-resolution commercial construction photography (verified 200 OK) | Replace photography with actual photos of ongoing/completed Qatar jobsites as they become available. | [`src/config/company.ts`](file:///C:/Users/amsco/Desktop/Bostik/src/config/company.ts) (`projects` array) |
| **5. Circular Company Seal / Stamp** | Styled digital verification badge on Page 10 of PDF portfolio | If client desires an authentic stamped pre-qualification dossier, provide a transparent PNG scan of the circular company stamp. | `src/components/portfolio/ContactDirectoryPage.tsx` |
| **6. Exact Google Maps Pin** | Links to Doha Zone 53 (Industrial / Al Rayyan corridor) | Once office signage is up, share the exact Google Maps Plus Code or Share URL for Building 23, Street 784. | [`src/config/company.ts`](file:///C:/Users/amsco/Desktop/Bostik/src/config/company.ts) (`office.googleMapsUrl`) |
| **7. Corporate Bank Account / IBAN** | Omitted from public site for security | Optional: Can be included on Page 3 or 10 of the A4 PDF portfolio for formal tender submissions if required. | Optional in `src/config/company.ts` |

---

## 🔄 How to Finalize Any Item

Thanks to the strict zero-hardcoding architecture, updating any item above requires modifying only **one file**:
👉 [`src/config/company.ts`](file:///c:/Users/amsco/Desktop/Bostik/src/config/company.ts)

Any change made to `company.ts` automatically updates:
- Homepage (`/`)
- All subpages (`/about`, `/services`, `/projects`, `/hse-quality`, `/leadership`, `/contact`)
- The 10-page A4 PDF portfolio (`/portfolio`)
- SEO metadata and OpenGraph tags
