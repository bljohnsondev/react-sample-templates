import { createToaster } from '@ark-ui/react/toast';
import { createContext, useContext } from 'react';

const toaster = createToaster({
  placement: 'top',
  gap: 24,
});

const ToastContext = createContext(toaster);

export const useToast = () => {
  return useContext(ToastContext);
};

interface ToastProviderProps {
  children: React.ReactNode;
}

export const ToastProvider = ({ children }: ToastProviderProps) => {
  return <ToastContext.Provider value={toaster}>{children}</ToastContext.Provider>;
};
