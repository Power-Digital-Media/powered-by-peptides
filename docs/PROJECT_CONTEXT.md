# Syringe Society — Project Context & Memory

> **Last Updated:** 2026-04-06
> **Purpose:** Persistent context for AI assistants across conversation threads.
> Read this file FIRST when resuming work on this project.

---

## 1. Project Overview

**Syringe Society** is a premium research compound eCommerce store built with **Next.js 16 (App Router)**.
It resells peptides and research compounds from the supplier **Evolve BioPep** at a markup.

- **Tech Stack:** Next.js 16, React 19, vanilla CSS, static generation (SSG)
- **Deployment Target:** TBD (likely Vercel or Netlify)
- **Status:** V1 scaffold complete — functional but needs visual overhaul

---

## 2. Business Model

### The Flow
```
Buyer visits SyringeSociety.com
  → Browses products (upcharged from supplier cost)
  → Checks out via Stripe (YOUR merchant account, YOUR price)
  → Stripe webhook fires to your API
  → Your API sends fulfillment order to Evolve BioPep
    (shipping address + SKUs only — NO retail price)
  → Evolve BioPep ships BLIND to customer (no invoice in box)
  → Customer receives product + digital receipt from YOUR Stripe only
```

### Key Constraint
The buyer must NEVER see the wholesale/supplier price. All receipts (digital and physical) must show only the Syringe Society retail price or no price at all.

### Supplier: Evolve BioPep
- **Website:** https://evolvebiopep.com
- **Dropship page:** https://evolvebiopep.com/dropship/
- **Platform:** WordPress + WooCommerce
- **They already have a formal dropship program** with two tiers:
  1. **Managed Storefront** ($495 setup + $495/mo) — they host your site (NOT what we want)
  2. **Direct Ship Partner** — you handle your own storefront, they fulfill (THIS is what we want)
- **COAs:** Available at https://evolvebiopep.com/certificates-of-analysis/

### TODO: Confirm with supplier
- [ ] Blind shipping confirmation (no invoice in package)
- [ ] How they want to receive orders (email, API, or portal)
- [ ] Whether affiliate or Direct Ship Partner tier is better for this model
- [ ] Volume pricing / wholesale rate negotiation

---

## 3. Supplier Product Catalog & Pricing (as of 2026-04-06)

### GLP-1 — Dual Agonist (Tirzepatide line)
| Product | Supplier Price | Notes |
|---------|---------------|-------|
| T-05 \| Dual Agonist 5mg | $20.00 | |
| T-15 \| Dual Agonist 15mg | ~~$55~~ $40.00 | On sale |
| T-30 \| Dual Agonist 30mg | $70.00 | |
| T-60 \| Dual Agonist 60mg | $100.00 | |
| Tirz X-10 Vials Kit 30mg | ~~$400~~ $375.00 | Bulk kit |

### GLP-1 — Tri-Agonist (Retatrutide line)
| Product | Supplier Price | Notes |
|---------|---------------|-------|
| R-10 \| Tri-Agonist 10mg | ~~$45~~ $35.00 | On sale |
| R-24 \| Tri-Agonist 24mg | $80.00 | |
| R-40 \| Tri-Agonist 40mg | $120.00 | |

### GLP-1 — Single Agonist (Semaglutide line)
| Product | Supplier Price | Notes |
|---------|---------------|-------|
| S-10 \| Single Agonist 10mg | ~~$40~~ $30.00 | On sale |

### Peptides
| Product | Supplier Price |
|---------|---------------|
| BPC-157 10mg | $30.00 |
| BPC/TB500 5/5mg WOLVERINE | ~~$40~~ $35.00 |
| Cagri 5mg | ~~$35~~ $30.00 |
| CJC-1295/Ipamorelin GHRoute 5/5mg | $35.00 |
| DSIP 5mg | $20.00 |
| Epithalon 10mg | $20.00 |
| GhRIP 21mg | $75.00 |
| KPV 10mg | $30.00 |
| Melanotan-1 10mg | $25.00 |
| Melanotan-2 10mg | $22.00 |
| Mots-C 10mg | $27.00 |
| Mots-C 40mg | $75.00 |
| Pinealon 20mg | ~~$30~~ $25.00 |
| PT-141 10mg | $25.00 |
| Selank 10mg | $25.00 |
| Semax 10mg | $25.00 |
| Sermorelin 10mg | $40.00 |
| SSM-x31 10mg | $28.00 |
| TA-1 10mg | $35.00 |
| TesaRak Tesa/Ipa 10/3mg | $65.00 |
| VIP 10mg | $45.00 |

### Beauty / Dermal
| Product | Supplier Price |
|---------|---------------|
| GLOW 70mg Complex | $60.00 |
| GHK-CU 1g Raw Powder | $20.00 |
| GHK-CU 50mg | $25.00 |
| SNAP-8 200mg Raw | $25.00 |
| Syn-AKE 200mg Raw | $20.00 |

### Nootropics / Neuro
| Product | Supplier Price |
|---------|---------------|
| illumiNeuro 43mg | $60.00 |
| illumiNeuro X 30ml | ~~$90~~ $70.00 |

