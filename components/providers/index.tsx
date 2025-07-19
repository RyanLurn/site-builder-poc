"use client";

import QueryClientProvider from "@/components/providers/query-client";
import { ThemeProvider } from "@/components/providers/theme";

export default function AppProviders({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <QueryClientProvider>{children}</QueryClientProvider>
    </ThemeProvider>
  );
}
