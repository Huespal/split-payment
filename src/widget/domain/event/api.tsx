import { api } from '@/core/api';
import { ContextEvent } from '@/domain/event/types';
import { useMutation } from '@tanstack/react-query';

export const useCreateEvent = () => useMutation({
  mutationFn: (body: ContextEvent) =>
    api<ContextEvent>('events', 'POST', body)
});
