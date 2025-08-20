import { StatCard } from "@/components/ui/stat-card";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Users, FolderOpen, TrendingUp, DollarSign, AlertCircle, Calendar, CheckCircle2, Clock } from "lucide-react";
export default function Dashboard() {
  // Mock data - será substituído por dados reais
  const stats = [{
    title: "Clientes Ativos",
    value: 24,
    description: "Total de clientes ativos",
    icon: Users,
    trend: {
      value: 12,
      isPositive: true
    }
  }, {
    title: "Projetos em Andamento",
    value: 18,
    description: "Projetos ativos no momento",
    icon: FolderOpen,
    trend: {
      value: 8,
      isPositive: true
    }
  }, {
    title: "Receita Mensal",
    value: "R$ 45.500",
    description: "Receita projetada do mês",
    icon: DollarSign,
    trend: {
      value: 15,
      isPositive: true
    }
  }, {
    title: "Taxa de Conversão",
    value: "68%",
    description: "Conversão média dos projetos",
    icon: TrendingUp,
    trend: {
      value: 5,
      isPositive: true
    }
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
  return <div className="space-y-generous">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
        <p className="text-muted-foreground mt-2">
          Visão geral das suas operações e desempenho
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => <StatCard key={index} {...stat} />)}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-generous">
        {/* Tarefas Urgentes */}
        <Card className="card-gradient">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-destructive" />
              Tarefas Urgentes
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {urgentTasks.map(task => <div key={task.id} className="flex items-center justify-between p-4 bg-background/50 rounded-lg border border-border/50">
                <div className="flex items-center gap-3">
                  {getPriorityIcon(task.priority)}
                  <div>
                    <h4 className="font-medium text-foreground">{task.title}</h4>
                    <p className="text-sm text-muted-foreground">{task.client}</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    {task.dueDate}
                  </div>
                </div>
              </div>)}
            <Button className="w-full" variant="outline">
              Ver Todas as Tarefas
            </Button>
          </CardContent>
        </Card>

        {/* Projetos Recentes */}
        <Card className="card-gradient">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FolderOpen className="w-5 h-5 text-primary" />
              Projetos Recentes
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {recentProjects.map(project => <div key={project.id} className="p-4 bg-background/50 rounded-lg border border-border/50">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <h4 className="font-medium text-foreground">{project.name}</h4>
                    <p className="text-sm text-muted-foreground">{project.client}</p>
                  </div>
                  {getStatusBadge(project.status)}
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Progresso</span>
                    <span className="font-medium">{project.progress}%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-primary rounded-full h-2 transition-all duration-300" style={{
                  width: `${project.progress}%`
                }} />
                  </div>
                </div>
              </div>)}
            <Button className="w-full" variant="outline">
              Ver Todos os Projetos
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>;
}