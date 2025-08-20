
import { useMemo } from 'react';

export const useCurrency = () => {
  const formatCurrency = useMemo(() => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    });
  }, []);

  const formatNumber = useMemo(() => {
    return new Intl.NumberFormat('pt-BR');
  }, []);

  const formatDate = useMemo(() => {
    return new Intl.DateTimeFormat('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });
  }, []);

  return {
    formatCurrency: (amount: number) => formatCurrency.format(amount),
    formatNumber: (number: number) => formatNumber.format(number),
    formatDate: (date: string | Date) => formatDate.format(new Date(date)),
  };
};
