import { style, styleVariants } from '@vanilla-extract/css';

import { contract } from '@/styles/theme-contract.css';

export const menu = style({
  position: 'fixed',
  top: '4rem',
  left: 0,
  right: 0,
  display: 'flex',
  flexDirection: 'column',
  gap: contract.size[2],
  backgroundColor: contract.color.background,
  paddingTop: contract.size[4],
  zIndex: 9,
  minHeight: '100%',
  overflowY: 'auto',
  opacity: 0,
  visibility: 'hidden',
  '@media': {
    'screen and (min-width: 768px)': {
      position: 'static',
      height: 'auto',
      border: 0,
      margin: 0,
      opacity: 1,
      visibility: 'visible',
    },
  },
});

export const openMenu = style({
  opacity: 1,
  visibility: 'visible',
});

export const baseMenuItem = style({
  display: 'flex',
  alignItems: 'center',
  gap: contract.size[4],
  fontSize: contract.fontSize.sm,
  paddingTop: contract.size[4],
  marginInline: contract.size[4],
  padding: contract.size[4],
  textDecoration: 'none',
  borderRadius: '5px',
  transition: 'background-color 150ms ease',
  ':focus-visible': {
    outline: `2px solid ${contract.color.focusRing}`,
    outlineOffset: '-1px',
  },
});

export const menuItemVariant = styleVariants({
  active: [
    baseMenuItem,
    {
      color: contract.color.menu.selected.text,
      backgroundColor: contract.color.menu.selected.bg,
      border: `1px solid ${contract.color.menu.selected.border}`,
    },
  ],
  inactive: [
    baseMenuItem,
    {
      color: contract.color.menu.text,
      border: `1px solid ${contract.color.menu.border}`,
      ':hover': {
        backgroundColor: contract.color.menu.hover.bg,
      },
    },
  ],
});
