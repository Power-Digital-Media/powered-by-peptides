/**
 * Product catalog data for Syringe Society.
 * All products are research chemicals — descriptions carefully worded for compliance.
 */

export const SITE_CONFIG = {
  name: 'Syringe Society',
  tagline: 'Premium Research Compounds',
  url: 'https://syringesociety.com',
  description: 'High-purity research peptides, GLP-1 receptor agonist compounds, and bioactive peptides for qualified researchers.',
  disclaimer: 'All products are for laboratory research use only and are NOT for human consumption. These products have not been evaluated by the FDA.',
  email: 'info@syringesociety.com',
};

export const CATEGORIES = [
  {
    id: 'weight-loss',
    name: 'Weight Loss',
    slug: 'weight-loss',
    shortName: 'Weight Loss',
    description: 'GLP-1 receptor agonist research compounds at various concentrations for metabolic and incretin pathway research.',
    icon: '🧬',
    color: '#22d3ee',
  },
  {
    id: 'skin',
    name: 'Skin & Beauty',
    slug: 'skin',
    shortName: 'Skin',
    description: 'Bioactive peptide compounds for dermatological, cosmeceutical, and tissue remodeling research applications.',
    icon: '✨',
    color: '#f472b6',
  },
  {
    id: 'energy',
    name: 'Energy & Mood',
    slug: 'energy',
    shortName: 'Energy',
    description: 'Mitochondrial-targeting peptides, essential coenzymes, and neuro-active compounds for metabolic and cognitive research.',
    icon: '⚡',
    color: '#facc15',
  },
  {
    id: 'muscle',
    name: 'Muscle Recovery & Growth',
    slug: 'muscle',
    shortName: 'Muscle',
    description: 'Peptide compounds studied for tissue repair signaling, growth hormone secretagogue pathways, and regenerative research.',
    icon: '💪',
    color: '#34d399',
  },
  {
    id: 'intimacy',
    name: 'Intimacy & Libido',
    slug: 'intimacy',
    shortName: 'Intimacy',
    description: 'Melanocortin receptor agonist peptides studied in sexual function and libido research applications.',
    icon: '🔥',
    color: '#f87171',
  },
];

