/**
 * A free call: landing -> /book-a-call (Cal) -> /thank-you. Every landing CTA
 * points at `ctaHref`. Nothing is sold on the site, so every tracked value is 0.
 */
export const site = {
  ctaHref: '/book-a-call',
  priceInr: 0,
};

/** The CTA, verbatim from the client: a main line and a subline, always two lines. */
export const CTA_MAIN = 'Speak 1:1 With Stutie Gupta';
export const CTA_SUB = '15-Min Consultation To See If We Are Right For You';

/* Neutral labels for the GA4 item. They never reach Meta. */
export const PRODUCT_LABEL = 'Private Call';
export const GA4_ITEM_ID = 'stuti-call';
