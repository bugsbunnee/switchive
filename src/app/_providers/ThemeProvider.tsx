"use client"

import React, { PropsWithChildren } from 'react';
import { Theme } from '@radix-ui/themes';

import useThemeStore from '@/app/_store/theme';

const ThemeProvider: React.FC<PropsWithChildren> = ({ children }) => {
    const { theme } = useThemeStore();

    return ( 
        <Theme accentColor='purple' appearance={theme} radius='small'>
            {children}
        </Theme>
     );
}
 
export default ThemeProvider;

