import clsx from 'clsx';
import { Button as RaButton, type ButtonProps as RaButtonProps } from 'react-aria-components';

type VariantNames = 'default' | 'filled' | 'disabled';

type VariantStyles = {
  [key in VariantNames]?: string;
};

interface ButtonProps extends RaButtonProps {
  variant?: VariantNames;
}

const variantStyles: VariantStyles = {
  default:
    'bg-button-default-bg data-[hovered="true"]:bg-button-default-hover-bg border border-solid border-button-default-border',
  disabled: 'text-button-disabled-text bg-button-disabled-bg border-0',
  filled: 'bg-button-filled-bg data-[hovered="true"]:bg-button-filled-hover-bg border-0',
};

const baseStyles =
  'h-9 px-4 py-2 inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm text-button-base-text font-semibold shadow-xs';

export function Button({ variant = 'default', children, ...props }: ButtonProps) {
  return (
    <RaButton {...props} className={clsx(baseStyles, variantStyles[props.isDisabled ? 'disabled' : variant])}>
      {children}
    </RaButton>
  );
}
