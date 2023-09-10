import { createGlobalTheme } from '@vanilla-extract/css';

export const vars = createGlobalTheme(':root', {
  color: {
    white: '#F7F8F9',
    black: '#09090B',
    grayScale: {
      100: '#EEEEEE',
      200: '#DDDDDD',
      300: '#BBBBBB',
      400: '#999999',
      500: '#767676', // web accessibility minimum
      600: '#555555',
      700: '#333333',
      800: '#111111',
    },
    semantic: {
      error: '#FF2020',
      warning: '#FFC043',
      success: '#00A86B',
    },
  },
  fontSize: {
    xs: '12px',
    sm: '14px',
    md: '16px',
    lg: '18px',
    xl: '20px',
    xxl: '24px',
    xxxl: '28px',
  },
  fontWeight: {
    thin: '100',
    extralight: '200',
    light: '300',
    regular: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
    extrabold: '800',
    black: '900',
  },
});
