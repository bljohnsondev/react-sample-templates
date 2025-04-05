import { style } from '@vanilla-extract/css';
import { themeContract as tc } from 've-style';

import { localContract as lc } from './theme-contract.css';

/***** FORMS *****/

export const fieldRoot = style({
  display: 'flex',
  flexDirection: 'column',
  gap: tc.size[1],
});

export const label = style({
  color: lc.color.input.label,
  fontSize: tc.fontSize.sm,
});

export const input = style({
  backgroundColor: lc.color.input.bg,
  border: `1px solid ${lc.color.input.border}`,
  color: lc.color.input.text,
  borderRadius: tc.borderRadius.md,
  paddingInline: tc.size[2],
  ':focus': {
    outline: `2px solid ${lc.color.focusRing}`,
    outlineOffset: '-1px',
  },
  '::placeholder': {
    color: lc.color.input.placeholder,
  },
});

/***** TABS *****/

export const tabsList = style({
  display: 'flex',
  gap: tc.size[3],
  borderBottom: `1px solid ${lc.color.tab.border}`,
});

export const tab = style({
  color: lc.color.tab.text,
  fontSize: tc.fontSize.sm,
  paddingInline: tc.size[3],
  paddingBlock: tc.size[2],
  border: 0,
  selectors: {
    '&[data-selected]': {
      color: lc.color.tab.selected.text,
      borderBottom: `3px solid ${lc.color.tab.selected.border}`,
    },
  },
});

export const tabPanel = style({
  marginTop: tc.size[4],
});
