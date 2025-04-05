import { style } from '@vanilla-extract/css';
import { themeContract as tc } from 've-style';

import { localContract as lc } from '@/styles/theme-contract.css';

export const card = style({
  width: '100%',
  backgroundColor: lc.color.card.bg,
  border: `1px solid ${lc.color.card.border}`,
  color: lc.color.card.text,
  padding: tc.size[3],
  borderRadius: tc.borderRadius.md,
  '@media': {
    'screen and (min-width: 768px)': {
      width: '22rem',
    },
  },
});

export const title = style({
  margin: 0,
  padding: 0,
  fontSize: tc.fontSize.md,
  fontWeight: tc.fontWeight.semibold,
  marginBottom: tc.size[3],
});

export const grid = style({
  display: 'grid',
  gridTemplateColumns: '8rem 1fr',
  gap: tc.size[2],
  fontSize: tc.fontSize.sm,
});
