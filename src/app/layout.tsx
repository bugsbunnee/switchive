import type { Metadata } from "next";
import { Montserrat } from "next/font/google";

import QueryClientProvider from "@/app/_providers/QueryClientProvider";
import ThemeProvider from "@/app/_providers/ThemeProvider";
import ScrollProgress from '@/app/_components/ScrollProgress';

import "@radix-ui/themes/styles.css";
import "./globals.css";
import "./theme-config.css";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Switchive",
  description: "Marcel's Switchive Assessment",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/icon?<generated>" type="image/png" sizes="32x32" />
      </head>
      <body className={montserrat.className}>
        <ScrollProgress />
        
        <QueryClientProvider>
          <ThemeProvider>
            {children}
          </ThemeProvider>
        </QueryClientProvider>
      </body>
    </html>
  );
}
