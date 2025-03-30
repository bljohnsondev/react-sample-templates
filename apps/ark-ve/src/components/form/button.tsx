import clsx from 'clsx';
import { type ButtonHTMLAttributes, forwardRef } from 'react';

import { buttonVariant, disabledButton } from './button.css';

export type ButtonVariants = 'default' | 'primary';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  type?: 'button' | 'submit' | 'reset';
  ariaLabel?: string;
  variant?: ButtonVariants;
  disabled?: boolean;
  children: React.ReactNode;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ type = 'button', ariaLabel, variant = 'default', disabled, children, ...rest }, ref) => {
    return (
      <button
        type={type}
        className={clsx(buttonVariant[variant], disabled && disabledButton)}
        disabled={disabled}
        aria-label={ariaLabel}
        aria-disabled={disabled}
        {...rest}
        ref={ref}
      >
        {children}
      </button>
    );
  }
);
