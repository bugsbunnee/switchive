import { ThemeProps } from '@radix-ui/themes';
import { create } from 'zustand';
import { setDefaultAppearance } from '@/app/_utils/lib';

type Appearance = ThemeProps['appearance'];

export interface ThemeStore {
    theme: Appearance;
    toggleTheme: () => void;
}

const useThemeStore = create<ThemeStore>((set) => ({
    theme: setDefaultAppearance(),
    toggleTheme: () => set((store) => ({ theme: store.theme === 'dark' ? 'light' : 'dark' }))
}));

export default useThemeStore;