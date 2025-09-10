import { ModernStatCard } from "@/components/dashboard/ModernStatCard";
import { QuickActions } from "@/components/dashboard/QuickActions";
import { ActivityFeed } from "@/components/dashboard/ActivityFeed";
import { RevenueChart } from "@/components/dashboard/RevenueChart";
import { WelcomeHeader } from "@/components/dashboard/WelcomeHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Users, FolderOpen, TrendingUp, DollarSign, AlertCircle, Calendar, CheckCircle2, Clock } from "lucide-react";
export default function Dashboard() {
  // KPIs principais com design moderno
  const kpis = [{
    title: "Clientes Ativos",
    value: 24,
    description: "+3 novos este mês",
    icon: Users,
    trend: { value: 12, isPositive: true },
    variant: "primary" as const
  }, {
    title: "Projetos em Andamento", 
    value: 18,
    description: "85% dentro do prazo",
    icon: FolderOpen,
    trend: { value: 8, isPositive: true },
    variant: "success" as const
  }, {
    title: "Receita Mensal",
    value: "R$ 52.300",
    description: "Meta: R$ 60.000",
    icon: DollarSign,
    trend: { value: 15, isPositive: true },
    variant: "purple" as const
  }, {
    title: "Taxa de Crescimento",
    value: "+28%",
    description: "vs. mês anterior", 
    icon: TrendingUp,
    trend: { value: 28, isPositive: true },
    variant: "default" as const
  }];
  const urgentTasks = [{
    id: 1,
    title: "Relatório SEO - Empresa ABC",
    client: "Empresa ABC",
    dueDate: "Hoje",
    priority: "high"
  }, {
    id: 2,
    title: "Configurar Google Ads - XYZ Corp",
    client: "XYZ Corporation",
    dueDate: "Amanhã",
    priority: "medium"
  }, {
    id: 3,
    title: "Análise de palavras-chave - StartupTech",
    client: "StartupTech",
    dueDate: "Em 2 dias",
    priority: "medium"
  }];
  const recentProjects = [{
    id: 1,
    name: "Otimização SEO Complete",
    client: "TechCorp",
    status: "active",
    progress: 75
  }, {
    id: 2,
    name: "Campanha Google Ads Q1",
    client: "RetailPlus",
    status: "pending",
    progress: 45
  }, {
    id: 3,
    name: "Auditoria SEO Completa",
    client: "StartupInc",
    status: "completed",
    progress: 100
  }];
  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'active':
        return <Badge className="status-active">Em Andamento</Badge>;
      case 'pending':
        return <Badge className="status-pending">Aguardando</Badge>;
      case 'completed':
        return <Badge className="status-completed">Concluído</Badge>;
      default:
        return <Badge className="status-paused">Pausado</Badge>;
    }
  };
  const getPriorityIcon = (priority: string) => {
    switch (priority) {
      case 'high':
        return <AlertCircle className="w-4 h-4 text-destructive" />;
      case 'medium':
        return <Clock className="w-4 h-4 text-warning" />;
      default:
        return <CheckCircle2 className="w-4 h-4 text-accent" />;
    }
  };
  return (
    <div className="space-y-8 animate-fade-in">
      {/* Header moderno */}
      <WelcomeHeader />

      {/* KPIs Grid - Design moderno */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {kpis.map((kpi, index) => (
          <ModernStatCard key={index} {...kpi} />
        ))}
      </div>

      {/* Gráfico de Receita - Destaque principal */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <RevenueChart />
        </div>
        <div>
          <QuickActions />
        </div>
      </div>

      {/* Seção inferior - Atividades e Projetos */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Atividades Recentes */}
        <ActivityFeed />

        {/* Projetos com novo design */}
        <Card className="bg-gradient-card border-border/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FolderOpen className="w-5 h-5 text-primary" />
              Projetos Prioritários
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {recentProjects.map(project => (
              <div key={project.id} className="p-4 bg-background/50 rounded-lg border border-border/30 hover:shadow-md transition-all duration-200">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <h4 className="font-semibold text-foreground">{project.name}</h4>
                    <p className="text-sm text-muted-foreground">{project.client}</p>
                  </div>
                  {getStatusBadge(project.status)}
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Progresso</span>
                    <span className="font-semibold text-foreground">{project.progress}%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                    <div 
                      className="bg-gradient-to-r from-primary to-primary-glow rounded-full h-2 transition-all duration-500 ease-out" 
                      style={{ width: `${project.progress}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
            <Button variant="outline" className="w-full mt-4">
              Ver Todos os Projetos
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Tarefas Urgentes - Reformulado */}
      <Card className="bg-gradient-to-br from-warning/5 to-destructive/5 border-warning/20">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertCircle className="w-5 h-5 text-warning" />
            Tarefas que Precisam de Atenção
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {urgentTasks.map(task => (
              <div key={task.id} className="p-4 bg-background/70 rounded-lg border border-border/50 hover:shadow-md transition-all duration-200">
                <div className="flex items-start gap-3">
                  {getPriorityIcon(task.priority)}
                  <div className="flex-1">
                    <h4 className="font-medium text-foreground mb-1">{task.title}</h4>
                    <p className="text-sm text-muted-foreground mb-2">{task.client}</p>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Calendar className="w-3 h-3" />
                      {task.dueDate}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}