import { CTA_MAIN, CTA_SUB } from '@/lib/site';

/**
 * The CTA is always exactly two lines: CTA_MAIN (caps, 800) over CTA_SUB
 * (sentence case, 600). Neither line may wrap, so on narrow screens each
 * line's font-size is solved from the width it has to fit in.
 *
 * Widths in em per line, measured in the browser against the shipped
 * Manrope with the CSS letter-spacing applied (main .04em → 15.91em,
 * sub .01em → 24.26em), plus ~3% safety margin. Re-measure if either
 * string changes.
 */
export const CTA_MAIN_EM = '16.4';
export const CTA_SUB_EM = '25.0';

export { CTA_MAIN, CTA_SUB };
