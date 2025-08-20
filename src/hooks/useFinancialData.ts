
import { useQuery } from '@tanstack/react-query';
import { financialService } from '@/services/financialService';

export const useFinancialData = () => {
  const costsQuery = useQuery({
    queryKey: ['costs'],
    queryFn: financialService.getCosts,
    staleTime: 5 * 60 * 1000, // 5 minutes
  });

  const projectsQuery = useQuery({
    queryKey: ['projects'],
    queryFn: financialService.getProjects,
    staleTime: 5 * 60 * 1000,
  });

  const clientsQuery = useQuery({
    queryKey: ['clients'],
    queryFn: financialService.getClients,
    staleTime: 5 * 60 * 1000,
  });

  const expensesQuery = useQuery({
    queryKey: ['expenses'],
    queryFn: financialService.getExpenses,
    staleTime: 10 * 60 * 1000,
  });

  const kpisQuery = useQuery({
    queryKey: ['kpis'],
    queryFn: financialService.getKPIs,
    staleTime: 2 * 60 * 1000,
  });

  return {
    costs: {
      data: costsQuery.data || [],
      isLoading: costsQuery.isLoading,
      error: costsQuery.error,
      refetch: costsQuery.refetch,
    },
    projects: {
      data: projectsQuery.data || [],
      isLoading: projectsQuery.isLoading,
      error: projectsQuery.error,
      refetch: projectsQuery.refetch,
    },
    clients: {
      data: clientsQuery.data || [],
      isLoading: clientsQuery.isLoading,
      error: clientsQuery.error,
      refetch: clientsQuery.refetch,
    },
    expenses: {
      data: expensesQuery.data || [],
      isLoading: expensesQuery.isLoading,
      error: expensesQuery.error,
      refetch: expensesQuery.refetch,
    },
    kpis: {
      data: kpisQuery.data,
      isLoading: kpisQuery.isLoading,
      error: kpisQuery.error,
      refetch: kpisQuery.refetch,
    },
  };
};
