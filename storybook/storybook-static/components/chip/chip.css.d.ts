import { RecipeVariants } from '@vanilla-extract/recipes';
export declare const chip: import("@vanilla-extract/recipes").RuntimeFn<{
    border: {
        true: {
            border: `1px solid var(--${string})` | `1px solid var(--${string}, ${string})` | `1px solid var(--${string}, ${number})`;
        };
    };
    borderRadius: {
        none: {
            borderRadius: number;
        };
        sm: {
            borderRadius: number;
        };
        md: {
            borderRadius: number;
        };
    };
    color: {
        white: {
            background: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            color: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        };
        black: {
            background: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            color: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        };
        gray: {
            background: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            color: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        };
        error: {
            background: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            color: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        };
    };
}>;
export type ChipVariants = RecipeVariants<typeof chip>;
