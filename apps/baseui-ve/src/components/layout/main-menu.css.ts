import { style, styleVariants } from '@vanilla-extract/css';
import { themeContract as tc } from 've-style';

import { localContract as lc } from '@/styles/theme-contract.css';

export const menu = style({
  position: 'fixed',
  top: '4rem',
  left: 0,
  right: 0,
  display: 'flex',
  flexDirection: 'column',
  gap: tc.size[2],
  backgroundColor: lc.color.background,
  paddingTop: tc.size[4],
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
  gap: tc.size[4],
  fontSize: tc.fontSize.sm,
  paddingTop: tc.size[4],
  marginInline: tc.size[4],
  padding: tc.size[4],
  textDecoration: 'none',
  borderRadius: '5px',
  transition: 'background-color 150ms ease',
  ':focus-visible': {
    outline: `2px solid ${lc.color.focusRing}`,
    outlineOffset: '-1px',
  },
});

export const menuItemVariant = styleVariants({
  active: [
    baseMenuItem,
    {
      color: lc.color.menu.selected.text,
      backgroundColor: lc.color.menu.selected.bg,
      border: `1px solid ${lc.color.menu.selected.border}`,
    },
  ],
  inactive: [
    baseMenuItem,
    {
      color: lc.color.menu.text,
      border: `1px solid ${lc.color.menu.border}`,
      ':hover': {
        backgroundColor: lc.color.menu.hover.bg,
      },
    },
  ],
});
