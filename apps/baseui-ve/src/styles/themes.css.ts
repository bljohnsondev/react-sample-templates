import { createTheme } from '@vanilla-extract/css';
import { themeContract as tc } from 've-style';

import { localContract as lc } from './theme-contract.css';

export const darkTheme = createTheme(lc, {
  color: {
    background: 'rgb(33, 37, 41)',
    foreground: 'rgb(222, 226, 230)',
    border: 'rgba(53, 59, 65, 0.5)',
    focusRing: tc.color['blue-400'],
    error: tc.color['red-400'],
    header: {
      bg: 'rgba(22, 25, 29, 0.6)',
      text: 'rgb(255, 169, 77)',
      logo: 'rgb(255, 169, 77)',
      icon: 'rgb(51, 154, 240)',
    },
    menu: {
      bg: 'transparent',
      text: 'rgb(206, 212, 218)',
      border: 'rgb(52, 58, 64)',
      hover: {
        bg: 'rgb(52, 58, 64)',
      },
      selected: {
        bg: 'rgba(24, 99, 170, 0.5)',
        text: 'rgb(208, 235, 255)',
        border: 'rgb(20, 85, 145)',
      },
    },
    page: {
      title: 'rgb(81, 207, 102)',
    },
    button: {
      default: {
        bg: 'transparent',
        text: tc.color['gray-400'],
        border: tc.color['gray-600'],
        hover: {
          bg: '',
          border: '',
        },
      },
      primary: {
        bg: 'rgb(25, 113, 194)',
        text: lc.color.foreground,
        border: lc.color.button.primary.bg,
        hover: {
          bg: '',
          border: '',
        },
      },
    },
    tab: {
      text: tc.color['gray-400'],
      border: tc.color['neutral-700'],
      selected: {
        text: tc.color['gray-200'],
        border: tc.color['blue-500'],
      },
    },
    toast: {
      bg: 'rgb(52, 58, 64)',
      text: tc.color['neutral-300'],
      close: {
        text: tc.color['neutral-500'],
        hover: tc.color['neutral-400'],
      },
    },
    card: {
      bg: `color-mix(in oklch, ${tc.color['zinc-700']}, transparent 60%)`,
      text: lc.color.foreground,
      border: tc.color['zinc-700'],
    },
    input: {
      bg: `color-mix(in oklch, ${tc.color['neutral-700']}, transparent 80%)`, //colors.neutral[700],
      text: tc.color['gray-300'],
      placeholder: tc.color['gray-500'],
      border: tc.color['neutral-600'],
      label: tc.color['gray-400'],
    },
  },
});

export const lightTheme = createTheme(lc, {
  color: {
    background: tc.color['gray-100'],
    foreground: tc.color['neutral-700'],
    border: tc.color['neutral-300'],
    focusRing: tc.color['blue-400'],
    error: tc.color['red-400'],
    header: {
      bg: 'rgb(222, 226, 230)',
      text: 'rgb(217, 72, 15)',
      logo: 'rgb(217, 72, 15)',
      icon: 'rgb(25, 113, 194)',
    },
    menu: {
      bg: 'transparent',
      text: tc.color['gray-600'],
      border: tc.color['gray-300'],
      hover: {
        bg: tc.color['gray-200'],
      },
      selected: {
        bg: 'rgb(208, 235, 255)',
        text: 'rgb(24, 100, 171)',
        border: 'rgb(116, 192, 252)',
      },
    },
    page: {
      title: 'rgb(43, 138, 62)',
    },
    button: {
      default: {
        bg: 'transparent',
        text: tc.color['gray-500'],
        border: tc.color['gray-400'],
        hover: {
          bg: '',
          border: '',
        },
      },
      primary: {
        bg: 'rgb(25, 113, 194)',
        text: tc.color['gray-100'],
        border: lc.color.button.primary.bg,
        hover: {
          bg: '',
          border: '',
        },
      },
    },
    tab: {
      text: tc.color['gray-500'],
      border: tc.color['gray-300'],
      selected: {
        text: tc.color['gray-800'],
        border: tc.color['blue-500'],
      },
    },
    toast: {
      bg: '#fff',
      text: tc.color['gray-700'],
      close: {
        text: tc.color['neutral-500'],
        hover: tc.color['neutral-400'],
      },
    },
    card: {
      bg: '#fff',
      text: lc.color.foreground,
      border: tc.color['zinc-300'],
    },
    input: {
      bg: '#fff',
      text: tc.color['gray-700'],
      placeholder: tc.color['gray-500'],
      border: tc.color['neutral-300'],
      label: tc.color['gray-600'],
    },
  },
});
