import { type RecipeVariants } from '@vanilla-extract/recipes';
export declare const button: import("@vanilla-extract/recipes").RuntimeFn<{
    type: {
        default: {
            padding: "8px 14px";
            display: "inline-flex";
            alignItems: "center";
            justifyContent: "center";
            gap: number;
            fontSize: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        };
        icon: {
            padding: "2px 5px";
        };
    };
    disabled: {
        true: {
            opacity: number;
            cursor: "not-allowed";
        };
        false: {
            cursor: "pointer";
        };
    };
    border: {
        true: {
            border: `1px solid var(--${string})` | `1px solid var(--${string}, ${string})` | `1px solid var(--${string}, ${number})`;
        };
    };
    borderRadius: {
        sm: {
            borderRadius: number;
        };
        md: {
            borderRadius: number;
        };
        lg: {
            borderRadius: number;
        };
        circle: {
            borderRadius: "50%";
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
export type ButtonVariants = RecipeVariants<typeof button>;
