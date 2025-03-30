import { createThemeContract } from '@vanilla-extract/css';

export const contract = createThemeContract({
  fontSize: {
    xs: null,
    sm: null,
    md: null,
    lg: null,
    xl: null,
    xxl: null,
  },
  fontWeight: {
    light: null,
    normal: null,
    medium: null,
    semibold: null,
    bold: null,
  },
  radius: {
    '1': null,
    '2': null,
    '3': null,
    '4': null,
    '5': null,
    '6': null,
  },
  size: {
    '1': null,
    '2': null,
    '3': null,
    '4': null,
    '5': null,
    '6': null,
    '7': null,
    '8': null,
    '9': null,
    '10': null,
    '11': null,
    '12': null,
    '13': null,
    '14': null,
    '15': null,
    '16': null,
  },
  shadow: {
    xs: null,
    sm: null,
    md: null,
    lg: null,
    xl: null,
  },
  color: {
    background: null,
    foreground: null,
    border: null,
    focusRing: null,
    error: null,
    header: {
      bg: null,
      text: null,
      logo: null,
      icon: null,
    },
    menu: {
      bg: null,
      text: null,
      border: null,
      hover: {
        bg: null,
      },
      selected: {
        bg: null,
        text: null,
        border: null,
      },
    },
    page: {
      title: null,
    },
    button: {
      default: {
        bg: null,
        text: null,
        border: null,
        hover: {
          bg: null,
          border: null,
        },
      },
      primary: {
        bg: null,
        text: null,
        border: null,
        hover: {
          bg: null,
          border: null,
        },
      },
    },
    tab: {
      text: null,
      border: null,
      selected: {
        text: null,
        border: null,
      },
    },
    toast: {
      bg: null,
      text: null,
      close: {
        text: null,
        hover: null,
      },
    },
    card: {
      bg: null,
      text: null,
      border: null,
    },
    input: {
      bg: null,
      text: null,
      placeholder: null,
      border: null,
      label: null,
    },
  },
});
