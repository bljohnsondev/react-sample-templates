import { style } from '@vanilla-extract/css';

import { contract } from '@/styles/theme-contract.css';

export const card = style({
  width: '100%',
  backgroundColor: contract.color.card.bg,
  border: `1px solid ${contract.color.card.border}`,
  color: contract.color.card.text,
  padding: contract.size[3],
  borderRadius: contract.radius[2],
  '@media': {
    'screen and (min-width: 768px)': {
      width: '22rem',
    },
  },
});

export const title = style({
  margin: 0,
  padding: 0,
  fontSize: contract.fontSize.md,
  fontWeight: contract.fontWeight.semibold,
  marginBottom: contract.size[3],
});

export const grid = style({
  display: 'grid',
  gridTemplateColumns: '8rem 1fr',
  gap: contract.size[2],
  fontSize: contract.fontSize.sm,
});
