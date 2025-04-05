import { style } from '@vanilla-extract/css';
import { themeContract as tc } from 've-style';

export const form = style({
  display: 'flex',
  flexDirection: 'column',
  gap: tc.size[4],
});

export const inputContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: tc.size[4],
  alignItems: 'flex-start',
  '@media': {
    'screen and (min-width: 768px)': {
      flexDirection: 'row',
    },
  },
});

export const input = style({
  width: '8rem',
});
