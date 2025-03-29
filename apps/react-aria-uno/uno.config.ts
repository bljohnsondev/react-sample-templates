import { defineConfig, presetMini, transformerDirectives, transformerVariantGroup } from 'unocss';

import { darkTheme, lightTheme } from './src/styles/uno-theme';

export default defineConfig({
  presets: [presetMini()],
  transformers: [transformerDirectives(), transformerVariantGroup()],
  shortcuts: {
    title: 'text-page-title dark:text-dark-page-title text-base font-bold mt-0 mb-3',
    actions: 'flex items-center gap-2',
    'error-message': 'mt-1 text-sm text-error-message',
    toast: 'flex items-center gap-2 rounded-md bg-toast-bg text-toast-text text-sm shadow-md',
  },
  // classes that may be used in template literals or calculations should be included in the safelist
  // see: https://unocss.dev/guide/extracting#safelist
  safelist: ['bg-toast-success', 'bg-toast-warning', 'bg-toast-danger'],
  extendTheme: theme => {
    return {
      ...theme,
      colors: {
        ...theme.colors,
        ...lightTheme,
        dark: {
          ...darkTheme,
        },
      },
    };
  },
});
