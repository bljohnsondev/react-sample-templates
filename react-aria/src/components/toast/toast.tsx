import type { AriaToastProps } from '@react-aria/toast';
import { useToast } from '@react-aria/toast';
import type { ToastState } from '@react-stately/toast';
import clsx from 'clsx';
import { X } from 'lucide-react';
import { useRef } from 'react';

import { IconButton } from '@/components/icon-button';
import type { CustomToast } from '@/types/custom-toast';

interface ToastProps<T> extends AriaToastProps<T> {
  state: ToastState<T>;
}

export function Toast<T extends CustomToast>({ state, ...props }: ToastProps<T>) {
  const ref = useRef(null);
  const { toastProps, contentProps, titleProps, closeButtonProps } = useToast(props, state, ref);

  const toast = props.toast.content;

  return (
    <div {...toastProps} ref={ref} className="toast toast-popup">
      <div className={clsx('left-indicator', toast.level ?? 'success')} />
      <div {...contentProps} className="toast-content">
        <div {...titleProps}>{toast.message}</div>
      </div>
      <IconButton icon={X} size={16} {...closeButtonProps} />
    </div>
  );
}
