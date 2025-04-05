import { style } from '@vanilla-extract/css';
import { themeContract as tc } from 've-style';

export const newMessageContent = style({
  display: 'flex',
  flexDirection: 'column',
  gap: tc.size[1],
  marginBlock: tc.size[3],
});

export const newMessageInput = style({
  width: '30rem',
});

export const inlineMessages = style({
  display: 'flex',
  flexDirection: 'column',
  gap: tc.size[2],
  marginBottom: tc.size[4],
});
