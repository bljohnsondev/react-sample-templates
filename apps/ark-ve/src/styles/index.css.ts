import { globalStyle } from '@vanilla-extract/css';

import { contract } from '@/styles/theme-contract.css';

globalStyle('html, body', {
  margin: 0,
  padding: 0,
  fontFamily: 'Inter, Roboto, "Helvetica Neue", "Arial Nova", "Nimbus Sans", Arial, sans-serif',
  fontSize: '16px',
});

globalStyle('h1.title', {
  color: contract.color.page.title,
  marginTop: 0,
  marginBottom: contract.size[3],
  fontSize: contract.fontSize.md,
  fontWeight: contract.fontWeight.bold,
});

globalStyle('.actions', {
  display: 'flex',
  gap: contract.size[2],
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
  color: contract.color.error,
  fontSize: contract.fontSize.xs,
});
