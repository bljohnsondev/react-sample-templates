import { globalStyle } from '@vanilla-extract/css';

import { colors } from './colors';
import { contract } from './theme-contract.css';

/***** FIELD *****/

globalStyle('[data-scope="field"][data-part="root"]', {
  display: 'flex',
  flexDirection: 'column',
  gap: contract.size[1],
});

globalStyle('[data-scope="field"][data-part="label"]', {
  color: contract.color.input.label,
  fontSize: contract.fontSize.sm,
});

globalStyle('[data-scope="field"][data-part="input"]', {
  backgroundColor: contract.color.input.bg,
  color: contract.color.input.text,
  border: `1px solid ${contract.color.input.border}`,
  borderRadius: contract.radius[2],
  paddingInline: contract.size[2],
});

globalStyle('[data-scope="field"][data-part="input"]::placeholder', {
  color: contract.color.input.placeholder,
  fontSize: contract.fontSize.sm,
});

globalStyle('[data-scope="field"][data-part="error-text"]', {
  color: colors.red[400],
  fontSize: contract.fontSize.xs,
});

/***** TABS *****/

globalStyle('[data-scope="tabs"][data-part="list"]', {
  display: 'flex',
  gap: contract.size[3],
  borderBottom: `1px solid ${contract.color.tab.border}`,
});

globalStyle('[data-scope="tabs"][data-part="trigger"]', {
  color: contract.color.tab.text,
  paddingInline: contract.size[3],
  paddingBlock: contract.size[2],
  border: 0,
  cursor: 'pointer',
});

globalStyle('[data-scope="tabs"][data-part="trigger"][data-selected]', {
  color: contract.color.tab.selected.text,
  borderBottom: `3px solid ${contract.color.tab.selected.border}`,
  cursor: 'default',
});

globalStyle('[data-scope="tabs"][data-part="content"]', {
  marginTop: contract.size[4],
});
