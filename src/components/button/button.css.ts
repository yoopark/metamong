import { recipe, type RecipeVariants } from '@vanilla-extract/recipes';

import { vars } from '@/styles/theme.css';

export const button = recipe({
  base: [
    { all: 'unset' },
    {
      transition: 'all 0.2s',
    },
  ],
  variants: {
    type: {
      default: {
        padding: '8px 14px',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 8,
        fontSize: vars.fontSize.sm,
      },
      icon: {
        padding: '2px 5px',
      },
    },
    disabled: {
      true: {
        opacity: 0.5,
        cursor: 'not-allowed',
      },
      false: {
        cursor: 'pointer',
      },
    },
    border: {
      true: {
        border: `1px solid ${vars.color.black}`,
      },
    },
    borderRadius: {
      sm: {
        borderRadius: 5,
      },
      md: {
        borderRadius: 10,
      },
      lg: {
        borderRadius: 20,
      },
      circle: {
        borderRadius: '50%',
      },
    },
    color: {
      white: {
        background: vars.color.white,
        color: vars.color.black,
      },
      black: {
        background: vars.color.black,
        color: vars.color.white,
      },
      gray: {
        background: vars.color.grayScale[100],
        color: vars.color.black,
      },
      error: {
        background: vars.color.semantic.error,
        color: vars.color.white,
      },
    },
  },
  compoundVariants: [
    {
      variants: {
        color: 'black',
        disabled: false,
      },
      style: {
        ':hover': {
          opacity: 0.8,
        },
        ':active': {
          opacity: 0.7,
        },
      },
    },
    {
      variants: {
        color: 'error',
        disabled: false,
      },
      style: {
        ':hover': {
          opacity: 0.8,
        },
        ':active': {
          opacity: 0.7,
        },
      },
    },
    {
      variants: {
        color: 'white',
        disabled: false,
      },
      style: {
        ':hover': {
          filter: 'brightness(0.9)',
        },
        ':active': {
          filter: 'brightness(0.8)',
        },
      },
    },
    {
      variants: {
        color: 'gray',
        disabled: false,
      },
      style: {
        ':hover': {
          filter: 'brightness(0.95)',
        },
        ':active': {
          filter: 'brightness(0.9)',
        },
      },
    },
  ],
  defaultVariants: {
    type: 'default',
    border: false,
    borderRadius: 'sm',
    color: 'black',
    disabled: false,
  },
});

export type ButtonVariants = RecipeVariants<typeof button>;
