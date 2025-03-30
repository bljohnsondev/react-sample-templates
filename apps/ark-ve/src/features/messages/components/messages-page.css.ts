import { style } from '@vanilla-extract/css';

import { contract } from '@/styles/theme-contract.css';

export const newMessageContent = style({
  display: 'flex',
  flexDirection: 'column',
  gap: contract.size[3],
});

export const newMessageInput = style({
  width: '30rem',
});

export const inlineMessages = style({
  display: 'flex',
  flexDirection: 'column',
  gap: contract.size[2],
  marginBottom: contract.size[4],
});
