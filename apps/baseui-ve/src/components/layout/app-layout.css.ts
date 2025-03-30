import { style } from '@vanilla-extract/css';

import { contract } from '@/styles/theme-contract.css';

export const mainGrid = style({
  backgroundColor: contract.color.background,
  color: contract.color.foreground,
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
  backgroundColor: contract.color.header.bg,
  color: contract.color.header.text,
  fontWeight: contract.fontWeight.semibold,
  height: '4rem',
  paddingInline: '1rem',
  gridColumn: '1 / span 2',
  borderBottom: `1px solid ${contract.color.border}`,
  top: 0,
  zIndex: 9,
});

export const menuButton = style({
  color: contract.color.header.icon,
  border: 0,
  borderRadius: contract.radius[2],
  cursor: 'pointer',
  ':focus-visible': {
    outline: `2px solid ${contract.color.focusRing}`,
    outlineOffset: '-1px',
  },
  '@media': {
    'screen and (min-width: 768px)': {
      display: 'none',
    },
  },
});

export const themeButton = style({
  color: contract.color.header.icon,
  border: 0,
  borderRadius: contract.radius[2],
  marginLeft: 'auto',
  cursor: 'pointer',
  ':focus-visible': {
    outline: `2px solid ${contract.color.focusRing}`,
    outlineOffset: '-1px',
  },
});

export const content = style({
  padding: '1rem',
  backgroundColor: 'inherit',
  gridColumn: 'span 2',
  '@media': {
    'screen and (min-width: 768px)': {
      borderLeft: `1px solid ${contract.color.border}`,
      gridColumn: 'span 1',
    },
  },
});
