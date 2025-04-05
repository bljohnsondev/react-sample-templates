import { style } from '@vanilla-extract/css';
import { themeContract as tc } from 've-style';

import { localContract as lc } from '@/styles/theme-contract.css';

export const mainGrid = style({
  backgroundColor: lc.color.background,
  color: lc.color.foreground,
  display: 'grid',
  gridTemplateColumns: '0fr 1fr',
  gridTemplateRows: 'auto 1fr',
  height: '100vh',
  '@media': {
    'screen and (min-width: 768px)': {
      gridTemplateColumns: '14rem auto',
    },
  },
});

export const header = style({
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',
  backgroundColor: lc.color.header.bg,
  color: lc.color.header.text,
  fontWeight: tc.fontWeight.semibold,
  height: '4rem',
  paddingInline: '1rem',
  gridColumn: '1 / span 2',
  borderBottom: `1px solid ${lc.color.border}`,
  top: 0,
  zIndex: 9,
});

export const menuButton = style({
  color: lc.color.header.icon,
  border: 0,
  borderRadius: tc.borderRadius.md,
  cursor: 'pointer',
  ':focus-visible': {
    outline: `2px solid ${lc.color.focusRing}`,
    outlineOffset: '-1px',
  },
  '@media': {
    'screen and (min-width: 768px)': {
      display: 'none',
    },
  },
});

export const themeButton = style({
  color: lc.color.header.icon,
  border: 0,
  borderRadius: tc.borderRadius.md,
  marginLeft: 'auto',
  cursor: 'pointer',
  ':focus-visible': {
    outline: `2px solid ${lc.color.focusRing}`,
    outlineOffset: '-1px',
  },
});

export const content = style({
  padding: '1rem',
  backgroundColor: 'inherit',
  gridColumn: 'span 2',
  '@media': {
    'screen and (min-width: 768px)': {
      borderLeft: `1px solid ${lc.color.border}`,
      gridColumn: 'span 1',
    },
  },
});
