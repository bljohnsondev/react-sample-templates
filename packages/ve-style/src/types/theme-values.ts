import type { themeContract } from '@/main';

export type MapLeafNodesToString<T> = {
  [K in keyof T]: T[K] extends object ? MapLeafNodesToString<T[K]> : string;
};

export type ThemeValues = MapLeafNodesToString<typeof themeContract>;

// only pick the atomic properties from the theme contract
export type AtomicValues = MapLeafNodesToString<
  Pick<
    typeof themeContract,
    | 'size'
    | 'fontFamily'
    | 'fontSize'
    | 'fontWeight'
    | 'letterSpacing'
    | 'lineHeight'
    | 'borderRadius'
    | 'borderWidth'
    | 'shadow'
    | 'color'
  >
>;

export type ColorPaletteValues = MapLeafNodesToString<(typeof themeContract)['color']>;
