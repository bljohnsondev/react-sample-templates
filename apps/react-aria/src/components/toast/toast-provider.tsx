import { useToastState } from '@react-stately/toast';
import { useEffect } from 'react';

import { useToastStore } from '@/store/toast-store';
import type { CustomToast } from '@/types/custom-toast';

import { ToastRegion } from './toast-region';

interface ToastProviderProps {
  children: React.ReactNode;
}

export function ToastProvider({ children, ...props }: ToastProviderProps) {
  const state = useToastState<CustomToast>({ maxVisibleToasts: 5 });
  const setToastState = useToastStore(store => store.setToastState);

  useEffect(() => {
    setToastState(state);
  }, [state, setToastState]);

  return (
    <>
      {children}
      {state.visibleToasts.length > 0 && <ToastRegion {...props} state={state} />}
    </>
  );
}
