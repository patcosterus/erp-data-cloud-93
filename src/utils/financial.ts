
import { Cost, CostStatus } from '@/types/financial';

export const sortCostsByPriority = (costs: Cost[]): Cost[] => {
  return [...costs].sort((a, b) => {
    // Priority order: overdue > due_soon > on_time
    const statusPriority: Record<CostStatus, number> = {
      'overdue': 0,
      'due_soon': 1,
      'on_time': 2
    };

    if (statusPriority[a.status] !== statusPriority[b.status]) {
      return statusPriority[a.status] - statusPriority[b.status];
    }

    // If same status, sort by due date
    return new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime();
  });
};

export const calculateTotalsByType = (costs: Cost[]) => {
  return costs.reduce(
    (acc, cost) => {
      if (cost.type === 'fixed') {
        acc.fixed += cost.amount;
      } else {
        acc.variable += cost.amount;
      }
      acc.total += cost.amount;
      return acc;
    },
    { fixed: 0, variable: 0, total: 0 }
  );
};

export const getStatusConfig = (status: CostStatus) => {
  const configs = {
    'overdue': {
      variant: 'destructive' as const,
      label: 'Vencido',
      icon: 'AlertTriangle'
    },
    'due_soon': {
      variant: 'warning' as const,
      label: 'Vence em Breve',
      icon: 'Clock'
    },
    'on_time': {
      variant: 'success' as const,
      label: 'No Prazo',
      icon: 'CheckCircle'
    }
  };

  return configs[status];
};
