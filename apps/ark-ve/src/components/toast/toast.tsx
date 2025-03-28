import { Toaster as ArkToaster, Toast } from '@ark-ui/react/toast';
import { XIcon } from 'lucide-react';

import { useToast } from './toast-provider';

import { close, content, indicatorVariant, root } from './toast.css';

type ToastType = 'success' | 'error' | 'loading' | 'info';

export function Toaster() {
  const toaster = useToast();

  return (
    <ArkToaster toaster={toaster}>
      {toast => {
        const indVariant = toast.type ? indicatorVariant[toast.type as ToastType] : indicatorVariant.info;
        return (
          <Toast.Root key={toast.id} className={root}>
            <Toast.Description className={content}>
              <div className={indVariant} />
              <div>{toast.description}</div>
            </Toast.Description>
            <Toast.CloseTrigger className={close}>
              <XIcon size={16} />
            </Toast.CloseTrigger>
          </Toast.Root>
        );
      }}
    </ArkToaster>
  );
}
