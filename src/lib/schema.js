/**
 * JSON-LD Schema generators for Syringe Society.
 * Each function returns a schema object ready to be stringified into a <script> tag.
 */
import { SITE_CONFIG } from '@/data/products';

/**
 * Organization schema — appears on every page via layout
 */
export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_CONFIG.name,
    url: SITE_CONFIG.url,
    logo: `${SITE_CONFIG.url}/logo.png`,
    description: SITE_CONFIG.description,
    contactPoint: {
      '@type': 'ContactPoint',
      email: SITE_CONFIG.email,
      contactType: 'customer service',
    },
  };
}

/**
 * WebSite schema with SearchAction
 */
export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_CONFIG.name,
    url: SITE_CONFIG.url,
    description: SITE_CONFIG.description,
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${SITE_CONFIG.url}/shop?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };
}

/**
 * Product schema for a single product page
 */
export function productSchema(product) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.fullName,
    description: `${product.description} FOR LABORATORY RESEARCH USE ONLY. NOT FOR HUMAN CONSUMPTION.`,
    sku: product.sku,
    image: `${SITE_CONFIG.url}${product.image}`,
    brand: {
      '@type': 'Brand',
      name: SITE_CONFIG.name,
    },
    offers: {
      '@type': 'Offer',
      price: product.price,
      priceCurrency: product.currency,
      availability: product.inStock
        ? 'https://schema.org/InStock'
        : 'https://schema.org/OutOfStock',
      seller: {
        '@type': 'Organization',
        name: SITE_CONFIG.name,
      },
      url: `${SITE_CONFIG.url}/product/${product.slug}`,
    },
    additionalProperty: [
      {
        '@type': 'PropertyValue',
        name: 'Intended Use',
        value: 'Laboratory Research Only',
      },
      {
        '@type': 'PropertyValue',
        name: 'Regulatory Status',
        value: 'Not FDA Approved - Research Chemical',
      },
      {
        '@type': 'PropertyValue',
        name: 'Purity',
        value: product.purity,
      },
      {
        '@type': 'PropertyValue',
        name: 'Quantity',
        value: product.quantity,
      },
      {
        '@type': 'PropertyValue',
        name: 'Form',
        value: product.form,
      },
      ...(product.casNumber !== 'N/A' && product.casNumber !== 'Proprietary Blend'
        ? [{
            '@type': 'PropertyValue',
            name: 'CAS Number',
            value: product.casNumber,
          }]
        : []),
    ],
  };
}

/**
 * BreadcrumbList schema
 */
export function breadcrumbSchema(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url ? `${SITE_CONFIG.url}${item.url}` : undefined,
    })),
  };
}

/**
 * ItemList schema for category/collection pages
 */
export function itemListSchema(products, listName) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: listName,
    numberOfItems: products.length,
    itemListElement: products.map((product, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      url: `${SITE_CONFIG.url}/product/${product.slug}`,
      name: product.fullName,
    })),
  };
}

/**
 * FAQPage schema
 */
export function faqSchema(faqs) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

/**
 * Render a schema object as a JSON-LD script tag string.
 * Use in <head> or at the top of page components.
 */
export function SchemaScript({ schema }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
