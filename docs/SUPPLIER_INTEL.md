# Syringe Society — Supplier Intelligence: Evolve BioPep

> **Last Updated:** 2026-04-06
> **Purpose:** All supplier-specific data for new conversation threads.

---

## Supplier Overview

- **Name:** Evolve BioPep
- **Website:** https://evolvebiopep.com
- **Platform:** WordPress + WooCommerce (DIVI Pharmacy Theme)
- **Location:** US-based manufacturer, processor & distributor
- **Key Credential:** Founding Member of the American Peptide Association
- **Lab Testing:** ISO-17025 accredited laboratories (third-party)
- **COAs Page:** https://evolvebiopep.com/certificates-of-analysis/

---

## Dropship Programs (https://evolvebiopep.com/dropship/)

### Option 1: Affiliate Program
- 5% commission per sale
- 5% customer discount via affiliate code
- Biweekly payouts
- Referral link + coupon code tracking
- Registration: https://evolvebiopep.com/affiliate-registration/

### Option 2: Managed Dropship Storefront (EvolveBioPepTech)
- Fully managed website by EMS Backend Services LLC
- $495 one-time setup + $495/month
- They handle hosting, product feed, order routing, compliance
- Products ship directly to customers
- Single-vial listings only (no kits, bundles, third-party)
- Portal: https://evolvebiopeptech.com/
- **NOT what we're doing** — we're building custom

### Option 3: Direct Ship Partner ← LIKELY OUR PATH
- No website provided (we bring our own)
- Purchase products directly from Evolve BioPep
- Products shipped to YOUR business address (you handle distribution)
- Requires: LLC, EIN, business bank account
- Application: https://evolvebiopep.com/dropship-application/

### Hybrid Approach (Our Strategy)
We build custom storefront + negotiate blind dropship fulfillment:
- We handle checkout (Stripe)
- We auto-forward orders to Evolve BioPep
- They ship blind directly to our customers
- Need to negotiate: blind shipping, order format, pricing

---

## Policies
- $10 flat rate shipping
- Free shipping over $300
- Most orders ship within 24 hours
- "Lowest price guaranteed" — they'll beat competitors
- "Research purposes only" on everything
- Age verification: 21+

---

## Key Branding / Products

### Proprietary Blends (Trademarked)
- **KLOW™** — their signature formulation
- **GHRoute™** — CJC-1295/Ipamorelin blend
- **TesaRak™** — Tesamorelin/Ipamorelin blend
- **illumiNeuro™** — neuropeptide complex
- **GhRIP™** — peptide system
- **WOLVERINE** — BPC/TB500 blend
- **GLOW** — dermal peptide complex

### Product Naming Convention for GLP-1 Lines
They use coded names to avoid explicitly naming regulated compounds:
- **S-** prefix = Single Agonist (Semaglutide)
- **T-** prefix = Dual Agonist (Tirzepatide)
- **R-** prefix = Tri-Agonist (Retatrutide)
- Number = mg dose

### Supplies
- Bacteriostatic water (30ml — $15)
- Sterile water (10ml — $8)
- X-Kit bac water vials ($40)

---

## Technical Notes

### WooCommerce Product IDs (for potential API integration)
Some product IDs scraped from add-to-cart URLs:
- BPC-157: 8772
- S-10 (Sema): 80
- T-05 (Tirz 5mg): 132275
- T-15 (Tirz 15mg): 132276
- T-30 (Tirz 30mg): 132277
- T-60 (Tirz 60mg): 132278
- R-10 (Reta 10mg): 132265
- R-24 (Reta 24mg): 132267
- R-40 (Reta 40mg): 132269
- Bac Water: 7676
- Sterile Water: 37819

### WooCommerce REST API Possibility
Their site runs WooCommerce 10.6.2 which has a REST API.
Could potentially automate order placement if they provide API keys.
More likely: formatted email orders or manual portal use until volume justifies API.
