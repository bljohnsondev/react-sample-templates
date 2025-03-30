import { style, styleVariants } from '@vanilla-extract/css';

import { colors } from '@/styles/colors';
import { contract } from '@/styles/theme-contract.css';

export const toastRoot = style({
  display: 'flex',
  alignItems: 'center',
  backgroundColor: contract.color.toast.bg,
  color: contract.color.toast.text,
  fontSize: contract.fontSize.sm,
  width: '100%',
  height: '3rem',
  borderRadius: contract.radius[2],
  boxShadow: contract.shadow.md,
  '@media': {
    'screen and (min-width: 768px)': {
      width: '20rem',
    },
  },
});

export const baseIndicator = style({
  margin: '4px',
  marginRight: contract.size[3],
  width: '5px',
  minWidth: '5px',
  alignSelf: 'stretch',
  borderRadius: contract.radius[3],
});

export const indicatorVariant = styleVariants({
  success: [baseIndicator, { backgroundColor: colors.green[600] }],
  warning: [baseIndicator, { backgroundColor: colors.yellow[500] }],
  danger: [baseIndicator, { backgroundColor: colors.red[500] }],
});

export const close = style({
  color: contract.color.toast.close.text,
  marginLeft: 'auto',
  padding: 0,
  paddingRight: contract.size[4],
  lineHeight: 0,
  border: 0,
  ':hover': {
    color: contract.color.toast.close.hover,
  },
});
