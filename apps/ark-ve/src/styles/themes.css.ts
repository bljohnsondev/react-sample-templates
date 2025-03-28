import { createTheme } from '@vanilla-extract/css';

import { colors } from './colors';
import { contract } from './theme-contract.css';

const tokens = {
  fontSize: {
    xs: '0.75rem',
    sm: '0.875rem',
    md: '1rem',
    lg: '1.25rem',
    xl: '1.5rem',
    xxl: '2.25rem',
  },
  fontWeight: {
    light: '300',
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
  },
  radius: {
    '1': '2px',
    '2': '5px',
    '3': '1rem',
    '4': '2rem',
    '5': '4rem',
    '6': '8rem',
  },
  shadow: {
    xs: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
    sm: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
    md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
    lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
    xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
  },
  size: {
    '1': '.25rem',
    '2': '.5rem',
    '3': '.75rem',
    '4': '1rem',
    '5': '1.25rem',
    '6': '1.5rem',
    '7': '1.75rem',
    '8': '2rem',
    '9': '3rem',
    '10': '4rem',
    '11': '5rem',
    '12': '7.5rem',
    '13': '10rem',
    '14': '15rem',
    '15': '20rem',
    '16': '30rem',
  },
};

export const darkTheme = createTheme(contract, {
  ...tokens,
  color: {
    background: 'rgb(33, 37, 41)',
    foreground: 'rgb(222, 226, 230)',
    border: 'rgba(53, 59, 65, 0.5)',
    error: colors.red[400],
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
        text: colors.gray[400],
        border: colors.gray[600],
        hover: {
          bg: '',
          border: '',
        },
      },
      primary: {
        bg: 'rgb(25, 113, 194)',
        text: contract.color.foreground,
        border: contract.color.button.primary.bg,
        hover: {
          bg: '',
          border: '',
        },
      },
    },
    tab: {
      text: colors.gray[400],
      border: colors.gray[700],
      selected: {
        text: colors.gray[200],
        border: colors.blue[500],
      },
    },
    toast: {
      bg: 'rgb(52, 58, 64)',
      text: colors.neutral[300],
    },
    card: {
      bg: `color-mix(in oklch, ${colors.zinc[700]}, transparent 60%)`,
      text: contract.color.foreground,
      border: colors.zinc[700],
    },
    input: {
      bg: `color-mix(in oklch, ${colors.neutral[700]}, transparent 80%)`, //colors.neutral[700],
      text: colors.gray[300],
      placeholder: colors.gray[500],
      border: colors.neutral[600],
      label: colors.gray[400],
    },
  },
});

export const lightTheme = createTheme(contract, {
  ...tokens,
  color: {
    background: colors.gray[100],
    foreground: colors.neutral[700],
    border: colors.neutral[300],
    error: colors.red[400],
    header: {
      bg: 'rgb(222, 226, 230)',
      text: 'rgb(217, 72, 15)',
      logo: 'rgb(217, 72, 15)',
      icon: 'rgb(25, 113, 194)',
    },
    menu: {
      bg: 'transparent',
      text: colors.gray[600],
      border: colors.gray[300],
      hover: {
        bg: colors.gray[200],
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
        text: colors.gray[500],
        border: colors.gray[400],
        hover: {
          bg: '',
          border: '',
        },
      },
      primary: {
        bg: 'rgb(25, 113, 194)',
        text: colors.gray[100],
        border: contract.color.button.primary.bg,
        hover: {
          bg: '',
          border: '',
        },
      },
    },
    tab: {
      text: colors.gray[500],
      border: colors.gray[300],
      selected: {
        text: colors.gray[800],
        border: colors.blue[500],
      },
    },
    toast: {
      bg: '#fff',
      text: colors.gray[700],
    },
    card: {
      bg: '#fff',
      text: contract.color.foreground,
      border: colors.zinc[700],
    },
    input: {
      bg: '#fff',
      text: colors.gray[700],
      placeholder: colors.gray[500],
      border: colors.neutral[300],
      label: colors.gray[600],
    },
  },
});
