import { getQueryClient } from '@/core/helpers/queryClient';
import {
  dehydrate, HydrationBoundary, QueryClientProvider
} from '@tanstack/react-query';
import { ReactNode } from 'react';

interface ProviderProps {
  children: ReactNode;
}

export default function Provider({ children }: ProviderProps) {
  const queryClient = getQueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <HydrationBoundary state={dehydrate(queryClient)}>
        {children}
      </HydrationBoundary>
    </QueryClientProvider>
  )
}
