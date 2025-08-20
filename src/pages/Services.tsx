import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Search, 
  TrendingUp, 
  Target, 
  BarChart3,
  Globe,
  MousePointer,
  FileText,
  Plus,
  Settings,
  Users,
  Calendar
} from "lucide-react";

export default function Services() {
  // Mock data - dados de exemplo
  const services = {
    seo: {
      name: "SEO (Search Engine Optimization)",
      description: "Otimização para mecanismos de busca",
      icon: Search,
      color: "text-primary",
      bgColor: "bg-primary/10",
      borderColor: "border-primary/20",
      tasks: [
        "Auditoria técnica do site",
        "Pesquisa de palavras-chave",
        "Otimização on-page",
        "Link building",
        "Criação de conteúdo",
        "Análise da concorrência",
        "Relatórios mensais"
      ],
      metrics: [
        { label: "Ranking médio", value: "Posição 3-5", trend: "+12%" },
        { label: "Tráfego orgânico", value: "+45%", trend: "+15%" },
        { label: "Conversões SEO", value: "128/mês", trend: "+8%" }
      ],
      pricing: "R$ 2.500 - R$ 8.000",
      duration: "3-6 meses"
    },
    ads: {
      name: "ADS (Publicidade Digital)",
      description: "Campanhas de anúncios pagos",
      icon: Target,
      color: "text-accent",
      bgColor: "bg-accent/10",
      borderColor: "border-accent/20",
      tasks: [
        "Configuração de campanhas",
        "Criação de anúncios",
        "Segmentação de público",
        "Otimização de lances",
        "A/B testing",
        "Análise de performance",
        "Relatórios semanais"
      ],
      metrics: [
        { label: "CTR médio", value: "3,2%", trend: "+5%" },
        { label: "CPC médio", value: "R$ 1,45", trend: "-8%" },
        { label: "ROAS", value: "4,8x", trend: "+12%" }
      ],
      pricing: "R$ 1.500 - R$ 12.000",
      duration: "1-3 meses"
    }
  };

  const activeProjects = [
    {
      id: 1,
      client: "TechCorp Solutions",
      service: "SEO",
      status: "active",
      progress: 75,
      monthlyBudget: "R$ 5.500",
      startDate: "Jan 2024"
    },
    {
      id: 2,
      client: "RetailPlus Ltda",
      service: "ADS",
      status: "active",
      progress: 60,
      monthlyBudget: "R$ 8.200",
      startDate: "Fev 2024"
    },
    {
      id: 3,
      client: "E-commerce Brasil",
      service: "SEO + ADS",
      status: "active",
      progress: 85,
      monthlyBudget: "R$ 12.000",
      startDate: "Nov 2023"
    }
  ];

  const ServiceCard = ({ service, type }: { service: any, type: string }) => (
    <Card className="card-gradient h-full">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className={`w-12 h-12 ${service.bgColor} rounded-lg flex items-center justify-center border ${service.borderColor}`}>
              <service.icon className={`w-6 h-6 ${service.color}`} />
            </div>
            <div>
              <CardTitle className="text-xl text-foreground">{service.name}</CardTitle>
              <p className="text-muted-foreground text-sm">{service.description}</p>
            </div>
          </div>
          <Button variant="ghost" size="icon">
            <Settings className="w-4 h-4" />
          </Button>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-6">
        {/* Métricas de Performance */}
        <div>
          <h4 className="font-semibold text-foreground mb-3">Métricas de Performance</h4>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {service.metrics.map((metric: any, index: number) => (
              <div key={index} className="p-3 bg-background/50 rounded-lg border border-border/50">
                <p className="text-xs text-muted-foreground">{metric.label}</p>
                <p className="font-bold text-foreground">{metric.value}</p>
                <p className="text-xs text-accent">{metric.trend}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Principais Tarefas */}
        <div>
          <h4 className="font-semibold text-foreground mb-3">Principais Tarefas</h4>
          <div className="space-y-2">
            {service.tasks.slice(0, 4).map((task: string, index: number) => (
              <div key={index} className="flex items-center gap-2 text-sm">
                <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                <span className="text-muted-foreground">{task}</span>
              </div>
            ))}
            {service.tasks.length > 4 && (
              <p className="text-sm text-muted-foreground pl-3.5">
                +{service.tasks.length - 4} outras tarefas
              </p>
            )}
          </div>
        </div>

        {/* Informações de Preço e Duração */}
        <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border/50">
          <div>
            <p className="text-sm text-muted-foreground">Faixa de Preço</p>
            <p className="font-semibold text-foreground">{service.pricing}</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Duração Típica</p>
            <p className="font-semibold text-foreground">{service.duration}</p>
          </div>
        </div>

        <div className="flex gap-2">
          <Button size="sm" className="flex-1">Ver Detalhes</Button>
          <Button size="sm" variant="outline" className="flex-1">Configurar</Button>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="space-y-generous">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Serviços</h1>
          <p className="text-muted-foreground mt-2">
            Gerencie os serviços oferecidos e acompanhe performance
          </p>
        </div>
        <Button className="bg-gradient-primary">
          <Plus className="w-4 h-4 mr-2" />
          Novo Serviço
        </Button>
      </div>

      {/* Services Overview Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="card-gradient">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Clientes Ativos</p>
                <p className="text-2xl font-bold text-foreground">24</p>
              </div>
              <Users className="w-8 h-8 text-primary" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="card-gradient">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Projetos SEO</p>
                <p className="text-2xl font-bold text-foreground">12</p>
              </div>
              <Search className="w-8 h-8 text-primary" />
            </div>
          </CardContent>
        </Card>

        <Card className="card-gradient">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Campanhas ADS</p>
                <p className="text-2xl font-bold text-foreground">8</p>
              </div>
              <Target className="w-8 h-8 text-accent" />
            </div>
          </CardContent>
        </Card>

        <Card className="card-gradient">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Receita Mensal</p>
                <p className="text-xl font-bold text-foreground">R$ 45.500</p>
              </div>
              <BarChart3 className="w-8 h-8 text-accent" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Services */}
      <div>
        <h2 className="text-2xl font-bold text-foreground mb-6">Nossos Serviços</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-generous">
          <ServiceCard service={services.seo} type="seo" />
          <ServiceCard service={services.ads} type="ads" />
        </div>
      </div>

      {/* Active Projects */}
      <div>
        <h2 className="text-2xl font-bold text-foreground mb-6">Projetos Ativos por Serviço</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {activeProjects.map((project) => (
            <Card key={project.id} className="card-gradient">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-lg text-foreground">{project.client}</CardTitle>
                    <Badge className="status-active mt-2">{project.service}</Badge>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-muted-foreground">Orçamento</p>
                    <p className="font-bold text-foreground">{project.monthlyBudget}</p>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
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
                </div>

                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    Início: {project.startDate}
                  </div>
                  <Badge className="status-active">Ativo</Badge>
                </div>

                <Button size="sm" className="w-full">Ver Projeto</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}