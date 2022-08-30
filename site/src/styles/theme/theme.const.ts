import breakpoints from './breakpoints.const';
import paletteLight from './palette-light.const';
import shadows from './shadows.const';
import { typography } from './typography.const';
import { createTheme, PaletteOptions } from '@mui/material/styles';
import { components } from './components.const';

const theme = createTheme({
  breakpoints: {
    values: {
      xs: breakpoints.xs,
      sm: breakpoints.sm,
      md: breakpoints.md,
      lg: breakpoints.lg,
      xl: breakpoints.xl,
    },
  },
  palette: paletteLight as PaletteOptions,

  spacing: factor => `${0.25 * factor}rem`,

  typography: typography,

  shadows: [
    'none',
    shadows['1'],
    shadows['2'],
    shadows['3'],
    shadows['4'],
    shadows['5'],
    shadows['6'],
    shadows['6'],
    shadows['6'],
    shadows['6'],
    shadows['6'],
    shadows['6'],
    shadows['6'],
    shadows['6'],
    shadows['6'],
    shadows['6'],
    shadows['6'],
    shadows['6'],
    shadows['6'],
    shadows['6'],
    shadows['6'],
    shadows['6'],
    shadows['6'],
    shadows['6'],
    shadows['6'],
  ],

  components: components,
});

export default theme;
