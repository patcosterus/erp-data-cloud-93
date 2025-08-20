import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  Search, 
  Plus, 
  FolderOpen, 
  Calendar,
  Target,
  User,
  Filter,
  MoreHorizontal,
  Clock,
  CheckCircle2
} from "lucide-react";

export default function Projects() {
  const [searchTerm, setSearchTerm] = useState("");

  // Mock data - dados de exemplo
  const projects = [
    {
      id: 1,
      name: "Otimização SEO Complete",
      client: "TechCorp Solutions",
      type: "SEO",
      status: "active",
      priority: "high",
      progress: 75,
      startDate: "15 Jan 2024",
      endDate: "15 Mar 2024",
      budget: "R$ 8.500",
      description: "Otimização completa do site para mecanismos de busca",
      tasks: { completed: 12, total: 16 }
    },
    {
      id: 2,
      name: "Campanha Google Ads Q1",
      client: "RetailPlus Ltda",
      type: "ADS",
      status: "active",
      priority: "medium",
      progress: 45,
      startDate: "01 Fev 2024",
      endDate: "30 Abr 2024",
      budget: "R$ 12.000",
      description: "Campanha de anúncios pagos para aumento de vendas",
      tasks: { completed: 8, total: 18 }
    },
    {
      id: 3,
      name: "Auditoria SEO Completa",
      client: "StartupInc",
      type: "SEO",
      status: "completed",
      priority: "low",
      progress: 100,
      startDate: "10 Dez 2023",
      endDate: "25 Jan 2024",
      budget: "R$ 4.200",
      description: "Análise completa da estrutura SEO do site",
      tasks: { completed: 10, total: 10 }
    },
    {
      id: 4,
      name: "Estratégia de Conteúdo",
      client: "E-commerce Brasil",
      type: "SEO",
      status: "pending",
      priority: "high",
      progress: 20,
      startDate: "01 Mar 2024",
      endDate: "15 Mai 2024",
      budget: "R$ 6.800",
      description: "Criação de estratégia de conteúdo para blog corporativo",
      tasks: { completed: 3, total: 15 }
    },
    {
      id: 5,
      name: "Campanhas Display Network",
      client: "TechCorp Solutions",
      type: "ADS",
      status: "paused",
      priority: "medium",
      progress: 60,
      startDate: "20 Fev 2024",
      endDate: "20 Jun 2024",
      budget: "R$ 15.000",
      description: "Campanhas de display para awareness da marca",
      tasks: { completed: 9, total: 15 }
    }
  ];

  const filteredProjects = projects.filter(project =>
    project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    project.client.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'active':
        return <Badge className="status-active">Em Andamento</Badge>;
      case 'pending':
        return <Badge className="status-pending">Aguardando</Badge>;
      case 'completed':
        return <Badge className="status-completed">Concluído</Badge>;
      case 'paused':
        return <Badge className="status-paused">Pausado</Badge>;
      default:
        return <Badge className="status-paused">Indefinido</Badge>;
    }
  };

  const getPriorityIcon = (priority: string) => {
    switch (priority) {
      case 'high':
        return <div className="w-2 h-2 bg-destructive rounded-full"></div>;
      case 'medium':
        return <div className="w-2 h-2 bg-warning rounded-full"></div>;
      default:
        return <div className="w-2 h-2 bg-accent rounded-full"></div>;
    }
  };

  const getTypeColor = (type: string) => {
    return type === 'SEO' 
      ? "bg-primary/10 text-primary border-primary/20" 
      : "bg-accent/10 text-accent border-accent/20";
  };

  return (
    <div className="space-y-generous">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Projetos</h1>
          <p className="text-muted-foreground mt-2">
            Gerencie todos os projetos e acompanhe o progresso
          </p>
        </div>
        <Button className="bg-gradient-primary">
          <Plus className="w-4 h-4 mr-2" />
          Novo Projeto
        </Button>
      </div>

      {/* Filters and Search */}
      <Card className="card-gradient">
        <CardContent className="p-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Buscar por projeto ou cliente..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button variant="outline" className="w-full sm:w-auto">
              <Filter className="w-4 h-4 mr-2" />
              Filtros
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="card-gradient">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total de Projetos</p>
                <p className="text-2xl font-bold text-foreground">{projects.length}</p>
              </div>
              <FolderOpen className="w-8 h-8 text-primary" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="card-gradient">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Em Andamento</p>
                <p className="text-2xl font-bold text-foreground">
                  {projects.filter(p => p.status === 'active').length}
                </p>
              </div>
              <Clock className="w-8 h-8 text-accent" />
            </div>
          </CardContent>
        </Card>

        <Card className="card-gradient">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Concluídos</p>
                <p className="text-2xl font-bold text-foreground">
                  {projects.filter(p => p.status === 'completed').length}
                </p>
              </div>
              <CheckCircle2 className="w-8 h-8 text-accent" />
            </div>
          </CardContent>
        </Card>

        <Card className="card-gradient">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Orçamento Total</p>
                <p className="text-xl font-bold text-foreground">R$ 46.500</p>
              </div>
              <Target className="w-8 h-8 text-primary" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        {filteredProjects.map((project) => (
          <Card key={project.id} className="card-gradient hover:shadow-lg transition-all duration-200">
            <CardHeader className="pb-4">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <CardTitle className="text-lg text-foreground">{project.name}</CardTitle>
                    {getPriorityIcon(project.priority)}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <User className="w-4 h-4" />
                    {project.client}
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Badge className={getTypeColor(project.type)}>{project.type}</Badge>
                  <Button variant="ghost" size="icon" className="w-8 h-8">
                    <MoreHorizontal className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">{project.description}</p>
              
              {/* Progress */}
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-foreground">Progresso</span>
                  <span className="text-sm text-muted-foreground">{project.progress}%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div 
                    className="bg-primary rounded-full h-2 transition-all duration-300"
                    style={{ width: `${project.progress}%` }}
                  />
                </div>
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>{project.tasks.completed}/{project.tasks.total} tarefas</span>
                  <span>{getStatusBadge(project.status)}</span>
                </div>
              </div>

              {/* Project Details */}
              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border/50">
                <div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
                    <Calendar className="w-4 h-4" />
                    Início
                  </div>
                  <p className="text-sm font-medium text-foreground">{project.startDate}</p>
                </div>
                <div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
                    <Target className="w-4 h-4" />
                    Entrega
                  </div>
                  <p className="text-sm font-medium text-foreground">{project.endDate}</p>
                </div>
              </div>

              <div className="flex items-center justify-between pt-2">
                <div>
                  <p className="text-xs text-muted-foreground">Orçamento</p>
                  <p className="text-lg font-bold text-foreground">{project.budget}</p>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline">Tarefas</Button>
                  <Button size="sm">Ver Detalhes</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Empty State */}
      {filteredProjects.length === 0 && (
        <Card className="card-gradient">
          <CardContent className="text-center py-12">
            <FolderOpen className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-foreground mb-2">
              Nenhum projeto encontrado
            </h3>
            <p className="text-muted-foreground mb-6">
              Tente ajustar os filtros ou crie um novo projeto
            </p>
            <Button>
              <Plus className="w-4 h-4 mr-2" />
              Criar Projeto
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
}