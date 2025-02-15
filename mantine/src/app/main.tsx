import { MantineProvider, createTheme } from '@mantine/core';
import { Notifications } from '@mantine/notifications';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { AppRouter } from './router';

import '@fontsource-variable/inter/index.css';
import '@mantine/core/styles.css';
import '@mantine/notifications/styles.css';

import './index.css';

const theme = createTheme({
  fontFamily: 'Inter Variable, sans-serif',
  fontFamilyMonospace: 'Monaco, Courier, monospace',
  headings: { fontFamily: 'Inter Variable, sans-serif' },
});

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error('Root element not found');
}

createRoot(rootElement).render(
  <StrictMode>
    <MantineProvider defaultColorScheme="auto" theme={theme}>
      <Notifications position="top-center" />
      <AppRouter />
    </MantineProvider>
  </StrictMode>
);
