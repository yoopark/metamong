import React from 'react';
import { type ButtonVariants } from './button.css';
interface ButtonProps extends React.PropsWithChildren {
    variants?: ButtonVariants;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    disabled?: boolean;
}
export default function Button({ children, variants, onClick, disabled, }: ButtonProps): import("react/jsx-runtime").JSX.Element;
export {};
