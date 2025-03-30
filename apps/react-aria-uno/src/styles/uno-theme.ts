import { colors } from '@unocss/preset-mini';

import type { ThemeColors } from '@/types/uno/theme-types';

export const lightTheme: ThemeColors = {
  background: colors.gray[100],
  foreground: colors.gray[700],
  errorMessage: colors.red[500],
  border: colors.gray[300],
  header: {
    bg: colors.gray[200],
    text: colors.orange[600],
    icon: colors.blue[600],
  },
  menu: {
    text: colors.gray[600],
    border: colors.gray[300],
    hover: {
      bg: colors.gray[200],
    },
    selected: {
      bg: colors.blue[100],
      text: colors.blue[700],
      border: colors.blue[300],
    },
  },
  page: {
    title: colors.green[700],
  },
  button: {
    base: {
      text: '#fff',
    },
    default: {
      bg: colors.zinc[800],
      border: colors.zinc[700],
      hover: {
        // adding a final hex value represents the opacity from 00 - FF
        bg: `${colors.zinc[700]}40`,
      },
    },
    filled: {
      bg: 'hsl(209 77% 43%)',
      hover: {
        bg: 'hsl(209 77% 43% / 80%)',
      },
    },
    disabled: {
      text: 'hsl(0 0% 40%)',
      bg: 'hsl(0 0% 30% / 30%)',
    },
  },
  tab: {
    text: colors.gray[600],
    border: colors.gray[300],
    selected: {
      border: colors.blue[700],
    },
    hover: {
      text: colors.gray[800],
    },
  },
  textfield: {
    label: colors.gray[700],
    input: {
      bg: '#fff',
      text: colors.gray[800],
      border: colors.gray[300],
      placeholder: colors.gray[300],
    },
  },
  toast: {
    bg: '#fff',
    text: colors.neutral[700],
    success: colors.green[600],
    warning: colors.yellow[700],
    danger: colors.red[600],
    close: {
      text: colors.gray[400],
      hover: {
        text: colors.gray[500],
      },
    },
  },
  card: {
    bg: '#fff',
    text: colors.neutral[700],
    border: colors.neutral[300],
  },
};

export const darkTheme: ThemeColors = {
  background: 'oklch(26.21% 0.0095 248.19)',
  foreground: colors.gray[300],
  errorMessage: colors.red[500],
  border: 'oklch(34.9% 0.0133 248.21 / 50%)',
  header: {
    bg: 'oklch(21.2% 0.0092 255.61 / 60%)',
    text: 'oklch(80.34% 0.1461 64.6)',
    icon: 'oklch(66.89% 0.1575 248.32)',
  },
  menu: {
    text: colors.gray[300],
    border: colors.gray[700],
    hover: {
      bg: 'oklch(34.51% 0.0133 248.21)',
    },
    selected: {
      bg: 'oklch(49.42% 0.1332 251.82 / 50%)',
      text: 'oklch(92.66% 0.039464 240.0056)',
      border: 'oklch(44.32% 0.1167 251.19)',
    },
  },
  page: {
    title: 'oklch(0.627 0.194 149.214)',
  },
  button: {
    base: {
      text: '#fff',
    },
    default: {
      bg: colors.zinc[800],
      border: colors.zinc[700],
      hover: {
        // adding a final hex value represents the opacity from 00 - FF
        bg: `${colors.zinc[700]}40`,
      },
    },
    filled: {
      bg: 'hsl(209 77% 43%)',
      hover: {
        bg: 'hsl(209 77% 43% / 80%)',
      },
    },
    disabled: {
      text: 'hsl(0 0% 40%)',
      bg: 'hsl(0 0% 30% / 30%)',
    },
  },
  tab: {
    text: colors.gray[300],
    border: colors.gray[700],
    selected: {
      border: colors.blue[800],
    },
    hover: {
      text: colors.gray[200],
    },
  },
  textfield: {
    label: colors.gray[300],
    input: {
      bg: colors.neutral[700],
      text: colors.neutral[300],
      border: colors.neutral[600],
      placeholder: colors.neutral[600],
    },
  },
  toast: {
    bg: colors.neutral[700],
    text: colors.neutral[200],
    success: colors.green[600],
    warning: colors.yellow[700],
    danger: colors.red[600],
    close: {
      text: colors.gray[500],
      hover: {
        text: colors.gray[400],
      },
    },
  },
  card: {
    bg: colors.neutral[700],
    text: colors.neutral[200],
    border: colors.neutral[600],
  },
};