export const PRODUCTS = [
  // ═══════════════════════════════
  // WEIGHT LOSS — Tirzepatide
  // ═══════════════════════════════
  {
    id: 'tirz-10',
    slug: 'tirz-10',
    name: 'TIRZ 10',
    fullName: 'Tirzepatide 10mg',
    category: 'weight-loss',
    price: 100.00,
    currency: 'USD',
    sku: 'SS-TIRZ-10',
    purity: '≥99%',
    quantity: '10mg',
    form: 'Lyophilized Powder',
    casNumber: '2023788-19-2',
    molecularFormula: 'C₂₂₅H₃₄₈N₄₈O₆₈',
    molecularWeight: '4813.5 g/mol',
    storage: 'Store at -20°C. Protect from light and moisture.',
    description: 'Tirzepatide is a dual GIP and GLP-1 receptor agonist research peptide. This novel dual-incretin compound has been extensively studied in metabolic research applications involving glucose uptake and energy expenditure pathways.',
    shortDescription: 'Dual agonist (GIP/GLP-1) research peptide, 10mg lyophilized.',
    researchApplications: [
      'Dual-incretin receptor binding studies',
      'In-vitro glucose metabolism research',
      'GIP/GLP-1 signaling pathway analysis',
      'Comparative agonist studies',
    ],
    inStock: true,
    featured: true,
    image: '/images/products/tirz-10.webp',
    checkoutUrl: 'https://syringe-society-109807.square.site/product/tirz-10',
  },
  {
    id: 'tirz-30',
    slug: 'tirz-30',
    name: 'TIRZ 30',
    fullName: 'Tirzepatide 30mg',
    category: 'weight-loss',
    price: 140.00,
    currency: 'USD',
    sku: 'SS-TIRZ-30',
    purity: '≥99%',
    quantity: '30mg',
    form: 'Lyophilized Powder',
    casNumber: '2023788-19-2',
    molecularFormula: 'C₂₂₅H₃₄₈N₄₈O₆₈',
    molecularWeight: '4813.5 g/mol',
    storage: 'Store at -20°C. Protect from light and moisture.',
    description: 'Tirzepatide is a dual GIP and GLP-1 receptor agonist research peptide. Higher quantity formulation for extended research protocols and dose-response studies in metabolic pathway analysis.',
    shortDescription: 'Dual agonist (GIP/GLP-1) research peptide, 30mg lyophilized.',
    researchApplications: [
      'Extended dual-incretin research protocols',
      'Dose-response curve studies',
      'Longitudinal in-vivo research',
      'GIP/GLP-1 signaling analysis',
    ],
    inStock: true,
    featured: true,
    image: '/images/products/tirz-30.webp',
    checkoutUrl: 'https://syringe-society-109807.square.site/product/tirz-30',
  },
  {
    id: 'tirz-60',
    slug: 'tirz-60',
    name: 'TIRZ 60',
    fullName: 'Tirzepatide 60mg',
    category: 'weight-loss',
    price: 215.00,
    currency: 'USD',
    sku: 'SS-TIRZ-60',
    purity: '≥99%',
    quantity: '60mg',
    form: 'Lyophilized Powder',
    casNumber: '2023788-19-2',
    molecularFormula: 'C₂₂₅H₃₄₈N₄₈O₆₈',
    molecularWeight: '4813.5 g/mol',
    storage: 'Store at -20°C. Protect from light and moisture.',
    description: 'Tirzepatide is a dual GIP and GLP-1 receptor agonist research peptide. Maximum quantity formulation for high-volume research facilities conducting long-term metabolic studies.',
    shortDescription: 'Dual agonist (GIP/GLP-1) research peptide, 60mg lyophilized.',
    researchApplications: [
      'High-volume metabolic research',
      'Long-term dose-escalation protocols',
      'Multi-phase incretin studies',
      'Institutional research supply',
    ],
    inStock: true,
    featured: false,
    image: '/images/products/tirz-60.webp',
    checkoutUrl: 'https://syringe-society-109807.square.site/product/tirz-60',
  },

  // ═══════════════════════════════
  // SKIN & BEAUTY
  // ═══════════════════════════════
  {
    id: 'ghk-cu',
    slug: 'ghk-cu',
    name: 'GHK-Cu',
    fullName: 'GHK-Cu (Copper Peptide)',
    category: 'skin',
    price: 85.00,
    currency: 'USD',
    sku: 'SS-GHKCU-01',
    purity: '≥98%',
    quantity: '50mg',
    form: 'Lyophilized Powder',
    casNumber: '49557-75-7',
    molecularFormula: 'C₁₄H₂₃CuN₆O₄',
    molecularWeight: '403.92 g/mol',
    storage: 'Store at -20°C. Protect from light and moisture.',
    description: 'GHK-Cu (glycyl-L-histidyl-L-lysine copper(II) complex) is a naturally occurring tripeptide-copper complex found in human plasma. Extensively studied for its role in tissue remodeling, collagen synthesis, and antioxidant defense mechanisms.',
    shortDescription: 'Copper tripeptide complex for tissue remodeling research, 50mg lyophilized.',
    researchApplications: [
      'Wound healing and tissue repair studies',
      'Collagen synthesis research',
      'Antioxidant mechanism studies',
      'Skin biology and aging research',
    ],
    inStock: true,
    featured: true,
    image: '/images/products/ghk-cu.webp',
    checkoutUrl: 'https://syringe-society-109807.square.site/product/ghk-cu',
  },
  {
    id: 'glow-blend',
    slug: 'glow-blend',
    name: 'GLOW',
    fullName: 'GLOW Peptide Blend',
    category: 'skin',
    price: 125.00,
    currency: 'USD',
    sku: 'SS-GLOW-01',
    purity: '≥98%',
    quantity: '30mg',
    form: 'Lyophilized Powder',
    casNumber: 'Proprietary Blend',
    molecularFormula: 'Proprietary',
    molecularWeight: 'Varies',
    storage: 'Store at -20°C. Protect from light and moisture.',
    description: 'A proprietary blend of bioactive peptides formulated for advanced dermatological research. Combines copper peptides and growth factor mimetics studied for their roles in skin radiance, barrier function, and cellular turnover.',
    shortDescription: 'Premium proprietary peptide blend for advanced dermatological research.',
    researchApplications: [
      'Skin biology and radiance research',
      'Cosmeceutical formulation studies',
      'Peptide bioavailability analysis',
      'Dermal barrier function studies',
    ],
    inStock: true,
    featured: false,
    image: '/images/products/glow-blend.webp',
    checkoutUrl: 'https://syringe-society-109807.square.site/product/glow-blend',
  },
  {
    id: 'kpv',
    slug: 'kpv',
    name: 'KPV',
    fullName: 'KPV Tripeptide',
    category: 'skin',
    price: 85.00,
    currency: 'USD',
    sku: 'SS-KPV-01',
    purity: '≥98%',
    quantity: '10mg',
    form: 'Lyophilized Powder',
    casNumber: '67727-97-3',
    molecularFormula: 'C₁₆H₃₀N₄O₅',
    molecularWeight: '358.43 g/mol',
    storage: 'Store at -20°C. Protect from light and moisture.',
    description: 'KPV (Lys-Pro-Val) is a tripeptide derived from alpha-MSH. It has been studied for its role in modulating inflammatory signaling pathways and mucosal immune responses in dermatological and gastrointestinal research.',
    shortDescription: 'Alpha-MSH-derived tripeptide for inflammatory pathway research.',
    researchApplications: [
      'Anti-inflammatory signaling studies',
      'Mucosal immune response research',
      'Skin inflammation models',
      'NF-κB pathway analysis',
    ],
    inStock: true,
    featured: false,
    image: '/images/products/kpv.webp',
    checkoutUrl: 'https://syringe-society-109807.square.site/product/kpv',
  },
  {
    id: 'epitalon',
    slug: 'epitalon',
    name: 'Epitalon',
    fullName: 'Epitalon (Epithalon)',
    category: 'skin',
    price: 82.00,
    currency: 'USD',
    sku: 'SS-EPIT-01',
    purity: '≥98%',
    quantity: '10mg',
    form: 'Lyophilized Powder',
    casNumber: '307297-39-8',
    molecularFormula: 'C₁₄H₂₂N₄O₉',
    molecularWeight: '390.35 g/mol',
    storage: 'Store at -20°C. Protect from light and moisture.',
    description: 'Epitalon (epithalon) is a synthetic tetrapeptide studied for its effects on telomerase activity and telomere length regulation. Research focuses on its potential role in cellular senescence and aging pathways.',
    shortDescription: 'Synthetic tetrapeptide for telomerase and aging pathway research.',
    researchApplications: [
      'Telomerase activation studies',
      'Telomere length research',
      'Cellular senescence models',
      'Aging biology research',
    ],
    inStock: true,
    featured: false,
    image: '/images/products/epitalon.webp',
    checkoutUrl: 'https://syringe-society-109807.square.site/product/epitalon',
  },
  {
    id: 'snap-8',
    slug: 'snap-8',
    name: 'SNAP-8',
    fullName: 'SNAP-8 (Acetyl Octapeptide-3)',
    category: 'skin',
    price: 115.00,
    currency: 'USD',
    sku: 'SS-SNAP8-01',
    purity: '≥98%',
    quantity: '200mg',
    form: 'Lyophilized Powder',
    casNumber: '868844-74-0',
    molecularFormula: 'C₄₁H₇₀N₁₆O₁₆S',
    molecularWeight: '1075.16 g/mol',
    storage: 'Store at -20°C. Protect from light and moisture.',
    description: 'SNAP-8 (Acetyl Octapeptide-3) is a peptide studied as a SNARE complex modulator. Research focuses on its ability to reduce neurotransmitter release at the neuromuscular junction, relevant to expression line formation studies.',
    shortDescription: 'SNARE complex modulating peptide for neuromuscular research.',
    researchApplications: [
      'SNARE complex modulation studies',
      'Neuromuscular junction research',
      'Expression line formation research',
      'Cosmeceutical efficacy studies',
    ],
    inStock: true,
    featured: false,
    image: '/images/products/snap-8.webp',
    checkoutUrl: 'https://syringe-society-109807.square.site/product/snap-8',
  },
  {
    id: 'melanotan-2',
    slug: 'melanotan-2',
    name: 'Melanotan II',
    fullName: 'Melanotan II (MT-II)',
    category: 'skin',
    price: 72.00,
    currency: 'USD',
    sku: 'SS-MT2-01',
    purity: '≥99%',
    quantity: '10mg',
    form: 'Lyophilized Powder',
    casNumber: '121062-08-6',
    molecularFormula: 'C₅₀H₆₉N₁₅O₉',
    molecularWeight: '1024.18 g/mol',
    storage: 'Store at -20°C. Protect from light and moisture.',
    description: 'Melanotan II is a synthetic cyclic peptide analog of alpha-melanocyte-stimulating hormone (α-MSH). Studied for melanocortin receptor activation and its effects on melanogenesis and pigmentation pathways.',
    shortDescription: 'Synthetic α-MSH analog for melanocortin pathway research.',
    researchApplications: [
      'Melanocortin receptor binding studies',
      'Melanogenesis research',
      'Pigmentation pathway analysis',
      'MC1R/MC4R selectivity studies',
    ],
    inStock: true,
    featured: false,
    image: '/images/products/melanotan-2.webp',
    checkoutUrl: 'https://syringe-society-109807.square.site/product/melanotan-2',
  },

  // ═══════════════════════════════
  // ENERGY & MOOD
  // ═══════════════════════════════
  {
    id: 'ss-31',
    slug: 'ss-31',
    name: 'SS-31',
    fullName: 'SS-31 (Elamipretide)',
    category: 'energy',
    price: 80.00,
    currency: 'USD',
    sku: 'SS-SS31-01',
    purity: '≥99%',
    quantity: '10mg',
    form: 'Lyophilized Powder',
    casNumber: '736992-21-5',
    molecularFormula: 'C₃₂H₄₉N₅O₅',
    molecularWeight: '571.75 g/mol',
    storage: 'Store at -20°C. Protect from light and moisture.',
    description: 'SS-31 (Elamipretide) is a mitochondria-targeting tetrapeptide. It selectively binds cardiolipin in the inner mitochondrial membrane and has been studied for its role in restoring mitochondrial bioenergetics and reducing oxidative stress.',
    shortDescription: 'Mitochondria-targeting tetrapeptide for bioenergetics research.',
    researchApplications: [
      'Mitochondrial bioenergetics studies',
      'Cardiolipin binding research',
      'Oxidative stress reduction models',
      'Cellular energy metabolism research',
    ],
    inStock: true,
    featured: true,
    image: '/images/products/ss-31.webp',
    checkoutUrl: 'https://syringe-society-109807.square.site/product/ss-31',
  },
  {
    id: 'nad-plus',
    slug: 'nad-plus',
    name: 'NAD+',
    fullName: 'NAD+ (Nicotinamide Adenine Dinucleotide)',
    category: 'energy',
    price: 92.00,
    currency: 'USD',
    sku: 'SS-NAD-01',
    purity: '≥99%',
    quantity: '500mg',
    form: 'Lyophilized Powder',
    casNumber: '53-84-9',
    molecularFormula: 'C₂₁H₂₇N₇O₁₄P₂',
    molecularWeight: '663.43 g/mol',
    storage: 'Store at -20°C. Protect from light and moisture.',
    description: 'NAD+ (Nicotinamide Adenine Dinucleotide) is a critical coenzyme found in every living cell. It plays essential roles in cellular energy metabolism, DNA repair, and sirtuin activity. Widely studied in aging and metabolic research.',
    shortDescription: 'Essential coenzyme for cellular metabolism and aging research, 500mg.',
    researchApplications: [
      'Cellular energy metabolism studies',
      'Sirtuin pathway research',
      'DNA repair mechanism studies',
      'Aging and longevity research',
    ],
    inStock: true,
    featured: true,
    image: '/images/products/nad-plus.webp',
    checkoutUrl: 'https://syringe-society-109807.square.site/product/nad-plus',
  },
  {
    id: 'mots-c',
    slug: 'mots-c',
    name: 'MOTS-C',
    fullName: 'MOTS-C Mitochondrial Peptide',
    category: 'energy',
    price: 90.00,
    currency: 'USD',
    sku: 'SS-MOTSC-01',
    purity: '≥98%',
    quantity: '5mg',
    form: 'Lyophilized Powder',
    casNumber: '1627580-64-6',
    molecularFormula: 'C₁₀₁H₁₅₂N₂₈O₂₅S₂',
    molecularWeight: '2174.58 g/mol',
    storage: 'Store at -20°C. Protect from light and moisture.',
    description: 'MOTS-C is a mitochondrial-derived peptide encoded in the 12S rRNA gene. It has been studied for its roles in regulating metabolic homeostasis, insulin sensitivity, and exercise-related AMPK activation.',
    shortDescription: 'Mitochondrial-derived peptide for metabolic homeostasis research.',
    researchApplications: [
      'Metabolic homeostasis studies',
      'AMPK pathway activation research',
      'Insulin sensitivity models',
      'Exercise physiology research',
    ],
    inStock: true,
    featured: false,
    image: '/images/products/mots-c.webp',
    checkoutUrl: 'https://syringe-society-109807.square.site/product/mots-c',
  },
  {
    id: 'illumineuro',
    slug: 'illumineuro',
    name: 'Illumineuro',
    fullName: 'Illumineuro (Mood Support Blend)',
    category: 'energy',
    price: 140.00,
    currency: 'USD',
    sku: 'SS-ILLU-01',
    purity: '≥98%',
    quantity: '30mg',
    form: 'Lyophilized Powder',
    casNumber: 'Proprietary Blend',
    molecularFormula: 'Proprietary',
    molecularWeight: 'Varies',
    storage: 'Store at -20°C. Protect from light and moisture.',
    description: 'Illumineuro is a proprietary neuroactive peptide blend designed for cognitive and mood-related research. Combines neuropeptides studied for serotonergic and dopaminergic pathway modulation.',
    shortDescription: 'Proprietary neuroactive peptide blend for mood pathway research.',
    researchApplications: [
      'Serotonergic pathway modulation research',
      'Dopaminergic signaling studies',
      'Cognitive function research',
      'Neuropeptide interaction analysis',
    ],
    inStock: true,
    featured: false,
    image: '/images/products/illumineuro.webp',
    checkoutUrl: 'https://syringe-society-109807.square.site/product/illumineuro',
  },

  // ═══════════════════════════════
  // MUSCLE RECOVERY & GROWTH
  // ═══════════════════════════════
  {
    id: 'bpc-157',
    slug: 'bpc-157',
    name: 'BPC-157',
    fullName: 'BPC-157 (Body Protection Compound)',
    category: 'muscle',
    price: 95.00,
    currency: 'USD',
    sku: 'SS-BPC-01',
    purity: '≥99%',
    quantity: '5mg',
    form: 'Lyophilized Powder',
    casNumber: '137525-51-0',
    molecularFormula: 'C₆₂H₉₈N₁₆O₂₂',
    molecularWeight: '1419.53 g/mol',
    storage: 'Store at -20°C. Protect from light and moisture.',
    description: 'BPC-157 is a pentadecapeptide derived from human gastric juice. It has been extensively studied in tissue repair, angiogenesis, and gastrointestinal protection research. Often called the "wolverine peptide" in research settings.',
    shortDescription: 'Gastric-derived pentadecapeptide for tissue repair research, 5mg.',
    researchApplications: [
      'Tissue repair and regeneration studies',
      'Angiogenesis signaling research',
      'Gastrointestinal protection models',
      'Tendon and ligament healing research',
    ],
    inStock: true,
    featured: true,
    image: '/images/products/bpc-157.webp',
    checkoutUrl: 'https://syringe-society-109807.square.site/product/bpc-157',
  },
  {
    id: 'cjc-1295-ipamorelin',
    slug: 'cjc-1295-ipamorelin',
    name: 'CJC/Ipa',
    fullName: 'CJC-1295 / Ipamorelin Blend',
    category: 'muscle',
    price: 98.00,
    currency: 'USD',
    sku: 'SS-CJCIPA-01',
    purity: '≥99%',
    quantity: '5mg/5mg',
    form: 'Lyophilized Powder',
    casNumber: '863288-34-0 / 170851-70-4',
    molecularFormula: 'Blend',
    molecularWeight: 'Varies',
    storage: 'Store at -20°C. Protect from light and moisture.',
    description: 'CJC-1295/Ipamorelin is a combination of a growth hormone-releasing hormone (GHRH) analog and a growth hormone secretagogue peptide. Studied for synergistic effects on GH release and pulsatile secretion patterns.',
    shortDescription: 'GHRH/GHSS combo blend for growth hormone release research.',
    researchApplications: [
      'Growth hormone secretion research',
      'GHRH receptor binding studies',
      'Pulsatile GH release patterns',
      'Synergistic peptide interaction studies',
    ],
    inStock: true,
    featured: false,
    image: '/images/products/cjc-1295-ipamorelin.webp',
    checkoutUrl: 'https://syringe-society-109807.square.site/product/cjc-1295-ipamorelin',
  },

  // ═══════════════════════════════
  // INTIMACY & LIBIDO
  // ═══════════════════════════════
  {
    id: 'pt-141',
    slug: 'pt-141',
    name: 'PT-141',
    fullName: 'PT-141 (Bremelanotide)',
    category: 'intimacy',
    price: 86.00,
    currency: 'USD',
    sku: 'SS-PT141-01',
    purity: '≥99%',
    quantity: '10mg',
    form: 'Lyophilized Powder',
    casNumber: '189691-06-3',
    molecularFormula: 'C₅₀H₆₈N₁₄O₁₀',
    molecularWeight: '1025.17 g/mol',
    storage: 'Store at -20°C. Protect from light and moisture.',
    description: 'PT-141 (Bremelanotide) is a synthetic melanocortin receptor agonist derived from Melanotan II. It has been studied for its effects on MC3R and MC4R receptors in sexual function and arousal research.',
    shortDescription: 'Melanocortin receptor agonist for sexual function research.',
    researchApplications: [
      'MC3R/MC4R receptor binding studies',
      'Sexual function pathway research',
      'Melanocortin signaling analysis',
      'Central nervous system studies',
    ],
    inStock: true,
    featured: false,
    image: '/images/products/pt-141.webp',
    checkoutUrl: 'https://syringe-society-109807.square.site/product/pt-141',
  },
];

/**
 * Get all products, optionally filtered by category
 */
export function getProducts(categorySlug = null) {
  if (categorySlug) {
    return PRODUCTS.filter((p) => p.category === categorySlug);
  }
  return PRODUCTS;
}

/**
 * Get a single product by slug
 */
export function getProductBySlug(slug) {
  return PRODUCTS.find((p) => p.slug === slug) || null;
}

/**
 * Get a category by slug
 */
export function getCategoryBySlug(slug) {
  return CATEGORIES.find((c) => c.slug === slug) || null;
}

/**
 * Get featured products
 */
export function getFeaturedProducts() {
  return PRODUCTS.filter((p) => p.featured);
}

/**
 * Get all product slugs (for generateStaticParams)
 */
export function getAllProductSlugs() {
  return PRODUCTS.map((p) => ({ slug: p.slug }));
}

/**
 * Get all category slugs (for generateStaticParams)
 */
export function getAllCategorySlugs() {
  return CATEGORIES.map((c) => ({ slug: c.slug }));
}

/**
 * Get category color by category ID
 */
export function getCategoryColor(categoryId) {
  const cat = CATEGORIES.find((c) => c.id === categoryId);
  return cat ? cat.color : '#22d3ee';
}
