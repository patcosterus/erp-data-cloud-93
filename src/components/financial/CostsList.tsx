import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, DollarSign, AlertTriangle, CheckCircle, Clock } from "lucide-react";

interface Cost {
  id: string;
  name: string;
  type: "fixed" | "variable";
  amount: number;
  dueDate: string;
  status: "overdue" | "due_soon" | "on_time";
}

const mockCosts: Cost[] = [
  {
    id: "1",
    name: "Aluguel do Escritório",
    type: "fixed",
    amount: 3500,
    dueDate: "2024-01-05",
    status: "overdue"
  },
  {
    id: "2", 
    name: "Google Ads Budget",
    type: "variable",
    amount: 8000,
    dueDate: "2024-01-08",
    status: "due_soon"
  },
  {
    id: "3",
    name: "Software Licenses",
    type: "fixed", 
    amount: 1200,
    dueDate: "2024-01-15",
    status: "on_time"
  },
  {
    id: "4",
    name: "Facebook Ads Budget",
    type: "variable",
    amount: 5500,
    dueDate: "2024-01-10",
    status: "due_soon"
  },
  {
    id: "5",
    name: "Internet e Telefone",
    type: "fixed",
    amount: 450,
    dueDate: "2024-01-20",
    status: "on_time"
  },
  {
    id: "6",
    name: "Materiais de Marketing",
    type: "variable",
    amount: 2300,
    dueDate: "2024-01-03",
    status: "overdue"
  }
];

export function CostsList() {
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(amount);
  };

  const formatDate = (dateString: string) => {
    return new Intl.DateTimeFormat('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    }).format(new Date(dateString));
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'overdue':
        return (
          <Badge className="bg-destructive/10 text-destructive hover:bg-destructive/20">
            <AlertTriangle className="w-3 h-3 mr-1" />
            Vencido
          </Badge>
        );
      case 'due_soon':
        return (
          <Badge className="bg-warning/10 text-warning hover:bg-warning/20">
            <Clock className="w-3 h-3 mr-1" />
            Vence em Breve
          </Badge>
        );
      case 'on_time':
        return (
          <Badge className="bg-status-active/10 text-status-active hover:bg-status-active/20">
            <CheckCircle className="w-3 h-3 mr-1" />
            No Prazo
          </Badge>
        );
      default:
        return null;
    }
  };

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

  // Sort by due date (overdue first, then by date)
  const sortedCosts = [...mockCosts].sort((a, b) => {
    if (a.status === 'overdue' && b.status !== 'overdue') return -1;
    if (b.status === 'overdue' && a.status !== 'overdue') return 1;
    return new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime();
  });

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
            <div 
              key={cost.id}
              className="flex items-center justify-between p-4 bg-background/50 rounded-lg border border-border/50 hover:bg-background/70 transition-colors"
            >
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
                {getStatusBadge(cost.status)}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-6 pt-4 border-t border-border/50">
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Total Fixos:</span>
              <span className="font-medium text-foreground">
                {formatCurrency(
                  sortedCosts
                    .filter(cost => cost.type === 'fixed')
                    .reduce((sum, cost) => sum + cost.amount, 0)
                )}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Total Variáveis:</span>
              <span className="font-medium text-foreground">
                {formatCurrency(
                  sortedCosts
                    .filter(cost => cost.type === 'variable')
                    .reduce((sum, cost) => sum + cost.amount, 0)
                )}
              </span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}