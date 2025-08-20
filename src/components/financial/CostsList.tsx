
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { CalendarDays, DollarSign, AlertTriangle, CheckCircle, Clock } from "lucide-react";
import { useFinancialData } from "@/hooks/useFinancialData";
import { useCurrency } from "@/hooks/useCurrency";
import { sortCostsByPriority, calculateTotalsByType, getStatusConfig } from "@/utils/financial";
import { Cost } from "@/types/financial";

const StatusBadge = ({ status }: { status: Cost['status'] }) => {
  const config = getStatusConfig(status);
  
  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case 'AlertTriangle':
        return AlertTriangle;
      case 'Clock':
        return Clock;
      case 'CheckCircle':
        return CheckCircle;
      default:
        return AlertTriangle;
    }
  };

  const IconComponent = getIconComponent(config.icon);

  return (
    <Badge variant={config.variant as any}>
      <IconComponent className="w-3 h-3 mr-1" />
      {config.label}
    </Badge>
  );
};

const CostItem = ({ cost }: { cost: Cost }) => {
  const { formatCurrency, formatDate } = useCurrency();

  const getTypeIcon = (type: string) => {
    return type === "fixed" ? (
      <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
        <DollarSign className="w-4 h-4 text-primary" />
      </div>
    ) : (
      <div className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center">
        <CalendarDays className="w-4 h-4 text-accent" />
      </div>
    );
  };

  return (
    <div className="flex items-center justify-between p-4 bg-background/50 rounded-lg border border-border/50 hover:bg-background/70 transition-colors">
      <div className="flex items-center gap-3">
        {getTypeIcon(cost.type)}
        <div>
          <h4 className="font-medium text-foreground">{cost.name}</h4>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span className="capitalize">
              {cost.type === 'fixed' ? 'Fixo' : 'Variável'}
            </span>
            <span>•</span>
            <span>Vence: {formatDate(cost.dueDate)}</span>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <div className="text-right">
          <div className="font-semibold text-foreground">
            {formatCurrency(cost.amount)}
          </div>
        </div>
        <StatusBadge status={cost.status} />
      </div>
    </div>
  );
};

const CostsSummary = ({ costs }: { costs: Cost[] }) => {
  const { formatCurrency } = useCurrency();
  const totals = calculateTotalsByType(costs);

  return (
    <div className="mt-6 pt-4 border-t border-border/50">
      <div className="grid grid-cols-2 gap-4 text-sm">
        <div className="flex justify-between">
          <span className="text-muted-foreground">Total Fixos:</span>
          <span className="font-medium text-foreground">
            {formatCurrency(totals.fixed)}
          </span>
        </div>
        <div className="flex justify-between">
          <span className="text-muted-foreground">Total Variáveis:</span>
          <span className="font-medium text-foreground">
            {formatCurrency(totals.variable)}
          </span>
        </div>
      </div>
    </div>
  );
};

export function CostsList() {
  const { costs } = useFinancialData();

  if (costs.isLoading) {
    return (
      <Card className="card-gradient">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <DollarSign className="w-5 h-5 text-primary" />
            Custos Fixos e Variáveis
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <Skeleton key={i} className="h-20 w-full" />
            ))}
          </div>
        </CardContent>
      </Card>
    );
  }

  if (costs.error) {
    return (
      <Card className="card-gradient">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <DollarSign className="w-5 h-5 text-primary" />
            Custos Fixos e Variáveis
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center text-muted-foreground">
            Erro ao carregar dados. Tente novamente.
          </div>
        </CardContent>
      </Card>
    );
  }

  const sortedCosts = sortCostsByPriority(costs.data);

  return (
    <Card className="card-gradient">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <DollarSign className="w-5 h-5 text-primary" />
          Custos Fixos e Variáveis
        </CardTitle>
        <p className="text-sm text-muted-foreground">
          Acompanhamento de custos por vencimento
        </p>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {sortedCosts.map((cost) => (
            <CostItem key={cost.id} cost={cost} />
          ))}
        </div>
        
        <CostsSummary costs={sortedCosts} />
      </CardContent>
    </Card>
  );
}
