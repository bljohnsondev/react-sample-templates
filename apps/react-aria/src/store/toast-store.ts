import type { ToastState } from '@react-stately/toast';
import { create } from 'zustand';

import type { CustomToast } from '@/types/custom-toast';

interface ToastStore {
  toastState: ToastState<CustomToast> | null;
  setToastState: (state: ToastState<CustomToast>) => void;
  loading: boolean;
  setLoading: (state: boolean) => void;
}

export const useToastStore = create<ToastStore>(set => ({
  toastState: null,
  setToastState: state => set({ toastState: state }),
  loading: false,
  setLoading: (ld: boolean) => set({ loading: ld }),
}));
