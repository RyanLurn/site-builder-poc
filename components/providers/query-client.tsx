"use client";

import { useState } from "react";
import {
  QueryClient,
  QueryClientProvider as TanStackQueryClientProvider
} from "@tanstack/react-query";

export default function QueryClientProvider({
  children
}: {
  children: React.ReactNode;
}) {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <TanStackQueryClientProvider client={queryClient}>
      {children}
    </TanStackQueryClientProvider>
  );
}
