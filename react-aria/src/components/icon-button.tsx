import clsx from 'clsx';
import type { LucideIcon } from 'lucide-react';
import { Button, type PressEvent } from 'react-aria-components';

interface IconButtonProps {
  icon: LucideIcon;
  fill?: boolean;
  size?: number;
  className?: string;
  onPress?: (e: PressEvent) => void;
}
export function IconButton({ icon: Icon, fill = false, size = 20, className, onPress }: IconButtonProps) {
  return (
    <Button onPress={onPress} className={clsx(className, 'react-aria-Button', 'icon-button')}>
      <Icon size={size} fill={fill ? 'currentColor' : 'none'} />
    </Button>
  );
}
