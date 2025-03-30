import { style } from '@vanilla-extract/css';

import { contract } from './theme-contract.css';

/***** FORMS *****/

export const fieldRoot = style({
  display: 'flex',
  flexDirection: 'column',
  gap: contract.size[1],
});

export const label = style({
  color: contract.color.input.label,
  fontSize: contract.fontSize.sm,
});

export const input = style({
  backgroundColor: contract.color.input.bg,
  border: `1px solid ${contract.color.input.border}`,
  color: contract.color.input.text,
  borderRadius: contract.radius[2],
  paddingInline: contract.size[2],
  ':focus': {
    outline: `2px solid ${contract.color.focusRing}`,
    outlineOffset: '-1px',
  },
  '::placeholder': {
    color: contract.color.input.placeholder,
  },
});

/***** TABS *****/

export const tabsList = style({
  display: 'flex',
  gap: contract.size[3],
  borderBottom: `1px solid ${contract.color.tab.border}`,
});

export const tab = style({
  color: contract.color.tab.text,
  fontSize: contract.fontSize.sm,
  paddingInline: contract.size[3],
  paddingBlock: contract.size[2],
  border: 0,
  selectors: {
    '&[data-selected]': {
      color: contract.color.tab.selected.text,
      borderBottom: `3px solid ${contract.color.tab.selected.border}`,
    },
  },
});

export const tabPanel = style({
  marginTop: contract.size[4],
});
