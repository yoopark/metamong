import { RecipeVariants, recipe } from '@vanilla-extract/recipes';

import { vars } from '@/styles/theme.css';

export const chip = recipe({
  base: {
    padding: '4px 10px',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
    fontSize: vars.fontSize.xs,
    fontWeight: vars.fontWeight.medium,
  },
  variants: {
    border: {
      true: {
        border: `1px solid ${vars.color.black}`,
      },
    },
    borderRadius: {
      none: {
        borderRadius: 0,
      },
      sm: {
        borderRadius: 5,
      },
      md: {
        borderRadius: 10,
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
  defaultVariants: {
    border: false,
    borderRadius: 'md',
    color: 'black',
  },
});

export type ChipVariants = RecipeVariants<typeof chip>;
