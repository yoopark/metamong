import React from 'react';
import { button, type ButtonVariants } from './button.css';

interface ButtonProps extends React.PropsWithChildren {
  variants?: ButtonVariants;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
}

export default function Button({
  children,
  variants,
  onClick,
  disabled,
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={button({ ...variants, disabled: disabled === true })}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
