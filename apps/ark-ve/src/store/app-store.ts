import { create } from 'zustand';

type Theme = 'dark' | 'light';

interface AppStore {
  theme: Theme;
  setTheme: (th: Theme) => void;
  loading: boolean;
  setLoading: (state: boolean) => void;
}

export const useAppStore = create<AppStore>(set => ({
  theme: 'dark',
  setTheme: (th: Theme) => set({ theme: th }),
  loading: false,
  setLoading: (ld: boolean) => set({ loading: ld }),
}));
