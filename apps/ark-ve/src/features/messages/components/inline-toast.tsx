import clsx from 'clsx';
import { XIcon } from 'lucide-react';

import type { Message } from './messages-page';

import { close, content, indicatorVariant, root, rootInline } from '@/components/toast/toast.css';

interface InlineToastProps {
  message: Message;
  onClose: (id: string) => void;
}

export function InlineToast({ message, onClose }: InlineToastProps) {
  return (
    <div className={clsx(root, rootInline)}>
      <div className={content}>
        <div className={indicatorVariant.success} />
        <div>{message.message}</div>
      </div>
      <div className={close}>
        <button type="button" onClick={() => onClose(message.id)} className="unset">
          <XIcon size={16} />
        </button>
      </div>
    </div>
  );
}
