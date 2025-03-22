import clsx from 'clsx';
import { X } from 'lucide-react';

import { IconButton } from '@/components/icon-button';
import type { CustomToastLevel } from '@/types/custom-toast';

interface InlineToastProps {
  id: string;
  level?: CustomToastLevel;
  onClose?: (id: string) => void;
  children: React.ReactNode;
}

export function InlineToast({ id, level = 'success', onClose, children }: InlineToastProps) {
  return (
    <div className="toast toast-inline">
      <div className={clsx('left-indicator', level)} />
      <div className="test-content">{children}</div>
      <IconButton icon={X} size={16} onPress={onClose ? () => onClose(id) : undefined} />
    </div>
  );
}
