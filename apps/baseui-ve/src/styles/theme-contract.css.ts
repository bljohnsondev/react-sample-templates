import { createThemeContract } from '@vanilla-extract/css';

export const localContract = createThemeContract({
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
