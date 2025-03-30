import { style } from '@vanilla-extract/css';

import { contract } from '@/styles/theme-contract.css';

export const form = style({
  display: 'flex',
  flexDirection: 'column',
  gap: contract.size[4],
});

export const inputContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: contract.size[4],
  alignItems: 'flex-start',
  '@media': {
    'screen and (min-width: 768px)': {
      flexDirection: 'row',
    },
  },
});

export const input = style({
  width: '8rem',
});
