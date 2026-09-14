# Hostinger Business Email & Vercel Hosting Guide

This guide details the exact steps for connecting your Hostinger domain (`bostikaccurate.com` or `bostikaccurateconstruction.com`), configuring professional business email inboxes, and deploying the website to **Vercel** without causing email delivery disruptions.

---

## 1. Domain & Inboxes Overview

### Target Inboxes to Create on Hostinger:
| Email Address | Owner / Purpose | Role |
| :--- | :--- | :--- |
| `info@[domain]` | General Inquiries | Front-desk & Tender RFQs |
| `projects@[domain]` | Technical Submittals | BOQ & Project Specifications |
| `jhunelle@[domain]` | Jhunelle Anne Ballocanag Ogoy | Business Development Manager |
| `awais@[domain]` | Awais Qamar Ishaq | Operations Manager / Managing Director |

---

## 2. Recommended DNS Architecture (Hostinger DNS + Vercel Web)

> [!IMPORTANT]
> **Best Practice Recommendation:**
> Keep the **Domain Nameservers pointed to Hostinger** (e.g. `ns1.dns-parking.com` and `ns2.dns-parking.com`).
> Manage your DNS records directly inside the Hostinger DNS Zone. This ensures that Hostinger's automatic email MX, SPF, and DKIM records remain active without any conflicts when pointing the website to Vercel.

---

## 3. Hostinger DNS Zone Records Table

Add / verify the following records in your **Hostinger Control Panel -> Domains -> DNS / Nameservers**:

### A. Web Hosting (Points to Vercel)
| Type | Name / Host | Target / Value | TTL | Purpose |
| :--- | :--- | :--- | :--- | :--- |
| **A** | `@` | `76.76.21.21` | 3600 | Directs apex domain to Vercel Edge Network |
| **CNAME** | `www` | `cname.vercel-dns.com` | 3600 | Directs www subdomain to Vercel |

---

### B. Business Email Records (Hostinger Titan / Webmail)
| Type | Name / Host | Target / Value | Priority | TTL | Purpose |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **MX** | `@` | `mx1.hostinger.com` | 5 | 3600 | Primary incoming mail server |
| **MX** | `@` | `mx2.hostinger.com` | 10 | 3600 | Backup incoming mail server |
| **TXT** | `@` | `v=spf1 include:_netblocks.hostinger.com ~all` | - | 3600 | **SPF**: Authorizes Hostinger to send emails on your domain's behalf |
| **TXT** | `hostingermail._domainkey` | *(Copy unique key provided in Hostinger Email panel)* | - | 3600 | **DKIM**: Cryptographic anti-spoofing signature |
| **TXT** | `_dmarc` | `v=DMARC1; p=quarantine; sp=quarantine; rua=mailto:postmaster@[domain]` | - | 3600 | **DMARC**: Protects your domain against phishing and spam spoofing |

---

## 4. Step-by-Step Vercel Deployment

1. **Push your code to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "feat: complete website and 10-page A4 portfolio for Bostik Accurate Construction"
   git remote add origin https://github.com/YOUR_ACCOUNT/bostik-accurate-construction.git
   git branch -M main
   git push -u origin main
   ```
2. **Import into Vercel**:
   - Log in to [vercel.com](https://vercel.com).
   - Click **Add New...** -> **Project**.
   - Select the `bostik-accurate-construction` repository.
   - Framework Preset: **Next.js** (detected automatically).
   - Click **Deploy**.
3. **Connect Custom Domain in Vercel**:
   - Go to **Project Settings -> Domains**.
   - Add your purchased domain (e.g. `bostikaccurate.com` and `www.bostikaccurate.com`).
   - Vercel will verify that the DNS records (`A` record `76.76.21.21` and `CNAME` record `cname.vercel-dns.com`) match.
   - Free SSL certificates (HTTPS) will be issued automatically within 2 to 5 minutes.

---

## 5. How to Change Domain or Details in the Codebase

All domain names, emails, contact numbers, and office addresses are governed by:
👉 [`src/config/company.ts`](file:///c:/Users/amsco/Desktop/Bostik/src/config/company.ts)

To switch domains from `bostikaccurate.com` to `bostikaccurateconstruction.com`:
1. Open `src/config/company.ts`.
2. Update line 12:
   ```typescript
   const PRIMARY_DOMAIN = "bostikaccurateconstruction.com";
   ```
3. Save the file.
Both the entire corporate website, contact forms, schema meta tags, and the 10-page A4 PDF portfolio will update across all pages instantly with zero risk of broken links.

---

## 6. How to Generate the 10-Page A4 PDF Portfolio

1. Run the project locally (`pnpm dev`) or open your deployed Vercel URL at:
   `https://your-domain.com/portfolio`
2. Click the gold **"Print / Save to PDF"** button at the top or bottom of the screen.
3. In the Chrome / Edge print dialog:
   - **Destination:** Save as PDF
   - **Pages:** All (1-10)
   - **Layout:** Portrait
   - **Paper Size:** A4
   - **Margins:** None
   - **Options:** Check **"Background graphics"** (Required to preserve dark navy backgrounds, gold badges, and images).
4. Click **Save** to generate the PDF file.
