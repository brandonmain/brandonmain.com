"use client";

import { ThemeProvider } from "next-themes";

export const ThemedLayout = (
  props: Readonly<{ children: React.ReactNode }>
) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      {props.children}
    </ThemeProvider>
  );
};
