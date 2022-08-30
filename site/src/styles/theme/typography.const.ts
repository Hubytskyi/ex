import { baseFontSize, fontSizes, headingFont, primaryFont } from './fonts.const';
import { TypographyOptions } from "@mui/material/styles/createTypography"
import { Palette } from "@mui/material"

export const typography: TypographyOptions | ((palette: Palette) => TypographyOptions) = {
  fontFamily: primaryFont,
  htmlFontSize: baseFontSize,
  h1: {
    fontFamily: headingFont,
    fontSize: fontSizes.xl,
    fontWeight: 500,
    fontStyle: 'normal',
    lineHeight: 1.21,
    letterSpacing: 0,
  },
  h2: {
    fontFamily: headingFont,
    fontSize: fontSizes.lg,
    fontWeight: 400,
    fontStyle: 'normal',
    lineHeight: 1.2,
  },
  h3: {
    fontFamily: headingFont,
    fontSize: fontSizes.lg,
    fontWeight: 500,
    fontStyle: 'normal',
    lineHeight: 1.2,
  },
  h4: {
    fontFamily: headingFont,
    fontSize: fontSizes.md,
    fontWeight: 400,
    fontStyle: 'normal',
    lineHeight: 1,
  },
  h5: {
    fontFamily: headingFont,
    fontSize: fontSizes.base,
    fontWeight: 500,
    fontStyle: 'normal',
    lineHeight: 1,
  },
  h6: {
    fontFamily: headingFont,
    fontSize: fontSizes.sm,
    fontWeight: 500,
    fontStyle: 'normal',
    lineHeight: 1,
  },
  subtitle1: {
    fontSize: fontSizes.md,
    fontWeight: 500,
    fontStyle: 'normal',
    lineHeight: 1.33,
  },
  subtitle2: {
    fontSize: fontSizes.base,
    fontWeight: 500,
    fontStyle: 'normal',
    lineHeight: 1.63,
  },
  body1: {
    fontSize: fontSizes.base,
    fontWeight: 400,
    fontStyle: 'normal',
    lineHeight: 1.63,
  },
  body2: {
    fontSize: fontSizes.sm,
    fontWeight: 500,
    fontStyle: 'normal',
    lineHeight: 1.71,
  },
  button: {
    fontSize: fontSizes.base,
    fontWeight: 700,
  },
  caption: {
    fontSize: fontSizes.xs,
    fontWeight: 400,
    fontStyle: 'normal',
    lineHeight: 1.5,
  },
  overline: {
    fontSize: fontSizes.xxs,
    fontWeight: 500,
    fontStyle: 'normal',
    lineHeight: 1.33,
    textTransform: 'none',
  },
};
