'use client';

import { ThemeProvider } from 'next-themes';

export function Providers({ children }) {
    return (
        // <ThemeProvider attribute='class' defaultTheme='dark' disableTransitionOnChange>
        <ThemeProvider attribute='class' disableTransitionOnChange>
            {children}
        </ThemeProvider>
    );
}