### Oral Compounds
| Product | Supplier Price |
|---------|---------------|
| 5-Amino-1MQ 50mg x60 | ~~$120~~ $100.00 |
| Bam-15 50mg x60 | ~~$140~~ $120.00 |
| SLU-PP-332 100mg x120 | ~~$230~~ $220.00 |
| EvoTriVita Blend x60 | ~~$200~~ $180.00 |
| Orforglipron 12mg | ~~$250~~ $200.00 |
| NAD+ 350mg | ~~$30~~ $25.00 |

### Supplies
| Product | Supplier Price |
|---------|---------------|
| Bac Water 30ml | $15.00 |
| Sterile Water 10ml | $8.00 |
| X-Kit 10 vials Bac h2o 2.5ml | $40.00 |

---

## 4. Design Direction (AGREED — Not Yet Implemented)

### Aesthetic: "Clinical Luxury" — Tesla UI + Apple Animations
- **Tesla:** Confidence through restraint, massive whitespace, minimal chrome
- **Apple:** Smooth scroll-triggered animations, parallax reveals, spring physics
- **Clinical layer:** Molecular accents, COA badges, lab-grade trust signals

### Emotional Architecture (page flow)
```
HERO: Gut-punch headline + floating product + single CTA
  ↓ scroll
TRUST BAR: Purity / Lab tested / Ships same day (slide in)
  ↓ scroll
PAIN → SOLUTION: Cost comparison + access comparison
  ↓ scroll
PRODUCTS: 3D-feel cards with parallax depth on hover
  ↓ scroll
SOCIAL PROOF: Count-up numbers + review snippets
  ↓ scroll
FAQ: Objection handling (legality, purity, shipping)
  ↓ scroll
FINAL CTA: Urgency-driven close
```

### Psychology Principles to Apply
1. **Loss Aversion > Gain Framing** — frame around what they lose by waiting
2. **Identity-Based Purchasing** — "I'm the kind of person who takes control"
3. **3-Second Rule** — answer "Is this legit?", "Is this for me?", "Can I trust this?" instantly
4. **Pain Arc:** Frustrated by cost/gatekeeping → Found research option → Needs permission to trust

### Hero Headline Direction
> **"≥99% Pure. $39.99. No Prescription. No Gatekeepers."**

### Key Visual Elements
- Count-up animations for purity %, researcher count
- Parallax product floats on scroll
- Cost comparison section (pharmacy $1,200/mo vs research grade $39.99)
- COA/lab verification badges that animate in
- Age gate with premium design (not a cheap popup)

---

## 5. Technical Architecture

### Current Pages (21 total)
- `/` — Homepage
- `/shop` — All products grid
- `/shop/[slug]` — Category filtered (glp, peptides, beauty, supplies)
- `/product/[slug]` — Product detail (9 products currently)
- `/compliance` — Legal disclaimers
- `/sitemap.xml` — Auto-generated
- `/robots.txt` — Auto-generated

### Key Files
| Purpose | Path |
|---------|------|
| Product data | `src/data/products.js` |
| JSON-LD schemas | `src/lib/schema.js` |
| Design system | `src/app/globals.css` |
| Root layout | `src/app/layout.js` |
| Age gate | `src/components/AgeGate.js` |
| Navbar | `src/components/Navbar.js` |
| Footer | `src/components/Footer.js` |
| Product card | `src/components/ProductCard.js` |

### Planned Technical Additions
- [ ] Stripe checkout integration
- [ ] Cart state management (Zustand or Context)
- [ ] Stripe webhook → order forwarding automation
- [ ] Email: buyer confirmation (branded)
- [ ] Email: supplier notification (address + SKUs only)
- [ ] White-label packing slip PDF generation (optional)

---

## 6. SEO & Compliance

### Already Implemented
- JSON-LD: Organization, WebSite, Product, ItemList, BreadcrumbList, FAQPage
- Open Graph + Twitter Card meta on all pages
- sitemap.xml + robots.txt
- Persistent disclaimer banner on every page
- Age gate (21+) with session persistence
- "For research purposes only" on all product pages

### Compliance Rules
- All products labeled "for research purposes only"
- No medical/therapeutic/health claims anywhere
- Persistent disclaimer banner cannot be permanently dismissed
- Age verification required before site access
- COA links for every product

---

## 7. Current Product Data in Site (needs updating to match full supplier catalog)

The site currently has 9 placeholder products. These need to be expanded to match the full Evolve BioPep catalog above, with appropriate markup pricing.

Current products in `src/data/products.js`:
- Semaglutide 5mg, 10mg
- Tirzepatide 10mg, 15mg, 30mg
- Retatrutide 10mg, 20mg
- BPC-157 10mg
- GHK-Cu 50mg

---

## 8. Open Questions / Decisions Needed

1. **Pricing strategy:** What markup % over supplier cost? (e.g., 40%, 50%, 2x?)
2. **Which products to list:** Full catalog or curated selection?
3. **Domain:** Is syringesociety.com secured?
4. **Payment processor:** Stripe confirmed?
5. **Hosting:** Vercel, Netlify, or self-hosted?
6. **Supplier communication:** Email or API order forwarding?
7. **Shipping:** Pass through flat rate ($10) or build into product price?
