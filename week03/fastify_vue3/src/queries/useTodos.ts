import { useQuery } from '@tanstack/vue-query'

export const useTodos = () => useQuery({
    queryKey: ['todos'],
    queryFn: async () => [ { id: 1, title: 'test', }] ,
  })