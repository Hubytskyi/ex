import colors from './colors.const';

export const paletteLight = {
  type: 'light',
  common: {
    black: colors.dark,
    white: colors.light,
  },
  primary: {
    light: colors.primary.light,
    main: colors.primary.main,
    dark: colors.primary.dark,
  },
  secondary: {
    main: colors.secondary.main,
    light: colors.secondary.light,
  },
  error: {
    main: colors.error.main,
  },
  warning: {
    main: colors.warning.main,
  },
  info: {
    main: colors.info.main,
  },
  success: {
    main: colors.success.main,
  },
  grey: {
    200: colors.grey['200'],
    300: colors.grey['300'],
    400: colors.grey['400'],
    500: colors.grey['500'],
    550: colors.grey['550'],
    600: colors.grey['600'],
  },
};

export default paletteLight;
