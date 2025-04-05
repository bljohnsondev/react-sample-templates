import { createTheme } from '@vanilla-extract/css';

import { themeContract as tc } from '@/contracts/theme-contract.css';

import { colors } from './colors';

export const defaultTheme = createTheme(tc, {
  color: colors,
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
  fontFamily: {
    systemUi: 'system-ui, sans-serif',
    transitional: 'Charter, Bitstream Charter, Sitka Text, Cambria, serif',
    oldStyle: 'Iowan Old Style, Palatino Linotype, URW Palladio L, P052, serif',
    humanist: 'Seravek, Gill Sans Nova, Ubuntu, Calibri, DejaVu Sans, source-sans-pro, sans-serif',
    geometricHumanist: 'Avenir, Montserrat, Corbel, URW Gothic, source-sans-pro, sans-serif',
    classicalHumanist: 'Optima, Candara, Noto Sans, source-sans-pro, sans-serif',
    neoGrotesque: 'Inter, Roboto, Helvetica Neue, Arial Nova, Nimbus Sans, Arial, sans-serif',
    monospaceSlabSerif: 'Nimbus Mono PS, Courier New, monospace',
    monospaceCode:
      'Dank Mono, Operator Mono, Inconsolata, Fira Mono, ui-monospace, SF Mono,Monaco, Droid Sans Mono, Source Code Pro, Cascadia Code,Menlo, Consolas, DejaVu Sans Mono, monospace',
    industrial:
      'Bahnschrift, DIN Alternate, Franklin Gothic Medium, Nimbus Sans Narrow, sans-serif-condensed, sans-serif',
    roundedSans:
      'ui-rounded, Hiragino Maru Gothic ProN, Quicksand, Comfortaa, Manjari, Arial Rounded MT, Arial Rounded MT Bold, Calibri, source-sans-pro, sans-serif',
    slabSerif: 'Rockwell, Rockwell Nova, Roboto Slab, DejaVu Serif, Sitka Small, serif',
    antique: 'Superclarendon, Bookman Old Style, URW Bookman, URW Bookman L, Georgia Pro, Georgia, serif',
    didone: 'Didot, Bodoni MT, Noto Serif Display, URW Palladio L, P052, Sylfaen, serif',
    handwritten: 'Segoe Print, Bradley Hand, Chilanka, TSCu_Comic, casual, cursive',
  },
  fontSize: {
    xxs: '0.625rem',
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
  letterSpacing: {
    denser: '-0.03em',
    dense: '-0.015em',
    normal: 'normal',
    loose: '0.075em',
    looser: '0.15em',
  },
  lineHeight: {
    denser: '1',
    dense: '1.4',
    normal: '1.8',
    loose: '2.2',
    looser: '2.6',
  },
  borderRadius: {
    sm: '0.1875rem',
    md: '0.25rem',
    lg: '0.5rem',
    xl: '1rem',
    circle: '50%',
    pill: '9999px',
  },
  borderWidth: {
    '0': '0px',
    '1': '1px',
    '2': '2px',
    '4': '4px',
    '8': '8px',
  },
  shadow: {
    xs: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
    sm: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
    md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
    lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
    xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
  },
});
