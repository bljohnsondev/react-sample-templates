import { style, styleVariants } from '@vanilla-extract/css';

import { colors } from '@/styles/colors';
import { contract } from '@/styles/theme-contract.css';

export const root = style({
  display: 'flex',
  alignItems: 'center',
  backgroundColor: contract.color.toast.bg,
  color: contract.color.toast.text,
  fontSize: contract.fontSize.sm,
  width: '20rem',
  height: '3rem',
  borderRadius: contract.radius[2],
  boxShadow: contract.shadow.md,
});

export const rootInline = style({
  width: '100%',
});

export const content = style({
  display: 'flex',
  alignItems: 'center',
  gap: contract.size[2],
  height: '100%',
});

export const baseIndicator = style({
  margin: '4px',
  width: '5px',
  minWidth: '5px',
  alignSelf: 'stretch',
  borderRadius: contract.radius[3],
});

export const indicatorVariant = styleVariants({
  info: [baseIndicator, { backgroundColor: colors.blue[500] }],
  loading: [baseIndicator, { backgroundColor: colors.blue[500] }],
  success: [baseIndicator, { backgroundColor: colors.green[600] }],
  error: [baseIndicator, { backgroundColor: colors.red[500] }],
});

export const close = style({
  color: colors.neutral[500],
  marginLeft: 'auto',
  padding: 0,
  paddingRight: contract.size[4],
  lineHeight: 0,
  border: 0,
  ':hover': {
    color: colors.neutral[400],
  },
});
