import { create } from 'zustand';

interface AppState {
  isFirstLoad: boolean;
  homePageScroll?: any;
  setHomePageScroll?: (e: any) => any;
}

const useAppStore = create<AppState>((set) => ({
  isFirstLoad: true,
  setHomePageScroll: (e: any) => {
    set({ homePageScroll: e });
  },
}));

export default useAppStore;
