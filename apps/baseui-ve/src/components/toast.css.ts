import { style, styleVariants } from '@vanilla-extract/css';
import { themeContract as tc } from 've-style';

import { localContract as lc } from '@/styles/theme-contract.css';

export const toastRoot = style({
  display: 'flex',
  alignItems: 'center',
  backgroundColor: lc.color.toast.bg,
  color: lc.color.toast.text,
  fontSize: tc.fontSize.sm,
  width: '100%',
  height: '3rem',
  borderRadius: tc.borderRadius.md,
  boxShadow: tc.shadow.md,
});

export const toastVariant = styleVariants({
  normal: [
    toastRoot,
    {
      '@media': {
        'screen and (min-width: 768px)': {
          width: '20rem',
        },
      },
    },
  ],
  inline: [toastRoot],
});

export const baseIndicator = style({
  margin: '4px',
  marginRight: tc.size[3],
  width: '5px',
  minWidth: '5px',
  alignSelf: 'stretch',
  borderRadius: tc.borderRadius.lg,
});

export const indicatorVariant = styleVariants({
  success: [baseIndicator, { backgroundColor: tc.color['green-600'] }],
  warning: [baseIndicator, { backgroundColor: tc.color['yellow-500'] }],
  danger: [baseIndicator, { backgroundColor: tc.color['red-500'] }],
});

export const close = style({
  color: lc.color.toast.close.text,
  marginLeft: 'auto',
  padding: 0,
  paddingRight: tc.size[4],
  lineHeight: 0,
  border: 0,
  ':hover': {
    color: lc.color.toast.close.hover,
  },
});
