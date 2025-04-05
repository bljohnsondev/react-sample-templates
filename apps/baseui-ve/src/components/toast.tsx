import clsx from 'clsx';
import { X } from 'lucide-react';
import { toast as sonnerToast } from 'sonner';

import type { CustomToast } from '@/types/custom-toast';

import { close, indicatorVariant, toastVariant } from './toast.css';

export function toast(toast: CustomToast) {
  return sonnerToast.custom(id => <Toast id={id} toast={toast} />);
}

type ToastVariant = 'normal' | 'inline';

interface ToastProps {
  id?: string | number;
  variant?: ToastVariant;
  toast: CustomToast;
  onClose?: (id: string) => void;
  className?: string;
}

export function Toast({ id, variant = 'normal', toast, onClose, className }: ToastProps) {
  const indVariant = toast.level ? indicatorVariant[toast.level] : indicatorVariant.success;

  function handleClose() {
    // dismiss with the internal sonner id
    if (id) sonnerToast.dismiss(id);

    // handle app-related dismiss with the toast id which is different than sonner id
    if (onClose) onClose(toast.id);
  }

  return (
    <div className={clsx(toastVariant[variant], className)}>
      <div className={indVariant} />
      <div>{toast.message}</div>
      <div className={close}>
        <button type="button" onClick={handleClose} className="unset">
          <X size={16} />
        </button>
      </div>
    </div>
  );
}
