
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Eye, Edit, Trash2, BarChart3, Target, TrendingUp } from "lucide-react";

interface Project {
  id: string;
  name: string;
  client: string;
  serviceType: "SEO" | "ADS" | "SEO_ADS";
  status: "active" | "completed" | "paused" | "cancelled";
  budget: number;
  spent: number;
  monthlyValue: number;
  profitMargin: number;
  progressPercentage: number;
}

const mockProjects: Project[] = [
  {
    id: "1",
    name: "Campanha E-commerce Q1",
    client: "Tech Solutions",
    serviceType: "SEO_ADS",
    status: "active",
    budget: 50000,
    spent: 32000,
    monthlyValue: 8500,
    profitMargin: 28.5,
    progressPercentage: 64
  },
  {
    id: "2",
    name: "Otimização SEO Loja Online",
    client: "E-commerce Plus",
    serviceType: "SEO",
    status: "active",
    budget: 25000,
    spent: 18000,
    monthlyValue: 4200,
    profitMargin: 22.1,
    progressPercentage: 72
  },
  {
    id: "3",
    name: "Google Ads - Lançamento Produto",
    client: "Startup Inovadora",
    serviceType: "ADS",
    status: "active",
    budget: 75000,
    spent: 45000,
    monthlyValue: 12000,
    profitMargin: 35.8,
    progressPercentage: 60
  }
];

export function ProjectsGrid() {
  const getServiceTypeBadge = (type: Project["serviceType"]) => {
    switch (type) {
      case "SEO":
        return <Badge className="status-badge bg-primary/10 text-primary border border-primary/20">SEO</Badge>;
      case "ADS":
        return <Badge className="status-badge bg-accent/10 text-accent border border-accent/20">ADS</Badge>;
      case "SEO_ADS":
        return <Badge className="status-badge bg-secondary text-secondary-foreground border border-border">SEO + ADS</Badge>;
    }
  };

  const getStatusBadge = (status: Project["status"]) => {
    switch (status) {
      case "active":
        return <Badge className="status-active">Ativo</Badge>;
      case "completed":
        return <Badge className="status-completed">Concluído</Badge>;
      case "paused":
        return <Badge className="status-paused">Pausado</Badge>;
      case "cancelled":
        return <Badge className="status-badge bg-destructive/10 text-destructive border border-destructive/20">Cancelado</Badge>;
    }
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL"
    }).format(value);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-foreground">Projetos em Andamento</h2>
        <Button className="bg-primary hover:bg-primary/90">
          + Novo Projeto
        </Button>
      </div>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {mockProjects.map((project) => (
          <Card key={project.id} className="card-gradient hover:shadow-lg transition-all duration-200">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <CardTitle className="text-lg font-semibold text-foreground line-clamp-2">
                  {project.name}
                </CardTitle>
                <TooltipProvider>
                  <div className="flex gap-1">
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button variant="ghost" size="sm" className="h-8 w-8 p-0" aria-label="Ver detalhes do projeto">
                          <Eye className="h-4 w-4" />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>Ver detalhes</TooltipContent>
                    </Tooltip>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button variant="ghost" size="sm" className="h-8 w-8 p-0" aria-label="Editar projeto">
                          <Edit className="h-4 w-4" />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>Editar</TooltipContent>
                    </Tooltip>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button variant="ghost" size="sm" className="h-8 w-8 p-0 text-destructive hover:text-destructive" aria-label="Excluir projeto">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>Excluir</TooltipContent>
                    </Tooltip>
                  </div>
                </TooltipProvider>
              </div>
              
              <div className="flex flex-wrap gap-2 mt-2">
                {getServiceTypeBadge(project.serviceType)}
                {getStatusBadge(project.status)}
              </div>
              
              <div className="text-sm text-muted-foreground">
                Cliente: <span className="font-medium">{project.client}</span>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-4">
              {/* Progress Bar */}
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Progresso</span>
                  <span className="font-medium">{project.progressPercentage}%</span>
                </div>
                <Progress value={project.progressPercentage} className="h-2" />
              </div>
              
              {/* Financial Metrics */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Target className="h-4 w-4" />
                    <span>Orçamento</span>
                  </div>
                  <span className="font-mono font-medium">{formatCurrency(project.budget)}</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <BarChart3 className="h-4 w-4" />
                    <span>Gasto</span>
                  </div>
                  <span className="font-mono font-medium text-orange-600">{formatCurrency(project.spent)}</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <TrendingUp className="h-4 w-4" />
                    <span>Mensal</span>
                  </div>
                  <span className="font-mono font-medium text-green-600">{formatCurrency(project.monthlyValue)}</span>
                </div>
                
                <div className="pt-2 border-t border-border/50">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-muted-foreground">Margem de Lucro</span>
                    <span className="font-bold text-green-600">+{project.profitMargin}%</span>
                  </div>
                </div>
              </div>
              
              {/* Remaining Budget */}
              <div className="bg-muted/30 rounded-lg p-3">
                <div className="text-xs text-muted-foreground mb-1">Saldo Disponível</div>
                <div className="font-mono font-bold text-foreground">
                  {formatCurrency(project.budget - project.spent)}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
