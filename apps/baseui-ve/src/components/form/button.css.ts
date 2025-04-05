import { style, styleVariants } from '@vanilla-extract/css';
import { themeContract as tc } from 've-style';

import { localContract as lc } from '@/styles/theme-contract.css';

export const baseButton = style({
  padding: `${tc.size[2]} ${tc.size[4]}`,
  borderRadius: tc.borderRadius.md,
  fontWeight: tc.fontWeight.semibold,
  fontSize: tc.fontSize.sm,
  width: 'fit-content',
  cursor: 'pointer',
  ':focus-visible': {
    outline: `2px solid ${lc.color.focusRing}`,
    outlineOffset: '-1px',
  },
});

export const buttonVariant = styleVariants({
  default: [
    baseButton,
    {
      backgroundColor: lc.color.button.default.bg,
      color: lc.color.button.default.text,
      border: `1px solid ${lc.color.button.default.border}`,
    },
  ],
  primary: [
    baseButton,
    {
      backgroundColor: lc.color.button.primary.bg,
      color: lc.color.button.primary.text,
      border: `1px solid ${lc.color.button.primary.border}`,
    },
  ],
});

export const disabledButton = style({
  opacity: '0.5',
});
