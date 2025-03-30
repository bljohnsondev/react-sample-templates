import clsx from 'clsx';
import { X } from 'lucide-react';
import { toast as sonnerToast } from 'sonner';

import type { CustomToast } from '@/types/custom-toast';

import { IconButton } from '@/components/form/icon-button';

export function toast(toast: CustomToast) {
  return sonnerToast.custom(id => <Toast id={id} toast={toast} />);
}

interface ToastProps {
  id?: string | number;
  toast: CustomToast;
  onClose?: (id: string) => void;
  className?: string;
}

export function Toast({ id, toast, onClose, className }: ToastProps) {
  const barBackground = `bg-toast-${toast.level ?? 'success'}`;

  function handleClose() {
    // dismiss with the internal sonner id
    if (id) sonnerToast.dismiss(id);

    // handle app-related dismiss with the toast id which is different than sonner id
    if (onClose) onClose(toast.id);
  }

  return (
    <div
      className={clsx(
        'flex items-center gap-3 rounded-md bg-toast-bg text-toast-text dark:(bg-dark-toast-bg text-dark-toast-text) text-sm shadow-md md:w-[340px]',
        className
      )}
    >
      <div className={`self-stretch w-[5px] min-w-[5px] m-[4px] rounded-md ${barBackground}`} />
      <div className="py-4">{toast.message}</div>
      <div className="ml-auto leading-none mr-3 text-toast-close-text hover:text-toast-close-hover-text dark:(text-dark-toast-close-text hover:text-dark-toast-close-hover-text)">
        <IconButton icon={X} size={16} onPress={handleClose} />
      </div>
    </div>
  );
}
