import { create } from 'zustand';

interface AppState {
  isFirstLoad: boolean;
  homePageScroll?: any;
  setHomePageScroll?: (e: any) => any;
  setFirstLoad?: (value: boolean) => any;
}

const useAppStore = create<AppState>((set) => ({
  isFirstLoad: true,
  setHomePageScroll: (e: any) => {
    set({ homePageScroll: e });
  },
  setFirstLoad: (value: boolean) => {
    set({ isFirstLoad: value });
  },
}));

export default useAppStore;
