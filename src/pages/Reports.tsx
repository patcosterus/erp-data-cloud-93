import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  FileText, 
  Download, 
  TrendingUp,
  TrendingDown,
  BarChart3,
  PieChart,
  Globe,
  MousePointer,
  DollarSign,
  Users,
  Calendar,
  Target,
  Search,
  Filter,
  Plus
} from "lucide-react";

export default function Reports() {
  const [activeTab, setActiveTab] = useState("overview");

  // Mock data - dados de exemplo
  const overviewStats = [
    {
      title: "Tráfego Orgânico Total",
      value: "+67.5%",
      trend: { value: 15, isPositive: true },
      description: "vs. mês anterior",
      icon: Globe
    },
    {
      title: "Conversões SEO",
      value: "2,847",
      trend: { value: 22, isPositive: true },
      description: "total no mês",
      icon: Target
    },
    {
      title: "CTR Médio (ADS)",
      value: "3.24%",
      trend: { value: 8, isPositive: true },
      description: "todas as campanhas",
      icon: MousePointer
    },
    {
      title: "ROAS Médio",
      value: "4.8x",
      trend: { value: 12, isPositive: true },
      description: "retorno sobre investimento",
      icon: DollarSign
    }
  ];

  const seoReports = [
    {
      id: 1,
      client: "TechCorp Solutions",
      period: "Janeiro 2024",
      status: "completed",
      metrics: {
        organicTraffic: "+45%",
        keywordRankings: "23 palavras Top 10",
        conversions: "245 conversões",
        organicRevenue: "R$ 12.450"
      },
      generatedDate: "01 Fev 2024"
    },
    {
      id: 2,
      client: "E-commerce Brasil",
      period: "Janeiro 2024",
      status: "completed",
      metrics: {
        organicTraffic: "+67%",
        keywordRankings: "31 palavras Top 10",
        conversions: "389 conversões",
        organicRevenue: "R$ 18.760"
      },
      generatedDate: "02 Fev 2024"
    },
    {
      id: 3,
      client: "StartupInc",
      period: "Janeiro 2024",
      status: "pending",
      metrics: {
        organicTraffic: "+32%",
        keywordRankings: "18 palavras Top 10",
        conversions: "156 conversões",
        organicRevenue: "R$ 8.290"
      },
      generatedDate: "Pendente"
    }
  ];

  const adsReports = [
    {
      id: 1,
      client: "RetailPlus Ltda",
      period: "Janeiro 2024",
      campaign: "Promoção Verão 2024",
      status: "completed",
      metrics: {
        impressions: "125.4K",
        clicks: "4.2K",
        ctr: "3.35%",
        conversions: "189",
        cpc: "R$ 1.23",
        roas: "5.2x"
      },
      budget: "R$ 8.500",
      spend: "R$ 7.890",
      generatedDate: "30 Jan 2024"
    },
    {
      id: 2,
      client: "TechCorp Solutions",
      period: "Janeiro 2024",
      campaign: "Display Network Q1",
      status: "completed",
      metrics: {
        impressions: "89.7K",
        clicks: "2.8K",
        ctr: "3.12%",
        conversions: "142",
        cpc: "R$ 1.67",
        roas: "4.1x"
      },
      budget: "R$ 6.200",
      spend: "R$ 5.850",
      generatedDate: "29 Jan 2024"
    }
  ];

  const StatCard = ({ stat }: { stat: any }) => (
    <Card className="card-gradient">
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-muted-foreground">{stat.title}</p>
            <p className="text-2xl font-bold text-foreground mb-1">{stat.value}</p>
            <div className="flex items-center text-xs">
              <span className={`font-medium ${stat.trend.isPositive ? 'text-accent' : 'text-destructive'}`}>
                {stat.trend.isPositive ? "+" : ""}{stat.trend.value}%
              </span>
              <span className="text-muted-foreground ml-1">{stat.description}</span>
            </div>
          </div>
          <stat.icon className="w-8 h-8 text-primary" />
        </div>
      </CardContent>
    </Card>
  );

  const ReportCard = ({ report, type }: { report: any, type: string }) => (
    <Card className="card-gradient hover:shadow-md transition-all duration-200">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div>
            <CardTitle className="text-lg text-foreground">{report.client}</CardTitle>
            <p className="text-sm text-muted-foreground">{report.period}</p>
            {type === 'ads' && (
              <p className="text-sm text-muted-foreground font-medium">{report.campaign}</p>
            )}
          </div>
          <div className="flex items-center gap-2">
            <Badge className={report.status === 'completed' ? 'status-completed' : 'status-pending'}>
              {report.status === 'completed' ? 'Completo' : 'Pendente'}
            </Badge>
            <Button variant="ghost" size="icon" className="w-8 h-8">
              <Download className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        {type === 'seo' ? (
          <div className="grid grid-cols-2 gap-3">
            <div className="p-3 bg-background/50 rounded-lg">
              <p className="text-xs text-muted-foreground">Tráfego Orgânico</p>
              <p className="font-bold text-accent">{report.metrics.organicTraffic}</p>
            </div>
            <div className="p-3 bg-background/50 rounded-lg">
              <p className="text-xs text-muted-foreground">Rankings</p>
              <p className="font-bold text-foreground">{report.metrics.keywordRankings}</p>
            </div>
            <div className="p-3 bg-background/50 rounded-lg">
              <p className="text-xs text-muted-foreground">Conversões</p>
              <p className="font-bold text-foreground">{report.metrics.conversions}</p>
            </div>
            <div className="p-3 bg-background/50 rounded-lg">
              <p className="text-xs text-muted-foreground">Receita Orgânica</p>
              <p className="font-bold text-primary">{report.metrics.organicRevenue}</p>
            </div>
          </div>
        ) : (
          <div className="space-y-3">
            <div className="grid grid-cols-3 gap-3">
              <div className="p-3 bg-background/50 rounded-lg text-center">
                <p className="text-xs text-muted-foreground">Impressões</p>
                <p className="font-bold text-foreground">{report.metrics.impressions}</p>
              </div>
              <div className="p-3 bg-background/50 rounded-lg text-center">
                <p className="text-xs text-muted-foreground">Cliques</p>
                <p className="font-bold text-foreground">{report.metrics.clicks}</p>
              </div>
              <div className="p-3 bg-background/50 rounded-lg text-center">
                <p className="text-xs text-muted-foreground">CTR</p>
                <p className="font-bold text-accent">{report.metrics.ctr}</p>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-3">
              <div className="p-3 bg-background/50 rounded-lg text-center">
                <p className="text-xs text-muted-foreground">Conversões</p>
                <p className="font-bold text-primary">{report.metrics.conversions}</p>
              </div>
              <div className="p-3 bg-background/50 rounded-lg text-center">
                <p className="text-xs text-muted-foreground">CPC</p>
                <p className="font-bold text-foreground">{report.metrics.cpc}</p>
              </div>
              <div className="p-3 bg-background/50 rounded-lg text-center">
                <p className="text-xs text-muted-foreground">ROAS</p>
                <p className="font-bold text-accent">{report.metrics.roas}</p>
              </div>
            </div>
            <div className="flex justify-between items-center pt-2 border-t border-border/50">
              <div>
                <p className="text-xs text-muted-foreground">Orçamento</p>
                <p className="font-semibold text-foreground">{report.budget}</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Gasto</p>
                <p className="font-semibold text-primary">{report.spend}</p>
              </div>
            </div>
          </div>
        )}

        <div className="flex items-center justify-between text-sm pt-2">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Calendar className="w-4 h-4" />
            Gerado: {report.generatedDate}
          </div>
          <Button size="sm" variant="outline">Ver Relatório</Button>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="space-y-generous">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Relatórios</h1>
          <p className="text-muted-foreground mt-2">
            Análise de performance e resultados dos seus projetos
          </p>
        </div>
        <Button className="bg-gradient-primary">
          <Plus className="w-4 h-4 mr-2" />
          Gerar Relatório
        </Button>
      </div>

      {/* Tabs Navigation */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="overview">Visão Geral</TabsTrigger>
          <TabsTrigger value="seo">Relatórios SEO</TabsTrigger>
          <TabsTrigger value="ads">Relatórios ADS</TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {overviewStats.map((stat, index) => (
              <StatCard key={index} stat={stat} />
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="card-gradient">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="w-5 h-5 text-primary" />
                  Performance Mensal
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">SEO - Tráfego Orgânico</span>
                    <div className="flex items-center gap-2">
                      <TrendingUp className="w-4 h-4 text-accent" />
                      <span className="font-medium text-accent">+45%</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">ADS - Taxa de Conversão</span>
                    <div className="flex items-center gap-2">
                      <TrendingUp className="w-4 h-4 text-accent" />
                      <span className="font-medium text-accent">+32%</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Receita Total</span>
                    <div className="flex items-center gap-2">
                      <TrendingUp className="w-4 h-4 text-accent" />
                      <span className="font-medium text-accent">+28%</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="card-gradient">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <PieChart className="w-5 h-5 text-primary" />
                  Distribuição por Serviço
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-primary rounded-full"></div>
                      <span className="text-sm text-muted-foreground">SEO</span>
                    </div>
                    <span className="font-medium text-foreground">65%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-accent rounded-full"></div>
                      <span className="text-sm text-muted-foreground">ADS</span>
                    </div>
                    <span className="font-medium text-foreground">35%</span>
                  </div>
                  <div className="pt-2 border-t border-border/50">
                    <p className="text-xs text-muted-foreground">Total de projetos ativos: 18</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* SEO Reports Tab */}
        <TabsContent value="seo" className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-foreground">Relatórios SEO</h2>
            <div className="flex gap-2">
              <Button variant="outline">
                <Filter className="w-4 h-4 mr-2" />
                Filtrar
              </Button>
              <Button>Gerar Relatório SEO</Button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {seoReports.map((report) => (
              <ReportCard key={report.id} report={report} type="seo" />
            ))}
          </div>
        </TabsContent>

        {/* ADS Reports Tab */}
        <TabsContent value="ads" className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-foreground">Relatórios ADS</h2>
            <div className="flex gap-2">
              <Button variant="outline">
                <Filter className="w-4 h-4 mr-2" />
                Filtrar
              </Button>
              <Button>Gerar Relatório ADS</Button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {adsReports.map((report) => (
              <ReportCard key={report.id} report={report} type="ads" />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}