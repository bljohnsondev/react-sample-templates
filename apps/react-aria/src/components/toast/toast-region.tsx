import { type AriaToastRegionProps, useToastRegion } from '@react-aria/toast';
import type { ToastState } from '@react-stately/toast';
import { useRef } from 'react';

import type { CustomToast } from '@/types/custom-toast';

import { Toast } from './toast';

interface ToastRegionProps<T> extends AriaToastRegionProps {
  state: ToastState<T>;
}

export function ToastRegion<T extends CustomToast>({ state, ...props }: ToastRegionProps<T>) {
  const ref = useRef(null);
  const { regionProps } = useToastRegion(props, state, ref);

  return (
    <div {...regionProps} ref={ref} className="toast-region">
      {state.visibleToasts.map(toast => (
        <Toast key={toast.key} toast={toast} state={state} />
      ))}
    </div>
  );
}
