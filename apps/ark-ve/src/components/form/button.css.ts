import { style, styleVariants } from '@vanilla-extract/css';

import { contract } from '@/styles/theme-contract.css';

export const baseButton = style({
  padding: `${contract.size[2]} ${contract.size[4]}`,
  borderRadius: contract.radius[2],
  fontWeight: contract.fontWeight.semibold,
  fontSize: contract.fontSize.sm,
  width: 'fit-content',
  cursor: 'pointer',
});

export const buttonVariant = styleVariants({
  default: [
    baseButton,
    {
      backgroundColor: contract.color.button.default.bg,
      color: contract.color.button.default.text,
      border: `1px solid ${contract.color.button.default.border}`,
    },
  ],
  primary: [
    baseButton,
    {
      backgroundColor: contract.color.button.primary.bg,
      color: contract.color.button.primary.text,
      border: `1px solid ${contract.color.button.primary.border}`,
    },
  ],
});

export const disabledButton = style({
  opacity: '0.5',
});
