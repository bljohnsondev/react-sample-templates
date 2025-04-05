import { globalStyle } from '@vanilla-extract/css';
import { themeContract as tc } from 've-style';

import { localContract as lc } from '@/styles/theme-contract.css';

globalStyle('html, body', {
  margin: 0,
  padding: 0,
  fontFamily: tc.fontFamily.neoGrotesque,
  fontSize: '16px',
  backgroundColor: lc.color.background,
});

globalStyle('.lock-scroll', {
  overflow: 'hidden',
  position: 'fixed',
  width: '100%',
});

globalStyle('h1.title', {
  color: lc.color.page.title,
  marginTop: 0,
  marginBottom: tc.size[3],
  fontSize: tc.fontSize.md,
  fontWeight: tc.fontWeight.bold,
});

globalStyle('.page-content', {
  marginBottom: tc.size[3],
});

globalStyle('.actions', {
  display: 'flex',
  gap: tc.size[2],
  '@media': {
    'screen and (max-width: 768px)': {
      flexDirection: 'column',
    },
  },
});

globalStyle('.actions button', {
  '@media': {
    'screen and (max-width: 768px)': {
      width: '100%',
    },
  },
});

globalStyle('.unset', {
  all: 'unset',
});

globalStyle('.error-message', {
  color: lc.color.error,
  fontSize: tc.fontSize.xs,
});
