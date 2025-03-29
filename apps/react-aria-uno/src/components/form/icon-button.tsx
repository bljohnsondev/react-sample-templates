import clsx from 'clsx';
import type { LucideIcon } from 'lucide-react';
import { Button as RaButton, type ButtonProps as RaButtonProps } from 'react-aria-components';

interface ButtonProps extends RaButtonProps {
  icon: LucideIcon;
  size?: number;
  fill?: boolean;
  className?: string;
}

export function IconButton({ icon: Icon, size = 20, fill = false, className, ...props }: ButtonProps) {
  return (
    <RaButton {...props} className={clsx('inline-flex items-center justify-center rounded-md shadow-xs', className)}>
      <Icon size={size} fill={fill ? 'currentColor' : undefined} />
    </RaButton>
  );
}
