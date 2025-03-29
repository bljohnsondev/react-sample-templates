import { create } from 'zustand';

interface AppStore {
  loading: boolean;
  setLoading: (state: boolean) => void;
}

export const useAppStore = create<AppStore>(set => ({
  loading: false,
  setLoading: (ld: boolean) => set({ loading: ld }),
}));
