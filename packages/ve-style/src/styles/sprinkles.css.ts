import { createSprinkles, defineProperties } from '@vanilla-extract/sprinkles';

import { themeContract as tc } from '@/contracts/theme-contract.css';

export interface Breakpoints {
  mobile: string;
  tablet: string;
  desktop: string;
}

export const breakpoints = {
  mobile: 'screen and (min-width: 0px)',
  tablet: 'screen and (min-width: 768px)',
  desktop: 'screen and (min-width: 1024px)',
};

/*
this is used if I want to add colors to sprinkles like 'button-bg', 'button-text', etc
for now I'm going to leave the component styling to style colors rather than special sprinkles
colors for each component like button-bg, button-text, etc

const colorStyles = {
  ...tc.color,
  ...componentColorStyles,
};
*/

const colorStyles = tc.color;

const responsiveProperties = defineProperties({
  conditions: {
    mobile: {},
    tablet: { '@media': breakpoints.tablet },
    desktop: { '@media': breakpoints.desktop },
  },
  defaultCondition: 'mobile',
  properties: {
    width: { ...tc.size, full: '100%', screen: '100vw', min: 'min-content', max: 'max-content' },
    height: { ...tc.size, full: '100%', screen: '100vh' },
    paddingTop: tc.size,
    paddingBottom: tc.size,
    paddingLeft: tc.size,
    paddingRight: tc.size,
    marginTop: tc.size,
    marginBottom: tc.size,
    marginLeft: tc.size,
    marginRight: tc.size,
    display: ['none', 'block', 'inline-block', 'flex', 'inline-flex', 'grid', 'inline-grid'],
    flexDirection: ['row', 'column', 'row-reverse', 'column-reverse'],
  },
  shorthands: {
    padding: ['paddingTop', 'paddingBottom', 'paddingLeft', 'paddingRight'],
    p: ['paddingTop', 'paddingBottom', 'paddingLeft', 'paddingRight'],
    px: ['paddingLeft', 'paddingRight'],
    py: ['paddingTop', 'paddingBottom'],
    pt: ['paddingTop'],
    pb: ['paddingBottom'],
    pl: ['paddingLeft'],
    pr: ['paddingRight'],
    margin: ['marginTop', 'marginBottom', 'marginLeft', 'marginRight'],
    m: ['marginTop', 'marginBottom', 'marginLeft', 'marginRight'],
    mx: ['marginLeft', 'marginRight'],
    my: ['marginTop', 'marginBottom'],
    mt: ['marginTop'],
    mb: ['marginBottom'],
    ml: ['marginLeft'],
    mr: ['marginRight'],
    size: ['width', 'height'],
  },
});

const staticProperties = defineProperties({
  properties: {
    color: colorStyles,
    backgroundColor: colorStyles,
    borderColor: colorStyles,
    fontFamily: tc.fontFamily,
    fontWeight: tc.fontWeight,
    lineHeight: tc.lineHeight,
    letterSpacing: tc.letterSpacing,
    borderRadius: tc.borderRadius,
    borderStyle: ['none', 'solid', 'dashed', 'dotted'],
  },
});

export const sprinkles = createSprinkles(responsiveProperties, staticProperties);

export type Sprinkles = Parameters<typeof sprinkles>[0];
