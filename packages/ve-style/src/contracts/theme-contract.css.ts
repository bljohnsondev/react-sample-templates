import { createThemeContract } from '@vanilla-extract/css';

export const themeContract = createThemeContract({
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
  fontFamily: {
    systemUi: null,
    transitional: null,
    oldStyle: null,
    humanist: null,
    geometricHumanist: null,
    classicalHumanist: null,
    neoGrotesque: null,
    monospaceSlabSerif: null,
    monospaceCode: null,
    industrial: null,
    roundedSans: null,
    slabSerif: null,
    antique: null,
    didone: null,
    handwritten: null,
  },
  fontSize: {
    xxs: null,
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
  letterSpacing: {
    denser: null,
    dense: null,
    normal: null,
    loose: null,
    looser: null,
  },
  lineHeight: {
    denser: null,
    dense: null,
    normal: null,
    loose: null,
    looser: null,
  },
  borderRadius: {
    sm: null,
    md: null,
    lg: null,
    xl: null,
    circle: null,
    pill: null,
  },
  borderWidth: {
    '0': null,
    '1': null,
    '2': null,
    '4': null,
    '8': null,
  },
  shadow: {
    xs: null,
    sm: null,
    md: null,
    lg: null,
    xl: null,
  },
  color: {
    'slate-50': null,
    'slate-100': null,
    'slate-200': null,
    'slate-300': null,
    'slate-400': null,
    'slate-500': null,
    'slate-600': null,
    'slate-700': null,
    'slate-800': null,
    'slate-900': null,
    'slate-950': null,
    'gray-50': null,
    'gray-100': null,
    'gray-200': null,
    'gray-300': null,
    'gray-400': null,
    'gray-500': null,
    'gray-600': null,
    'gray-700': null,
    'gray-800': null,
    'gray-900': null,
    'gray-950': null,
    'zinc-50': null,
    'zinc-100': null,
    'zinc-200': null,
    'zinc-300': null,
    'zinc-400': null,
    'zinc-500': null,
    'zinc-600': null,
    'zinc-700': null,
    'zinc-800': null,
    'zinc-900': null,
    'zinc-950': null,
    'neutral-50': null,
    'neutral-100': null,
    'neutral-200': null,
    'neutral-300': null,
    'neutral-400': null,
    'neutral-500': null,
    'neutral-600': null,
    'neutral-700': null,
    'neutral-800': null,
    'neutral-900': null,
    'neutral-950': null,
    'stone-50': null,
    'stone-100': null,
    'stone-200': null,
    'stone-300': null,
    'stone-400': null,
    'stone-500': null,
    'stone-600': null,
    'stone-700': null,
    'stone-800': null,
    'stone-900': null,
    'stone-950': null,
    'red-50': null,
    'red-100': null,
    'red-200': null,
    'red-300': null,
    'red-400': null,
    'red-500': null,
    'red-600': null,
    'red-700': null,
    'red-800': null,
    'red-900': null,
    'red-950': null,
    'orange-50': null,
    'orange-100': null,
    'orange-200': null,
    'orange-300': null,
    'orange-400': null,
    'orange-500': null,
    'orange-600': null,
    'orange-700': null,
    'orange-800': null,
    'orange-900': null,
    'orange-950': null,
    'amber-50': null,
    'amber-100': null,
    'amber-200': null,
    'amber-300': null,
    'amber-400': null,
    'amber-500': null,
    'amber-600': null,
    'amber-700': null,
    'amber-800': null,
    'amber-900': null,
    'amber-950': null,
    'yellow-50': null,
    'yellow-100': null,
    'yellow-200': null,
    'yellow-300': null,
    'yellow-400': null,
    'yellow-500': null,
    'yellow-600': null,
    'yellow-700': null,
    'yellow-800': null,
    'yellow-900': null,
    'yellow-950': null,
    'lime-50': null,
    'lime-100': null,
    'lime-200': null,
    'lime-300': null,
    'lime-400': null,
    'lime-500': null,
    'lime-600': null,
    'lime-700': null,
    'lime-800': null,
    'lime-900': null,
    'lime-950': null,
    'green-50': null,
    'green-100': null,
    'green-200': null,
    'green-300': null,
    'green-400': null,
    'green-500': null,
    'green-600': null,
    'green-700': null,
    'green-800': null,
    'green-900': null,
    'green-950': null,
    'emerald-50': null,
    'emerald-100': null,
    'emerald-200': null,
    'emerald-300': null,
    'emerald-400': null,
    'emerald-500': null,
    'emerald-600': null,
    'emerald-700': null,
    'emerald-800': null,
    'emerald-900': null,
    'emerald-950': null,
    'teal-50': null,
    'teal-100': null,
    'teal-200': null,
    'teal-300': null,
    'teal-400': null,
    'teal-500': null,
    'teal-600': null,
    'teal-700': null,
    'teal-800': null,
    'teal-900': null,
    'teal-950': null,
    'cyan-50': null,
    'cyan-100': null,
    'cyan-200': null,
    'cyan-300': null,
    'cyan-400': null,
    'cyan-500': null,
    'cyan-600': null,
    'cyan-700': null,
    'cyan-800': null,
    'cyan-900': null,
    'cyan-950': null,
    'sky-50': null,
    'sky-100': null,
    'sky-200': null,
    'sky-300': null,
    'sky-400': null,
    'sky-500': null,
    'sky-600': null,
    'sky-700': null,
    'sky-800': null,
    'sky-900': null,
    'sky-950': null,
    'blue-50': null,
    'blue-100': null,
    'blue-200': null,
    'blue-300': null,
    'blue-400': null,
    'blue-500': null,
    'blue-600': null,
    'blue-700': null,
    'blue-800': null,
    'blue-900': null,
    'blue-950': null,
    'indigo-50': null,
    'indigo-100': null,
    'indigo-200': null,
    'indigo-300': null,
    'indigo-400': null,
    'indigo-500': null,
    'indigo-600': null,
    'indigo-700': null,
    'indigo-800': null,
    'indigo-900': null,
    'indigo-950': null,
    'violet-50': null,
    'violet-100': null,
    'violet-200': null,
    'violet-300': null,
    'violet-400': null,
    'violet-500': null,
    'violet-600': null,
    'violet-700': null,
    'violet-800': null,
    'violet-900': null,
    'violet-950': null,
    'purple-50': null,
    'purple-100': null,
    'purple-200': null,
    'purple-300': null,
    'purple-400': null,
    'purple-500': null,
    'purple-600': null,
    'purple-700': null,
    'purple-800': null,
    'purple-900': null,
    'purple-950': null,
    'fuchsia-50': null,
    'fuchsia-100': null,
    'fuchsia-200': null,
    'fuchsia-300': null,
    'fuchsia-400': null,
    'fuchsia-500': null,
    'fuchsia-600': null,
    'fuchsia-700': null,
    'fuchsia-800': null,
    'fuchsia-900': null,
    'fuchsia-950': null,
    'pink-50': null,
    'pink-100': null,
    'pink-200': null,
    'pink-300': null,
    'pink-400': null,
    'pink-500': null,
    'pink-600': null,
    'pink-700': null,
    'pink-800': null,
    'pink-900': null,
    'pink-950': null,
    'rose-50': null,
    'rose-100': null,
    'rose-200': null,
    'rose-300': null,
    'rose-400': null,
    'rose-500': null,
    'rose-600': null,
    'rose-700': null,
    'rose-800': null,
    'rose-900': null,
    'rose-950': null,
  },
});
